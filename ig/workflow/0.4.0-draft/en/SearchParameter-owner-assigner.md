# Task owner-assigner - Twiin Workflow v0.4.0-draft

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Task owner-assigner**

## SearchParameter: Task owner-assigner 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.twiin.nl/ig/workflow/SearchParameter/owner-assigner | *Version*:0.4.0-draft |
| Draft as of 2026-11-05 | *Computable Name*:OwnerAssigner |
| **Copyright/Legal**: Copyright 2026 Twiin. Licensed under CC BY-SA 4.0. | |

 
The URA of the organization that assigned the identifier of the HealthcareService in Task.owner, which is the organization that provides that HealthcareService. Used to filter one Subscription for all HealthcareServices of an organization, and to search for the Tasks of that organization. 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "owner-assigner",
  "url" : "https://fhir.twiin.nl/ig/workflow/SearchParameter/owner-assigner",
  "version" : "0.4.0-draft",
  "name" : "OwnerAssigner",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-11-05T10:55:26+00:00",
  "publisher" : "Twiin",
  "description" : "The URA of the organization that assigned the identifier of the HealthcareService in Task.owner, which is the organization that provides that HealthcareService. Used to filter one Subscription for all HealthcareServices of an organization, and to search for the Tasks of that organization.",
  "code" : "owner-assigner",
  "base" : ["Task"],
  "type" : "token",
  "expression" : "Task.owner.identifier.assigner.identifier"
}

```
