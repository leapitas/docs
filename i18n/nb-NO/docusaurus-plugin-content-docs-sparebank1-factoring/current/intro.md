---
sidebar_position: 1
---

# Om Sparebank1 Factoring

Sparebank1 Factoring er en applikasjon for Microsoft Dynamics 365 Business Central som kobler Business Central sammen med SpareBank 1 Factoring. Den sender fakturaer og kreditnotaer som factores til SpareBank 1 Factoring, og henter transaksjonene SpareBank 1 Factoring sender tilbake inn i Business Central som finanskladdelinjer.

## Nøkkelfunksjoner

- **Factoring styrt av betalingsmåte**: Et dokument factores når det har betalingsmåten for factoring. Kunder, åpne salgsdokumenter og bokførte dokumenter følger samme regel
- **Riktig bankkonto på dokumentene**: Dokumenter som factores får automatisk bankkontoen til SpareBank 1 Factoring som firmabankkonto, slik at riktig kontonr., IBAN og SWIFT skrives ut
- **Eksport til factoring**: Eksporter bokførte fakturaer og kreditnotaer i bunter, sammen med en kundefil og PDF-kopier av dokumentene
- **Daglig eksport**: La en jobbkøpost eksportere alle dokumenter som er klare, én gang om dagen
- **Import av transaksjoner**: Importer transaksjonsfilene fra SpareBank 1 Factoring og opprett finanskladdelinjer som utlignes mot kundenes åpne poster
- **Overdragelsesnotis og KID**: Faktura- og kreditnotaoppsett med overdragelsesnotisen SpareBank 1 Factoring krever, og KID fra SpareBank 1 Factoring
- **Støtte for EHF**: Med tilleggsappen **Sparebank1 Factoring Enkel EHF** brukes KID fra SpareBank 1 Factoring også på fakturaer som sendes som EHF

## Slik fungerer det

1. **Merk kunder for factoring**: Gi kundene som factores betalingsmåten for factoring. Nye salgsdokumenter for disse kundene får betalingsmåten og factoring-bankkontoen automatisk.
2. **Bokfør som vanlig**: Fakturaer og kreditnotaer bokføres på vanlig måte. Dokumenter som factores skrives ut med overdragelsesnotisen og KID fra SpareBank 1 Factoring.
3. **Eksporter til factoring**: Bokførte dokumenter som factores samles på siden **Eksporter til factoring**. De merkes med et buntnummer og eksporteres som en fakturafil, en kundefil og PDF-kopier, enten manuelt eller av den daglige jobbkøposten.
4. **Importer fra factoring**: SpareBank 1 Factoring sender tilbake transaksjonsfiler, for eksempel med innbetalinger fra kundene dine. Disse importeres på siden **Importer fra factoring** og overføres til en finanskladd, der de kan kontrolleres og bokføres.

Alle filer utveksles via **Leap File System**, som må være installert og satt opp.
