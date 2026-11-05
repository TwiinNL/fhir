# Artifacts Summary - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Behavior: Capability Statements 

The following artifacts define the specific capabilities that different types of systems are expected to have in order to comply with this implementation guide. Systems conforming to this implementation guide are expected to declare conformance to one or more of the following capability statements.

| | |
| :--- | :--- |
| [ Twiin Workflow Placer Server  ](CapabilityStatement-twiin-workflow-placer-server.md) | Requirements for the FHIR server of the Placer under TA Workflow (TA section Placer server capabilities). Imports the Twiin Subscription Server of TA Notifications for Subscription. |

### Behavior: Search Parameters 

These define the properties by which a RESTful server can be searched. They can also be used for sorting and including related resources.

| | |
| :--- | :--- |
| [ Task owner-assigner  ](SearchParameter-owner-assigner.md) | The URA of the organization that assigned the identifier of the HealthcareService in Task.owner, which is the organization that provides that HealthcareService. Used to filter one Subscription for all HealthcareServices of an organization, and to search for the Tasks of that organization. |

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ Twiin Authorization Cancellation Request Task  ](StructureDefinition-twiin-authorization-cancellation-request-task.md) | Authorization Cancellation Request Task under TA Workflow, used by a Fulfiller to ask the Placer to withdraw the Request itself (TA sections Summary of the profiles → Authorization Cancellation Request Task; Cancellation by the Fulfiller). COW IG defines no profile for this Task. requester and owner identify the Fulfiller and the Placer as organizations, by their URA. |
| [ Twiin Cancellation Request Task  ](StructureDefinition-twiin-cancellation-request-task.md) | Cancellation Request Task under TA Workflow, used by the Placer to ask the Fulfiller to stop work that has started (TA sections Summary of the profiles → Cancellation Request Task; Cancellation Request Task; Type of work on the Task). |
| [ Twiin Coordination Task  ](StructureDefinition-twiin-coordination-task.md) | Coordination Task under TA Workflow (TA sections Summary of the profiles → Coordination Task; Coordination Task; Status of the Coordination Task; Patient context and readability; Type of work on the Task; Sharing additional content; Search parameters; Codes of this TA). |
| [ Twiin Workflow ServiceRequest  ](StructureDefinition-twiin-workflow-servicerequest.md) | The Request under TA Workflow (TA sections Summary of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; code states the requested service; instantiatesCanonical MAY refer to the ActivityDefinition or PlanDefinition of the requested service. |
| [ Twiin Workflow Subscription  ](StructureDefinition-twiin-workflow-subscription.md) | Subscription under TA Workflow, on top of the Twiin Subscription of TA Notifications (TA sections Summary of the profiles → Subscription; Subscription). The payload mode is id-only, the filter is `owner:identifier=[system]|[value]` (one HealthcareService) or `owner-assigner=[system]|[value]` (all HealthcareServices of one organization, by its URA), and a heartbeat period is required. |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [ TA Workflow Business Status  ](ValueSet-ta-workflow-business-status.md) | Codes for Task.businessStatus of the Coordination Task under TA Workflow (TA sections Business status; Codes of this TA). Extensible: a use case MAY define further codes. selected is reserved for the Placer. |
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
| [ Authorization Cancellation Request Task  ](Task-9c4a1f8e-7d3b-4e2a-b6f9-3a8e5d2c7b14.md) | A Fulfiller asks the Placer to withdraw the Request (TA section Cancellation by the Fulfiller). requester identifies the Fulfiller and owner the Placer, each by its URA. reasonCode carries the reason of the Fulfiller. |
| [ Cancellation Request Task  ](Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.md) | The Placer asks the Fulfiller to stop work that has started. focus refers to the Coordination Task, owner and the type of work are the same as on that Task (TA sections Cancellation Request Task; Cancellation Request (After in-progress)). |
| [ Coordination Task: candidate invited  ](Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.md) | A bidding task in the Multiple Fulfillers Pattern before selection: code request-fulfillment (TA sections Multiple Fulfillers Pattern; Patient context and readability). Task.input also carries a non-identifying entry with its content inline, as allowed before selection (TA sections Sharing additional content; Patient context and readability). |
| [ Coordination Task: candidate not selected  ](Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.md) | The Coordination Task of a candidate that was not selected: status cancelled with statusReason not-selected and the text not selected (TA section Reason for cancelling a non-selected candidate). |
| [ Coordination Task: candidate selected  ](Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.md) | The Coordination Task of the selected candidate: businessStatus selected, code fulfill set in the same update (TA sections Multiple Fulfillers Pattern; Patient context and readability). The candidate had accepted and recorded a bid in output. |
| [ Coordination Task: reselection step 1, A accepted  ](Task-f8f11d4a-2339-4ef3-9414-b2743d3a5102.md) | Step 1. The Coordination Task of candidate A after A accepted: code request-fulfillment, only the type of work in input (TA sections Multiple Fulfillers Pattern; Patient context and readability). |
| [ Coordination Task: reselection step 1, B accepted  ](Task-e74fa5b7-7904-40f5-ba19-d1aed93134ba.md) | Step 1. The Coordination Task of candidate B after B accepted: code request-fulfillment, only the type of work in input (TA sections Multiple Fulfillers Pattern; Patient context and readability). |
| [ Coordination Task: reselection step 2, A selected  ](Task-18d1bd56-33f6-43e0-a3fa-8871a100df12.md) | Step 2. The Coordination Task of A when the Placer selects A: businessStatus selected, code fulfill set in the same update (TA sections Multiple Fulfillers Pattern; Patient context and readability). The Request has performer set to A. |
| [ Coordination Task: reselection step 2, B not selected  ](Task-f0299832-a6c0-4517-a8af-0727fab92ee6.md) | Step 2. The Coordination Task of B when A is selected: status cancelled with statusReason not-selected (TA section Reason for cancelling a non-selected candidate). |
| [ Coordination Task: reselection step 3, A cancelled  ](Task-4ae98e56-816c-4068-bdce-890a8a24b52f.md) | Step 3. The Placer cancels the Coordination Task of the selected A before in-progress, while the Request continues (TA section Cancellation (Before in-progress)). statusReason.text gives the reason; the code not-selected is not used, because no other candidate has been selected. The Request has performer unset again. |
| [ Coordination Task: reselection step 4, B invited again  ](Task-a5c02498-4399-4c8d-aa17-b17023396852.md) | Step 4. A new Coordination Task for B on the same Request, after the earlier Task of B ended (TA sections Multiple Fulfillers Pattern; Handling the End of a Coordination Task). code request-fulfillment. |
| [ Coordination Task: reselection step 4, C invited  ](Task-d4f3456d-86b6-4429-b606-bf52a94ca749.md) | Step 4. A Coordination Task for the new candidate C on the same Request (TA sections Multiple Fulfillers Pattern; Patient context and readability). code request-fulfillment. |
| [ Coordination Task: reselection step 5, B not selected  ](Task-5dede07b-28ae-4497-bd35-817f5bee9690.md) | Step 5. The new Coordination Task of B when C is selected: status cancelled with statusReason not-selected (TA section Reason for cancelling a non-selected candidate). |
| [ Coordination Task: reselection step 5, C selected  ](Task-47ca5941-e107-4c70-bae9-bce09b69311d.md) | Step 5. The Coordination Task of C when the Placer selects C, after C accepted (TA section Multiple Fulfillers Pattern: the Placer selects only a candidate whose Task has status accepted). businessStatus selected, code fulfill set in the same update. |
| [ Coordination Task: sharing step 1, content shared before selection  ](Task-7dc145b2-78c9-45db-ab56-267c664be4c3.md) | Step 1. The Placer invites the candidate and adds an entry to input with its content inline, without a reference, since before selection a candidate may read the Request but not the Patient or other resources at the Placer. The entry does not identify the patient (TA sections Sharing additional content; Patient context and readability). The type Dressing type is fictitious: the use case defines the type and states why the content is not identifying. |
| [ Coordination Task: sharing step 2, candidate awaits information  ](Task-c8ca1ec3-dd83-4900-9bfa-a05d6e93782c.md) | Step 2. The candidate accepted, sets businessStatus awaiting-information and states in statusReason.text what it needs (TA section Business status). |
| [ Coordination Task: sharing step 3, Placer answers in input  ](Task-b5e65e9b-434f-445c-924d-ff772c25ae4d.md) | Step 3. The Placer provides the information by adding an entry to input, again with its content inline (TA sections Business status; Sharing additional content). The Fulfiller then sets another value or removes businessStatus. |
| [ Coordination Task: sharing step 4, candidate has the information  ](Task-e1e3f55f-c56e-4501-b409-ed05bb70cc87.md) | Step 4. The candidate removes businessStatus and statusReason (TA section Business status). |
| [ Coordination Task: sharing step 5, available resource after selection  ](Task-66507516-150c-415f-9e88-7c1f24eef69c.md) | Step 5. The Placer selects the candidate: businessStatus selected, code fulfill set in the same update, together with an entry with type available-resource that refers to a resource at the Placer (TA sections Sharing additional content; Patient context and readability). |
| [ Coordination Task: single Fulfiller, awaiting information  ](Task-948d41c4-820f-49ed-bbb7-c15e6d7fc699.md) | The Fulfiller awaits information from the Placer (TA section Business status). |
| [ Coordination Task: single Fulfiller, in progress  ](Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.md) | Single Fulfiller Pattern: code fulfill from creation; the Fulfiller has started the work. Task.input also carries an available-resource and an available-query entry (TA sections Single Fulfiller Pattern; Sharing additional content). |
| [ Observation: updated wound assessment  ](Observation-8d97c695-4ece-45fb-96e0-a216398978fa.md) | A resource at the Placer to which the Coordination Task refers after selection, in an entry with type available-resource (TA section Sharing additional content). The content is fictitious. |
| [ Patient  ](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md) | The Patient to which the Request refers. Carries the BSN in Patient.identifier (TA section Patient context and readability). |
| [ Scenario 1, step 1: created  ](Task-5fe23d95-5f8d-4f9d-9315-7d7979153e2a.md) | The Placer creates the Coordination Task with code fulfill, and with the entries it makes available, since in the Single Fulfiller Pattern there is no selection. |
| [ Scenario 1, step 2: accepted  ](Task-f99620ae-3d81-4e74-915e-c9dc12771355.md) | The Fulfiller accepts the Coordination Task. |
| [ Scenario 1, step 3: in progress  ](Task-fcf2352b-4027-45ea-8cd3-002dbebc3d7a.md) | The Fulfiller starts the work: status in-progress and executionPeriod.start. |
| [ Scenario 1, step 4: completed  ](Task-7b4e4d93-be6d-4511-a2b0-0d141fa362e6.md) | The Fulfiller completes the work: status completed and executionPeriod.end set when the status moves from in-progress. |
| [ Scenario 1: Request, single Fulfiller  ](ServiceRequest-c682d130-33be-4bd5-a2b5-6677aead5ad9.md) | The Request of scenario 1. The Single Fulfiller Pattern applies: performer refers to the HealthcareService of A. priority is populated, as the Placer SHOULD do. |
| [ Scenario 2, step 1: A accepted with a bid  ](Task-12e3afcc-3979-476c-bc59-8e8e4e40afb9.md) | Candidate A accepts its Coordination Task (code request-fulfillment) and records a bid in output. |
| [ Scenario 2, step 1: B accepted with a bid  ](Task-66bb48ed-2053-4fa4-ae26-4aba6ad37e5d.md) | Candidate B accepts its Coordination Task (code request-fulfillment) and records a bid in output. |
| [ Scenario 2, step 2: A selected  ](Task-5932fe26-950a-481f-8fc3-fa792e1d318f.md) | The Placer selects A: businessStatus selected, code fulfill set in one update, together with the entries with type available-resource and available-query that it makes available. |
| [ Scenario 2, step 2: B not selected  ](Task-4e1168c4-0d2d-434f-a44e-bd117d0780d2.md) | In the same step the Placer cancels the Coordination Task of B with statusReason not-selected. |
| [ Scenario 2: Request, multiple Fulfillers  ](ServiceRequest-7e83a049-2267-4ca0-9d35-07216dfec2b6.md) | The Request of scenario 2. performer is unset: the Multiple Fulfillers Pattern applies. Candidates may read the Request from the creation of their Coordination Task; the Request contains no data that directly identifies the patient beyond the reference in subject. |
| [ Scenario 4, step 1: accepted  ](Task-46ebdfdd-408a-4340-915d-980a14c75f36.md) | The Fulfiller has accepted; the work has not started. |
| [ Scenario 4, step 2: cancelled by the Placer  ](Task-cd47fb57-917b-4cd4-86d7-38ccb3bbeef9.md) | Before in-progress the Placer cancels the Coordination Task itself, with its reason in statusReason.text. |
| [ Scenario 4: Request  ](ServiceRequest-57129653-f261-4841-9e42-e5b40b57f6fb.md) | The Request of scenario 4, Single Fulfiller Pattern. |
| [ Scenario 5, step 1: Request active  ](ServiceRequest-e7e34041-dbd1-4413-be25-e08e2f85a7e4.md) | The Request of scenario 5 while the work is in progress. |
| [ Scenario 5, step 1: in progress  ](Task-f3bdd83f-0914-4232-94e9-28a01b1d36af.md) | The Fulfiller has started the work. |
| [ Scenario 5, step 2: Cancellation Request Task requested  ](Task-c2b03781-d9f7-40e2-ba3d-d68d47f055b5.md) | The Placer asks the Fulfiller to stop the work, with its reason in reasonCode. |
| [ Scenario 5, step 3: Cancellation Request Task accepted  ](Task-444cd124-7855-43ab-85b6-87bede5a8c49.md) | The Fulfiller accepts the Cancellation Request Task. |
| [ Scenario 5, step 3: cancelled after the Cancellation Request  ](Task-66689cbb-33d1-4159-8ce2-d5fa970577a9.md) | After accepting the Cancellation Request Task the Fulfiller sets the Coordination Task to cancelled (not failed) and sets executionPeriod.end. |
| [ Scenario 5, step 4: Request revoked  ](ServiceRequest-462d6275-922e-434a-a379-96fd4a29548b.md) | The Placer revokes the Request. Same identifier as step 1: one resource in successive states. |
| [ Scenario 6, step 1: Authorization Cancellation Request requested  ](Task-5e2888cb-fd37-4328-bfa7-45a9e1a047ff.md) | The Fulfiller asks the Placer to withdraw the Request: intent proposal, code abort, focus the Request, reason in reasonCode. |
| [ Scenario 6, step 2: Authorization Cancellation Request accepted  ](Task-fb3a4ac7-3f98-45cf-acd6-95b18e688d6b.md) | The Placer accepts the request to withdraw the Request. |
| [ Scenario 7, step 1: Fulfiller requests information  ](Task-683af045-b470-4595-b80d-cd40c92da2f7.md) | The Fulfiller sets businessStatus awaiting-information with statusReason.text, and adds an entry with type information-request to input. |
| [ Scenario 7, step 2: Placer answers  ](Task-71af91f0-f5ec-42cf-9b48-75b74d0036a0.md) | The Placer answers with a further entry in input, with type available-resource, that refers to the wound assessment. |
| [ Scenario 7, step 3: Fulfiller has the information  ](Task-b8d24f6e-1c37-4a59-9f02-6e1a7c4b8d35.md) | The Fulfiller removes businessStatus, statusReason and its information-request entry. |
| [ Scenario 7: wound assessment  ](Observation-d5f9a2c1-3e68-4b7d-a4f0-2c9e8b1d6f43.md) | The resource at the Placer with which the Placer answers the information request. The content is fictitious. |
| [ ServiceRequest: no definition  ](ServiceRequest-a529d458-5bec-4d91-8ed8-f4fd5bb93720.md) | A Request that follows no predefined definition and has no standard dataset; it is routed on ServiceRequest.code alone (TA sections Request; Routing by the Fulfiller). |
| [ ServiceRequest: reselection step 2, performer set to A  ](ServiceRequest-c6df56d1-5fc1-4abb-bc72-fb260f800832.md) | The Request of the reselection scenario at step 2, after A was selected: performer refers to the HealthcareService of A (TA section Multiple Fulfillers Pattern). At step 3 the Placer clears performer again; that state is the Request with performer unset. Same identifier as the other variants. |
| [ ServiceRequest: reselection step 5, performer set to C  ](ServiceRequest-5f9a3627-3c42-4f64-9ed4-b6526ea57f65.md) | The Request of the reselection scenario at step 5, after C was selected: performer refers to the HealthcareService of C (TA section Multiple Fulfillers Pattern). Same identifier as the other two variants: they are one resource in successive states. |
| [ ServiceRequest: reselection, performer unset  ](ServiceRequest-862e9389-15a3-4681-aa0c-1ebcd5bc17d0.md) | The Request of the reselection scenario while solicitation is open: performer unset (TA section Multiple Fulfillers Pattern). This is its state at steps 1, 3 and 4, and the state to which the Coordination Tasks of the scenario refer. Same identifier as the other two variants: they are one resource in successive states. |
| [ ServiceRequest: sharing additional content  ](ServiceRequest-3e358483-ec50-469b-94d0-54b6bc5ea7d8.md) | The Request of the scenario sharing additional content. performer is unset: the Multiple Fulfillers Pattern applies. |
| [ ServiceRequest: transfer of care  ](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md) | The Request, with subject a Patient and instantiatesCanonical referring to the definition of the requested service (TA sections Request; Patient context and readability). performer is unset: the Multiple Fulfillers Pattern applies. |
| [ Subscription for a HealthcareService  ](Subscription-1e8b4c6d-3f7a-4b2e-9d5c-8a1f6e3b7c29.md) | Subscription for one HealthcareService and one topic at the base URL of the Placer: filter owner:identifier, id-only, heartbeat period (TA section Subscription). The topic URL is an example; topics are defined per use case. |
| [ Subscription for an organization  ](Subscription-e0a7c3b9-5d14-4f82-b6e9-8a2d4c7f1b06.md) | Subscription for all HealthcareServices of Fulfiller A, also those registered later: filter owner-assigner with the URA of the organization; channel.endpoint begins with the address of an Endpoint in Organization.endpoint. The topic URL is an example. |

