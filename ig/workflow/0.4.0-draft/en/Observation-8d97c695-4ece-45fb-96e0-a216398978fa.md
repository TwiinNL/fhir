# Observation: updated wound assessment - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Observation: updated wound assessment**

## Example Observation: Observation: updated wound assessment

**status**: Final

**code**: Wound assessment

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**effective**: 2026-10-22 10:00:00+0200

**performer**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**value**: Wound on the lower leg is clean and dry; no signs of infection.



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "8d97c695-4ece-45fb-96e0-a216398978fa",
  "status" : "final",
  "code" : {
    "text" : "Wound assessment"
  },
  "subject" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "effectiveDateTime" : "2026-10-22T10:00:00+02:00",
  "performer" : [{
    "type" : "Organization",
    "identifier" : {
      "system" : "http://fhir.nl/fhir/NamingSystem/ura",
      "value" : "12345678"
    }
  }],
  "valueString" : "Wound on the lower leg is clean and dry; no signs of infection."
}

```
