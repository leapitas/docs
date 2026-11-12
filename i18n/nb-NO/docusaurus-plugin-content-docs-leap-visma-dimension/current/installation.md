---
sidebar_position: 2
---

# Installasjon

## Forutsetninger

Før du installerer Leap Visma Dimension Integration, sørg for at du har følgende:

- Microsoft Dynamics 365 Business Central (versjon 28.0 eller nyere)
- Visma Payroll med API-tilgang, og kostnadsbærertypene du vil fylle fra Business Central (for eksempel prosjekt og avdeling)
- En API-nøkkel for integrasjonen, levert av Leap IT
- Tenant ID for ditt firma i Visma

## Installere utvidelsen

Leap Visma Dimension Integration installeres direkte i Business Central via siden Administrasjon av utvidelser.

1. Søk etter **Administrasjon av utvidelser** i Business Central
2. Klikk **Administrer** og deretter **Last opp utvidelse**
3. Last opp `.app`-filen du har fått fra Leap IT
4. Velg språk og klikk **Distribuer**

Når utvidelsen er installert, er siden **Visma dimensjonsoppsett** tilgjengelig for konfigurasjon.

## Tillatelser

Utvidelsen inkluderer tillatelsessettet **LEACUALL**. Tildel det til brukerne som skal vedlikeholde oppsettet og tilordningene, eller jobbe med synkroniseringskøen.

1. Søk etter **Brukere** i Business Central
2. Åpne brukeren
3. Legg til **LEACUALL** under **Brukertillatelsessett**

Brukere som kun oppretter og endrer dimensjonsverdier, prosjekter og prosjektoppgaver trenger ingen ekstra tillatelser. Endringene deres legges automatisk i synkroniseringskøen.

## Installere i Visma App Store

Business Central kobler seg til Visma Payroll gjennom den samme applikasjonen i Visma App Store som [Leap Visma Payroll Import](/nb-NO/leap-visma-payroll/install-visma-payroll).

1. Åpne [apps.visma.com/NO/app/isv_leap_payroll_import](https://apps.visma.com/NO/app/isv_leap_payroll_import) og logg inn med samme pålogging som du bruker i Visma.net
2. Bla til bunnen av siden og klikk **Integrer**. Dersom applikasjonen allerede er i bruk, for eksempel av Leap Visma Payroll Import, klikk **Administrer** i stedet
3. Gi samtykke til tillatelsene for API-et og lagre. Integrasjonen trenger **Accounting Write Access** for å opprette kostnadsbærere

:::warning App Store ikke tilgjengelig?
Dersom Visma App Store ikke er tilgjengelig, se [veiledning for å aktivere Visma App Store](/nb-NO/leap-visma-employees/activate-app-store).
:::

### Finn din Tenant ID

Du trenger Tenant ID for å fullføre oppsettet i Business Central.

1. **Øverst i høyre hjørne** i Visma, trykk på nedtrekks-ikonet
2. **Kopier verdien** i "Tenant ID"
3. **Ta vare på denne** til senere, da den skal legges inn som **Leietaker-ID** i [Visma dimensjonsoppsett](./setup/visma-dimension-setup.md)
