---
sidebar_position: 2
---

# Importer fra factoring

SpareBank 1 Factoring sender tilbake transaksjonsfiler, for eksempel med innbetalingene fra kundene dine. Disse importeres til Business Central og overføres til finanskladden som er satt opp på siden **Oppsett for Sparebank1 Factoring**.

## Importere transaksjonsfiler

1. Søk etter **Importer fra factoring** i Business Central
2. Klikk **Importer factoringfiler**
3. Alle filer mottatt via filkonfigurasjonen for **SB1 Factoring - Import** som ikke er behandlet ennå, leses inn, og transaksjonene vises på siden

Siden viser bare transaksjoner som ikke er overført til kladden. Fjern filteret på **Overført til kladd** for å se alle transaksjoner.

Handlingsgruppen **Factoring** i **Innbetalingskladd** har også **Importer factoringfiler** og **Importer fra factoring**.

## Transaksjonstyper

| Type | Beskrivelse |
|------|-------------|
| 16 | Rentenota |
| 21 | Faktura |
| 22 | Kreditnota |
| 25 | OCR-innbetaling |
| 26 | Alle typer innbetalinger |
| 27 | Kontantrabatt |
| 98 | Inngående saldo |

## Opprette kladdelinjer

1. Filtrer siden på transaksjonene du vil overføre
2. Klikk **Opprett kladdelinjer** og bekreft
3. Det opprettes en finanskladdelinje for hver transaksjon som vises på siden
4. Klikk **Åpne kladd** for å kontrollere og bokføre linjene

Hver kladdelinje får:

- **Transaksjonsdatoen** som bokføringsdato
- **Kunden** fra transaksjonen som konto. Hvis kunden ikke finnes, står kontoen tom og må fylles ut manuelt
- **Beløpet** fra transaksjonen
- **Motkonto innenlands** som motkonto når transaksjonen er på det innenlandske klientnummeret, ellers **Motkonto utenlands**
- Utligning mot kundens åpne post med samme bilagsnummer, når det finnes en

Du blir bedt om å bekrefte hvis en transaksjon allerede er overført til kladden.

## Tilbakeføringer

En innbetaling som SpareBank 1 Factoring tilbakefører (type 26 med teksten TBF), får også en motlinje i kladden. Motlinjen har **Tilbakeført fra factoring** satt, og feltet overføres til kundeposten. Feltet kan vises i **Finanskladd** og **Kundeposter**.

## Slette transaksjoner

Velg transaksjoner og klikk **Slett valgte linjer** for å slette dem, for eksempel etter at en fil er importert ved en feil.
