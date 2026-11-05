# ServiceRequest: sharing additional content - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ServiceRequest: sharing additional content**

## Example ServiceRequest: ServiceRequest: sharing additional content

Profile: [Twiin Workflow ServiceRequest](StructureDefinition-twiin-workflow-servicerequest.md)

**status**: Active

**intent**: Order

**code**: Transfer of care

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-10-20 08:50:00+0200



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "3e358483-ec50-469b-94d0-54b6bc5ea7d8",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"]
  },
  "status" : "active",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "308292007"
    }]
  },
  "subject" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "authoredOn" : "2026-10-20T08:50:00+02:00"
}

```
