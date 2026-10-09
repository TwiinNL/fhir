# Twiin Subscription Notification - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Subscription Notification**

## Resource Profile: Twiin Subscription Notification 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification | *Version*:0.1.0-draft |
| Draft as of 2026-10-09 | *Computable Name*:TwiinSubscriptionNotification |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Notification Bundle under TA Notifications (TA section Resource Definitions → Notification), sent by the Subscription Server for handshake, heartbeat and event-notification. 

**Usages:**

* Examples for this Profile: [Bundle/notification-event-empty](Bundle-notification-event-empty.md), [Bundle/notification-event-full-resource](Bundle-notification-event-full-resource.md), [Bundle/notification-event-id-only](Bundle-notification-event-id-only.md), [Bundle/notification-handshake](Bundle-notification-handshake.md) and [Bundle/notification-heartbeat](Bundle-notification-heartbeat.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.notifications|current/StructureDefinition/StructureDefinition-twiin-subscription-notification.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-subscription-notification.csv), [Excel](../StructureDefinition-twiin-subscription-notification.xlsx), [Schematron](../StructureDefinition-twiin-subscription-notification.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-subscription-notification",
  "url" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification",
  "version" : "0.1.0-draft",
  "name" : "TwiinSubscriptionNotification",
  "title" : "Twiin Subscription Notification",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-09T13:43:30+02:00",
  "publisher" : "Twiin",
  "description" : "Notification Bundle under TA Notifications (TA section Resource Definitions → Notification), sent by the Subscription Server for handshake, heartbeat and event-notification.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
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
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Bundle",
  "baseDefinition" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-notification-r4",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Bundle",
      "path" : "Bundle",
      "constraint" : [{
        "key" : "twiin-ntf-1",
        "severity" : "error",
        "human" : "The type in the subscription status is handshake, heartbeat or event-notification.",
        "expression" : "entry.first().resource.parameter.where(name = 'type').value.all($this = 'handshake' or $this = 'heartbeat' or $this = 'event-notification')",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification"
      },
      {
        "key" : "twiin-ntf-2",
        "severity" : "error",
        "human" : "The request of the first entry is GET on the subscription reference followed by /$status. The TA requires the request to match a request to the $status operation; this invariant interprets that as exact string equality with the subscription reference.",
        "expression" : "entry.first().request.method = 'GET' and entry.first().request.url = entry.first().resource.parameter.where(name = 'subscription').value.reference.first() + '/$status'",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification"
      },
      {
        "key" : "twiin-ntf-3",
        "severity" : "error",
        "human" : "Without a notification-event.focus, there is no notification-event.additional-context and no entry other than the first.",
        "expression" : "entry.first().resource.parameter.where(name = 'notification-event').part.where(name = 'focus').empty() implies (entry.first().resource.parameter.where(name = 'notification-event').part.where(name = 'additional-context').empty() and entry.count() = 1)",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification"
      },
      {
        "key" : "twiin-ntf-4",
        "severity" : "error",
        "human" : "Every entry after the first carries fullUrl and request.",
        "expression" : "entry.skip(1).all(fullUrl.exists() and request.exists())",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-notification"
      }]
    },
    {
      "id" : "Bundle.entry:subscriptionStatus",
      "path" : "Bundle.entry",
      "sliceName" : "subscriptionStatus"
    },
    {
      "id" : "Bundle.entry:subscriptionStatus.resource",
      "path" : "Bundle.entry.resource",
      "type" : [{
        "code" : "Parameters",
        "profile" : ["https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status"]
      }]
    }]
  }
}

```
