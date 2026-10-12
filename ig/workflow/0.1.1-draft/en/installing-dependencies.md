# Installing dependencies - Twiin Workflow v0.1.1-draft

* [**Table of Contents**](toc.md)
* **Installing dependencies**

## Installing dependencies

Two dependencies of this implementation guide are not on the FHIR package registry (packages.fhir.org), so SUSHI, the IG Publisher and the validator cannot download them:

| | | |
| :--- | :--- | :--- |
| `nl.generiekefuncties.csd#1.0.0` | https://minvws.github.io/generiekefuncties-docs/package.tgz | `847ea68d0ba5df6c0c2faa6a939d23f49e167401e338752d1ef72a3cf509c849` |
| `nl.twiin.fhir.r4.notifications#0.1.1-draft` | https://fhir.twiin.nl/ig/notifications/0.1.1-draft/package.tgz | `cec58f60184740ec51994b44c5ae4ddc42b870576ff20cfc831f9a47a183f2fd` |

These are the URLs and checksums used in the CI of this guide. The URL of `nl.generiekefuncties.csd` has no version: it serves the package that was last built, so the checksum only matches the package this guide was built against.

### Putting the packages in the local package cache

The tools read packages from the local FHIR package cache, `<home directory>/.fhir/packages`. A package sits in a folder `<id>#<version>`, with the contents of the tarball in a subfolder `package`. For each package:

```
curl -sSfL -o package.tgz <URL>
echo "<sha-256>  package.tgz" | shasum -a 256 -c -
mkdir -p ~/.fhir/packages/<id>#<version>
tar xzf package.tgz -C ~/.fhir/packages/<id>#<version>

```

For example, for `nl.twiin.fhir.r4.notifications#0.1.1-draft` the result is `~/.fhir/packages/nl.twiin.fhir.r4.notifications#0.1.1-draft/package/package.json`. Do not continue when the checksum differs.

SUSHI, the IG Publisher and the validator find the packages in the cache without further configuration, as long as the version in the dependency of the guide equals the folder name.

The source repository of this guide has a script that does this, including the checksum check: `.github/scripts/install-packages.sh`.

### Dependencies of this guide














### IP statements

This publication includes IP covered under the following statements.

* Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.

* [TA Workflow Codes](CodeSystem-ta-workflow.md): [TAWorkflowBusinessStatusVS](ValueSet-ta-workflow-business-status.md), [TAWorkflowStatusReasonVS](ValueSet-ta-workflow-status-reason.md)... Show 8 more, [TAWorkflowTaskCodeVS](ValueSet-ta-workflow-task-code.md), [Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md), [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md), [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md), [TwiinCancellationRequestTask](StructureDefinition-twiin-cancellation-request-task.md) and [TwiinCoordinationTask](StructureDefinition-twiin-coordination-task.md)


* This material contains content that is copyright of SNOMED International. Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact [https://www.snomed.org/get-snomed](https://www.snomed.org/get-snomed) or [info@snomed.org](mailto:info@snomed.org).

* [SNOMED Clinical Terms&reg; (SNOMED CT&reg;)](http://hl7.org/fhir/R4/codesystem-snomedct.html): [ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md), [Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md)... Show 4 more, [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md) and [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md)


* This material derives from the HL7 Terminology (THO). THO is copyright ©1989+ Health Level Seven International and is made available under the CC0 designation. For more licensing information see: [https://terminology.hl7.org/license.html](https://terminology.hl7.org/license.html)

* [Provenance participant type](http://terminology.hl7.org/7.4.0/CodeSystem-provenance-participant-type.html): [Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md), [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md) and [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md)


### Global profiles

*There are no Global profiles defined*

### Source

* Location of the cache: [FHIR Package Loader](https://github.com/FHIR/fhir-package-loader#packageloader-implementations) (used by SUSHI): "the standard FHIR cache is used for local storage of unzipped packages (`$USER_HOME/.fhir/packages`)"; for the IG Publisher and validator, `FilesystemPackageCacheManager` in [hapifhir/org.hl7.fhir.core](https://github.com/hapifhir/org.hl7.fhir.core) (`user.home`, `.fhir`, `packages`; folder `<id>#<version>`). The specification only says that tools may use a common local cache ([FHIR packages, FHIR Package Caching](https://build.fhir.org/packages.html)).
* The `package` subfolder follows from the layout of the tarballs and was checked against the cache of a working local build.

