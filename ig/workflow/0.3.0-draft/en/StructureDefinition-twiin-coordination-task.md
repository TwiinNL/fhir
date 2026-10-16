# Twiin Coordination Task - Twiin Workflow v0.3.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Coordination Task**

## Resource Profile: Twiin Coordination Task 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task | *Version*:0.3.0-draft |
| Draft as of 2026-10-16 | *Computable Name*:TwiinCoordinationTask |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Coordination Task under TA Workflow (TA sections Summary of the profiles → Coordination Task; Coordination Task; Status of the Coordination Task; Patient context and readability; Type of work on the Task; Sharing additional content; Search parameters; Codes of this TA). 

### Type of work

The code for the type of work is defined by the use case, not by this IG. The slice `input:typeOfWork` therefore has the fixed `type` [type-of-work](CodeSystem-ta-workflow.md) and a `value[x]` of type CodeableConcept, but no ValueSet. A use case fixes the binding of the codes it allows on the slice `typeOfWork` in its own profile of this Coordination Task.

**Usages:**

* Refer to this Profile: [Twiin Cancellation Request Task](StructureDefinition-twiin-cancellation-request-task.md)
* Examples for this Profile: [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/948d41c4-820f-49ed-bbb7-c15e6d7fc699](Task-948d41c4-820f-49ed-bbb7-c15e6d7fc699.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md) and [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md)
* CapabilityStatements using this Profile: [Twiin Workflow Placer Server](CapabilityStatement-twiin-workflow-placer-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.workflow|current/StructureDefinition/StructureDefinition-twiin-coordination-task.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-coordination-task.csv), [Excel](../StructureDefinition-twiin-coordination-task.xlsx), [Schematron](../StructureDefinition-twiin-coordination-task.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-coordination-task",
  "url" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task",
  "version" : "0.3.0-draft",
  "name" : "TwiinCoordinationTask",
  "title" : "Twiin Coordination Task",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-16T11:29:39+00:00",
  "publisher" : "Twiin",
  "description" : "Coordination Task under TA Workflow (TA sections Summary of the profiles → Coordination Task; Coordination Task; Status of the Coordination Task; Patient context and readability; Type of work on the Task; Sharing additional content; Search parameters; Codes of this TA).",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Task",
  "baseDefinition" : "http://hl7.org/fhir/uv/cow/StructureDefinition/coordination-task",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Task",
      "path" : "Task",
      "constraint" : [{
        "key" : "twiin-ct-1",
        "severity" : "error",
        "human" : "The statuses draft, ready and on-hold are not used (TA section Status of the Coordination Task).",
        "expression" : "(status = 'draft' or status = 'ready' or status = 'on-hold').not()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-ct-2",
        "severity" : "error",
        "human" : "statusReason not-selected is used only when the status is cancelled (TA section Reason for cancelling a non-selected candidate).",
        "expression" : "statusReason.coding.where(system = 'https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow' and code = 'not-selected').exists() implies status = 'cancelled'",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-ct-3",
        "severity" : "error",
        "human" : "When businessStatus is selected, code is fulfill and for is populated (TA sections Multiple Fulfillers Pattern; Patient context and readability).",
        "expression" : "businessStatus.coding.where(system = 'https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow' and code = 'selected').exists() implies (code.coding.where(system = 'http://hl7.org/fhir/CodeSystem/task-code' and code = 'fulfill').exists() and for.exists())",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-ct-5",
        "severity" : "warning",
        "human" : "statusReason SHOULD be populated when the status is rejected or cancelled (TA section Summary of the profiles → Coordination Task).",
        "expression" : "(status = 'rejected' or status = 'cancelled') implies statusReason.exists()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-ct-6",
        "severity" : "warning",
        "human" : "Task.for.identifier is not populated (TA section Patient context and readability).",
        "expression" : "for.identifier.empty()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-ct-7",
        "severity" : "error",
        "human" : "Work is started or completed only with Task.code fulfill (TA sections Recognizing the pattern that applies; Status of the Coordination Task).",
        "expression" : "(status = 'in-progress' or status = 'completed') implies code.coding.where(system = 'http://hl7.org/fhir/CodeSystem/task-code' and code = 'fulfill').exists()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-task-1",
        "severity" : "warning",
        "human" : "When statusReason is populated, statusReason.text SHOULD be populated (TA section Summary of the profiles).",
        "expression" : "statusReason.exists() implies statusReason.text.exists()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      }]
    },
    {
      "id" : "Task.statusReason",
      "path" : "Task.statusReason",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-status-reason"
      }
    },
    {
      "id" : "Task.businessStatus",
      "path" : "Task.businessStatus",
      "short" : "Progress within the status; selected is reserved for the Placer",
      "definition" : "The Placer sets selected at selection. The Fulfiller MAY set a value to report progress within a status (TA sections Business status; Write access).",
      "comment" : "selected is reserved for the Placer (TA section Write access). A use case MAY define further codes.",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-business-status"
      }
    },
    {
      "id" : "Task.intent",
      "path" : "Task.intent",
      "patternCode" : "order"
    },
    {
      "id" : "Task.code",
      "path" : "Task.code",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-task-code"
      }
    },
    {
      "id" : "Task.focus",
      "path" : "Task.focus",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"]
      }]
    },
    {
      "id" : "Task.authoredOn",
      "path" : "Task.authoredOn",
      "min" : 1
    },
    {
      "id" : "Task.requester",
      "path" : "Task.requester",
      "min" : 1
    },
    {
      "id" : "Task.requester.identifier",
      "path" : "Task.requester.identifier",
      "min" : 1
    },
    {
      "id" : "Task.requester.identifier.system",
      "path" : "Task.requester.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.nl/fhir/NamingSystem/ura"
    },
    {
      "id" : "Task.owner",
      "path" : "Task.owner",
      "comment" : "The reference identifies a HealthcareService as profiled by GF Addressing (NL-GF-HealthcareService), by the identifier from its AssignedId slice. See https://minvws.github.io/generiekefuncties-docs",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/HealthcareService"]
      }]
    },
    {
      "id" : "Task.owner.type",
      "path" : "Task.owner.type",
      "min" : 1,
      "patternUri" : "HealthcareService"
    },
    {
      "id" : "Task.owner.identifier",
      "path" : "Task.owner.identifier",
      "min" : 1,
      "constraint" : [{
        "key" : "twiin-aid-1",
        "severity" : "error",
        "human" : "The assigner of the identifier is not identified by a KvK number (TA section Search parameters).",
        "expression" : "assigner.identifier.where(system = 'http://kvk.nl').empty()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      }]
    },
    {
      "id" : "Task.owner.identifier.system",
      "path" : "Task.owner.identifier.system",
      "min" : 1
    },
    {
      "id" : "Task.owner.identifier.value",
      "path" : "Task.owner.identifier.value",
      "min" : 1
    },
    {
      "id" : "Task.owner.identifier.assigner",
      "path" : "Task.owner.identifier.assigner",
      "min" : 1
    },
    {
      "id" : "Task.owner.identifier.assigner.identifier",
      "path" : "Task.owner.identifier.assigner.identifier",
      "min" : 1
    },
    {
      "id" : "Task.owner.identifier.assigner.identifier.system",
      "path" : "Task.owner.identifier.assigner.identifier.system",
      "min" : 1
    },
    {
      "id" : "Task.owner.identifier.assigner.identifier.value",
      "path" : "Task.owner.identifier.assigner.identifier.value",
      "min" : 1
    },
    {
      "id" : "Task.location",
      "path" : "Task.location",
      "comment" : "The reference identifies a Location as profiled by GF Addressing (NL-GF-Location), by the identifier from its AssignedId slice. See https://minvws.github.io/generiekefuncties-docs"
    },
    {
      "id" : "Task.location.type",
      "path" : "Task.location.type",
      "min" : 1,
      "patternUri" : "Location"
    },
    {
      "id" : "Task.location.identifier",
      "path" : "Task.location.identifier",
      "min" : 1,
      "constraint" : [{
        "key" : "twiin-aid-1",
        "severity" : "error",
        "human" : "The assigner of the identifier is not identified by a KvK number (TA section Search parameters).",
        "expression" : "assigner.identifier.where(system = 'http://kvk.nl').empty()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      }]
    },
    {
      "id" : "Task.location.identifier.system",
      "path" : "Task.location.identifier.system",
      "min" : 1
    },
    {
      "id" : "Task.location.identifier.value",
      "path" : "Task.location.identifier.value",
      "min" : 1
    },
    {
      "id" : "Task.location.identifier.assigner",
      "path" : "Task.location.identifier.assigner",
      "min" : 1
    },
    {
      "id" : "Task.location.identifier.assigner.identifier",
      "path" : "Task.location.identifier.assigner.identifier",
      "min" : 1
    },
    {
      "id" : "Task.location.identifier.assigner.identifier.system",
      "path" : "Task.location.identifier.assigner.identifier.system",
      "min" : 1
    },
    {
      "id" : "Task.location.identifier.assigner.identifier.value",
      "path" : "Task.location.identifier.assigner.identifier.value",
      "min" : 1
    },
    {
      "id" : "Task.input",
      "path" : "Task.input",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "type"
        }],
        "description" : "Slice on input.type",
        "rules" : "open"
      },
      "min" : 1
    },
    {
      "id" : "Task.input:typeOfWork",
      "path" : "Task.input",
      "sliceName" : "typeOfWork",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Task.input:typeOfWork.type",
      "path" : "Task.input.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
          "code" : "type-of-work"
        }]
      }
    },
    {
      "id" : "Task.input:typeOfWork.value[x]",
      "path" : "Task.input.value[x]",
      "type" : [{
        "code" : "CodeableConcept"
      }]
    },
    {
      "id" : "Task.input:supplementalResource",
      "path" : "Task.input",
      "sliceName" : "supplementalResource",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Task.input:supplementalResource.type",
      "path" : "Task.input.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
          "code" : "supplemental-resource"
        }]
      }
    },
    {
      "id" : "Task.input:supplementalResource.value[x]",
      "path" : "Task.input.value[x]",
      "type" : [{
        "code" : "Reference"
      }]
    },
    {
      "id" : "Task.input:supplementalQuery",
      "path" : "Task.input",
      "sliceName" : "supplementalQuery",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Task.input:supplementalQuery.type",
      "path" : "Task.input.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
          "code" : "supplemental-query"
        }]
      }
    },
    {
      "id" : "Task.input:supplementalQuery.value[x]",
      "path" : "Task.input.value[x]",
      "type" : [{
        "code" : "string"
      }]
    }]
  }
}

```
