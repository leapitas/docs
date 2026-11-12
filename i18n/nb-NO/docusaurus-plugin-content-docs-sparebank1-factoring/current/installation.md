---
sidebar_position: 2
---

# Installasjon

## Forutsetninger

Før du installerer Sparebank1 Factoring, sørg for at du har følgende:

- Microsoft Dynamics 365 Business Central (versjon 25.0 eller nyere)
- **Leap File System** installert og koblet til stedet der filer utveksles med SpareBank 1 Factoring
- En factoringavtale med SpareBank 1 Factoring, og klientnummeret du har fått tildelt
- Eventuelt **Enkel EHF**, hvis du sender fakturaer som EHF

## Installere utvidelsen

Sparebank1 Factoring installeres direkte i Business Central via siden for utvidelsesbehandling.

1. Søk etter **Administrasjon av utvidelse** i Business Central
2. Klikk **Administrer** og deretter **Last opp utvidelse**
3. Last opp `.app`-filen levert av Leap IT
4. Velg språk og klikk **Distribuer**

Når installasjonen er fullført, vil utvidelsen være aktiv og siden **Oppsett for Sparebank1 Factoring** tilgjengelig for konfigurasjon.

## Enkel EHF

Hvis du sender fakturaer og kreditnotaer som EHF med Enkel EHF, installer også **Sparebank1 Factoring Enkel EHF** på samme måte. Den erstatter betalingsreferansen (KID) på EHF-dokumenter som factores med KID fra SpareBank 1 Factoring, og trenger ikke noe oppsett. Bankkontoen i EHF-en hentes allerede fra dokumentets firmabankkonto, som er factoring-bankkontoen på dokumenter som factores.
