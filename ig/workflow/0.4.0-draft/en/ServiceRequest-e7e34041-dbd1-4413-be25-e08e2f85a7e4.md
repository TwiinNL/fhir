# Scenario 5, step 1: Request active - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Scenario 5, step 1: Request active**

## Example ServiceRequest: Scenario 5, step 1: Request active

Profile: [Twiin Workflow ServiceRequest](StructureDefinition-twiin-workflow-servicerequest.md)

**identifier**: `https://placer.example.org/servicerequest`/200a94a8-7f0d-450a-b9ad-45e5861c1c92

**instantiatesCanonical**: `https://example.org/fhir/ActivityDefinition/transfer-of-care`

**status**: Active

**intent**: Order

**code**: Transfer of care

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-11-03 12:50:00+0100

**performer**: Identifier: `https://fulfiller-a.example.org/healthcareservice`/wondzorg-thuis (use: official)



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "e7e34041-dbd1-4413-be25-e08e2f85a7e4",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/servicerequest",
    "value" : "200a94a8-7f0d-450a-b9ad-45e5861c1c92"
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
  "authoredOn" : "2026-11-03T12:50:00+01:00",
  "performer" : [{
    "type" : "HealthcareService",
    "identifier" : {
      "use" : "official",
      "system" : "https://fulfiller-a.example.org/healthcareservice",
      "value" : "wondzorg-thuis",
      "assigner" : {
        "identifier" : {
          "type" : {
            "coding" : [{
              "system" : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
              "code" : "custodian"
            }]
          },
          "system" : "http://fhir.nl/fhir/NamingSystem/ura",
          "value" : "87654321"
        }
      }
    }
  }]
}

```
