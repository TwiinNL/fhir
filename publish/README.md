# publish/

Inputs for `-go-publish` (IG Publisher). Not deployed: the Pages workflow publishes only `index.html` and `ig/`. `ig/index.html` and `ig/index.js` are not made by the publisher; see the root README.

- `history-template/`: own files, read by `HistoryPageUpdater` (IG Publisher 3.0.0, `web/HistoryPageUpdater.java`). Nothing from HL7/fhir-ig-history-template is used.
  - `history.template` (required) becomes `ig/<name>/history.html`.
  - `index.html` becomes `ig/<name>/index.html` only on the first publication and only if the IG folder has no `index.html` yet (working release). It must contain the marker `XXXX`, which the publisher removes.
  - `manifest.ini`: `[files]` lists the files copied into `ig/<name>/` (`overwrite` or `if-missing`); only `history-table.js`, the stylesheet is shared.
  - Placeholders the publisher fills in: `$header$`, `$preamble$`, `$postamble$` (from `web-templates/`), `[%title%]` and `[%id%]` (title and package id from `package-list.json`), `[%json%]` (the package list; not used here).
  - `history-table.js` reads `package-list.json` next to the page and lists each version (version, date, status, sequence, description, link). No scripts or other files from external hosts.
- `web-templates/`: header, preamble and postamble for the history pages: Twiin house style on the structure of the IG pages; CSS, logo, favicon and font come from `ig/_twiin/` (see the root README). Each page template supplies its own breadcrumb and opens the content area; the postamble closes it and adds the footer (CC BY-SA 4.0 for content, logo excluded, code licence TBD).
- License: content (templates, texts) CC BY-SA 4.0; code (`history-table.js`, and `ig/index.js` for the overview page `ig/index.html`): TBD, no license chosen yet. The text of `ig/index.html` is CC BY-SA 4.0.
- `fhir-ig-list.json`: local IG registry, updated by every publication. Not submitted to FHIR/ig-registry.

Run from the repo root, with `-temp` and `-zips` outside the repo:

```sh
java -jar publisher.jar -go-publish -source <ig-repo> -web $PWD \
  -registry $PWD/publish/fhir-ig-list.json -history $PWD/publish/history-template \
  -templates $PWD/publish/web-templates -temp <tmp> -zips <tmp>/zips
```

## After changing the history template or web templates

Regenerate the existing history pages without publishing again (from the repo root, with `publisher.jar` 3.0.0 or newer; `HistoryPageUpdater` has its own `main`):

```sh
rm ig/*/index.html   # only so that index.html is made again; it is only written if missing or containing XXXX
java -cp publisher.jar org.hl7.fhir.igtools.web.HistoryPageUpdater \
  $PWD/publish/history-template $PWD $PWD/publish/web-templates
git status --short   # expect only ig/<name>/index.html, history.html and files from manifest.ini
```

Nothing in the version folders (`ig/<name>/<version>/`) is touched.

## Removing a published version

IG Publisher 3.0.0 has no way to remove a version; its withdrawal mode adds a `withdrawn` entry instead. Removing is done by hand, on a branch, so that the next `-go-publish` builds on the result. References are to IG Publisher 3.0.0 (`org.hl7.fhir.igtools.web`). Example: `0.1.0-draft` of Notifications and Workflow (git tags in the IG repositories stay).

1. Inventory: `grep -rlI <version> . --exclude-dir=.git | grep -v "/<version>/"`. Check the later versions too: a version built after `<version>` contains `comparison-v<version>/` and a link to it in `qa.html` and `qa.min.html`.
2. `git rm -r ig/<name>/<version>`.
3. `ig/<name>/package-list.json`: remove the entry from `list`, leave everything else as is. The publisher reads and writes it with `PackageList` (`PublicationProcess.updatePackageList`): `current` (ci-build) first, then the newest version first.
4. `ig/package-feed.xml` and `ig/publication-feed.xml`: remove the `<item>` of the version (one per feed). Leave `lastBuildDate` and `pubDate`; `PublicationProcess.updateFeedAsXml` inserts each new item before the first one and sets both dates.
5. `package-registry.json`: lower `version-count` (versions in `package-list.json` without ci-build) and fix `latest` if it was the removed version (`PackageRegistryBuilder.update`).
6. `publish/fhir-ig-list.json`: only if `editions` names the version (`IGRegistryMaintainer.seeEdition`).
7. Later versions: remove `ig/<name>/<later>/comparison-v<version>/` and in its `qa.html` and `qa.min.html` replace `<a href="comparison-v<version>/index.html">Comparison with version <version></a>` by `n/a`. Leave `full-ig.zip`: it is a download, not a hosted page.
8. Check that the publisher reads the files as it writes them; both must give no diff (run from a scratch copy):

   ```sh
   # package-list.json round trip and package-registry.json rebuild, with jshell --class-path publisher.jar
   org.hl7.fhir.utilities.FileUtilities.stringToFile(org.hl7.fhir.utilities.npm.PackageList.fromFile(p).toJson(), p + ".rt");
   new org.hl7.fhir.igtools.web.PackageRegistryBuilder("<copy of repo root>").build();
   ```

9. Regenerate the history pages (previous section). `history.html` and `index.html` normally do not change: the version table is read from `package-list.json` in the browser.
10. Check: `git status` shows only these changes; `grep -rlI <version> . --exclude-dir=.git` finds only this README; each `package-list.json` has only the expected versions; each feed has one item per remaining version; `du -sk ig` before and after.
11. Dry run of `-go-publish` on scratch copies of this repo and of the IG repository (built with `_genonce.sh`) of the latest published version. Expected: only "Found an entry in the publication package-list for v<latest> - it looks like it has already been published" and "Nominated path ... already exists", no parse errors; the scratch copy of the web root is unchanged.
12. Update the IG repositories' READMEs if they mention the version.
