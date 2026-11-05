# Scenario 1: Request, single Fulfiller - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Scenario 1: Request, single Fulfiller**

## Example ServiceRequest: Scenario 1: Request, single Fulfiller

Profile: [Twiin Workflow ServiceRequest](StructureDefinition-twiin-workflow-servicerequest.md)

**identifier**: `https://placer.example.org/servicerequest`/1b9e0c5a-4f0e-4a8e-9d4c-2f7a1e6b3c58

**instantiatesCanonical**: `https://example.org/fhir/ActivityDefinition/transfer-of-care`

**status**: Active

**intent**: Order

**priority**: Urgent

**code**: Transfer of care

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-11-02 08:50:00+0100

**performer**: Identifier: `https://fulfiller-a.example.org/healthcareservice`/wondzorg-thuis (use: official)



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "c682d130-33be-4bd5-a2b5-6677aead5ad9",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/servicerequest",
    "value" : "1b9e0c5a-4f0e-4a8e-9d4c-2f7a1e6b3c58"
  }],
  "instantiatesCanonical" : ["https://example.org/fhir/ActivityDefinition/transfer-of-care"],
  "status" : "active",
  "intent" : "order",
  "priority" : "urgent",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "308292007"
    }]
  },
  "subject" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "authoredOn" : "2026-11-02T08:50:00+01:00",
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
