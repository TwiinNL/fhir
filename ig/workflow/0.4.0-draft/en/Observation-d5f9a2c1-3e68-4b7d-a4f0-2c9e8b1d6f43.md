# Scenario 7: wound assessment - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Scenario 7: wound assessment**

## Example Observation: Scenario 7: wound assessment

**status**: Final

**code**: Wound assessment

**subject**: [Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)](Patient-3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90.md)

**effective**: 2026-10-08 15:00:00+0200

**performer**: Identifier: `http://fhir.nl/fhir/NamingSystem/ura`/12345678

**value**: Wound on the lower leg, 3 cm, clean; no signs of infection.



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "d5f9a2c1-3e68-4b7d-a4f0-2c9e8b1d6f43",
  "status" : "final",
  "code" : {
    "text" : "Wound assessment"
  },
  "subject" : {
    "reference" : "Patient/3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90"
  },
  "effectiveDateTime" : "2026-10-08T15:00:00+02:00",
  "performer" : [{
    "type" : "Organization",
    "identifier" : {
      "system" : "http://fhir.nl/fhir/NamingSystem/ura",
      "value" : "12345678"
    }
  }],
  "valueString" : "Wound on the lower leg, 3 cm, clean; no signs of infection."
}

```
