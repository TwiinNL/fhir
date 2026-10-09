# Artifacts Summary - Twiin Notifications v0.1.0-draft

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Behavior: Capability Statements 

The following artifacts define the specific capabilities that different types of systems are expected to have in order to comply with this implementation guide. Systems conforming to this implementation guide are expected to declare conformance to one or more of the following capability statements.

| | |
| :--- | :--- |
| [ Twiin Subscription Server  ](CapabilityStatement-twiin-subscription-server.md) | Requirements for a Subscription Server under TA Notifications (TA section System Roles and Responsibilities → Subscription Server). Imports the Backport IG Subscription Server CapabilityStatement for R4. |

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ Twiin Subscription  ](StructureDefinition-twiin-subscription.md) | Subscription under TA Notifications (TA section Resource Definitions → Subscription). Restricts channel.type to rest-hook and channel.payload to application/fhir+json or application/fhir+xml. channel.endpoint is 1..1 because the TA requires the rest-hook channel type, which needs an endpoint; this cardinality is derived from that requirement, not stated separately in the TA. |
| [ Twiin Subscription Notification  ](StructureDefinition-twiin-subscription-notification.md) | Notification Bundle under TA Notifications (TA section Resource Definitions → Notification), sent by the Subscription Server for handshake, heartbeat and event-notification. |
| [ Twiin Subscription Status  ](StructureDefinition-twiin-subscription-status.md) | Subscription status Parameters under TA Notifications (TA section Resource Definitions → Notification). Used as the first entry of a notification Bundle and in $status and $events responses, so the values of type are not restricted here; see twiin-subscription-notification for the restriction that applies to notifications. |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ Twiin Notification Formats  ](ValueSet-twiin-notification-formats.md) | MIME types permitted in Subscription.channel.payload under TA Notifications: application/fhir+json and application/fhir+xml. |

### Example: Example Instances 

These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.

| | |
| :--- | :--- |
| [ $events response with authorization value  ](Bundle-events-response-auth.md) | Response to GET [base]/Subscription/[id]/$events replaying one id-only event-notification of an out-of-band Subscription, with the provisional authorization-type and authorization-value parts (TA sections $status and $events Operations; Resource Definitions → Notification → Authorization value). Not an example from the TA. The authorization-type code is a placeholder: the codes are defined by GF Authorization. |
| [ $status response  ](Bundle-status-response.md) | Response to GET [base]/Subscription/[id]/$status: a searchset Bundle with the subscription status (TA section $status and $events Operations). Not an example from the TA. |
| [ Notification: event-notification, empty  ](Bundle-notification-event-empty.md) | Empty event-notification: no focus, no additional-context and no entry other than the subscription status (TA section Resource Definitions → Notification). Not an example from the TA. |
| [ Notification: event-notification, full-resource  ](Bundle-notification-event-full-resource.md) | Full-resource event-notification: focus plus the resource content in the second entry (TA section Resource Definitions → Notification). Not an example from the TA. |
| [ Notification: event-notification, id-only  ](Bundle-notification-event-id-only.md) | Id-only event-notification for a topic that monitors Task (TA section Event Notification → Example). The second entry identifies the resource that triggered the event and carries no resource content. |
| [ Notification: handshake  ](Bundle-notification-handshake.md) | Handshake Bundle, sent while Subscription.status is still requested (TA section Handshake Notification → Example). |
| [ Notification: heartbeat  ](Bundle-notification-heartbeat.md) | Heartbeat Bundle for an active Subscription (TA section Heartbeat Notification → Example). |
| [ Subscription: create, id-only  ](Subscription-subscription-create-id-only.md) | Subscription request with the topic canonical, a scoping filter and the id-only payload mode (TA section Creating a Subscription → Example). An id is added because every IG instance needs one; reason is added because FHIR R4 requires it. |
| [ Subscription: retire (status off)  ](Subscription-7f3e9a2c-5d18-4b6f-9c3a-8e2d4f6b1a59.md) | Retiring the Subscription from the create example (TA section Updating a Subscription → Example). reason is added because FHIR R4 requires it. |

