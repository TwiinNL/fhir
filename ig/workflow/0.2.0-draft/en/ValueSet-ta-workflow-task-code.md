# TA Workflow Task Code - Twiin Workflow v0.2.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **TA Workflow Task Code**

## ValueSet: TA Workflow Task Code 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-task-code | *Version*:0.2.0-draft |
| Draft as of 2026-10-16 | *Computable Name*:TAWorkflowTaskCodeVS |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Codes for Task.code of the Coordination Task under TA Workflow. 

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
  "id" : "ta-workflow-task-code",
  "url" : "https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-task-code",
  "version" : "0.2.0-draft",
  "name" : "TAWorkflowTaskCodeVS",
  "title" : "TA Workflow Task Code",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-16T08:47:10+00:00",
  "publisher" : "Twiin",
  "description" : "Codes for Task.code of the Coordination Task under TA Workflow.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "compose" : {
    "include" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "concept" : [{
        "code" : "fulfill"
      }]
    },
    {
      "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
      "concept" : [{
        "code" : "request-fulfillment"
      }]
    }]
  }
}

```
