# Scenario 1, step 3: in progress - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Scenario 1, step 3: in progress**

## Example Task: Scenario 1, step 3: in progress

Profile: [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)

**identifier**: `https://placer.example.org/task`/12d4c5d1-e6cb-432f-b195-7a4dc2da47be

**status**: In Progress

**intent**: order

**code**: Fulfill the focal request

**focus**: [ServiceRequest Transfer of care](ServiceRequest-c682d130-33be-4bd5-a2b5-6677aead5ad9.md)

**for**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**executionPeriod**: 2026-11-03 08:00:00+0100 --> (ongoing)

**authoredOn**: 2026-11-02 09:00:00+0100

**lastModified**: 2026-11-03 08:00:00+0100

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**owner**: Identifier: `https://fulfiller-a.example.org/healthcareservice`/wondzorg-thuis (use: official)

**location**: Identifier: `https://fulfiller-a.example.org/location`/vestiging-centrum (use: official)

> **input****type**: Type of work**value**: Transfer of care

> **input****type**: Available resource**value**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

> **input****type**: Available query**value**: Observation?patient=3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90&category=vital-signs



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "fcf2352b-4027-45ea-8cd3-002dbebc3d7a",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/task",
    "value" : "12d4c5d1-e6cb-432f-b195-7a4dc2da47be"
  }],
  "status" : "in-progress",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "fulfill"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/c682d130-33be-4bd5-a2b5-6677aead5ad9"
  },
  "for" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "executionPeriod" : {
    "start" : "2026-11-03T08:00:00+01:00"
  },
  "authoredOn" : "2026-11-02T09:00:00+01:00",
  "lastModified" : "2026-11-03T08:00:00+01:00",
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
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
        "code" : "available-resource"
      }]
    },
    "valueReference" : {
      "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
    }
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
        "code" : "available-query"
      }]
    },
    "valueString" : "Observation?patient=3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90&category=vital-signs"
  }]
}

```
