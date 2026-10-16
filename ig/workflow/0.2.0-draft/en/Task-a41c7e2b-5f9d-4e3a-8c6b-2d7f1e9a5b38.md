# Coordination Task: candidate selected - Twiin Workflow v0.2.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Coordination Task: candidate selected**

## Example Task: Coordination Task: candidate selected

Profile: [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)

**identifier**: `https://placer.example.org/task`/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38

**status**: Accepted

**businessStatus**: Selected

**intent**: order

**code**: Fulfill the focal request

**focus**: [ServiceRequest Transfer of care](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md)

**for**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**authoredOn**: 2026-10-09 09:00:00+0200

**lastModified**: 2026-10-09 11:30:00+0200

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**owner**: Identifier: `https://fulfiller-a.example.org/healthcareservice`/wondzorg-thuis (use: official)

**location**: Identifier: `https://fulfiller-a.example.org/location`/vestiging-centrum (use: official)

### Inputs

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Value[x]** |
| * | Type of work | Transfer of care |

### Outputs

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Value[x]** |
| * | Bid | Available from 2026-10-12 |



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/task",
    "value" : "a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38"
  }],
  "status" : "accepted",
  "businessStatus" : {
    "coding" : [{
      "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
      "code" : "selected"
    }]
  },
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "fulfill"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75"
  },
  "for" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "authoredOn" : "2026-10-09T09:00:00+02:00",
  "lastModified" : "2026-10-09T11:30:00+02:00",
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
  "location" : {
    "type" : "Location",
    "identifier" : {
      "use" : "official",
      "system" : "https://fulfiller-a.example.org/location",
      "value" : "vestiging-centrum",
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
  }],
  "output" : [{
    "type" : {
      "text" : "Bid"
    },
    "valueString" : "Available from 2026-10-12"
  }]
}

```
