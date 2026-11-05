# TA Workflow Codes - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **TA Workflow Codes**

## CodeSystem: TA Workflow Codes 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow | *Version*:0.4.0-draft |
| Draft as of 2026-11-05 | *Computable Name*:TAWorkflowCS |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Codes defined by TA Workflow for Task.code, Task.businessStatus, Task.statusReason and Task.input.type. 

This Code system is referenced in the definition of the following value sets:

* [TA Workflow Business Status](ValueSet-ta-workflow-business-status.md)
* [TA Workflow Status Reason](ValueSet-ta-workflow-status-reason.md)
* [TA Workflow Task Code](ValueSet-ta-workflow-task-code.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "ta-workflow",
  "url" : "https://fhir.twiin.nl/ig/workflow/CodeSystem/ta-workflow",
  "version" : "0.4.0-draft",
  "name" : "TAWorkflowCS",
  "title" : "TA Workflow Codes",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-11-05T10:55:26+00:00",
  "publisher" : "Twiin",
  "description" : "Codes defined by TA Workflow for Task.code, Task.businessStatus, Task.statusReason and Task.input.type.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 9,
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
    "code" : "awaiting-information",
    "display" : "Awaiting information",
    "definition" : "The Fulfiller needs more information from the Placer to continue or to decide."
  },
  {
    "code" : "visit-scheduled",
    "display" : "Visit scheduled",
    "definition" : "A visit with the patient is scheduled."
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
    "code" : "available-resource",
    "display" : "Available resource",
    "definition" : "The entry refers, in valueReference, to one resource at the Placer that the Placer makes available to the Fulfiller."
  },
  {
    "code" : "available-query",
    "display" : "Available query",
    "definition" : "The entry carries, in valueString, a search relative to the FHIR base of the Placer that the Placer makes available to the Fulfiller."
  },
  {
    "code" : "information-request",
    "display" : "Information request",
    "definition" : "The entry carries, in the entry itself, a request from the Fulfiller for information it needs from the Placer."
  }]
}

```
