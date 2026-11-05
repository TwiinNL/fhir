# Scenario 6, step 2: Authorization Cancellation Request accepted - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Scenario 6, step 2: Authorization Cancellation Request accepted**

## Example Task: Scenario 6, step 2: Authorization Cancellation Request accepted

Profile: [Twiin Authorization Cancellation Request Task](StructureDefinition-twiin-authorization-cancellation-request-task.md)

**status**: Accepted

**intent**: proposal

**code**: Mark the focal resource as no longer active

**focus**: [ServiceRequest Transfer of care](ServiceRequest-c682d130-33be-4bd5-a2b5-6677aead5ad9.md)

**authoredOn**: 2026-11-03 12:00:00+0100

**lastModified**: 2026-11-03 13:00:00+0100

**requester**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/87654321

**owner**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**reasonCode**: The wound requires specialist care that we cannot provide.



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "fb3a4ac7-3f98-45cf-acd6-95b18e688d6b",
  "meta" : {
    "profile" : ["https://fhir.twiin.nl/ig/workflow/StructureDefinition/twiin-authorization-cancellation-request-task"]
  },
  "status" : "accepted",
  "intent" : "proposal",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "abort"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/c682d130-33be-4bd5-a2b5-6677aead5ad9"
  },
  "authoredOn" : "2026-11-03T12:00:00+01:00",
  "lastModified" : "2026-11-03T13:00:00+01:00",
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
  },
  "reasonCode" : {
    "text" : "The wound requires specialist care that we cannot provide."
  }
}

```
