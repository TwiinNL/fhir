# Twiin Coordination Task - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Coordination Task**

## Resource Profile: Twiin Coordination Task 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task | *Version*:0.4.0-draft |
| Draft as of 2026-11-05 | *Computable Name*:TwiinCoordinationTask |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Coordination Task under TA Workflow (TA sections Summary of the profiles → Coordination Task; Coordination Task; Status of the Coordination Task; Patient context and readability; Type of work on the Task; Sharing additional content; Search parameters; Codes of this TA). 

### Type of work

The code for the type of work is defined by the use case, not by this IG. The slice `input:typeOfWork` therefore has the fixed `type` [type-of-work](CodeSystem-ta-workflow.md) and a `value[x]` of type CodeableConcept, but no ValueSet. A use case fixes the binding of the codes it allows on the slice `typeOfWork` in its own profile of this Coordination Task.

**Usages:**

* Refer to this Profile: [Twiin Cancellation Request Task](StructureDefinition-twiin-cancellation-request-task.md)
* Examples for this Profile: [Task/12e3afcc-3979-476c-bc59-8e8e4e40afb9](Task-12e3afcc-3979-476c-bc59-8e8e4e40afb9.md), [Task/18d1bd56-33f6-43e0-a3fa-8871a100df12](Task-18d1bd56-33f6-43e0-a3fa-8871a100df12.md), [Task/46ebdfdd-408a-4340-915d-980a14c75f36](Task-46ebdfdd-408a-4340-915d-980a14c75f36.md), [Task/47ca5941-e107-4c70-bae9-bce09b69311d](Task-47ca5941-e107-4c70-bae9-bce09b69311d.md)... Show 30 more, [Task/4ae98e56-816c-4068-bdce-890a8a24b52f](Task-4ae98e56-816c-4068-bdce-890a8a24b52f.md), [Task/4e1168c4-0d2d-434f-a44e-bd117d0780d2](Task-4e1168c4-0d2d-434f-a44e-bd117d0780d2.md), [Task/5932fe26-950a-481f-8fc3-fa792e1d318f](Task-5932fe26-950a-481f-8fc3-fa792e1d318f.md), [Task/5dede07b-28ae-4497-bd35-817f5bee9690](Task-5dede07b-28ae-4497-bd35-817f5bee9690.md), [Task/5fe23d95-5f8d-4f9d-9315-7d7979153e2a](Task-5fe23d95-5f8d-4f9d-9315-7d7979153e2a.md), [Task/66507516-150c-415f-9e88-7c1f24eef69c](Task-66507516-150c-415f-9e88-7c1f24eef69c.md), [Task/66689cbb-33d1-4159-8ce2-d5fa970577a9](Task-66689cbb-33d1-4159-8ce2-d5fa970577a9.md), [Task/66bb48ed-2053-4fa4-ae26-4aba6ad37e5d](Task-66bb48ed-2053-4fa4-ae26-4aba6ad37e5d.md), [Task/683af045-b470-4595-b80d-cd40c92da2f7](Task-683af045-b470-4595-b80d-cd40c92da2f7.md), [Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md), [Task/71af91f0-f5ec-42cf-9b48-75b74d0036a0](Task-71af91f0-f5ec-42cf-9b48-75b74d0036a0.md), [Task/7b4e4d93-be6d-4511-a2b0-0d141fa362e6](Task-7b4e4d93-be6d-4511-a2b0-0d141fa362e6.md), [Task/7dc145b2-78c9-45db-ab56-267c664be4c3](Task-7dc145b2-78c9-45db-ab56-267c664be4c3.md), [Task/948d41c4-820f-49ed-bbb7-c15e6d7fc699](Task-948d41c4-820f-49ed-bbb7-c15e6d7fc699.md), [Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md), [Task/a5c02498-4399-4c8d-aa17-b17023396852](Task-a5c02498-4399-4c8d-aa17-b17023396852.md), [Task/b5e65e9b-434f-445c-924d-ff772c25ae4d](Task-b5e65e9b-434f-445c-924d-ff772c25ae4d.md), [Task/b8d24f6e-1c37-4a59-9f02-6e1a7c4b8d35](Task-b8d24f6e-1c37-4a59-9f02-6e1a7c4b8d35.md), [Task/c8ca1ec3-dd83-4900-9bfa-a05d6e93782c](Task-c8ca1ec3-dd83-4900-9bfa-a05d6e93782c.md), [Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md), [Task/cd47fb57-917b-4cd4-86d7-38ccb3bbeef9](Task-cd47fb57-917b-4cd4-86d7-38ccb3bbeef9.md), [Task/d4f3456d-86b6-4429-b606-bf52a94ca749](Task-d4f3456d-86b6-4429-b606-bf52a94ca749.md), [Task/e1e3f55f-c56e-4501-b409-ed05bb70cc87](Task-e1e3f55f-c56e-4501-b409-ed05bb70cc87.md), [Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md), [Task/e74fa5b7-7904-40f5-ba19-d1aed93134ba](Task-e74fa5b7-7904-40f5-ba19-d1aed93134ba.md), [Task/f0299832-a6c0-4517-a8af-0727fab92ee6](Task-f0299832-a6c0-4517-a8af-0727fab92ee6.md), [Task/f3bdd83f-0914-4232-94e9-28a01b1d36af](Task-f3bdd83f-0914-4232-94e9-28a01b1d36af.md), [Task/f8f11d4a-2339-4ef3-9414-b2743d3a5102](Task-f8f11d4a-2339-4ef3-9414-b2743d3a5102.md), [Task/f99620ae-3d81-4e74-915e-c9dc12771355](Task-f99620ae-3d81-4e74-915e-c9dc12771355.md) and [Task/fcf2352b-4027-45ea-8cd3-002dbebc3d7a](Task-fcf2352b-4027-45ea-8cd3-002dbebc3d7a.md)
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
  "version" : "0.4.0-draft",
  "name" : "TwiinCoordinationTask",
  "title" : "Twiin Coordination Task",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-11-05T13:14:06+00:00",
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
        "human" : "When businessStatus is selected, code is fulfill (TA section Multiple Fulfillers Pattern).",
        "expression" : "businessStatus.coding.where(system = 'https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow' and code = 'selected').exists() implies (code.coding.where(system = 'http://hl7.org/fhir/CodeSystem/task-code' and code = 'fulfill').exists())",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-ct-5",
        "severity" : "warning",
        "human" : "statusReason SHOULD be populated when the status is cancelled (TA section Summary of the profiles → Coordination Task).",
        "expression" : "status = 'cancelled' implies statusReason.exists()",
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
        "key" : "twiin-ct-8",
        "severity" : "error",
        "human" : "statusReason is populated when the status is rejected or failed (TA sections Handling the End of a Coordination Task; Status of the Coordination Task).",
        "expression" : "(status = 'rejected' or status = 'failed') implies statusReason.exists()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
      },
      {
        "key" : "twiin-ct-9",
        "severity" : "error",
        "human" : "statusReason with statusReason.text is populated when businessStatus is awaiting-information (TA sections Business status; Summary of the profiles → Coordination Task).",
        "expression" : "businessStatus.coding.where(system = 'https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow' and code = 'awaiting-information').exists() implies statusReason.text.exists()",
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
      "id" : "Task.status",
      "path" : "Task.status",
      "comment" : "The Fulfiller MAY change only status, businessStatus, statusReason, executionPeriod, lastModified and output, and MAY add and remove entries of input with type information-request (TA section Write access). The Placer sets cancelled only before in-progress; after in-progress the Fulfiller sets cancelled after accepting a Cancellation Request Task (TA sections Status of the Coordination Task; After an accepted Cancellation Request)."
    },
    {
      "id" : "Task.statusReason",
      "path" : "Task.statusReason",
      "short" : "Reason for the status; required for rejected, failed and awaiting-information",
      "comment" : "SHALL be present when status is rejected or failed (twiin-ct-8), and SHALL be present with statusReason.text when businessStatus is awaiting-information (twiin-ct-9). SHOULD be present when status is cancelled (twiin-ct-5). not-selected is reserved for the Placer.",
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
      "id" : "Task.for",
      "path" : "Task.for",
      "short" : "The Patient of the Request, set at creation",
      "comment" : "Set at creation, in every pattern, and refers by Reference.reference to the Patient that ServiceRequest.subject refers to. The selection does not set it. Read access to the Patient follows Task.code fulfill (TA section Patient context and readability).",
      "min" : 1
    },
    {
      "id" : "Task.for.reference",
      "path" : "Task.for.reference",
      "min" : 1
    },
    {
      "id" : "Task.executionPeriod",
      "path" : "Task.executionPeriod",
      "comment" : "executionPeriod.end is set when status moves from in-progress to completed, failed or cancelled."
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
      "comment" : "The Placer sets all entries of input, except the entries with type information-request: the Fulfiller MAY add and remove those, and only the Fulfiller sets them (TA section Write access).",
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
      "id" : "Task.input:availableResource",
      "path" : "Task.input",
      "sliceName" : "availableResource",
      "short" : "A resource at the Placer that the Placer makes available to the Fulfiller",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Task.input:availableResource.type",
      "path" : "Task.input.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
          "code" : "available-resource"
        }]
      }
    },
    {
      "id" : "Task.input:availableResource.value[x]",
      "path" : "Task.input.value[x]",
      "type" : [{
        "code" : "Reference"
      }]
    },
    {
      "id" : "Task.input:availableQuery",
      "path" : "Task.input",
      "sliceName" : "availableQuery",
      "short" : "A search, relative to the FHIR base of the Placer, that the Placer makes available to the Fulfiller",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Task.input:availableQuery.type",
      "path" : "Task.input.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
          "code" : "available-query"
        }]
      }
    },
    {
      "id" : "Task.input:availableQuery.value[x]",
      "path" : "Task.input.value[x]",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Task.input:informationRequest",
      "path" : "Task.input",
      "sliceName" : "informationRequest",
      "short" : "A request from the Fulfiller for information it needs from the Placer; reserved for the Fulfiller",
      "comment" : "The type information-request is reserved for the Fulfiller, which MAY add and remove such entries (TA section Write access).",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Task.input:informationRequest.type",
      "path" : "Task.input.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
          "code" : "information-request"
        }]
      }
    }]
  }
}

```
