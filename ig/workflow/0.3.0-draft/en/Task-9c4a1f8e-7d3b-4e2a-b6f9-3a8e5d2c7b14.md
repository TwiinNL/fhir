# Authorization Cancellation Request Task - Twiin Workflow v0.3.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Authorization Cancellation Request Task**

## Example Task: Authorization Cancellation Request Task

Profile: [Twiin Authorization Cancellation Request Task](StructureDefinition-twiin-authorization-cancellation-request-task.md)

**status**: Requested

**statusReason**: Contraindication found for the requested service

**intent**: proposal

**code**: Mark the focal resource as no longer active

**focus**: [ServiceRequest Transfer of care](ServiceRequest-0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75.md)

**authoredOn**: 2026-10-12 14:00:00+0200

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/87654321

**owner**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "9c4a1f8e-7d3b-4e2a-b6f9-3a8e5d2c7b14",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"]
  },
  "status" : "requested",
  "statusReason" : {
    "text" : "Contraindication found for the requested service"
  },
  "intent" : "proposal",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "abort"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/0b7c5d0e-6f3a-4c2b-9e1d-8a4f2c6b3d75"
  },
  "authoredOn" : "2026-10-12T14:00:00+02:00",
  "requester" : {
    "identifier" : {
      "system" : "http://fhir.nl/fhir/NamingSystem/ura",
      "value" : "87654321"
    }
  },
  "owner" : {
    "identifier" : {
      "system" : "http://fhir.nl/fhir/NamingSystem/ura",
      "value" : "12345678"
    }
  }
}

```
