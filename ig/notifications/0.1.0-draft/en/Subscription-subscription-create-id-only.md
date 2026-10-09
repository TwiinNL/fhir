# Subscription: create, id-only - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Subscription: create, id-only**

## Example Subscription: Subscription: create, id-only

Profile: [Twiin Subscription](StructureDefinition-twiin-subscription.md)

**status**: Requested

**reason**: Notification of Task status changes

**criteria**: https://example.org/fhir/SubscriptionTopic/task-status-change

### Channels

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Type** | **Endpoint** | **Payload** |
| * | Rest Hook | [https://receiver.example.org/fhir/notifications](https://receiver.example.org/fhir/notifications) | application/fhir+json |



## Resource Content

```json
{
  "resourceType" : "Subscription",
  "id" : "subscription-create-id-only",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription"]
  },
  "status" : "requested",
  "reason" : "Notification of Task status changes",
  "criteria" : "https://example.org/fhir/SubscriptionTopic/task-status-change",
  "_criteria" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-filter-criteria",
      "valueString" : "owner=http://fhir.nl/fhir/NamingSystem/ura|12104037"
    }]
  },
  "channel" : {
    "type" : "rest-hook",
    "endpoint" : "https://receiver.example.org/fhir/notifications",
    "payload" : "application/fhir+json",
    "_payload" : {
      "extension" : [{
        "url" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-payload-content",
        "valueCode" : "id-only"
      }]
    }
  }
}

```
