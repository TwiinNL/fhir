# Twiin Authorization Cancellation Request Task - Twiin Workflow v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Authorization Cancellation Request Task**

## Resource Profile: Twiin Authorization Cancellation Request Task 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task | *Version*:0.1.0-draft |
| Draft as of 2026-10-12 | *Computable Name*:TwiinAuthorizationCancellationRequestTask |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Authorization Cancellation Request Task under TA Workflow, used by a Fulfiller to ask the Placer to withdraw the Request itself (TA sections Preliminary description of the profiles → Authorization Cancellation Request Task; Cancellation by the Fulfiller). COW IG defines no profile for this Task. requester and owner identify the Fulfiller and the Placer as organizations, by their URA. 

**Usages:**

* Examples for this Profile: [Task/9c4a1f8e-7d3b-4e2a-b6f9-3a8e5d2c7b14](Task-9c4a1f8e-7d3b-4e2a-b6f9-3a8e5d2c7b14.md)
* CapabilityStatements using this Profile: [Twiin Workflow Placer Server](CapabilityStatement-twiin-workflow-placer-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.workflow|current/StructureDefinition/StructureDefinition-twiin-authorization-cancellation-request-task.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-authorization-cancellation-request-task.csv), [Excel](../StructureDefinition-twiin-authorization-cancellation-request-task.xlsx), [Schematron](../StructureDefinition-twiin-authorization-cancellation-request-task.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-authorization-cancellation-request-task",
  "url" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task",
  "version" : "0.1.0-draft",
  "name" : "TwiinAuthorizationCancellationRequestTask",
  "title" : "Twiin Authorization Cancellation Request Task",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-12T10:57:22+02:00",
  "publisher" : "Twiin",
  "description" : "Authorization Cancellation Request Task under TA Workflow, used by a Fulfiller to ask the Placer to withdraw the Request itself (TA sections Preliminary description of the profiles → Authorization Cancellation Request Task; Cancellation by the Fulfiller). COW IG defines no profile for this Task. requester and owner identify the Fulfiller and the Placer as organizations, by their URA.",
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
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Task",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Task",
      "path" : "Task",
      "constraint" : [{
        "key" : "twiin-acrt-1",
        "severity" : "error",
        "human" : "The status is requested, accepted or rejected.",
        "expression" : "status = 'requested' or status = 'accepted' or status = 'rejected'",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"
      },
      {
        "key" : "twiin-task-1",
        "severity" : "warning",
        "human" : "When statusReason is populated, statusReason.text SHOULD be populated.",
        "expression" : "statusReason.exists() implies statusReason.text.exists()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"
      }]
    },
    {
      "id" : "Task.intent",
      "path" : "Task.intent",
      "patternCode" : "proposal"
    },
    {
      "id" : "Task.code",
      "path" : "Task.code",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://hl7.org/fhir/CodeSystem/task-code",
          "code" : "abort"
        }]
      }
    },
    {
      "id" : "Task.focus",
      "path" : "Task.focus",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"]
      }]
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
      "min" : 1
    },
    {
      "id" : "Task.owner.identifier",
      "path" : "Task.owner.identifier",
      "min" : 1
    },
    {
      "id" : "Task.owner.identifier.system",
      "path" : "Task.owner.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.nl/fhir/NamingSystem/ura"
    }]
  }
}

```
