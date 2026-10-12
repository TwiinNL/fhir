# twiinnl.github.io

## Deploy

De site wordt via GitHub Actions gedeployed (`.github/workflows/pages.yml`), niet vanuit de branch. De gepubliceerde site bevat alleen `index.html` en de map `ig/`.

De map `ig/` wordt bijgewerkt door de publicatieprocedure van de HL7 IG Publisher, nooit met de hand. Uitzondering: `ig/index.html`, `ig/index.js` (overzichtspagina op https://fhir.twiin.nl/ig/) en de map `ig/_twiin/` (gedeelde opmaak, zie onder) zijn de enige onderdelen van `ig/` die niet door die procedure worden gemaakt. Ze worden met de hand onderhouden. De pagina leest `ig/package-feed.xml` en `<ig>/package-list.json`, dus na een publicatie hoeft er niets aan te worden aangepast. `-go-publish` raakt deze twee bestanden niet aan: het schrijft alleen in `ig/<naam>/` en in de feeds.

## Opmaak van onze eigen pagina's

`ig/index.html` en de history-pagina's (uit `publish/`) delen één stijl: `ig/_twiin/`. Daar staan `site.css`, het logo (`twiin-logo.svg`), de favicon (`favicon.png`, vierkant gemaakt van Twiin_favicon.png) en `fonts/` (Albert Sans, gewichten 400 en 700, woff2, met `OFL.txt`).

Waarom hier: de Pages-workflow publiceert alleen `index.html` en `ig/`, en de pagina's staan op verschillende diepte (`/ig/` en `/ig/<naam>/`). Een map onder `ig/` met een naam die geen IG-naam kan zijn (`_twiin`) wordt gedeployed, wordt niet door `-go-publish` aangeraakt en is met een absoluut pad (`/ig/_twiin/...`) vanaf elke eigen pagina te bereiken. Gepubliceerde IG-output gebruikt deze map niet.

- Opbouw (header, navbar met streep, breadcrumb, content, footer) en lettergroottes volgen de IG-pagina's (fhir2.base.template, CC0); kleuren en lettertype volgen de Twiin-huisstijl.
- Logo: kleurenversie met het pad dat `#8E8A12` was gezet op `#3E4D5C` (de letterkleur in dezelfde SVG); verder ongewijzigd. Het logo is van Twiin en valt niet onder CC BY-SA 4.0 (vermeld in de footer).
- Albert Sans: SIL Open Font License 1.1, Copyright 2023 The Albert Sans Project Authors (https://github.com/usted/Albert-Sans, `OFL.txt`); zelf hosten en subsetten is toegestaan zolang de licentietekst meegaat. De woff2-bestanden komen uit het npm-pakket `@fontsource/albert-sans` 5.2.5 (latin-subset). Alleen de gebruikte gewichten staan in de repo. Pagina's laden niets van externe hosts.
- De header-, navbar- en footer-HTML staat zowel in `publish/web-templates/` als (met de hand) in `index.html` (rootpagina) en `ig/index.html`; wijzig je het ene, wijzig dan ook de andere. De footer van die twee handgemaakte pagina's heeft "© Twiin" zonder pakket-id.

### History-pagina's opnieuw genereren zonder publicatie

De pagina's `ig/<naam>/history.html` (en `index.html`) worden door `HistoryPageUpdater` uit de IG Publisher gemaakt. Die heeft een eigen `main`, los van `-go-publish`. Vanaf de repo-root, met `publisher.jar` 3.0.0:

```sh
rm ig/*/index.html   # alleen nodig om ook index.html te vernieuwen; zie hieronder
java -cp publisher.jar org.hl7.fhir.igtools.web.HistoryPageUpdater \
  $PWD/publish/history-template $PWD $PWD/publish/web-templates
```

Het schrijft `history.html` in elke map met `history.html` en `package-list.json`, en kopieert de bestanden uit `manifest.ini`. `index.html` wordt alleen opnieuw gemaakt als het bestand ontbreekt of de marker `XXXX` bevat; daarom het `rm`. De bestaande pagina's in `ig/notifications/` en `ig/workflow/` zijn met de oude template gemaakt en blijven zo tot deze opdracht is uitgevoerd of tot de volgende publicatie (die doet hetzelfde). De oude pagina's blijven werken: ze gebruiken hun eigen `history.css`.
