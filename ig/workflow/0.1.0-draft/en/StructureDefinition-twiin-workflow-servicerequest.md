# Twiin Workflow ServiceRequest - Twiin Workflow v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Workflow ServiceRequest**

## Resource Profile: Twiin Workflow ServiceRequest 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest | *Version*:0.1.0-draft |
| Draft as of 2026-10-12 | *Computable Name*:TwiinWorkflowServiceRequest |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
The Request under TA Workflow (TA sections Preliminary description of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; instantiatesCanonical refers to the ActivityDefinition or PlanDefinition of the requested service. 

**Usages:**

* Refer to this Profile: [Twiin Authorization Cancellation Request Task](StructureDefinition-twiin-authorization-cancellation-request-task.md) and [Twiin Coordination Task](StructureDefinition-twiin-coordination-task.md)
* Examples for this Profile: [ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md)
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
  "version" : "0.1.0-draft",
  "name" : "TwiinWorkflowServiceRequest",
  "title" : "Twiin Workflow ServiceRequest",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-12T10:57:22+02:00",
  "publisher" : "Twiin",
  "description" : "The Request under TA Workflow (TA sections Preliminary description of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; instantiatesCanonical refers to the ActivityDefinition or PlanDefinition of the requested service.",
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
      "id" : "ServiceRequest.instantiatesCanonical",
      "path" : "ServiceRequest.instantiatesCanonical",
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
