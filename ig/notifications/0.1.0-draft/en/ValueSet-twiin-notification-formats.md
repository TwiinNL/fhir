# Twiin Notification Formats - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Twiin Notification Formats**

## ValueSet: Twiin Notification Formats 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/notifications/ValueSet/twiin-notification-formats | *Version*:0.1.0-draft |
| Draft as of 2026-10-09 | *Computable Name*:TwiinNotificationFormats |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
MIME types permitted in Subscription.channel.payload under TA Notifications: application/fhir+json and application/fhir+xml. 

 **References** 

* [Twiin Subscription](StructureDefinition-twiin-subscription.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "twiin-notification-formats",
  "url" : "https://fhir.twiin.nl/ig/notifications/ValueSet/twiin-notification-formats",
  "version" : "0.1.0-draft",
  "name" : "TwiinNotificationFormats",
  "title" : "Twiin Notification Formats",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-10-09T13:43:30+02:00",
  "publisher" : "Twiin",
  "description" : "MIME types permitted in Subscription.channel.payload under TA Notifications: application/fhir+json and application/fhir+xml.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "compose" : {
    "include" : [{
      "system" : "urn:ietf:bcp:13",
      "concept" : [{
        "code" : "application/fhir+json",
        "display" : "application/fhir+json"
      },
      {
        "code" : "application/fhir+xml",
        "display" : "application/fhir+xml"
      }]
    }]
  }
}

```
