---
sidebar_position: 1
---

# Oppsett for Sparebank1 Factoring

Siden **Oppsett for Sparebank1 Factoring** er det sentrale stedet for konfigurasjon av integrasjonen. Åpne den ved å søke etter **Oppsett for Sparebank1 Factoring** i Business Central.

## Generelt

| Felt | Beskrivelse |
|------|-------------|
| **Betalingsmåte for factoring** | Betalingsmåten som merker fakturaer og kreditnotaer for factoring. Dokumenter med denne betalingsmåten sendes til SpareBank 1 Factoring og får factoring-bankkontoen som firmabankkonto |
| **Factoring bankkonto** | Bankkontoen med kontonr., IBAN og SWIFT til SpareBank 1 Factoring. Den settes som firmabankkonto på salgsdokumenter som factores |
| **Klient nr. innenlands** | Klientnummeret tildelt av SpareBank 1 Factoring. Det brukes i eksportfilene og i KID. Det lages ingen KID så lenge feltet er tomt |
| **Nummerserie for bunter** | Nummerserien som brukes til å tildele factoring-buntnumre |

:::info
Betalingsmåten for factoring kan ikke ha en motkonto. En motkonto ville bokført en innbetaling sammen med fakturaen, men fakturaer som factores betales til SpareBank 1 Factoring.
:::

## Kladd

Disse feltene styrer hvordan transaksjoner som importeres fra SpareBank 1 Factoring overføres til finanskladden.

| Felt | Beskrivelse |
|------|-------------|
| **Kladdemalnavn** | Finanskladdemalen som importerte factoringtransaksjoner overføres til |
| **Kladdenavn** | Finanskladden som importerte factoringtransaksjoner overføres til |
| **Motkonto innenlands** | Motkontoen (finanskonto) som brukes for transaksjoner på det innenlandske klientnummeret |
| **Motkonto utenlands** | Motkontoen (finanskonto) som brukes for transaksjoner på andre klientnumre |

## Kunder

| Felt | Beskrivelse |
|------|-------------|
| **Factoring på nye kunder** | Når feltet er aktivert, får nye kunder betalingsmåten for factoring og betalingsbetingelsene for factoring |
| **Bet. betingelse m/factoring** | Betalingsbetingelsene som settes på en kunde når kunden får betalingsmåten for factoring. La feltet stå tomt for å beholde kundens betalingsbetingelser |
| **Bet. betingelse u/factoring** | Betalingsbetingelsene som settes på en kunde når kundens betalingsmåte endres fra betalingsmåten for factoring til en annen. La feltet stå tomt for å beholde kundens betalingsbetingelser |

## Kunder og dokumenter som factores

Factoring styres kun av betalingsmåten:

- **Kunder**: Sett betalingsmåten for factoring på kundene som factores. Når en kundes betalingsmåte endres til eller fra betalingsmåten for factoring, oppdateres kundens betalingsbetingelser fra oppsettet, og du får spørsmål om kundens åpne salgsdokumenter også skal få den nye betalingsmåten.
- **Salgsdokumenter**: Salgsdokumenter får betalingsmåten fra Faktura til-kunden. Dette gjelder også kreditnotaer og returordrer, der Business Central vanligvis lar betalingsmåten stå tom, slik at kreditnotaene følger fakturaene til factoring.
- **Firmabankkonto**: Når et salgsdokument får betalingsmåten for factoring, settes firmabankkontoen til factoring-bankkontoen. Når betalingsmåten endres til en annen, brukes standard bankkonto for dokumentets valuta i stedet.

## Handlinger

| Handling | Beskrivelse |
|----------|-------------|
| **Oppdater firmabankkontoer** | Setter firmabankkontoen på alle åpne salgsdokumenter ut fra betalingsmåten, for eksempel etter at factoring-bankkontoen er endret |
| **Sett opp daglig eksport** | Åpner jobbkøposten for den daglige eksporten. Se [Automatisering](../automation.md) |
| **Eksporter til factoring** | Åpner listen over bokførte dokumenter som er klare til eksport |
| **Importer fra factoring** | Åpner transaksjonene som er importert fra SpareBank 1 Factoring |
