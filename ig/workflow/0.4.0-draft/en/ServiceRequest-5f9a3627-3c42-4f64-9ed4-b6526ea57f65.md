# ServiceRequest: reselection step 5, performer set to C - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ServiceRequest: reselection step 5, performer set to C**

## Example ServiceRequest: ServiceRequest: reselection step 5, performer set to C

Profile: [Twiin Workflow ServiceRequest](StructureDefinition-twiin-workflow-servicerequest.md)

**identifier**: `https://placer.example.org/servicerequest`/7f9709d8-455e-432b-9ace-1cd1be7426d5

**instantiatesCanonical**: `https://example.org/fhir/ActivityDefinition/transfer-of-care`

**status**: Active

**intent**: Order

**code**: Transfer of care

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-10-14 08:50:00+0200

**performer**: Identifier: `https://fulfiller-c.example.org/healthcareservice`/thuiszorg-zuid (use: official)



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "5f9a3627-3c42-4f64-9ed4-b6526ea57f65",
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
      "system" : "https://fulfiller-c.example.org/healthcareservice",
      "value" : "thuiszorg-zuid",
      "assigner" : {
        "identifier" : {
          "type" : {
            "coding" : [{
              "system" : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
              "code" : "custodian"
            }]
          },
          "system" : "urn:oid:2.16.528.1.1007.3.3",
          "value" : "55667788"
        }
      }
    }
  }]
}

```
