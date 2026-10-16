# Coordination Task: candidate not selected - Twiin Workflow v0.3.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Coordination Task: candidate not selected**

## Example Task: Coordination Task: candidate not selected

Profile: [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)

**identifier**: `https://placer.example.org/task`/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91

**status**: Cancelled

**statusReason**: not selected

**intent**: order

**code**: Request fulfillment

**focus**: [ServiceRequest Transfer of care](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md)

**authoredOn**: 2026-10-09 09:00:00+0200

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**owner**: Identifier: `https://fulfiller-b.example.org/healthcareservice`/wijkverpleging-noord (use: official)

### Inputs

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Value[x]** |
| * | Type of work | Transfer of care |



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/task",
    "value" : "c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91"
  }],
  "status" : "cancelled",
  "statusReason" : {
    "coding" : [{
      "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
      "code" : "not-selected"
    }],
    "text" : "not selected"
  },
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
      "code" : "request-fulfillment"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75"
  },
  "authoredOn" : "2026-10-09T09:00:00+02:00",
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
          "system" : "urn:oid:2.16.528.1.1007.3.3",
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
  }]
}

```
