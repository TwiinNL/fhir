# Twiin Cancellation Request Task - Twiin Workflow v0.2.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Cancellation Request Task**

## Resource Profile: Twiin Cancellation Request Task 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task | *Version*:0.2.0-draft |
| Draft as of 2026-10-16 | *Computable Name*:TwiinCancellationRequestTask |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Cancellation Request Task under TA Workflow, used by the Placer to ask the Fulfiller to stop work that has started (TA sections Summary of the profiles → Cancellation Request Task; Cancellation Request Task; Type of work on the Task). 

**Usages:**

* Examples for this Profile: [Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md)
* CapabilityStatements using this Profile: [Twiin Workflow Placer Server](CapabilityStatement-twiin-workflow-placer-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.workflow|current/StructureDefinition/StructureDefinition-twiin-cancellation-request-task.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-cancellation-request-task.csv), [Excel](../StructureDefinition-twiin-cancellation-request-task.xlsx), [Schematron](../StructureDefinition-twiin-cancellation-request-task.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-cancellation-request-task",
  "url" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task",
  "version" : "0.2.0-draft",
  "name" : "TwiinCancellationRequestTask",
  "title" : "Twiin Cancellation Request Task",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-16T08:47:10+00:00",
  "publisher" : "Twiin",
  "description" : "Cancellation Request Task under TA Workflow, used by the Placer to ask the Fulfiller to stop work that has started (TA sections Summary of the profiles → Cancellation Request Task; Cancellation Request Task; Type of work on the Task).",
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
  "baseDefinition" : "http://hl7.org/fhir/uv/cow/StructureDefinition/cancellation-request-task",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Task",
      "path" : "Task",
      "constraint" : [{
        "key" : "twiin-crt-1",
        "severity" : "error",
        "human" : "The status is requested, accepted, rejected, cancelled or entered-in-error (TA section Cancellation Request Task).",
        "expression" : "status = 'requested' or status = 'accepted' or status = 'rejected' or status = 'cancelled' or status = 'entered-in-error'",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task"
      },
      {
        "key" : "twiin-task-1",
        "severity" : "warning",
        "human" : "When statusReason is populated, statusReason.text SHOULD be populated (TA section Summary of the profiles).",
        "expression" : "statusReason.exists() implies statusReason.text.exists()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task"
      }]
    },
    {
      "id" : "Task.intent",
      "path" : "Task.intent",
      "patternCode" : "order"
    },
    {
      "id" : "Task.focus",
      "path" : "Task.focus",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"]
      }]
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
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task"
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
    }]
  }
}

```
