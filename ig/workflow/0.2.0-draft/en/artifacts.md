# Artifacts Summary - Twiin Workflow v0.2.0-draft

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Behavior: Capability Statements 

The following artifacts define the specific capabilities that different types of systems are expected to have in order to comply with this implementation guide. Systems conforming to this implementation guide are expected to declare conformance to one or more of the following capability statements.

| | |
| :--- | :--- |
| [ Twiin Workflow Placer Server  ](CapabilityStatement-twiin-workflow-placer-server.md) | Requirements for the FHIR server of the Placer under TA Workflow (TA section Placer server capabilities). Imports the Twiin Subscription Server of TA Notifications for Subscription. |

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ Twiin Authorization Cancellation Request Task  ](StructureDefinition-twiin-authorization-cancellation-request-task.md) | Authorization Cancellation Request Task under TA Workflow, used by a Fulfiller to ask the Placer to withdraw the Request itself (TA sections Summary of the profiles → Authorization Cancellation Request Task; Cancellation by the Fulfiller). COW IG defines no profile for this Task. requester and owner identify the Fulfiller and the Placer as organizations, by their URA. |
| [ Twiin Cancellation Request Task  ](StructureDefinition-twiin-cancellation-request-task.md) | Cancellation Request Task under TA Workflow, used by the Placer to ask the Fulfiller to stop work that has started (TA sections Summary of the profiles → Cancellation Request Task; Cancellation Request Task; Type of work on the Task). |
| [ Twiin Coordination Task  ](StructureDefinition-twiin-coordination-task.md) | Coordination Task under TA Workflow (TA sections Summary of the profiles → Coordination Task; Coordination Task; Status of the Coordination Task; Patient context and readability; Type of work on the Task; Sharing additional content; Search parameters; Codes of this TA). |
| [ Twiin Workflow ServiceRequest  ](StructureDefinition-twiin-workflow-servicerequest.md) | The Request under TA Workflow (TA sections Summary of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; code states the requested service; instantiatesCanonical MAY refer to the ActivityDefinition or PlanDefinition of the requested service. |
| [ Twiin Workflow Subscription  ](StructureDefinition-twiin-workflow-subscription.md) | Subscription under TA Workflow, on top of the Twiin Subscription of TA Notifications (TA sections Summary of the profiles → Subscription; Subscription). The payload mode is id-only, the filter is `owner:identifier=[system]|[value]`, and a heartbeat period is required. |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ TA Workflow Business Status  ](ValueSet-ta-workflow-business-status.md) | Codes for Task.businessStatus of the Coordination Task under TA Workflow. Extensible: a use case MAY define further values; selected is set by the Placer only. |
| [ TA Workflow Status Reason  ](ValueSet-ta-workflow-status-reason.md) | Codes for Task.statusReason of the Coordination Task under TA Workflow. Extensible: a use case or a Fulfiller MAY use other reasons, for instance when it rejects a Task; not-selected is reserved for the Placer. |
| [ TA Workflow Task Code  ](ValueSet-ta-workflow-task-code.md) | Codes for Task.code of the Coordination Task under TA Workflow. |

### Terminology: Code Systems 

These define new code systems used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ TA Workflow Codes  ](CodeSystem-ta-workflow.md) | Codes defined by TA Workflow for Task.code, Task.businessStatus, Task.statusReason and Task.input.type. |

### Example: Example Instances 

These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.

| | |
| :--- | :--- |
| [ Authorization Cancellation Request Task  ](Task-9c4a1f8e-7d3b-4e2a-b6f9-3a8e5d2c7b14.md) | A Fulfiller asks the Placer to withdraw the Request (TA section Cancellation by the Fulfiller). requester identifies the Fulfiller and owner the Placer, each by its URA. |
| [ Cancellation Request Task  ](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md) | The Placer asks the Fulfiller to stop work that has started. focus refers to the Coordination Task, owner and the type of work are the same as on that Task (TA sections Cancellation Request Task; Cancellation Request (After in-progress)). |
| [ Coordination Task: candidate invited  ](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md) | A bidding task in the Multiple Fulfillers Pattern before selection: code request-fulfillment, for empty (TA sections Multiple Fulfillers Pattern; Patient context and readability). Task.input also carries a non-identifying entry with its content inline, as allowed before selection (TA sections Sharing additional content; Patient context and readability). |
| [ Coordination Task: candidate not selected  ](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md) | The Coordination Task of a candidate that was not selected: status cancelled with statusReason not-selected and the text not selected (TA section Reason for cancelling a non-selected candidate). |
| [ Coordination Task: candidate selected  ](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md) | The Coordination Task of the selected candidate: businessStatus selected, code fulfill and for set in the same update (TA sections Multiple Fulfillers Pattern; Patient context and readability). The candidate had accepted and recorded a bid in output. |
| [ Coordination Task: single Fulfiller, in progress  ](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md) | Single Fulfiller Pattern: code fulfill and for set from creation; the Fulfiller has started the work. Task.input also carries a supplemental-resource and a supplemental-query entry (TA sections Single Fulfiller Pattern; Sharing additional content). |
| [ Patient  ](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md) | The Patient to which the Request refers. Carries the BSN in Patient.identifier (TA section Patient context and readability). |
| [ ServiceRequest: no definition  ](ServiceRequest-a529d458-5bec-4d91-8ed8-f4fd5bb93720.md) | A Request that follows no predefined definition and has no standard dataset; it is routed on ServiceRequest.code alone (TA sections Request; Routing by the Fulfiller). |
| [ ServiceRequest: transfer of care  ](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md) | The Request, with subject a Patient and instantiatesCanonical referring to the definition of the requested service (TA sections Request; Patient context and readability). performer is unset: the Multiple Fulfillers Pattern applies. |
| [ Subscription for a HealthcareService  ](Subscription-1e8b4c6d-3f7a-4b2e-9d5c-8a1f6e3b7c29.md) | Subscription for one HealthcareService and one topic at the base URL of the Placer: filter owner:identifier, id-only, heartbeat period (TA section Subscription). The topic URL is an example; topics are defined per use case. |

