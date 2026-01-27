# 4.4 | Logische architectuur

De logische architectuur beschrijft beknopt welke onderdelen nodig zijn om het resultaat te bereiken dat in de conceptuele architectuur is beschreven. De uitwerking van specificaties en eisen voor de logische architectuur is te vinden in hoofdstuk 
[10 | Technische kern](/docs/technische_kern/frontpage.md)
  (voor de generieke aspecten) en in 
[Twiin Implementatiewijzer Zorgtoepassingen]() (aanvullende specifieke aspecten per zorgtoepassing).

In de visie en conceptuele architectuur is een belangrijk aantal eisen, uitgangspunten en principes geformuleerd (zoals bijvoorbeeld vertrouwen, implementeerbaarheid, standaardisatie en hergebruik). Om hier invulling aan te geven in de uiteindelijke oplossing heeft Twiin voor een aantal logische elementen gekozen:

- Knooppunten
- Communicatiepatronen
- Vertrouwensmodel
- Generieke functies
- Rollen

## Knooppunten
Door knooppunten (koppelvlakken) te kiezen waarlangs communicatie loopt bestaan er duidelijke elementen in de architectuur die aan bepaalde afspraken voldoen. Knooppunten geven op deze manier invulling aan het verminderen van complexiteit, het gebruik van generieke componenten en standaardisatie. Door landelijk te werken met knooppunten die aan alle vereisten voldoen kan uiteindelijk een landelijk dekkend netwerk worden gevormd.

