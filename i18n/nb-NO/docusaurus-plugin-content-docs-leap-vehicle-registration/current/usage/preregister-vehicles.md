---
sidebar_position: 3
---

# Preregistrere kjøretøy

Et kjøretøy preregistreres hos Statens vegvesen ved å sende et IVI-dokument. IVI-dokumentet genereres fra kjøretøydataene, og handlingene finnes på kjøretøykortet.

## Preregistrere et kjøretøy

1. Åpne kjøretøyet med status **Kladd**
2. Klikk **Generer IVI dokument**
3. Klikk eventuelt **Se/Endre IVI XML** for å kontrollere dokumentet
4. Klikk **Send IVI til Vegvesenet**

En melding viser om IVI-dokumentet ble sendt og godtatt. Når det er godtatt, endres statusen til **Godtatt**. Hvis det feiler, slås **Har feil** på, og årsaken vises i [loggen](./logs.md).

## Handlinger

| Handling | Beskrivelse |
|----------|-------------|
| **Generer IVI dokument** | Bygger IVI-dokumentet fra kjøretøydataene. Tilgjengelig når statusen er **Kladd** eller **Kansellert** |
| **Se/Endre IVI XML** | Åpner det genererte IVI-dokumentet, slik at du kan kontrollere det eller endre det før det sendes. Tilgjengelig når IVI-dokumentet er generert |
| **Send IVI til Vegvesenet** | Sender IVI-dokumentet til Statens vegvesen. Tilgjengelig når statusen er **Kladd** og IVI-dokumentet er generert |
| **Kanseller preregistrering** | Kansellerer preregistreringen hos Statens vegvesen. Tilgjengelig når statusen er **Godtatt** |

## Generere IVI-dokumentet

Følgende felt må være fylt ut, ellers genereres ikke IVI-dokumentet:

- **Understellsnr.** og **Produsert den**
- **Merke** og **Handelsbetegnelse**
- **Type**, **Variant** og **Versjon**
- **Typegodkjenningsnr.**
- **Kjøretøyvekt i kjøreklar tilstand (kg)** og **Faktisk kjøretøyvekt (kg)**

Hver gang IVI-dokumentet genereres, får kjøretøyet en ny **IVI Referanse ID**, og **IVI generert den** oppdateres. Generer IVI-dokumentet på nytt hvis du endrer kjøretøyet etter at det ble generert, siden dokumentet ikke oppdateres automatisk.

## Endre IVI-dokumentet

**Se/Endre IVI XML** åpner **Rediger IVI XML**, der du kan endre XML-en direkte.

| Handling | Beskrivelse |
|----------|-------------|
| **Lagre XML** | Lagrer endringene i IVI-dokumentet |
| **Oppdater XML** | Forkaster endringene som ikke er lagret, og viser det lagrede IVI-dokumentet |

:::warning
Endringer gjort i redigeringsvinduet overskrives når du klikker **Generer IVI dokument** på nytt.
:::

## Kansellere en preregistrering

1. Åpne kjøretøyet med status **Godtatt**
2. Klikk **Kanseller preregistrering** og bekreft

Statusen endres til **Kansellert**, og kjøretøyet kan endres igjen. For å preregistrere kjøretøyet på nytt, klikk **Generer IVI dokument**. Statusen endres tilbake til **Kladd**, og IVI-dokumentet kan sendes.

## Kjøretøystatus

| Status | Beskrivelse |
|--------|-------------|
| **Kladd** | Kjøretøyet er opprettet, men ikke preregistrert |
| **Godtatt** | Statens vegvesen har godtatt preregistreringen. Kjøretøyet kan ikke endres |
| **Kansellert** | Preregistreringen er kansellert. Kjøretøyet kan endres og preregistreres på nytt |
