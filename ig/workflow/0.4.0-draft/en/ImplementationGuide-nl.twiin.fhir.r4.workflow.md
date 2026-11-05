# Resource Twiin Workflow



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "nl.twiin.fhir.r4.workflow",
  "language" : "en",
  "url" : "https://fhir.twiin.nl/ig/workflow/ImplementationGuide/nl.twiin.fhir.r4.workflow",
  "version" : "0.4.0-draft",
  "name" : "TwiinWorkflow",
  "title" : "Twiin Workflow",
  "status" : "draft",
  "date" : "2026-11-05T11:19:04+00:00",
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
    "version" : "7.5.0"
  },
  {
    "id" : "hl7_fhir_uv_cow",
    "uri" : "http://hl7.org/fhir/uv/cow/ImplementationGuide/hl7.fhir.uv.cow",
    "packageId" : "hl7.fhir.uv.cow",
    "version" : "1.0.0-ballot"
  },
  {
    "id" : "nl_twiin_fhir_r4_notifications",
    "uri" : "https://fhir.twiin.nl/ig/notifications/ImplementationGuide/nl.twiin.fhir.r4.notifications",
    "packageId" : "nl.twiin.fhir.r4.notifications",
    "version" : "0.2.0-draft"
  },
  {
    "id" : "hl7_fhir_uv_subscriptions_backport_r4",
    "uri" : "http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport",
    "packageId" : "hl7.fhir.uv.subscriptions-backport.r4",
    "version" : "1.1.0"
  },
  {
    "id" : "hl7_fhir_uv_extensions_r4",
    "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
    "packageId" : "hl7.fhir.uv.extensions.r4",
    "version" : "5.3.0"
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
        "valueCode" : "pin-canonicals"
      },
      {
        "url" : "value",
        "valueString" : "pin-multiples"
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
      "description" : "A Fulfiller asks the Placer to withdraw the Request (TA section Cancellation by the Fulfiller). requester identifies the Fulfiller and owner the Placer, each by its URA. reasonCode carries the reason of the Fulfiller.",
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
      "description" : "A bidding task in the Multiple Fulfillers Pattern before selection: code request-fulfillment, for empty (TA sections Multiple Fulfillers Pattern; Patient context and readability). Task.input also carries a non-identifying entry with its content inline, as allowed before selection (TA sections Sharing additional content; Patient context and readability).",
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
        "valueUri" : "Task-f8f11d4a-2339-4ef3-9414-b2743d3a5102.html"
      }],
      "reference" : {
        "reference" : "Task/f8f11d4a-2339-4ef3-9414-b2743d3a5102"
      },
      "name" : "Coordination Task: reselection step 1, A accepted",
      "description" : "Step 1. The Coordination Task of candidate A after A accepted: code request-fulfillment, for empty, only the type of work in input (TA sections Multiple Fulfillers Pattern; Patient context and readability).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-e74fa5b7-7904-40f5-ba19-d1aed93134ba.html"
      }],
      "reference" : {
        "reference" : "Task/e74fa5b7-7904-40f5-ba19-d1aed93134ba"
      },
      "name" : "Coordination Task: reselection step 1, B accepted",
      "description" : "Step 1. The Coordination Task of candidate B after B accepted: code request-fulfillment, for empty, only the type of work in input (TA sections Multiple Fulfillers Pattern; Patient context and readability).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-18d1bd56-33f6-43e0-a3fa-8871a100df12.html"
      }],
      "reference" : {
        "reference" : "Task/18d1bd56-33f6-43e0-a3fa-8871a100df12"
      },
      "name" : "Coordination Task: reselection step 2, A selected",
      "description" : "Step 2. The Coordination Task of A when the Placer selects A: businessStatus selected, code fulfill and for set in the same update (TA sections Multiple Fulfillers Pattern; Patient context and readability). The Request has performer set to A.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-f0299832-a6c0-4517-a8af-0727fab92ee6.html"
      }],
      "reference" : {
        "reference" : "Task/f0299832-a6c0-4517-a8af-0727fab92ee6"
      },
      "name" : "Coordination Task: reselection step 2, B not selected",
      "description" : "Step 2. The Coordination Task of B when A is selected: status cancelled with statusReason not-selected (TA section Reason for cancelling a non-selected candidate).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-4ae98e56-816c-4068-bdce-890a8a24b52f.html"
      }],
      "reference" : {
        "reference" : "Task/4ae98e56-816c-4068-bdce-890a8a24b52f"
      },
      "name" : "Coordination Task: reselection step 3, A cancelled",
      "description" : "Step 3. The Placer cancels the Coordination Task of the selected A before in-progress, while the Request continues (TA section Cancellation (Before in-progress)). statusReason.text gives the reason; the code not-selected is not used, because no other candidate has been selected. The Request has performer unset again.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-a5c02498-4399-4c8d-aa17-b17023396852.html"
      }],
      "reference" : {
        "reference" : "Task/a5c02498-4399-4c8d-aa17-b17023396852"
      },
      "name" : "Coordination Task: reselection step 4, B invited again",
      "description" : "Step 4. A new Coordination Task for B on the same Request, after the earlier Task of B ended (TA sections Multiple Fulfillers Pattern; Handling the End of a Coordination Task). code request-fulfillment, for empty.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-d4f3456d-86b6-4429-b606-bf52a94ca749.html"
      }],
      "reference" : {
        "reference" : "Task/d4f3456d-86b6-4429-b606-bf52a94ca749"
      },
      "name" : "Coordination Task: reselection step 4, C invited",
      "description" : "Step 4. A Coordination Task for the new candidate C on the same Request (TA sections Multiple Fulfillers Pattern; Patient context and readability). code request-fulfillment, for empty.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-5dede07b-28ae-4497-bd35-817f5bee9690.html"
      }],
      "reference" : {
        "reference" : "Task/5dede07b-28ae-4497-bd35-817f5bee9690"
      },
      "name" : "Coordination Task: reselection step 5, B not selected",
      "description" : "Step 5. The new Coordination Task of B when C is selected: status cancelled with statusReason not-selected (TA section Reason for cancelling a non-selected candidate).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-47ca5941-e107-4c70-bae9-bce09b69311d.html"
      }],
      "reference" : {
        "reference" : "Task/47ca5941-e107-4c70-bae9-bce09b69311d"
      },
      "name" : "Coordination Task: reselection step 5, C selected",
      "description" : "Step 5. The Coordination Task of C when the Placer selects C, after C accepted (TA section Multiple Fulfillers Pattern: the Placer selects only a candidate whose Task has status accepted). businessStatus selected, code fulfill and for set in the same update.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-7dc145b2-78c9-45db-ab56-267c664be4c3.html"
      }],
      "reference" : {
        "reference" : "Task/7dc145b2-78c9-45db-ab56-267c664be4c3"
      },
      "name" : "Coordination Task: sharing step 1, content shared before selection",
      "description" : "Step 1. The Placer invites the candidate and adds an entry to input with its content inline, without a reference, since before selection a candidate may read the Request but not the Patient or other resources at the Placer. The entry does not identify the patient (TA sections Sharing additional content; Patient context and readability). The type Dressing type is fictitious: the use case defines the type and states why the content is not identifying.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-c8ca1ec3-dd83-4900-9bfa-a05d6e93782c.html"
      }],
      "reference" : {
        "reference" : "Task/c8ca1ec3-dd83-4900-9bfa-a05d6e93782c"
      },
      "name" : "Coordination Task: sharing step 2, candidate awaits information",
      "description" : "Step 2. The candidate accepted, sets businessStatus awaiting-information and states in statusReason.text what it needs (TA section Business status).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-b5e65e9b-434f-445c-924d-ff772c25ae4d.html"
      }],
      "reference" : {
        "reference" : "Task/b5e65e9b-434f-445c-924d-ff772c25ae4d"
      },
      "name" : "Coordination Task: sharing step 3, Placer answers in input",
      "description" : "Step 3. The Placer provides the information by adding an entry to input, again with its content inline (TA sections Business status; Sharing additional content). The Fulfiller then sets another value or removes businessStatus.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-e1e3f55f-c56e-4501-b409-ed05bb70cc87.html"
      }],
      "reference" : {
        "reference" : "Task/e1e3f55f-c56e-4501-b409-ed05bb70cc87"
      },
      "name" : "Coordination Task: sharing step 4, candidate has the information",
      "description" : "Step 4. The candidate removes businessStatus and statusReason (TA section Business status).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-66507516-150c-415f-9e88-7c1f24eef69c.html"
      }],
      "reference" : {
        "reference" : "Task/66507516-150c-415f-9e88-7c1f24eef69c"
      },
      "name" : "Coordination Task: sharing step 5, available resource after selection",
      "description" : "Step 5. The Placer selects the candidate: businessStatus selected, code fulfill and for set in the same update, together with an entry with type available-resource that refers to a resource at the Placer (TA sections Sharing additional content; Patient context and readability).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-948d41c4-820f-49ed-bbb7-c15e6d7fc699.html"
      }],
      "reference" : {
        "reference" : "Task/948d41c4-820f-49ed-bbb7-c15e6d7fc699"
      },
      "name" : "Coordination Task: single Fulfiller, awaiting information",
      "description" : "The Fulfiller awaits information from the Placer (TA section Business status).",
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
      "description" : "Single Fulfiller Pattern: code fulfill and for set from creation; the Fulfiller has started the work. Task.input also carries an available-resource and an available-query entry (TA sections Single Fulfiller Pattern; Sharing additional content).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-8d97c695-4ece-45fb-96e0-a216398978fa.html"
      }],
      "reference" : {
        "reference" : "Observation/8d97c695-4ece-45fb-96e0-a216398978fa"
      },
      "name" : "Observation: updated wound assessment",
      "description" : "A resource at the Placer to which the Coordination Task refers after selection, in an entry with type available-resource (TA section Sharing additional content). The content is fictitious.",
      "exampleBoolean" : true
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
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-5fe23d95-5f8d-4f9d-9315-7d7979153e2a.html"
      }],
      "reference" : {
        "reference" : "Task/5fe23d95-5f8d-4f9d-9315-7d7979153e2a"
      },
      "name" : "Scenario 1, step 1: created",
      "description" : "The Placer creates the Coordination Task with code fulfill and for set, and with the entries it makes available, since in the Single Fulfiller Pattern there is no selection.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-f99620ae-3d81-4e74-915e-c9dc12771355.html"
      }],
      "reference" : {
        "reference" : "Task/f99620ae-3d81-4e74-915e-c9dc12771355"
      },
      "name" : "Scenario 1, step 2: accepted",
      "description" : "The Fulfiller accepts the Coordination Task.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-fcf2352b-4027-45ea-8cd3-002dbebc3d7a.html"
      }],
      "reference" : {
        "reference" : "Task/fcf2352b-4027-45ea-8cd3-002dbebc3d7a"
      },
      "name" : "Scenario 1, step 3: in progress",
      "description" : "The Fulfiller starts the work: status in-progress and executionPeriod.start.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-7b4e4d93-be6d-4511-a2b0-0d141fa362e6.html"
      }],
      "reference" : {
        "reference" : "Task/7b4e4d93-be6d-4511-a2b0-0d141fa362e6"
      },
      "name" : "Scenario 1, step 4: completed",
      "description" : "The Fulfiller completes the work: status completed and executionPeriod.end set when the status moves from in-progress.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-c682d130-33be-4bd5-a2b5-6677aead5ad9.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/c682d130-33be-4bd5-a2b5-6677aead5ad9"
      },
      "name" : "Scenario 1: Request, single Fulfiller",
      "description" : "The Request of scenario 1. The Single Fulfiller Pattern applies: performer refers to the HealthcareService of A. priority is populated, as the Placer SHOULD do.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-12e3afcc-3979-476c-bc59-8e8e4e40afb9.html"
      }],
      "reference" : {
        "reference" : "Task/12e3afcc-3979-476c-bc59-8e8e4e40afb9"
      },
      "name" : "Scenario 2, step 1: A accepted with a bid",
      "description" : "Candidate A accepts its Coordination Task (code request-fulfillment, for empty) and records a bid in output.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-66bb48ed-2053-4fa4-ae26-4aba6ad37e5d.html"
      }],
      "reference" : {
        "reference" : "Task/66bb48ed-2053-4fa4-ae26-4aba6ad37e5d"
      },
      "name" : "Scenario 2, step 1: B accepted with a bid",
      "description" : "Candidate B accepts its Coordination Task (code request-fulfillment, for empty) and records a bid in output.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-5932fe26-950a-481f-8fc3-fa792e1d318f.html"
      }],
      "reference" : {
        "reference" : "Task/5932fe26-950a-481f-8fc3-fa792e1d318f"
      },
      "name" : "Scenario 2, step 2: A selected",
      "description" : "The Placer selects A: businessStatus selected, code fulfill and for set in one update, together with the entries with type available-resource and available-query that it makes available.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-4e1168c4-0d2d-434f-a44e-bd117d0780d2.html"
      }],
      "reference" : {
        "reference" : "Task/4e1168c4-0d2d-434f-a44e-bd117d0780d2"
      },
      "name" : "Scenario 2, step 2: B not selected",
      "description" : "In the same step the Placer cancels the Coordination Task of B with statusReason not-selected.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-7e83a049-2267-4ca0-9d35-07216dfec2b6.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/7e83a049-2267-4ca0-9d35-07216dfec2b6"
      },
      "name" : "Scenario 2: Request, multiple Fulfillers",
      "description" : "The Request of scenario 2. performer is unset: the Multiple Fulfillers Pattern applies. Candidates may read the Request from the creation of their Coordination Task; the Request contains no data that directly identifies the patient beyond the reference in subject.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-46ebdfdd-408a-4340-915d-980a14c75f36.html"
      }],
      "reference" : {
        "reference" : "Task/46ebdfdd-408a-4340-915d-980a14c75f36"
      },
      "name" : "Scenario 4, step 1: accepted",
      "description" : "The Fulfiller has accepted; the work has not started.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-cd47fb57-917b-4cd4-86d7-38ccb3bbeef9.html"
      }],
      "reference" : {
        "reference" : "Task/cd47fb57-917b-4cd4-86d7-38ccb3bbeef9"
      },
      "name" : "Scenario 4, step 2: cancelled by the Placer",
      "description" : "Before in-progress the Placer cancels the Coordination Task itself, with its reason in statusReason.text.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-57129653-f261-4841-9e42-e5b40b57f6fb.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/57129653-f261-4841-9e42-e5b40b57f6fb"
      },
      "name" : "Scenario 4: Request",
      "description" : "The Request of scenario 4, Single Fulfiller Pattern.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-f3bdd83f-0914-4232-94e9-28a01b1d36af.html"
      }],
      "reference" : {
        "reference" : "Task/f3bdd83f-0914-4232-94e9-28a01b1d36af"
      },
      "name" : "Scenario 5, step 1: in progress",
      "description" : "The Fulfiller has started the work.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-e7e34041-dbd1-4413-be25-e08e2f85a7e4.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/e7e34041-dbd1-4413-be25-e08e2f85a7e4"
      },
      "name" : "Scenario 5, step 1: Request active",
      "description" : "The Request of scenario 5 while the work is in progress.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-c2b03781-d9f7-40e2-ba3d-d68d47f055b5.html"
      }],
      "reference" : {
        "reference" : "Task/c2b03781-d9f7-40e2-ba3d-d68d47f055b5"
      },
      "name" : "Scenario 5, step 2: Cancellation Request Task requested",
      "description" : "The Placer asks the Fulfiller to stop the work, with its reason in reasonCode.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-444cd124-7855-43ab-85b6-87bede5a8c49.html"
      }],
      "reference" : {
        "reference" : "Task/444cd124-7855-43ab-85b6-87bede5a8c49"
      },
      "name" : "Scenario 5, step 3: Cancellation Request Task accepted",
      "description" : "The Fulfiller accepts the Cancellation Request Task.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-cancellation-request-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-66689cbb-33d1-4159-8ce2-d5fa970577a9.html"
      }],
      "reference" : {
        "reference" : "Task/66689cbb-33d1-4159-8ce2-d5fa970577a9"
      },
      "name" : "Scenario 5, step 3: cancelled after the Cancellation Request",
      "description" : "After accepting the Cancellation Request Task the Fulfiller sets the Coordination Task to cancelled (not failed) and sets executionPeriod.end.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-462d6275-922e-434a-a379-96fd4a29548b.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/462d6275-922e-434a-a379-96fd4a29548b"
      },
      "name" : "Scenario 5, step 4: Request revoked",
      "description" : "The Placer revokes the Request. Same identifier as step 1: one resource in successive states.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-5e2888cb-fd37-4328-bfa7-45a9e1a047ff.html"
      }],
      "reference" : {
        "reference" : "Task/5e2888cb-fd37-4328-bfa7-45a9e1a047ff"
      },
      "name" : "Scenario 6, step 1: Authorization Cancellation Request requested",
      "description" : "The Fulfiller asks the Placer to withdraw the Request: intent proposal, code abort, focus the Request, reason in reasonCode.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-fb3a4ac7-3f98-45cf-acd6-95b18e688d6b.html"
      }],
      "reference" : {
        "reference" : "Task/fb3a4ac7-3f98-45cf-acd6-95b18e688d6b"
      },
      "name" : "Scenario 6, step 2: Authorization Cancellation Request accepted",
      "description" : "The Placer accepts the request to withdraw the Request.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-683af045-b470-4595-b80d-cd40c92da2f7.html"
      }],
      "reference" : {
        "reference" : "Task/683af045-b470-4595-b80d-cd40c92da2f7"
      },
      "name" : "Scenario 7, step 1: Fulfiller requests information",
      "description" : "The Fulfiller sets businessStatus awaiting-information with statusReason.text, and adds an entry with type information-request to input.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-71af91f0-f5ec-42cf-9b48-75b74d0036a0.html"
      }],
      "reference" : {
        "reference" : "Task/71af91f0-f5ec-42cf-9b48-75b74d0036a0"
      },
      "name" : "Scenario 7, step 2: Placer answers",
      "description" : "The Placer answers with a further entry in input, with type available-resource, that refers to the wound assessment.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-b8d24f6e-1c37-4a59-9f02-6e1a7c4b8d35.html"
      }],
      "reference" : {
        "reference" : "Task/b8d24f6e-1c37-4a59-9f02-6e1a7c4b8d35"
      },
      "name" : "Scenario 7, step 3: Fulfiller has the information",
      "description" : "The Fulfiller removes businessStatus, statusReason and its information-request entry.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-coordination-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-d5f9a2c1-3e68-4b7d-a4f0-2c9e8b1d6f43.html"
      }],
      "reference" : {
        "reference" : "Observation/d5f9a2c1-3e68-4b7d-a4f0-2c9e8b1d6f43"
      },
      "name" : "Scenario 7: wound assessment",
      "description" : "The resource at the Placer with which the Placer answers the information request. The content is fictitious.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-a529d458-5bec-4d91-8ed8-f4fd5bb93720.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/a529d458-5bec-4d91-8ed8-f4fd5bb93720"
      },
      "name" : "ServiceRequest: no definition",
      "description" : "A Request that follows no predefined definition and has no standard dataset; it is routed on ServiceRequest.code alone (TA sections Request; Routing by the Fulfiller).",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-c6df56d1-5fc1-4abb-bc72-fb260f800832.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/c6df56d1-5fc1-4abb-bc72-fb260f800832"
      },
      "name" : "ServiceRequest: reselection step 2, performer set to A",
      "description" : "The Request of the reselection scenario at step 2, after A was selected: performer refers to the HealthcareService of A (TA section Multiple Fulfillers Pattern). At step 3 the Placer clears performer again; that state is the Request with performer unset. Same identifier as the other variants.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-5f9a3627-3c42-4f64-9ed4-b6526ea57f65.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/5f9a3627-3c42-4f64-9ed4-b6526ea57f65"
      },
      "name" : "ServiceRequest: reselection step 5, performer set to C",
      "description" : "The Request of the reselection scenario at step 5, after C was selected: performer refers to the HealthcareService of C (TA section Multiple Fulfillers Pattern). Same identifier as the other two variants: they are one resource in successive states.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-862e9389-15a3-4681-aa0c-1ebcd5bc17d0.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/862e9389-15a3-4681-aa0c-1ebcd5bc17d0"
      },
      "name" : "ServiceRequest: reselection, performer unset",
      "description" : "The Request of the reselection scenario while solicitation is open: performer unset (TA section Multiple Fulfillers Pattern). This is its state at steps 1, 3 and 4, and the state to which the Coordination Tasks of the scenario refer. Same identifier as the other two variants: they are one resource in successive states.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-3e358483-ec50-469b-94d0-54b6bc5ea7d8.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/3e358483-ec50-469b-94d0-54b6bc5ea7d8"
      },
      "name" : "ServiceRequest: sharing additional content",
      "description" : "The Request of the scenario sharing additional content. performer is unset: the Multiple Fulfillers Pattern applies.",
      "exampleCanonical" : "https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-workflow-servicerequest"
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
        "valueString" : "Subscription"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Subscription-e0a7c3b9-5d14-4f82-b6e9-8a2d4c7f1b06.html"
      }],
      "reference" : {
        "reference" : "Subscription/e0a7c3b9-5d14-4f82-b6e9-8a2d4c7f1b06"
      },
      "name" : "Subscription for an organization",
      "description" : "Subscription for all HealthcareServices of Fulfiller A, also those registered later: filter owner-assigner with the URA of the organization; channel.endpoint begins with the address of an Endpoint in Organization.endpoint. The topic URL is an example.",
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
      "description" : "Codes for Task.businessStatus of the Coordination Task under TA Workflow (TA sections Business status; Codes of this TA). Extensible: a use case MAY define further codes. selected is reserved for the Placer.",
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
        "valueString" : "SearchParameter"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "SearchParameter-owner-assigner.html"
      }],
      "reference" : {
        "reference" : "SearchParameter/owner-assigner"
      },
      "name" : "Task owner-assigner",
      "description" : "The URA of the organization that assigned the identifier of the HealthcareService in Task.owner, which is the organization that provides that HealthcareService. Used to filter one Subscription for all HealthcareServices of an organization, and to search for the Tasks of that organization.",
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
      "description" : "Authorization Cancellation Request Task under TA Workflow, used by a Fulfiller to ask the Placer to withdraw the Request itself (TA sections Summary of the profiles → Authorization Cancellation Request Task; Cancellation by the Fulfiller). COW IG defines no profile for this Task. requester and owner identify the Fulfiller and the Placer as organizations, by their URA.",
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
      "description" : "Cancellation Request Task under TA Workflow, used by the Placer to ask the Fulfiller to stop work that has started (TA sections Summary of the profiles → Cancellation Request Task; Cancellation Request Task; Type of work on the Task).",
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
      "description" : "Coordination Task under TA Workflow (TA sections Summary of the profiles → Coordination Task; Coordination Task; Status of the Coordination Task; Patient context and readability; Type of work on the Task; Sharing additional content; Search parameters; Codes of this TA).",
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
      "description" : "The Request under TA Workflow (TA sections Summary of the profiles → ServiceRequest; Request; Patient context and readability). subject refers to a Patient and is not masked; code states the requested service; instantiatesCanonical MAY refer to the ActivityDefinition or PlanDefinition of the requested service.",
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
      "description" : "Subscription under TA Workflow, on top of the Twiin Subscription of TA Notifications (TA sections Summary of the profiles → Subscription; Subscription). The payload mode is id-only, the filter is `owner:identifier=[system]|[value]` (one HealthcareService) or `owner-assigner=[system]|[value]` (all HealthcareServices of one organization, by its URA), and a heartbeat period is required.",
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
          "valueUrl" : "example-scenarios.html"
        }],
        "nameUrl" : "example-scenarios.html",
        "title" : "Example scenarios",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "example-reselection.html"
        }],
        "nameUrl" : "example-reselection.html",
        "title" : "Example: reselection",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "example-sharing.html"
        }],
        "nameUrl" : "example-sharing.html",
        "title" : "Example: sharing additional content",
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
          "valueUrl" : "changes.html"
        }],
        "nameUrl" : "changes.html",
        "title" : "Changes",
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
