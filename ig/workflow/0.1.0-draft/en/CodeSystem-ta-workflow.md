# TA Workflow Codes - Twiin Workflow v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **TA Workflow Codes**

## CodeSystem: TA Workflow Codes 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow | *Version*:0.1.0-draft |
| Draft as of 2026-10-12 | *Computable Name*:TAWorkflowCS |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Codes defined by TA Workflow for Task.code, Task.businessStatus, Task.statusReason and Task.input.type. 

This Code system is referenced in the definition of the following value sets:

* [TA Workflow Task Code](ValueSet-ta-workflow-task-code.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "ta-workflow",
  "url" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
  "version" : "0.1.0-draft",
  "name" : "TAWorkflowCS",
  "title" : "TA Workflow Codes",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-12T10:57:22+02:00",
  "publisher" : "Twiin",
  "description" : "Codes defined by TA Workflow for Task.code, Task.businessStatus, Task.statusReason and Task.input.type.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 6,
  "concept" : [{
    "code" : "request-fulfillment",
    "display" : "Request fulfillment",
    "definition" : "The Multiple Fulfillers Pattern applies and no candidate has been selected yet; the owner is invited to accept and, optionally, to bid, and may not yet start the work."
  },
  {
    "code" : "selected",
    "display" : "Selected",
    "definition" : "The Placer has selected the owner of this Task as the Fulfiller."
  },
  {
    "code" : "not-selected",
    "display" : "Not selected",
    "definition" : "The Placer has selected another candidate; the Coordination Task of this candidate is cancelled."
  },
  {
    "code" : "type-of-work",
    "display" : "Type of work",
    "definition" : "The entry carries the type of work."
  },
  {
    "code" : "supplemental-resource",
    "display" : "Supplemental resource",
    "definition" : "The entry refers, in valueReference, to one resource at the Placer that the Fulfiller may read beyond the standard dataset."
  },
  {
    "code" : "supplemental-query",
    "display" : "Supplemental query",
    "definition" : "The entry carries, in valueString, a search relative to the FHIR base of the Placer that the Fulfiller may perform beyond the standard dataset."
  }]
}

```
