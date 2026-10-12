# Resource Twiin Workflow



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "nl.twiin.fhir.r4.workflow",
  "language" : "en",
  "url" : "https://fhir.twiin.nl/ig/workflow/ImplementationGuide/nl.twiin.fhir.r4.workflow",
  "version" : "0.1.1-draft",
  "name" : "TwiinWorkflow",
  "title" : "Twiin Workflow",
  "status" : "draft",
  "date" : "2026-10-13T00:04:50+02:00",
  "publisher" : "Twiin",
  "description" : "Technical specification of TA Workflow, part of the technical core of the Twiin Afsprakenstelsel.",
  "copyright" : "Copyright 2026 Twiin. Licensed under CC BY-SA 4.0.",
  "packageId" : "nl.twiin.fhir.r4.workflow",
  "license" : "CC-BY-SA-4.0",
  "fhirVersion" : ["4.0.1"],
  "dependsOn" : [{
    "id" : "hl7tx",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on HL7 Terminology"
    }],
    "uri" : "http://terminology.hl7.org/ImplementationGuide/hl7.terminology",
    "packageId" : "hl7.terminology.r4",
    "version" : "7.4.0"
  },
  {
    "id" : "hl7ext",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on the HL7 Extension Pack"
    }],
    "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
    "packageId" : "hl7.fhir.uv.extensions.r4",
    "version" : "5.3.0"
  },
  {
    "id" : "hl7_fhir_uv_cow",
    "uri" : "http://hl7.org/fhir/uv/cow/ImplementationGuide/hl7.fhir.uv.cow",
    "packageId" : "hl7.fhir.uv.cow",
    "version" : "1.0.0-ballot"
  },
  {
    "id" : "nl_generiekefuncties_csd",
    "uri" : "http://fhir.generiekefuncties.nl/csd/ImplementationGuide/nl.generiekefuncties.csd",
    "packageId" : "nl.generiekefuncties.csd",
    "version" : "1.0.0"
  },
  {
    "id" : "hl7_fhir_eu_base",
    "uri" : "http://hl7.eu/fhir/base/ImplementationGuide/hl7.fhir.eu.base",
    "packageId" : "hl7.fhir.eu.base",
    "version" : "2.0.0"
  },
  {
    "id" : "nl_twiin_fhir_r4_notifications",
    "uri" : "https://fhir.twiin.nl/ig/notifications/ImplementationGuide/nl.twiin.fhir.r4.notifications",
    "packageId" : "nl.twiin.fhir.r4.notifications",
    "version" : "0.1.1-draft"
  },
  {
    "id" : "hl7_fhir_uv_subscriptions_backport_r4",
    "uri" : "http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport",
    "packageId" : "hl7.fhir.uv.subscriptions-backport.r4",
    "version" : "1.1.0"
  }],
  "definition" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-internal-dependency",
      "valueCode" : "hl7.fhir.uv.tools.r4#1.3.0"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2026+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "Draft – normative only when referenced by the Twiin afsprakenstelsel"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.twiin.nl/ig/workflow/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "i18n-default-lang"
      },
      {
        "url" : "value",
        "valueString" : "en"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    }],
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-9c4a1f8e-7d3b-4e2a-b6f9-3a8e5d2c7b14.html"
      }],
      "reference" : {
        "reference" : "Task/9c4a1f8e-7d3b-4e2a-b6f9-3a8e5d2c7b14"
      },
      "name" : "Authorization Cancellation Request Task",
      "description" : "A Fulfiller asks the Placer to withdraw the Request (TA section Cancellation by the Fulfiller). requester identifies the Fulfiller and owner the Placer, each by its URA.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56.html"
      }],
      "reference" : {
        "reference" : "Task/5b9d3e7f-1a2c-4f6e-8d4b-9e2a7c1f3b56"
      },
      "name" : "Cancellation Request Task",
      "description" : "The Placer asks the Fulfiller to stop work that has started. focus refers to the Coordination Task, owner and the type of work are the same as on that Task (TA sections Cancellation Request Task; Cancellation Request (After in-progress)).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64.html"
      }],
      "reference" : {
        "reference" : "Task/6d2e9f41-8b3c-4a7d-b5e2-1c9f7a3d8e64"
      },
      "name" : "Coordination Task: candidate invited",
      "description" : "A bidding task in the Multiple Fulfillers Pattern before selection: code request-fulfillment, for empty (TA sections Multiple Fulfillers Pattern; Patient context and readability).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91.html"
      }],
      "reference" : {
        "reference" : "Task/c8e3d5a7-2b4f-4d9e-a1c6-7f3b8e2d4a91"
      },
      "name" : "Coordination Task: candidate not selected",
      "description" : "The Coordination Task of a candidate that was not selected: status cancelled with statusReason not-selected and the text not selected (TA section Reason for cancelling a non-selected candidate).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38.html"
      }],
      "reference" : {
        "reference" : "Task/a41c7e2b-5f9d-4e3a-8c6b-2d7f1e9a5b38"
      },
      "name" : "Coordination Task: candidate selected",
      "description" : "The Coordination Task of the selected candidate: businessStatus selected, code fulfill and for set in the same update (TA sections Multiple Fulfillers Pattern; Patient context and readability). The candidate had accepted and recorded a bid in output.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47.html"
      }],
      "reference" : {
        "reference" : "Task/e2f7a9c1-4d6b-4b8e-9a3f-6c1d5e8b2a47"
      },
      "name" : "Coordination Task: single Fulfiller, in progress",
      "description" : "Single Fulfiller Pattern: code fulfill and for set from creation; the Fulfiller has started the work. Task.input also carries a supplemental-resource and a supplemental-query entry (TA sections Single Fulfiller Pattern; Sharing additional content).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Patient"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.html"
      }],
      "reference" : {
        "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
      },
      "name" : "Patient",
      "description" : "The Patient to which the Request refers. Carries the BSN in Patient.identifier (TA section Patient context and readability).",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75"
      },
      "name" : "ServiceRequest: transfer of care",
      "description" : "The Request, with subject a Patient and instantiatesCanonical referring to the definition of the requested service (TA sections Request; Patient context and readability). performer is unset: the Multiple Fulfillers Pattern applies.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Subscription"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Subscription-1e8b4c6d-3f7a-4b2e-9d5c-8a1f6e3b7c29.html"
      }],
      "reference" : {
        "reference" : "Subscription/1e8b4c6d-3f7a-4b2e-9d5c-8a1f6e3b7c29"
      },
      "name" : "Subscription for a HealthcareService",
      "description" : "Subscription for one HealthcareService and one topic at the base URL of the Placer: filter owner:identifier, id-only, heartbeat period (TA section Subscription). The topic URL is an example; topics are defined per use case.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-subscription"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ta-workflow-business-status.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ta-workflow-business-status"
      },
      "name" : "TA Workflow Business Status",
      "description" : "Codes for Task.businessStatus of the Coordination Task under TA Workflow. Extensible: a use case MAY define further values; selected is set by the Placer only.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-ta-workflow.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/ta-workflow"
      },
      "name" : "TA Workflow Codes",
      "description" : "Codes defined by TA Workflow for Task.code, Task.businessStatus, Task.statusReason and Task.input.type.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ta-workflow-status-reason.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ta-workflow-status-reason"
      },
      "name" : "TA Workflow Status Reason",
      "description" : "Codes for Task.statusReason of the Coordination Task under TA Workflow. Extensible: a use case or a Fulfiller MAY use other reasons, for instance when it rejects a Task; not-selected is reserved for the Placer.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ta-workflow-task-code.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ta-workflow-task-code"
      },
      "name" : "TA Workflow Task Code",
      "description" : "Codes for Task.code of the Coordination Task under TA Workflow.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-twiin-authorization-cancellation-request-task.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/twiin-authorization-cancellation-request-task"
      },
      "name" : "Twiin Authorization Cancellation Request Task",
      "description" : "Authorization Cancellation Request Task under TA Workflow, used by a Fulfiller to ask the Placer to withdraw the Request itself (TA sections Preliminary description of the profiles → Authorization Cancellation Request Task; Cancellation by the Fulfiller). COW IG defines no profile for this Task. requester and owner identify the Fulfiller and the Placer as organizations, by their URA.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-twiin-cancellation-request-task.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/twiin-cancellation-request-task"
      },
      "name" : "Twiin Cancellation Request Task",
      "description" : "Cancellation Request Task under TA Workflow, used by the Placer to ask the Fulfiller to stop work that has started (TA sections Preliminary description of the profiles → Cancellation Request Task; Cancellation Request Task; Type of work on the Task).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-twiin-coordination-task.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/twiin-coordination-task"
      },
      "name" : "Twiin Coordination Task",
      "description" : "Coordination Task under TA Workflow (TA sections Preliminary description of the profiles → Coordination Task; Coordination Task; Status of the Coordination Task; Patient context and readability; Type of work on the Task; Sharing additional content; Search parameters; Codes of this TA).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CapabilityStatement"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CapabilityStatement-twiin-workflow-placer-server.html"
      }],
      "reference" : {
        "reference" : "CapabilityStatement/twiin-workflow-placer-server"
      },
      "name" : "Twiin Workflow Placer Server",
      "description" : "Requirements for the FHIR server of the Placer under TA Workflow (TA section Placer server capabilities). Imports the Twiin Subscription Server of TA Notifications for Subscription.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-twiin-workflow-servicerequest.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/twiin-workflow-servicerequest"
      },
      "name" : "Twiin Workflow ServiceRequest",
      "description" : "The Request under TA Workflow (TA sections Preliminary description of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; instantiatesCanonical refers to the ActivityDefinition or PlanDefinition of the requested service.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-twiin-workflow-subscription.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/twiin-workflow-subscription"
      },
      "name" : "Twiin Workflow Subscription",
      "description" : "Subscription under TA Workflow, on top of the Twiin Subscription of TA Notifications (TA section Subscription). The payload mode is id-only, the filter is `owner:identifier=<system>|<value>`, and a heartbeat period is required.",
      "exampleBoolean" : false
    }],
    "page" : {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
        "valueUrl" : "toc.html"
      }],
      "nameUrl" : "toc.html",
      "title" : "Table of Contents",
      "generation" : "html",
      "page" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "index.html"
        }],
        "nameUrl" : "index.html",
        "title" : "Home",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "artifacts-overview.html"
        }],
        "nameUrl" : "artifacts-overview.html",
        "title" : "Artifacts overview",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "requirements-not-in-artifacts.html"
        }],
        "nameUrl" : "requirements-not-in-artifacts.html",
        "title" : "Requirements not expressed in artifacts",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "installing-dependencies.html"
        }],
        "nameUrl" : "installing-dependencies.html",
        "title" : "Installing dependencies",
        "generation" : "markdown"
      }]
    },
    "parameter" : [{
      "code" : "path-resource",
      "value" : "input/capabilities"
    },
    {
      "code" : "path-resource",
      "value" : "input/examples"
    },
    {
      "code" : "path-resource",
      "value" : "input/extensions"
    },
    {
      "code" : "path-resource",
      "value" : "input/models"
    },
    {
      "code" : "path-resource",
      "value" : "input/operations"
    },
    {
      "code" : "path-resource",
      "value" : "input/profiles"
    },
    {
      "code" : "path-resource",
      "value" : "input/resources"
    },
    {
      "code" : "path-resource",
      "value" : "input/vocabulary"
    },
    {
      "code" : "path-resource",
      "value" : "input/maps"
    },
    {
      "code" : "path-resource",
      "value" : "input/testing"
    },
    {
      "code" : "path-resource",
      "value" : "input/history"
    },
    {
      "code" : "path-resource",
      "value" : "fsh-generated/resources"
    },
    {
      "code" : "path-pages",
      "value" : "template/config"
    },
    {
      "code" : "path-pages",
      "value" : "input/images"
    },
    {
      "code" : "path-tx-cache",
      "value" : "input-cache/txcache"
    }]
  }
}

```
