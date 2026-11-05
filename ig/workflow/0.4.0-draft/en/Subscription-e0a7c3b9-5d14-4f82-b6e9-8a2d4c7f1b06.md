# Subscription for an organization - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Subscription for an organization**

## Example Subscription: Subscription for an organization

Profile: [Twiin Workflow Subscription](StructureDefinition-twiin-workflow-subscription.md)

**status**: Active

**reason**: Coordination Tasks for all HealthcareServices of the organization with URA 87654321

**criteria**: https://example.org/fhir/SubscriptionTopic/transfer-of-care

### Channels

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| - | **Extension** | **Type** | **Endpoint** | **Payload** |
| * |  | Rest Hook | [https://fulfiller-a.example.org/fhir/notifications/organization](https://fulfiller-a.example.org/fhir/notifications/organization) | application/fhir+json |



## Resource Content

```json
{
  "resourceType" : "Subscription",
  "id" : "e0a7c3b9-5d14-4f82-b6e9-8a2d4c7f1b06",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-subscription"]
  },
  "status" : "active",
  "reason" : "Coordination Tasks for all HealthcareServices of the organization with URA 87654321",
  "criteria" : "https://example.org/fhir/SubscriptionTopic/transfer-of-care",
  "_criteria" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-filter-criteria",
      "valueString" : "owner-assigner=urn:oid:2.16.528.1.1007.3.3|87654321"
    }]
  },
  "channel" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-heartbeat-period",
      "valueUnsignedInt" : 3600
    }],
    "type" : "rest-hook",
    "endpoint" : "https://fulfiller-a.example.org/fhir/notifications/organization",
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
