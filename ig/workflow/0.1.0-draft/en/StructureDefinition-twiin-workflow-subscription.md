# Twiin Workflow Subscription - Twiin Workflow v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Workflow Subscription**

## Resource Profile: Twiin Workflow Subscription 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-subscription | *Version*:0.1.0-draft |
| Draft as of 2026-10-12 | *Computable Name*:TwiinWorkflowSubscription |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
Subscription under TA Workflow, on top of the Twiin Subscription of TA Notifications (TA section Subscription). The payload mode is id-only, the filter is `owner:identifier=<system>|<value>`, and a heartbeat period is required. 

**Usages:**

* Examples for this Profile: [Subscription/1e8b4c6d-3f7a-4b2e-9d5c-8a1f6e3b7c29](Subscription-1e8b4c6d-3f7a-4b2e-9d5c-8a1f6e3b7c29.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/nl.twiin.fhir.r4.workflow|current/StructureDefinition/StructureDefinition-twiin-workflow-subscription.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots, and their representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-twiin-workflow-subscription.csv), [Excel](../StructureDefinition-twiin-workflow-subscription.xlsx), [Schematron](../StructureDefinition-twiin-workflow-subscription.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "twiin-workflow-subscription",
  "url" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-subscription",
  "version" : "0.1.0-draft",
  "name" : "TwiinWorkflowSubscription",
  "title" : "Twiin Workflow Subscription",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-12T10:57:22+02:00",
  "publisher" : "Twiin",
  "description" : "Subscription under TA Workflow, on top of the Twiin Subscription of TA Notifications (TA section Subscription). The payload mode is id-only, the filter is `owner:identifier=<system>|<value>`, and a heartbeat period is required.",
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
  "baseDefinition" : "https://fhir.twiin.nl/ig/notifications/StructureDefinition/twiin-subscription",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Subscription",
      "path" : "Subscription"
    },
    {
      "id" : "Subscription.criteria.extension",
      "path" : "Subscription.criteria.extension",
      "min" : 1
    },
    {
      "id" : "Subscription.criteria.extension:filterCriteria",
      "path" : "Subscription.criteria.extension",
      "sliceName" : "filterCriteria",
      "min" : 1,
      "max" : "1",
      "constraint" : [{
        "key" : "twiin-wsub-1",
        "severity" : "error",
        "human" : "The filter has the form owner:identifier=[system]|[value].",
        "expression" : "value.ofType(string).matches('^owner:identifier=[^| ]+[|][^| ]+$')",
        "source" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-subscription"
      }]
    },
    {
      "id" : "Subscription.channel.extension",
      "path" : "Subscription.channel.extension",
      "min" : 1
    },
    {
      "id" : "Subscription.channel.extension:heartbeatPeriod",
      "path" : "Subscription.channel.extension",
      "sliceName" : "heartbeatPeriod",
      "min" : 1
    },
    {
      "id" : "Subscription.channel.payload.extension:content",
      "path" : "Subscription.channel.payload.extension",
      "sliceName" : "content"
    },
    {
      "id" : "Subscription.channel.payload.extension:content.value[x]:valueCode",
      "path" : "Subscription.channel.payload.extension.value[x]",
      "sliceName" : "valueCode",
      "type" : [{
        "code" : "code"
      }],
      "patternCode" : "id-only"
    }]
  }
}

```
