# Twiin Subscription - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Subscription**

## Resource Profile: Twiin Subscription 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription | *Version*:0.1.0-draft |
| Draft as of 2026-10-09 | *Computable Name*:TwiinSubscription |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Subscription under TA Notifications (TA section Resource Definitions → Subscription). Restricts channel.type to rest-hook and channel.payload to application/fhir+json or application/fhir+xml. channel.endpoint is 1..1 because the TA requires the rest-hook channel type, which needs an endpoint; this cardinality is derived from that requirement, not stated separately in the TA. 

**Usages:**

* Examples for this Profile: [Subscription/7f3e9a2c-5d18-4b6f-9c3a-8e2d4f6b1a59](Subscription-7f3e9a2c-5d18-4b6f-9c3a-8e2d4f6b1a59.md) and [Subscription/subscription-create-id-only](Subscription-subscription-create-id-only.md)
* CapabilityStatements using this Profile: [Twiin Subscription Server](CapabilityStatement-twiin-subscription-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.notifications|current/StructureDefinition/StructureDefinition-twiin-subscription.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-subscription.csv), [Excel](../StructureDefinition-twiin-subscription.xlsx), [Schematron](../StructureDefinition-twiin-subscription.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-subscription",
  "url" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription",
  "version" : "0.1.0-draft",
  "name" : "TwiinSubscription",
  "title" : "Twiin Subscription",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-09T13:43:30+02:00",
  "publisher" : "Twiin",
  "description" : "Subscription under TA Notifications (TA section Resource Definitions → Subscription). Restricts channel.type to rest-hook and channel.payload to application/fhir+json or application/fhir+xml. channel.endpoint is 1..1 because the TA requires the rest-hook channel type, which needs an endpoint; this cardinality is derived from that requirement, not stated separately in the TA.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
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
  "type" : "Subscription",
  "baseDefinition" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Subscription",
      "path" : "Subscription",
      "constraint" : [{
        "key" : "twiin-sub-1",
        "severity" : "warning",
        "human" : "criteria is the canonical URL of a SubscriptionTopic: an http(s) URL without a query. This is a heuristic to catch an R4 search expression in criteria.",
        "expression" : "criteria.matches('^https?://[^?]+$')",
        "source" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription"
      }]
    },
    {
      "id" : "Subscription.channel.type",
      "path" : "Subscription.channel.type",
      "patternCode" : "rest-hook"
    },
    {
      "id" : "Subscription.channel.endpoint",
      "path" : "Subscription.channel.endpoint",
      "min" : 1
    },
    {
      "id" : "Subscription.channel.payload",
      "path" : "Subscription.channel.payload",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://fhir.twiin.nl/ig/notifications/ValueSet/twiin-notification-formats"
      }
    }]
  }
}

```
