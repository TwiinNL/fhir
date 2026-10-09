# Twiin Subscription Status - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Subscription Status**

## Resource Profile: Twiin Subscription Status 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status | *Version*:0.1.0-draft |
| Draft as of 2026-10-09 | *Computable Name*:TwiinSubscriptionStatus |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Subscription status Parameters under TA Notifications (TA section Resource Definitions → Notification). Used as the first entry of a notification Bundle and in $status and $events responses, so the values of type are not restricted here; see twiin-subscription-notification for the restriction that applies to notifications. 

**Usages:**

* Use this Profile: [Twiin Subscription Notification](StructureDefinition-twiin-subscription-notification.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.notifications|current/StructureDefinition/StructureDefinition-twiin-subscription-status.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-subscription-status.csv), [Excel](../StructureDefinition-twiin-subscription-status.xlsx), [Schematron](../StructureDefinition-twiin-subscription-status.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-subscription-status",
  "url" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status",
  "version" : "0.1.0-draft",
  "name" : "TwiinSubscriptionStatus",
  "title" : "Twiin Subscription Status",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-09T13:43:30+02:00",
  "publisher" : "Twiin",
  "description" : "Subscription status Parameters under TA Notifications (TA section Resource Definitions → Notification). Used as the first entry of a notification Bundle and in $status and $events responses, so the values of type are not restricted here; see twiin-subscription-notification for the restriction that applies to notifications.",
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Parameters",
  "baseDefinition" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Parameters",
      "path" : "Parameters",
      "constraint" : [{
        "key" : "twiin-st-1",
        "severity" : "error",
        "human" : "The subscription reference is an absolute http(s) URL.",
        "expression" : "parameter.where(name = 'subscription').all(value.reference.exists() and value.reference.matches('^https?://[^ ]+$'))",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status"
      },
      {
        "key" : "twiin-st-2",
        "severity" : "error",
        "human" : "If type is event-notification, there is a notification-event, and every notification-event carries event-number and timestamp.",
        "expression" : "parameter.where(name = 'type' and value = 'event-notification').exists() implies (parameter.where(name = 'notification-event').exists() and parameter.where(name = 'notification-event').all(part.where(name = 'event-number').exists() and part.where(name = 'timestamp').exists()))",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status"
      },
      {
        "key" : "twiin-st-3",
        "severity" : "error",
        "human" : "If type is heartbeat, events-since-subscription-start is present.",
        "expression" : "parameter.where(name = 'type' and value = 'heartbeat').exists() implies parameter.where(name = 'events-since-subscription-start').exists()",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status"
      },
      {
        "key" : "twiin-st-4",
        "severity" : "warning",
        "human" : "notification-event.focus is an absolute URL.",
        "expression" : "parameter.where(name = 'notification-event').part.where(name = 'focus').all(value.reference.exists() and value.reference.matches('^https?://[^ ]+$'))",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status"
      },
      {
        "key" : "twiin-st-5",
        "severity" : "error",
        "human" : "A notification-event has at most one authorization-type part, with a Coding value, and at most one authorization-value part, with a string value; the two occur together, and only if type is event-notification or query-event. The part names are provisional: they are not defined in Backport IG 1.1.0 and follow the 1.2.0 ballot of the Backport IG (notification-authorization-hint).",
        "expression" : "parameter.where(name = 'notification-event').all(part.where(name = 'authorization-type').count() <= 1 and part.where(name = 'authorization-value').count() <= 1 and (part.where(name = 'authorization-type').exists() = part.where(name = 'authorization-value').exists()) and part.where(name = 'authorization-type').all(value.ofType(Coding).exists()) and part.where(name = 'authorization-value').all(value.ofType(string).exists())) and (parameter.where(name = 'notification-event').part.where(name = 'authorization-type' or name = 'authorization-value').exists() implies parameter.where(name = 'type' and (value = 'event-notification' or value = 'query-event')).exists())",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription-status"
      }]
    },
    {
      "id" : "Parameters.parameter",
      "path" : "Parameters.parameter",
      "min" : 4
    },
    {
      "id" : "Parameters.parameter:topic",
      "path" : "Parameters.parameter",
      "sliceName" : "topic",
      "min" : 1
    }]
  }
}

```
