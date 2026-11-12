---
sidebar_position: 2
---

# Installasjon

## Forutsetninger

Før du installerer Leap Visma Calendar Import, sørg for at du har følgende:

- Microsoft Dynamics 365 Business Central
- [Leap Visma Employees Import](/nb-NO/leap-visma-employees/intro), med de ansatte importert fra Visma. Hver ansatt som registrerer timer må ha **Ressursnr.** på ansattkortet i Business Central
- Visma Calendar, der timene registreres med prosjekt og prosjektoppgave som kostnadsbærere
- En API-nøkkel for integrasjonen, levert av Leap IT
- Tenant ID for ditt firma i Visma

## Installere utvidelsen

Leap Visma Calendar Import installeres direkte i Business Central via siden Administrasjon av utvidelser.

1. Søk etter **Administrasjon av utvidelser** i Business Central
2. Klikk **Administrer** og deretter **Last opp utvidelse**
3. Last opp `.app`-filen du har fått fra Leap IT
4. Velg språk og klikk **Distribuer**

Når utvidelsen er installert, er siden **Visma Calendar oppsett** tilgjengelig for konfigurasjon.

## Tillatelser

Utvidelsen inkluderer tillatelsessettet **LEAVCALL**. Tildel det til brukerne som skal vedlikeholde oppsettet og tilordningene, eller importere timer.

1. Søk etter **Brukere** i Business Central
2. Åpne brukeren
3. Legg til **LEAVCALL** under **Brukertillatelsessett**

## Installere i Visma App Store

Business Central kobler seg til Visma Calendar gjennom applikasjonen **Leap Calendar Import** i Visma App Store.

1. Gå til [apps.visma.com](https://apps.visma.com) og logg inn med samme pålogging som du bruker i Visma.net
2. Søk etter **Leap Calendar Import** og åpne applikasjonen
3. Klikk **Integrer** og gi samtykke til tillatelsene for API-et. Integrasjonen trenger tilgang til å lese registreringer i Visma Calendar

:::warning App Store ikke tilgjengelig?
Dersom Visma App Store ikke er tilgjengelig, se [veiledning for å aktivere Visma App Store](/nb-NO/leap-visma-employees/activate-app-store).
:::

### Finn din Tenant ID

Du trenger Tenant ID for å fullføre oppsettet i Business Central.

1. **Øverst i høyre hjørne** i Visma, trykk på nedtrekks-ikonet
2. **Kopier verdien** i "Tenant ID"
3. **Ta vare på denne** til senere, da den skal legges inn i feltet **Visma Id** i [Visma Calendar oppsett](./setup/visma-calendar-setup.md)
