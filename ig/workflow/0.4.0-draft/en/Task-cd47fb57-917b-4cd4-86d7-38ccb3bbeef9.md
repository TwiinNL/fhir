# Scenario 4, step 2: cancelled by the Placer - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Scenario 4, step 2: cancelled by the Placer**

## Example Task: Scenario 4, step 2: cancelled by the Placer

Profile: [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)

**identifier**: `https://placer.example.org/task`/cd23bb81-315c-4712-b5db-89a56caed447

**status**: Cancelled

**statusReason**: The patient no longer needs the service.

**intent**: order

**code**: Fulfill the focal request

**focus**: [ServiceRequest Transfer of care](ServiceRequest-57129653-f261-4841-9e42-e5b40b57f6fb.md)

**for**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-11-03 09:00:00+0100

**lastModified**: 2026-11-03 11:00:00+0100

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
  "id" : "cd47fb57-917b-4cd4-86d7-38ccb3bbeef9",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/task",
    "value" : "cd23bb81-315c-4712-b5db-89a56caed447"
  }],
  "status" : "cancelled",
  "statusReason" : {
    "text" : "The patient no longer needs the service."
  },
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "fulfill"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/57129653-f261-4841-9e42-e5b40b57f6fb"
  },
  "for" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "authoredOn" : "2026-11-03T09:00:00+01:00",
  "lastModified" : "2026-11-03T11:00:00+01:00",
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
          "system" : "http://fhir.nl/fhir/NamingSystem/ura",
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
