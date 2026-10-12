# ServiceRequest: transfer of care - Twiin Workflow v0.1.1-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ServiceRequest: transfer of care**

## Example ServiceRequest: ServiceRequest: transfer of care

Profile: [Twiin Workflow ServiceRequest](StructureDefinition-twiin-workflow-servicerequest.md)

**instantiatesCanonical**: `https://example.org/fhir/ActivityDefinition/transfer-of-care`

**status**: Active

**intent**: Order

**code**: Transfer of care

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-10-09 08:55:00+0200



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"]
  },
  "instantiatesCanonical" : ["https://example.org/fhir/ActivityDefinition/transfer-of-care"],
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
  "authoredOn" : "2026-10-09T08:55:00+02:00"
}

```
