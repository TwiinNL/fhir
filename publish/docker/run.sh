#!/usr/bin/env bash
# Publishes one IG into this repository with IG Publisher -go-publish, in the container of
# ./Dockerfile, from a clean checkout of a commit, with an empty FHIR package cache.
#
#   publish/docker/run.sh <ig-repo> <commit> [<fhir-checkout> [<out-dir>]]
#
#   <ig-repo>        git URL or path of the IG repository (e.g. git@github-twiin:TwiinNL/ig-workflow.git)
#   <commit>         the commit to publish (the squash commit on main); must carry the
#                    publication-request.json for this publication
#   <fhir-checkout>  this repository, on the publication branch (default: the repository of this script)
#   <out-dir>        build and go-publish logs (default: a new temporary directory)
#
# Needs docker; build the image first: docker build -t twiin-ig-publish publish/docker
# Writes into <fhir-checkout>: nothing is committed or pushed.
set -euo pipefail

ig_repo=${1:?usage: run.sh <ig-repo> <commit> [<fhir-checkout> [<out-dir>]]}
commit=${2:?usage: run.sh <ig-repo> <commit> [<fhir-checkout> [<out-dir>]]}
fhir=$(cd "${3:-$(dirname "$0")/../..}" && pwd)
out=${4:-$(mktemp -d)}
image=${IMAGE:-twiin-ig-publish}
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
mkdir -p "$out"

git clone -q "$ig_repo" "$work/src"
git -C "$work/src" checkout -q "$commit"
echo "IG source $(git -C "$work/src" rev-parse HEAD)"

docker run --rm -v "$work/src:/src" -v "$fhir:/web" -v "$out:/out" "$image" bash -s <<'CONTAINER'
set -euo pipefail
cd /src
export BUNDLE_GEMFILE=/src/.github/jekyll/Gemfile JEKYLL_NO_BUNDLER_REQUIRE=1
test -z "$(ls -A "$HOME/.fhir" 2>/dev/null || true)" && echo "FHIR package cache empty at start"
bundle config set --global path /opt/gems
bundle install 2>&1 | tail -3
# The publisher calls `jekyll` from the PATH; SUSHI is followed by install-backport.sh, as in CI.
mkdir -p /opt/wrap
printf '#!/usr/bin/env bash\nexec bundle exec jekyll "$@"\n' > /opt/wrap/jekyll
cat > /opt/wrap/sushi <<'W'
#!/usr/bin/env bash
/opt/node/bin/sushi "$@"; rc=$?
if [ $rc -eq 0 ]; then /src/.github/scripts/install-backport.sh; fi
exit $rc
W
chmod +x /opt/wrap/*; export PATH=/opt/wrap:$PATH
jekyll --version; sushi --version

# Publisher version and sha-256 as in .github/workflows/build.yml of the IG repository
pv=$(sed -n 's/^ *PUBLISHER_VERSION: *//p' .github/workflows/build.yml)
ps=$(sed -n 's/^ *PUBLISHER_SHA256: *//p' .github/workflows/build.yml)
mkdir -p /tools /work
curl -sSfL -o /tools/publisher.jar "https://github.com/HL7/fhir-ig-publisher/releases/download/$pv/publisher.jar"
echo "$ps  /tools/publisher.jar" | shasum -a 256 -c -

.github/scripts/install-packages.sh
/opt/node/bin/sushi build .
.github/scripts/install-backport.sh
.github/scripts/install-template.sh
java -jar /tools/publisher.jar -ig . -no-sushi > /out/build.log 2>&1 || { echo "BUILD FAILED"; tail -30 /out/build.log; exit 1; }
tail -5 /out/build.log
ls ~/.fhir/packages > /out/cache-listing-after-build.txt
python3 .github/scripts/check-qa.py 2>&1 | tail -5

cd /web
java -jar /tools/publisher.jar -go-publish -source /src -web /web \
  -registry /web/publish/fhir-ig-list.json -history /web/publish/history-template \
  -templates /web/publish/web-templates -temp /work -zips /work/zips > /out/go-publish.log 2>&1 \
  || { echo "go-publish FAILED"; tail -40 /out/go-publish.log; exit 1; }
tail -25 /out/go-publish.log
CONTAINER
echo "Logs in $out. Compare the result with the CI artifact of $commit before committing."
