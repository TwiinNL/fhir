# ServiceRequest: reselection, performer unset - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ServiceRequest: reselection, performer unset**

## Example ServiceRequest: ServiceRequest: reselection, performer unset

Profile: [Twiin Workflow ServiceRequest](StructureDefinition-twiin-workflow-servicerequest.md)

**identifier**: `https://placer.example.org/servicerequest`/7f9709d8-455e-432b-9ace-1cd1be7426d5

**instantiatesCanonical**: `https://example.org/fhir/ActivityDefinition/transfer-of-care`

**status**: Active

**intent**: Order

**code**: Transfer of care

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-10-14 08:50:00+0200



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "862e9389-15a3-4681-aa0c-1ebcd5bc17d0",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/servicerequest",
    "value" : "7f9709d8-455e-432b-9ace-1cd1be7426d5"
  }],
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
  "authoredOn" : "2026-10-14T08:50:00+02:00"
}

```
