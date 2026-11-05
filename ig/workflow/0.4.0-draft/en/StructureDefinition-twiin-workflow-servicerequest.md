# Twiin Workflow ServiceRequest - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Workflow ServiceRequest**

## Resource Profile: Twiin Workflow ServiceRequest 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest | *Version*:0.4.0-draft |
| Draft as of 2026-11-05 | *Computable Name*:TwiinWorkflowServiceRequest |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
The Request under TA Workflow (TA sections Summary of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; code states the requested service; instantiatesCanonical MAY refer to the ActivityDefinition or PlanDefinition of the requested service. 

**Usages:**

* Refer to this Profile: [Twiin Authorization Cancellation Request Task](StructureDefinition-twiin-authorization-cancellation-request-task.md) and [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)
* Examples for this Profile: [ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md), [ServiceRequest/3e358483-ec50-469b-94d0-54b6bc5ea7d8](ServiceRequest-3e358483-ec50-469b-94d0-54b6bc5ea7d8.md), [ServiceRequest/462d6275-922e-434a-a379-96fd4a29548b](ServiceRequest-462d6275-922e-434a-a379-96fd4a29548b.md), [ServiceRequest/57129653-f261-4841-9e42-e5b40b57f6fb](ServiceRequest-57129653-f261-4841-9e42-e5b40b57f6fb.md)... Show 7 more, [ServiceRequest/5f9a3627-3c42-4f64-9ed4-b6526ea57f65](ServiceRequest-5f9a3627-3c42-4f64-9ed4-b6526ea57f65.md), [ServiceRequest/7e83a049-2267-4ca0-9d35-07216dfec2b6](ServiceRequest-7e83a049-2267-4ca0-9d35-07216dfec2b6.md), [ServiceRequest/862e9389-15a3-4681-aa0c-1ebcd5bc17d0](ServiceRequest-862e9389-15a3-4681-aa0c-1ebcd5bc17d0.md), [ServiceRequest/a529d458-5bec-4d91-8ed8-f4fd5bb93720](ServiceRequest-a529d458-5bec-4d91-8ed8-f4fd5bb93720.md), [ServiceRequest/c682d130-33be-4bd5-a2b5-6677aead5ad9](ServiceRequest-c682d130-33be-4bd5-a2b5-6677aead5ad9.md), [ServiceRequest/c6df56d1-5fc1-4abb-bc72-fb260f800832](ServiceRequest-c6df56d1-5fc1-4abb-bc72-fb260f800832.md) and [ServiceRequest/e7e34041-dbd1-4413-be25-e08e2f85a7e4](ServiceRequest-e7e34041-dbd1-4413-be25-e08e2f85a7e4.md)
* CapabilityStatements using this Profile: [Twiin Workflow Placer Server](CapabilityStatement-twiin-workflow-placer-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.workflow|current/StructureDefinition/StructureDefinition-twiin-workflow-servicerequest.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-workflow-servicerequest.csv), [Excel](../StructureDefinition-twiin-workflow-servicerequest.xlsx), [Schematron](../StructureDefinition-twiin-workflow-servicerequest.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-workflow-servicerequest",
  "url" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest",
  "version" : "0.4.0-draft",
  "name" : "TwiinWorkflowServiceRequest",
  "title" : "Twiin Workflow ServiceRequest",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-11-05T10:55:26+00:00",
  "publisher" : "Twiin",
  "description" : "The Request under TA Workflow (TA sections Summary of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; code states the requested service; instantiatesCanonical MAY refer to the ActivityDefinition or PlanDefinition of the requested service.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
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
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ServiceRequest",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ServiceRequest",
      "path" : "ServiceRequest"
    },
    {
      "id" : "ServiceRequest.priority",
      "path" : "ServiceRequest.priority",
      "short" : "Priority of the Request",
      "definition" : "The Placer SHOULD populate it, and the Fulfiller SHALL process it when present, for example to triage the Request.",
      "comment" : "Task.priority is not used under TA Workflow; the priority of the Request is in ServiceRequest.priority.",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code",
      "path" : "ServiceRequest.code",
      "short" : "The requested service (TA Routing)",
      "definition" : "code is required so that the Request can be routed also without a definition; where instantiatesCanonical refers to an ActivityDefinition that has a code, code carries that code.",
      "min" : 1
    },
    {
      "id" : "ServiceRequest.subject",
      "path" : "ServiceRequest.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Patient"]
      }],
      "constraint" : [{
        "key" : "twiin-sr-1",
        "severity" : "error",
        "human" : "subject is not masked with the extension data-absent-reason.",
        "expression" : "descendants().where(url = 'http://hl7.org/fhir/StructureDefinition/data-absent-reason').empty()",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
      }]
    }]
  }
}

```
