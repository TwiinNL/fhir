# Notification: event-notification, empty - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Notification: event-notification, empty**

## Example Bundle: Notification: event-notification, empty



## Resource Content

```json
{
  "resourceType" : "Bundle",
  "id" : "notification-event-empty",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification"]
  },
  "type" : "history",
  "entry" : [{
    "fullUrl" : "urn:uuid:4b8e2f6a-1d3c-4a59-8e7b-2c6f9a0d5e14",
    "resource" : {
      "resourceType" : "Parameters",
      "id" : "notification-event-empty-status",
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
        "valueCode" : "event-notification"
      },
      {
        "name" : "notification-event",
        "part" : [{
          "name" : "event-number",
          "valueString" : "43"
        },
        {
          "name" : "timestamp",
          "valueInstant" : "2026-07-16T10:02:00Z"
        }]
      }]
    },
    "request" : {
      "method" : "GET",
      "url" : "https://sender.example.org/fhir/Subscription/7f3e9a2c-5d18-4b6f-9c3a-8e2d4f6b1a59/$status"
    },
    "response" : {
      "status" : "200"
    }
  }]
}

```
