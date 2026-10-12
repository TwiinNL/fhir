# twiinnl.github.io

## Deploy

De site wordt via GitHub Actions gedeployed (`.github/workflows/pages.yml`), niet vanuit de branch. De gepubliceerde site bevat alleen `index.html` en de map `ig/`.

De map `ig/` wordt bijgewerkt door de publicatieprocedure van de HL7 IG Publisher, nooit met de hand. Uitzondering: `ig/index.html` en `ig/index.js` (overzichtspagina op https://fhir.twiin.nl/ig/) zijn de enige bestanden onder `ig/` die niet door die procedure worden gemaakt. Ze worden met de hand onderhouden. De pagina leest `ig/package-feed.xml` en `<ig>/package-list.json`, dus na een publicatie hoeft er niets aan te worden aangepast. `-go-publish` raakt deze twee bestanden niet aan: het schrijft alleen in `ig/<naam>/` en in de feeds.
