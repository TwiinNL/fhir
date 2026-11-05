# ServiceRequest: reselection step 2, performer set to A - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ServiceRequest: reselection step 2, performer set to A**

## Example ServiceRequest: ServiceRequest: reselection step 2, performer set to A

Profile: [Twiin Workflow ServiceRequest](StructureDefinition-twiin-workflow-servicerequest.md)

**identifier**: `https://placer.example.org/servicerequest`/7f9709d8-455e-432b-9ace-1cd1be7426d5

**instantiatesCanonical**: `https://example.org/fhir/ActivityDefinition/transfer-of-care`

**status**: Active

**intent**: Order

**code**: Transfer of care

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-10-14 08:50:00+0200

**performer**: Identifier: `https://fulfiller-a.example.org/healthcareservice`/wondzorg-thuis (use: official)



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "c6df56d1-5fc1-4abb-bc72-fb260f800832",
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
  "authoredOn" : "2026-10-14T08:50:00+02:00",
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
