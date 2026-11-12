---
sidebar_position: 2
---

# Installasjon

## Forutsetninger

Før du installerer Leap Vehicle Registration, sørg for at du har følgende:

- Microsoft Dynamics 365 Business Central (versjon 26.0 eller nyere)
- En API-nøkkel for integrasjonen, levert av Leap IT
- Organisasjonsnummeret til selskapet som sender inn preregistreringene

## Installere utvidelsen

Leap Vehicle Registration installeres direkte i Business Central via siden Administrasjon av utvidelser.

1. Søk etter **Administrasjon av utvidelser** i Business Central
2. Klikk **Administrer** og deretter **Last opp utvidelse**
3. Last opp `.app`-filen du har fått fra Leap IT
4. Velg språk og klikk **Distribuer**

Når utvidelsen er installert, er siden **Kjøretøyregistreringsoppsett** tilgjengelig for konfigurasjon. Listen **Drivstoff for kjøretøy** fylles med drivstoffkodene fra IVI-kodelisten.

## Tillatelser

Utvidelsen inkluderer tillatelsessettet **LEAVRALL**. Tildel det til brukerne som skal vedlikeholde oppsettet og malene, eller opprette og preregistrere kjøretøy.

1. Søk etter **Brukere** i Business Central
2. Åpne brukeren
3. Legg til **LEAVRALL** under **Brukertillatelsessett**

Brukere som bokfører mottak av varer der **Opprett kjøretøy ved mottak** er slått på, trenger også tillatelsessettet, siden kjøretøyene opprettes når mottaket bokføres.
