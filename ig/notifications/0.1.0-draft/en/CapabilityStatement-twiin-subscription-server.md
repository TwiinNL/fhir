# Twiin Subscription Server - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Subscription Server**

## CapabilityStatement: Twiin Subscription Server 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/notifications/CapabilityStatement/twiin-subscription-server | *Version*:0.1.0-draft |
| Draft as of 2026-10-08 | *Computable Name*:TwiinSubscriptionServer |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Requirements for a Subscription Server under TA Notifications (TA section System Roles and Responsibilities → Subscription Server). Imports the Backport IG Subscription Server CapabilityStatement for R4. 

 [Raw OpenAPI-Swagger Definition file](../twiin-subscription-server.openapi.json) | [Download](../twiin-subscription-server.openapi.json) 



## Resource Content

```json
{
  "resourceType" : "CapabilityStatement",
  "id" : "twiin-subscription-server",
  "url" : "https://fhir.twiin.nl/ig/notifications/CapabilityStatement/twiin-subscription-server",
  "version" : "0.1.0-draft",
  "name" : "TwiinSubscriptionServer",
  "title" : "Twiin Subscription Server",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-08",
  "publisher" : "Twiin",
  "description" : "Requirements for a Subscription Server under TA Notifications (TA section System Roles and Responsibilities → Subscription Server). Imports the Backport IG Subscription Server CapabilityStatement for R4.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "kind" : "requirements",
  "imports" : ["http://hl7.org/fhir/uv/subscriptions-backport/CapabilityStatement/backport-subscription-server-r4|1.1.0"],
  "fhirVersion" : "4.0.1",
  "format" : ["json", "xml"],
  "_format" : [{
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "SHALL"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "SHALL"
    }]
  }],
  "rest" : [{
    "mode" : "server",
    "documentation" : "Where the Subscription Server supports in-band Subscription creation, it SHOULD advertise the SubscriptionTopics it supports with the extension http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/capabilitystatement-subscriptiontopic-canonical (TA section Subscription Server).",
    "security" : {
      "service" : [{
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/restful-security-service",
          "code" : "Certificates"
        }]
      }],
      "description" : "All endpoints are secured with mutual TLS (TA section Preconditions)."
    },
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
        "valueCode" : "SHALL"
      }],
      "type" : "Subscription",
      "supportedProfile" : ["https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription"],
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
        "code" : "update",
        "documentation" : "Updating a Subscription: only status off and a change of channel.payload are permitted (TA section Updating a Subscription)."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "MAY"
        }],
        "code" : "create",
        "documentation" : "Required where a use-case-specific technical agreement specifies in-band creation for a SubscriptionTopic (TA section Subscription Server)."
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHOULD-NOT"
        }],
        "code" : "delete",
        "documentation" : "A Subscription is ended by setting its status to off, not by deleting it (TA section Sequence Diagram, step 7)."
      }],
      "searchParam" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "status",
        "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-status",
        "type" : "token"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "criteria",
        "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-criteria",
        "type" : "string"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "url",
        "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-url",
        "type" : "uri"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "type",
        "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-type",
        "type" : "token"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "payload",
        "definition" : "http://hl7.org/fhir/SearchParameter/Subscription-payload",
        "type" : "token"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "payload-type",
        "definition" : "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-payload-type",
        "type" : "string"
      }],
      "operation" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "SHALL"
        }],
        "name" : "status",
        "definition" : "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
          "valueCode" : "MAY"
        }],
        "name" : "events",
        "definition" : "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"
      }]
    }]
  }]
}

```
