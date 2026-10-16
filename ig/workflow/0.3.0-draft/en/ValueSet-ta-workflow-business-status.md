# TA Workflow Business Status - Twiin Workflow v0.3.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **TA Workflow Business Status**

## ValueSet: TA Workflow Business Status 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-business-status | *Version*:0.3.0-draft |
| Draft as of 2026-10-16 | *Computable Name*:TAWorkflowBusinessStatusVS |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Codes for Task.businessStatus of the Coordination Task under TA Workflow (TA sections Business status; Codes of this TA). Extensible: a use case MAY define further codes. selected is reserved for the Placer. 

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
  "id" : "ta-workflow-business-status",
  "url" : "https://fhir.twiin.nl/ig/workflow/ValueSet/ta-workflow-business-status",
  "version" : "0.3.0-draft",
  "name" : "TAWorkflowBusinessStatusVS",
  "title" : "TA Workflow Business Status",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-16T11:29:39+00:00",
  "publisher" : "Twiin",
  "description" : "Codes for Task.businessStatus of the Coordination Task under TA Workflow (TA sections Business status; Codes of this TA). Extensible: a use case MAY define further codes. selected is reserved for the Placer.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "compose" : {
    "include" : [{
      "system" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
      "concept" : [{
        "code" : "selected"
      },
      {
        "code" : "awaiting-information"
      },
      {
        "code" : "visit-scheduled"
      }]
    }]
  }
}

```
