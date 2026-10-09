# $status response - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **$status response**

## Example Bundle: $status response



## Resource Content

```json
{
  "resourceType" : "Bundle",
  "id" : "status-response",
  "type" : "searchset",
  "total" : 1,
  "link" : [{
    "relation" : "self",
    "url" : "https://sender.example.org/fhir/Subscription/7f3e9a2c-5d18-4b6f-9c3a-8e2d4f6b1a59/$status"
  }],
  "entry" : [{
    "fullUrl" : "urn:uuid:2d9f4b1e-6a3c-4e78-9b5d-1f8c0a7e3d62",
    "resource" : {
      "resourceType" : "Parameters",
      "id" : "status-response-status",
      "meta" : {
        "profile" : ["https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status"]
      },
      "parameter" : [{
        "name" : "subscription",
        "valueReference" : {
          "reference" : "https://sender.example.org/fhir/Subscription/7f3e9a2c-5d18-4b6f-9c3a-8e2d4f6b1a59"
        }
      },
      {
        "name" : "topic",
        "valueCanonical" : "https://example.org/fhir/SubscriptionTopic/task-status-change"
      },
      {
        "name" : "status",
        "valueCode" : "active"
      },
      {
        "name" : "type",
        "valueCode" : "query-status"
      },
      {
        "name" : "events-since-subscription-start",
        "valueString" : "44"
      }]
    },
    "search" : {
      "mode" : "match"
    }
  }]
}

```
