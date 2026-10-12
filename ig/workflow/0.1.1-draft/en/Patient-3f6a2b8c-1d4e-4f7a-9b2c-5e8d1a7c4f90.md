# Patient - Twiin Workflow v0.1.1-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Patient**

## Example Patient: Patient

Anna Jansen (no stated gender), DoB Unknown ( http://fhir.nl/fhir/NamingSystem/bsn#999999151)

-------



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "3f6a2b8c-1d4e-4f7a-9b2c-5e8d1a7c4f90",
  "identifier" : [{
    "system" : "http://fhir.nl/fhir/NamingSystem/bsn",
    "value" : "999999151"
  }],
  "name" : [{
    "family" : "Jansen",
    "given" : ["Anna"]
  }]
}

```
