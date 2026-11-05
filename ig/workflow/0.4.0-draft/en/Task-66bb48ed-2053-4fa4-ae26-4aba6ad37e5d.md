# Scenario 2, step 1: B accepted with a bid - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Scenario 2, step 1: B accepted with a bid**

## Example Task: Scenario 2, step 1: B accepted with a bid

Profile: [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)

**identifier**: `https://placer.example.org/task`/44630c0f-e5e8-43b7-9ba3-20598cb2b36e

**status**: Accepted

**intent**: order

**code**: Request fulfillment

**focus**: [ServiceRequest Transfer of care](ServiceRequest-7e83a049-2267-4ca0-9d35-07216dfec2b6.md)

**for**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-11-02 11:00:00+0100

**lastModified**: 2026-11-02 12:20:00+0100

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**owner**: Identifier: `https://fulfiller-b.example.org/healthcareservice`/wijkverpleging-noord (use: official)

### Inputs

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Value[x]** |
| * | Type of work | Transfer of care |

### Outputs

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Value[x]** |
| * | Bid | First visit possible on 2026-11-06 |



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "66bb48ed-2053-4fa4-ae26-4aba6ad37e5d",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/task",
    "value" : "44630c0f-e5e8-43b7-9ba3-20598cb2b36e"
  }],
  "status" : "accepted",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
      "code" : "request-fulfillment"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/7e83a049-2267-4ca0-9d35-07216dfec2b6"
  },
  "for" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "authoredOn" : "2026-11-02T11:00:00+01:00",
  "lastModified" : "2026-11-02T12:20:00+01:00",
  "requester" : {
    "identifier" : {
      "system" : "http://fhir.nl/fhir/NamingSystem/ura",
      "value" : "12345678"
    }
  },
  "owner" : {
    "type" : "HealthcareService",
    "identifier" : {
      "use" : "official",
      "system" : "https://fulfiller-b.example.org/healthcareservice",
      "value" : "wijkverpleging-noord",
      "assigner" : {
        "identifier" : {
          "type" : {
            "coding" : [{
              "system" : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
              "code" : "custodian"
            }]
          },
          "system" : "http://fhir.nl/fhir/NamingSystem/ura",
          "value" : "11223344"
        }
      }
    }
  },
  "input" : [{
    "type" : {
      "coding" : [{
        "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
        "code" : "type-of-work"
      }]
    },
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "308292007"
      }]
    }
  }],
  "output" : [{
    "type" : {
      "text" : "Bid"
    },
    "valueString" : "First visit possible on 2026-11-06"
  }]
}

```
