# Notification: event-notification, full-resource - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Notification: event-notification, full-resource**

## Example Bundle: Notification: event-notification, full-resource



## Resource Content

```json
{
  "resourceType" : "Bundle",
  "id" : "notification-event-full-resource",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification"]
  },
  "type" : "history",
  "entry" : [{
    "fullUrl" : "urn:uuid:7a1c3e5f-9b2d-4f60-8a4e-6d0b2c8f1e37",
    "resource" : {
      "resourceType" : "Parameters",
      "id" : "notification-event-full-resource-status",
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
          "valueString" : "44"
        },
        {
          "name" : "timestamp",
          "valueInstant" : "2026-07-16T11:30:00Z"
        },
        {
          "name" : "focus",
          "valueReference" : {
            "reference" : "https://sender.example.org/fhir/Task/5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d"
          }
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
  },
  {
    "fullUrl" : "https://sender.example.org/fhir/Task/5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d",
    "resource" : {
      "resourceType" : "Task",
      "id" : "5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d",
      "text" : {
        "status" : "generated",
        "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><a name=\"Task_5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d\"> </a><p class=\"res-header-id\"><b>Generated Narrative: Task 5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d</b></p><a name=\"5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d\"> </a><a name=\"hc5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d\"> </a><p><b>status</b>: Ready</p><p><b>intent</b>: order</p></div>"
      },
      "status" : "ready",
      "intent" : "order"
    },
    "request" : {
      "method" : "PUT",
      "url" : "Task/5f2f9a4e-8c1d-4b6e-9d3a-7c0e2f4b8a1d"
    },
    "response" : {
      "status" : "200"
    }
  }]
}

```
