# Subscription for a HealthcareService - Twiin Workflow v0.1.1-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Subscription for a HealthcareService**

## Example Subscription: Subscription for a HealthcareService

Profile: [Twiin Workflow Subscription](StructureDefinition-twiin-workflow-subscription.md)

**status**: Active

**reason**: Coordination Tasks for HealthcareService wondzorg-thuis

**criteria**: https://example.org/fhir/SubscriptionTopic/transfer-of-care

### Channels

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| - | **Extension** | **Type** | **Endpoint** | **Payload** |
| * |  | Rest Hook | [https://fulfiller-a.example.org/fhir/notifications](https://fulfiller-a.example.org/fhir/notifications) | application/fhir+json |



## Resource Content

```json
{
  "resourceType" : "Subscription",
  "id" : "1e8b4c6d-3f7a-4b2e-9d5c-8a1f6e3b7c29",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-subscription"]
  },
  "status" : "active",
  "reason" : "Coordination Tasks for HealthcareService wondzorg-thuis",
  "criteria" : "https://example.org/fhir/SubscriptionTopic/transfer-of-care",
  "_criteria" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-filter-criteria",
      "valueString" : "owner:identifier=https://fulfiller-a.example.org/healthcareservice|wondzorg-thuis"
    }]
  },
  "channel" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-heartbeat-period",
      "valueUnsignedInt" : 3600
    }],
    "type" : "rest-hook",
    "endpoint" : "https://fulfiller-a.example.org/fhir/notifications",
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
