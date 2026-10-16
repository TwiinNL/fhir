# Build and publication image for IG Publisher -go-publish: mirrors the CI job of the IG
# repositories (ubuntu-24.04, Temurin 21, Ruby 3.3, Node 22, SUSHI, IG Publisher 3.0.0).
# Reproduces twiin-ig-publish:latest of 15-16 October 2026 (Ubuntu 24.04.5, Temurin 21.0.12.1+1,
# Ruby 3.3.12 with Bundler 2.5.22, Node 22.23.3, SUSHI 3.21.0). Builds for arm64 and amd64.
# The jars and the gems are not in the image: run.sh downloads the publisher (sha-256 checked)
# and installs the gems of the Gemfile.lock of the IG repository.
FROM ubuntu:24.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl git build-essential libssl-dev libyaml-dev zlib1g-dev libffi-dev \
      libreadline-dev libgdbm-dev autoconf bison python3 libdigest-sha-perl rsync xz-utils unzip \
    && rm -rf /var/lib/apt/lists/*

# Temurin 21.0.12.1+1 (sha-256 from the Adoptium release assets)
RUN set -eu; \
    case "$(dpkg --print-architecture)" in \
      arm64) arch=aarch64; sha=23e37e026f12f3e706f18938ff611db3032d075b09d0879a25d06718c773e223 ;; \
      amd64) arch=x64;     sha=ce79869e1307ed8ee1e2baa86a412b1eb5b75d10a01006d788a6f968bcfaee94 ;; \
    esac; \
    curl -sSfL -o /tmp/jdk.tgz "https://github.com/adoptium/temurin21-binaries/releases/download/jdk-21.0.12.1%2B1/OpenJDK21U-jdk_${arch}_linux_hotspot_21.0.12.1_1.tar.gz"; \
    echo "$sha  /tmp/jdk.tgz" | sha256sum -c -; \
    mkdir /opt/jdk && tar xzf /tmp/jdk.tgz -C /opt/jdk --strip-components=1 && rm /tmp/jdk.tgz

# Node 22.23.3 (sha-256 from SHASUMS256.txt of that release)
RUN set -eu; \
    case "$(dpkg --print-architecture)" in \
      arm64) arch=arm64; sha=a44aeb94849a299b22df10b9e622ec2f605c2183501bc40590705131de7c740f ;; \
      amd64) arch=x64;   sha=df450af89261115ef9f9e3830c3eeb2cc9213b63c720b1af623cb5dcbe2e02de ;; \
    esac; \
    curl -sSfL -o /tmp/node.txz "https://nodejs.org/dist/v22.23.3/node-v22.23.3-linux-${arch}.tar.xz"; \
    echo "$sha  /tmp/node.txz" | sha256sum -c -; \
    mkdir /opt/node && tar xJf /tmp/node.txz -C /opt/node --strip-components=1 && rm /tmp/node.txz

# Ruby 3.3.12, built with ruby-build (which checks the sha-256 of the source tarball itself).
# ruby-build is the default branch, not a tag: only the Ruby version is pinned.
RUN git clone --depth 1 https://github.com/rbenv/ruby-build.git /tmp/rb \
    && /tmp/rb/bin/ruby-build 3.3.12 /opt/ruby && rm -rf /tmp/rb

ENV PATH=/opt/jdk/bin:/opt/node/bin:/opt/ruby/bin:$PATH
RUN npm install -g fsh-sushi@3.21.0 && sushi --version && java -version && ruby -v && node -v
