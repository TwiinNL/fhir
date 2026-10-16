# Twiin Workflow Placer Server - Twiin Workflow v0.3.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Workflow Placer Server**

## CapabilityStatement: Twiin Workflow Placer Server 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/CapabilityStatement/twiin-workflow-placer-server | *Version*:0.3.0-draft |
| Draft as of 2026-10-09 | *Computable Name*:TwiinWorkflowPlacerServer |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Requirements for the FHIR server of the Placer under TA Workflow (TA section Placer server capabilities). Imports the Twiin Subscription Server of TA Notifications for Subscription. 

 [Raw OpenAPI-Swagger Definition file](../twiin-workflow-placer-server.openapi.json) | [Download](../twiin-workflow-placer-server.openapi.json) 



## Resource Content

```json
{
  "resourceType" : "CapabilityStatement",
  "id" : "twiin-workflow-placer-server",
  "url" : "https://fhir.twiin.nl/ig/workflow/CapabilityStatement/twiin-workflow-placer-server",
  "version" : "0.3.0-draft",
  "name" : "TwiinWorkflowPlacerServer",
  "title" : "Twiin Workflow Placer Server",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-09",
  "publisher" : "Twiin",
  "description" : "Requirements for the FHIR server of the Placer under TA Workflow (TA section Placer server capabilities). Imports the Twiin Subscription Server of TA Notifications for Subscription.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "kind" : "requirements",
  "imports" : ["https://fhir.twiin.nl/ig/notifications/CapabilityStatement/twiin-subscription-server|0.2.0-draft"],
  "fhirVersion" : "4.0.1",
  "format" : ["json"],
  "patchFormat" : ["application/json-patch+json"],
  "rest" : [{
    "mode" : "server",
    "documentation" : "Subscription: see the imported Twiin Subscription Server (TA Notifications). Task, ServiceRequest and Patient: TA section Placer server capabilities.",
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
        "valueCode" : "SHALL"
      }],
      "type" : "Task",
      "supportedProfile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task",
      "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task",
      "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"],
      "interaction" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "code" : "read"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "code" : "search-type"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "code" : "update",
        "documentation" : "Version-aware: the Fulfiller sends the version in If-Match; an update on a version that is no longer current is rejected with 412 Precondition Failed (TA section Concurrent writes)."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "code" : "patch",
        "documentation" : "JSON Patch (application/json-patch+json), version-aware as update (TA section Concurrent writes)."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "code" : "create",
        "documentation" : "Only for the Authorization Cancellation Request Task (TA sections Write access; Cancellation by the Fulfiller)."
      }],
      "versioning" : "versioned-update",
      "searchParam" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "owner",
        "definition" : "http://hl7.org/fhir/SearchParameter/Task-owner",
        "type" : "reference",
        "documentation" : "Supported with the modifier :identifier, value `[system]|[value]` (TA section Search parameters)."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "requester",
        "definition" : "http://hl7.org/fhir/SearchParameter/Task-requester",
        "type" : "reference",
        "documentation" : "Supported with the modifier :identifier, value `[system]|[value]` (TA section Search parameters)."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "focus",
        "definition" : "http://hl7.org/fhir/SearchParameter/Task-focus",
        "type" : "reference",
        "documentation" : "TA section Resynchronization."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "code",
        "definition" : "http://hl7.org/fhir/SearchParameter/Task-code",
        "type" : "token",
        "documentation" : "TA sections Resynchronization; Cancellation by the Fulfiller."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "intent",
        "definition" : "http://hl7.org/fhir/SearchParameter/Task-intent",
        "type" : "token",
        "documentation" : "TA section Cancellation by the Fulfiller."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "status",
        "definition" : "http://hl7.org/fhir/SearchParameter/Task-status",
        "type" : "token",
        "documentation" : "TA section Placer server capabilities."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "business-status",
        "definition" : "http://hl7.org/fhir/SearchParameter/Task-business-status",
        "type" : "token",
        "documentation" : "TA section Placer server capabilities."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "_lastUpdated",
        "definition" : "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated",
        "type" : "date",
        "documentation" : "TA section Resynchronization."
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
        "valueCode" : "SHALL"
      }],
      "type" : "ServiceRequest",
      "supportedProfile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"],
      "interaction" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "code" : "read"
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
        "valueCode" : "SHALL"
      }],
      "type" : "Patient",
      "interaction" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "code" : "read"
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
        "valueCode" : "SHALL"
      }],
      "type" : "Subscription",
      "supportedProfile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-subscription"]
    }]
  }]
}

```
