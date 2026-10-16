# Cancellation Request Task - Twiin Workflow v0.3.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Cancellation Request Task**

## Example Task: Cancellation Request Task

Profile: [Twiin Cancellation Request Task](StructureDefinition-twiin-cancellation-request-task.md)

**identifier**: `https://placer.example.org/task`/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56

**status**: Requested

**intent**: order

**code**: Mark the focal resource as no longer active

**focus**: [Task Fulfill the focal request](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md)

**authoredOn**: 2026-10-13 10:00:00+0200

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**owner**: Identifier: `https://fulfiller-a.example.org/healthcareservice`/wondzorg-thuis (use: official)

### Inputs

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Value[x]** |
| * | Type of work | Transfer of care |



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/task",
    "value" : "5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56"
  }],
  "status" : "requested",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "abort"
    }]
  },
  "focus" : {
    "reference" : "Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47"
  },
  "authoredOn" : "2026-10-13T10:00:00+02:00",
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
          "system" : "urn:oid:2.16.528.1.1007.3.3",
          "value" : "87654321"
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
