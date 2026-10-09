# publish/

Inputs for `-go-publish` (IG Publisher). Not deployed: the Pages workflow publishes only `index.html` and `ig/`.

- `history-template/`: copy of [HL7/fhir-ig-history-template](https://github.com/HL7/fhir-ig-history-template) at 8a90b35 (2022-12-09), without `.git`, `.gitignore` and `hl7/`. The repository declares no license.
- `web-templates/`: header, preamble and postamble for the history pages (Twiin, CC BY-SA 4.0, no HL7 house style).
- `fhir-ig-list.json`: local IG registry, updated by every publication. Not submitted to FHIR/ig-registry.

Run from the repo root, with `-temp` and `-zips` outside the repo:

```sh
java -jar publisher.jar -go-publish -source <ig-repo> -web $PWD \
  -registry $PWD/publish/fhir-ig-list.json -history $PWD/publish/history-template \
  -templates $PWD/publish/web-templates -temp <tmp> -zips <tmp>/zips
```
