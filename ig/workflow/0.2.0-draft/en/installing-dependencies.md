# Installing dependencies - Twiin Workflow v0.2.0-draft

* [**Table of Contents**](toc.md)
* **Installing dependencies**

## Installing dependencies

One dependency of this implementation guide is not on the FHIR package registry (packages.fhir.org), so SUSHI, the IG Publisher and the validator cannot download it:

| | | |
| :--- | :--- | :--- |
| `nl.twiin.fhir.r4.notifications#0.2.0-draft` | https://fhir.twiin.nl/ig/notifications/0.2.0-draft/package.tgz | `041cb3d7b5f4fad02d46dec47c1f6e350a9441f522c394776269ff6fddc1f995` |

This is the URL and checksum used in the CI of this guide.

### Putting the packages in the local package cache

The tools read packages from the local FHIR package cache, `<home directory>/.fhir/packages`. A package sits in a folder `<id>#<version>`, with the contents of the tarball in a subfolder `package`. For the package:

```
curl -sSfL -o package.tgz <URL>
echo "<sha-256>  package.tgz" | shasum -a 256 -c -
mkdir -p ~/.fhir/packages/<id>#<version>
tar xzf package.tgz -C ~/.fhir/packages/<id>#<version>

```

For example, for `nl.twiin.fhir.r4.notifications#0.2.0-draft` the result is `~/.fhir/packages/nl.twiin.fhir.r4.notifications#0.2.0-draft/package/package.json`. Do not continue when the checksum differs.

SUSHI, the IG Publisher and the validator find the packages in the cache without further configuration, as long as the version in the dependency of the guide equals the folder name.

The source repository of this guide has a script that does this, including the checksum check: `.github/scripts/install-packages.sh`.

### Dependencies of this guide







### IP statements

This publication includes IP covered under the following statements.

* Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.

* [TA Workflow Codes](CodeSystem-ta-workflow.md): [TAWorkflowBusinessStatusVS](ValueSet-ta-workflow-business-status.md), [TAWorkflowStatusReasonVS](ValueSet-ta-workflow-status-reason.md)... Show 8 more, [TAWorkflowTaskCodeVS](ValueSet-ta-workflow-task-code.md), [Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md), [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md), [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md), [TwiinCancellationRequestTask](StructureDefinition-twiin-cancellation-request-task.md) and [TwiinCoordinationTask](StructureDefinition-twiin-coordination-task.md)


* This material contains content that is copyright of SNOMED International. Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact [https://www.snomed.org/get-snomed](https://www.snomed.org/get-snomed) or [info@snomed.org](mailto:info@snomed.org).

* [SNOMED Clinical Terms&reg; (SNOMED CT&reg;)](http://hl7.org/fhir/R4/codesystem-snomedct.html): [ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md), [ServiceRequest/a529d458-5bec-4d91-8ed8-f4fd5bb93720](ServiceRequest-a529d458-5bec-4d91-8ed8-f4fd5bb93720.md)... Show 5 more, [Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md), [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md) and [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md)


* This material derives from the HL7 Terminology (THO). THO is copyright ©1989+ Health Level Seven International and is made available under the CC0 designation. For more licensing information see: [https://terminology.hl7.org/license.html](https://terminology.hl7.org/license.html)

* [Provenance participant type](http://terminology.hl7.org/7.4.0/CodeSystem-provenance-participant-type.html): [Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md), [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md) and [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md)


### Global profiles

*There are no Global profiles defined*

### Source

* Location of the cache: [FHIR Package Loader](https://github.com/FHIR/fhir-package-loader#packageloader-implementations) (used by SUSHI): "the standard FHIR cache is used for local storage of unzipped packages (`$USER_HOME/.fhir/packages`)"; for the IG Publisher and validator, `FilesystemPackageCacheManager` in [hapifhir/org.hl7.fhir.core](https://github.com/hapifhir/org.hl7.fhir.core) (`user.home`, `.fhir`, `packages`; folder `<id>#<version>`). The specification only says that tools may use a common local cache ([FHIR packages, FHIR Package Caching](https://build.fhir.org/packages.html)).
* The `package` subfolder follows from the layout of the tarballs and was checked against the cache of a working local build.

