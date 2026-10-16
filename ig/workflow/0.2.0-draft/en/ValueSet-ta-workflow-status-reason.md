# TA Workflow Status Reason - Twiin Workflow v0.2.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **TA Workflow Status Reason**

## ValueSet: TA Workflow Status Reason 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-status-reason | *Version*:0.2.0-draft |
| Draft as of 2026-10-16 | *Computable Name*:TAWorkflowStatusReasonVS |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Codes for Task.statusReason of the Coordination Task under TA Workflow. Extensible: a use case or a Fulfiller MAY use other reasons, for instance when it rejects a Task; not-selected is reserved for the Placer. 

 **References** 

* [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "ta-workflow-status-reason",
  "url" : "https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-status-reason",
  "version" : "0.2.0-draft",
  "name" : "TAWorkflowStatusReasonVS",
  "title" : "TA Workflow Status Reason",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-16T08:47:10+00:00",
  "publisher" : "Twiin",
  "description" : "Codes for Task.statusReason of the Coordination Task under TA Workflow. Extensible: a use case or a Fulfiller MAY use other reasons, for instance when it rejects a Task; not-selected is reserved for the Placer.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "compose" : {
    "include" : [{
      "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
      "concept" : [{
        "code" : "not-selected"
      }]
    }]
  }
}

```
