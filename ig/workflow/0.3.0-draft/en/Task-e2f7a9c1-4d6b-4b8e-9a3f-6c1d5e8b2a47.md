# Coordination Task: single Fulfiller, in progress - Twiin Workflow v0.3.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Coordination Task: single Fulfiller, in progress**

## Example Task: Coordination Task: single Fulfiller, in progress

Profile: [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)

**identifier**: `https://placer.example.org/task`/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47

**status**: In Progress

**intent**: order

**code**: Fulfill the focal request

**focus**: [ServiceRequest Transfer of care](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md)

**for**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**executionPeriod**: 2026-10-12 08:00:00+0200 --> (ongoing)

**authoredOn**: 2026-10-09 09:00:00+0200

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**owner**: Identifier: `https://fulfiller-a.example.org/healthcareservice`/wondzorg-thuis (use: official)

**location**: Identifier: `https://fulfiller-a.example.org/location`/vestiging-centrum (use: official)

> **input****type**: Type of work**value**: Transfer of care

> **input****type**: Supplemental resource**value**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

> **input****type**: Supplemental query**value**: Observation?patient=3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90&code=http://loinc.org|8302-2



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"]
  },
  "identifier" : [{
    "system" : "https://placer.example.org/task",
    "value" : "e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47"
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
    "reference" : "ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75"
  },
  "for" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "executionPeriod" : {
    "start" : "2026-10-12T08:00:00+02:00"
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
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
        "code" : "supplemental-resource"
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
        "code" : "supplemental-query"
      }]
    },
    "valueString" : "Observation?patient=3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90&code=http://loinc.org|8302-2"
  }]
}

```
