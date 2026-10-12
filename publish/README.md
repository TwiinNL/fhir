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