> [!NOTE]
> De begrippen knooppunt en gemeenschappelijke voorzieningen zijn geïnspireerd op de [visie op zorginfrastructuren (Mallie e.a. 2019)](https://infoizo.nl/ibieb/presentatie-platform-izo-080319-visie-op-landelijke-samenhang-van-zorginfrastructuren-martijn-mallie-arteria-consulting#:~:text=een%20belangrijke%20voorziening.-,%E2%80%9C,de%20inhoud%20van%20de%20gegevensuitwisseling.%E2%80%9D&text=Afsprakenstelsel%20MedMij%2C%20AORTA%20en%20XDS,informatie%2D%20standaard%20toe%20te%20sturen.&text=Netwerk%2D%20en%20ketenzorg%20worden%20gemeengoed.&text=De%20knooppunten%20en%20gemeenschappelijke%20diensten,(zorgaanbieders%2C%20pati%C3%ABnten%20etc.)), maar ook op oplossingen in het buitenland, zoals [Carequality (2019)](https://carequality.org/) en [TEFCA (2019)](https://www.healthit.gov/topic/interoperability/policy/trusted-exchange-framework-and-common-agreement-tefca) in de USA of [ELGA (2017)](https://www.elga.gv.at/en/about/) in Oostenrijk. Door knooppunten en gemeenschappelijke voorzieningen te implementeren, worden bestaande netwerken, voorzieningen en infrastructuren verbonden en hergebruikt.

Uitwisseling van data gebeurt volgens het Twiin Afsprakenstelsel tussen Gevalideerde Twiin Knooppunten (GtK). Een GtK is een door Twiin gevalideerd koppelvlak dat zorgt voor beschikbaarheid en uitwisseling van gegevens voor één of meer zorgtoepassingen voor één of meerdere zorgaanbieders.  

![Volledige Twiin Architectuur](/docs/architectuur/assets/gtk_architectuur.png)
Bovenstaande figuur laat zien dat Twiin zich richt op zorgtoepassingen voor de landelijke beschikbaarheid van gezondheidsgegevens. Bestaande regionale, landelijke, categorale zorgnetwerken worden met elkaar in verbinding gebracht via knooppunten door afspraken en gemeenschappelijke voorzieningen. Bij elke uitwisseling, of het beschikbaar stellen van gegevens, zijn controlemechanismen ingebouwd die aansluiten bij wet- en regelgeving. 

## Communicatiepatronen
Er zijn verschillende communicatiepatronen. In onderdeel 
[10.1 | Kern Volume 0a - Communicatiepatroon Overview](technische_kern/communicatiepatroon.md)
 worden de vier communicatiepatronen die van belang zijn voor Twiin verder uitgewerkt:

| Communicatiepatroon | Naam van de technische afspraak | Type gegevensuitwisseling | Initiatiefnemer |
| ------------------ | -------------------------------- | ------------------------ | --------------- |
| Gericht verzenden | Push | Verzenden | Verzender |
| Gericht beschikbaar stellen | Notified Pull | Verzenden | Verzender |
| Gericht bevragen | Pull | Raadpleegbaar maken / raadplegen | Ontvanger |
| Ongericht bevragen | Indexed Pull | Raadpleegbaar maken / raadplegen | Ontvanger |

> [!NOTE]
> Genoemde communicatiepatronen sluiten aan bij de communicatiepatronen die beschreven zijn in de whitepaper Communicatiepatronen: de ontwikkeling naar generieke afspraken versie 1.1 van VWS.

De communicatiepatronen vallen uiteen in twee typen gegevensuitwisselingen. Functioneel wordt dit onderscheid bepaald door de initiator van de communicatie. Het gaat hierbij om verzenden en raadplegen. Als de initiator de houder van de gegevens is, dan wordt gesproken over verzenden. Als de initiator niet de houder van de gegevens is, dan wordt functioneel gesproken over raadplegen. 

Dit onderscheid in typen gegevensuitwisselingen is ook een juridisch onderscheid. De wet stelt bijzondere eisen aan een elektronisch uitwisselingssysteem zoals bedoeld in de Wabvpz. Bij het raadpleegbaar maken van gegevens is sprake van een elektronisch uitwisselingssysteem. Dit is verder uitgelegd in het [juridische kader]() bij de tekst over Wabvpz.

## Vertrouwensmodel
Bij de uitwisseling van gegevens is betrouwbaarheid en vertrouwen essentieel. Twiin heeft de vertrouwensfuncties die hierbij horen beschreven in het [Vertrouwensmodel]().

## Generieke functies
Om complexiteit te verminderen en tegelijkertijd te standaardiseren is het belangrijk om generieke aspecten te onderkennen. Generieke functies zijn functies die voor meerdere toepassingsgebieden nodig zijn om vindbaarheid, toegankelijkheid, interoperabiliteit of hergebruik van gegevens te kunnen realiseren.

Vaak worden generieke functies (zoals identificatie, authenticatie, autorisatie, lokalisatie, adressering, toestemming en logging) en gemeenschappelijke voorzieningen in één adem genoemd, maar ze zijn niet hetzelfde. De noodzaak om de generieke functies in te vullen is blijvend. De wijze waarop daar invulling aan wordt gegeven door middel van gemeenschappelijke voorzieningen, kan in de loop der tijd wijzigen.

Gemeenschappelijke voorzieningen kunnen invulling geven aan één of meerdere generieke functies. Het Twiin Afsprakenstelsel kan vereisen dat gebruik wordt gemaakt van een gemeenschappelijke voorziening om invulling te geven aan een generieke functie. Voor de keuze om dwingend te verwijzen naar een gemeenschappelijke voorziening geldt een aantal voorwaarden. Een keuze voor een bepaalde gemeenschappelijke voorziening kan ook weer vervallen als niet langer aan de voorwaarden wordt voldaan. Het Twiin Afsprakenstelsel verwijst alleen naar gemeenschappelijke voorzieningen die voldoen aan de volgende voorwaarden:

- **Hergebruik**: Meerdere gebruikers vragen om of gebruiken de dienst (eindgebruikers- of uitwisselingssystemen). Het Twiin Afsprakenstelsel sluit in beginsel aan op de keuzes die op landelijk niveau worden gemaakt over de inzet van gemeenschappelijke voorzieningen voor de invulling van een generieke functie.

- De gemeenschappelijke voorziening bevordert de **samenwerking en interoperabiliteit** in de zorg en vermindert redundantie in de keten. Het gaat onder andere om het verlagen van registratie- en beheerlasten en kosten.

- **Standaardisatie**: Gemeenschappelijke voorzieningen maken zoveel mogelijk gebruik van internationale standaarden en, indien noodzakelijk, Nederlandse extensies of beperkingen daarvan.

- **Noodzakelijkheid**: Een gemeenschappelijke voorziening bestaat alleen als deze noodzakelijk is. Als uitwisseling zonder gemeenschappelijke voorziening gerealiseerd kan worden op basis van een open stelsel, heeft dat de voorkeur.

- **Makelaarsfunctie**: De dienst kan een brug- of makelaarsfunctie bieden naar achterliggende gedistribueerde diensten. Een gemeenschappelijke voorziening kan ook een makelaarsfunctie vervullen om verschillende implementaties van de betreffende functie te kunnen bereiken. Via een gemeenschappelijke authenticatiedienst kan bijvoorbeeld gebruik worden gemaakt van verschillende beschikbare authenticatiemiddelen.

- **Agnostisch**: Gemeenschappelijke voorzieningen zijn onafhankelijk van het afsprakenstelsel of de gegevensuitwisseling waarin ze gebruikt worden. De voorzieningen leggen alleen eisen op aan de koppelvlakken.

- **Het proces voor onderhoud en beheer** van de gemeenschappelijke voorziening is duidelijk beschreven en duurzaam geborgd. Ook is er een autorisator aangewezen met een evenwichtige vertegenwoordiging van de belangen van de gebruikers in lijn met NEN 7522.

> [!NOTE]
> ## Statement
> Twiin sluit aan op de keuzes die op landelijk niveau worden gemaakt en neemt deze op in het Twiin Afsprakenstelsel.

## Rollen
Interoperabiliteit gaat over het verbinden van organisaties. Het Twiin Afsprakenstelsel wil een verbindend afsprakenstelsel zijn, onder andere door partijen te betrekken. Partijen die een rol spelen zijn de zorgaanbieders en hun leveranciers: zij committeren zich aan de afspraken en implementeren deze. Zorgaanbieders staan voor een grote opgave, dit heeft Twiin ertoe gebracht om de rol van dienstverlener te introduceren die de zorgaanbieder kan ondersteunen en ontzorgen. Twiin is tot de volgende rollen gekomen om de samenwerking goed vorm te geven:

- Organisatorische rollen
  - Twiin Deelnemer
  - Twiin Dienstverlener
  - GtK Beheerder
  - GtK Leverancier
- Systeemrol
  - GtK (Gevalideerd Twiin Knooppunt).




## Twiin Deelnemer
Organisatie die de Twiin Deelnemersovereenkomst voor het Twiin Afsprakenstelsel heeft getekend. Vooralsnog zijn dit enkel zorgaanbieders zolang niet anders wordt besloten op basis van het reglement.

## Twiin Dienstverlener
Een partner die begeleidt bij de implementatie en de ontwikkeling van zorgtoepassingen en die Twiin Deelnemers helpt om te voldoen aan het Twiin Afsprakenstelsel. 

De Twiin Dienstverlener faciliteert en ondersteunt zorgaanbieders bij de implementatie. De zorgaanbieder kan kiezen om de taken van de Twiin Dienstverlener en GtK Beheerder zelf in te vullen, maar kan deze ook uitbesteden.

### Toelichting
Voor een zorgtoepassing is een regievoerder noodzakelijk. Daarmee doelen we op het faciliteren en ondersteunen van de zorgaanbieders bij de implementatie in de keten. Binnen het Twiin Afsprakenstelsel vervult de Twiin Dienstverlener deze rol. Binnen een samenwerkingsverband kan één van de aangesloten zorgaanbieders deze rol ook zelf invullen. 

Voorbeelden van partijen die de rol van Twiin Dienstverlener kunnen vervullen.

- Regionale/categorale samenwerkingsorganisaties
- Zorgaanbieders (voor andere zorgaanbieders en voor de eigen organisatie)
- Landelijke samenwerkingsorganisaties, zoals VZVZ 

## GtK Beheerder
Een organisatie die namens de Twiin Deelnemer invulling geeft aan het technisch beheer van het GtK, zoals omschreven in de Voorwaarden GtK Beheer.

## GtK Leverancier
Leverancier van een GtK.

In onderstaande figuur wordt weergegeven hoe de verschillende rollen zich tot elkaar kunnen verhouden.
![Een figuur hoe de verschillende rollen zich tot elkaar kunnen verhouden](/docs/architectuur/assets/gtk_rollen.png)

In bovenstaande figuur worden twee Twiin Deelnemers afgebeeld die gegevens volgens het Twiin Afsprakenstelsel uitwisselen voor een bepaalde zorgtoepassing. Zij maken hiervoor gebruik van verschillende GtK’s. De Twiin Deelnemer rechts heeft een GtK Beheerder ingeschakeld voor de onderdelen die het GtK vormen. De Twiin Deelnemer aan de linkerkant is een deelnemer die de rol GtK Beheerder samen met de GtK Leverancier zelf invult. Beide Twiin Deelnemers hebben ook te maken met leverancier(s) voor de onderdelen van de GtK’s.

Bovenstaande situatie is een voorbeeld, er kan ook een hybride situatie bestaan: applicaties die door de Twiin Deelnemer zelf worden beheerd en applicaties die door een externe GtK Beheerder worden beheerd die allen gebruikt worden om databeschikbaarheid te realiseren.

Hoe de rollen zich verhouden tot de actoren in het kader van de governance, is uitgewerkt in het hoofdstuk 6 | governance.

## GtK (Gevalideerd Twiin Knooppunt)
Uitwisseling van data gebeurt volgens het Twiin Afsprakenstelsel tussen Gevalideerde Twiin Knooppunten (GtK). Een GtK is een door Twiin gevalideerde oplossing die zorgt voor beschikbaarheid en uitwisseling van gegevens voor één of meer zorgtoepassingen voor één of meerdere zorgaanbieders. 
Een GtK hoeft niet per se uit één uitwisselingssysteem of uit één (aparte) applicatie te bestaan. Een GtK kan gevormd worden door meerdere onderdelen. Het GtK bestaat minimaal uit een koppelvlak op een regionale infrastructuur, een landelijke infrastructuur, een leveranciersnetwerk of een platform - een zorgaanbieder kan ook zelf een GtK hebben.

Voorbeelden van mogelijke GtK’s:
- XCA Gateway voor beelduitwisseling
- FHIR Gateway van AORTA
- Nuts-node voor eOverdracht
- FHIR-koppelvlak voor BgZ
- Leveranciersplatformen

Een GtK is een technische component en kan op die manier verschillende rollen aannemen:
- **GtK verzender (sender) / zendend GtK** - van toepassing bij de communicatiepatronen:
  - gericht verzenden / push
  - gericht beschikbaar stellen / notified pull
- **GtK ontvanger (receiver) / ontvangend GtK** - van toepassing bij de communicatiepatronen:
  - gericht verzenden / push
  - gericht beschikbaar stellen / notified pull
- **GtK vrager (requester) / vragend GtK** - van toepassing bij de communicatiepatronen:
  - gericht bevragen / pull
  - gericht beschikbaar stellen / notified pull
  - ongericht bevragen / indexed pull
- **GtK antwoorder (responder) / antwoordend GtK** - van toepassing bij de communicatiepatronen:
  - gericht bevragen / pull
  - gericht beschikbaar stellen / notified pull
  - ongericht bevragen / indexed pull

In de technische kern en de implementatiewijzer van de zorgtoepassingen van Twiin komen deze actoren terug in de communicatiepatronen, transactieschema's en PvE’s.