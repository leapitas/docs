---
sidebar_position: 2
---

# Synkroniseringskø

**Visma synkroniseringskø for kostnadsbærere** viser endringene som venter på å bli sendt til Visma Payroll. Åpne den fra **Visma dimensjonsoppsett** med handlingen **Synkroniseringskø**, eller søk etter **Visma synkroniseringskø for kostnadsbærere**.

Poster som sendes uten feil fjernes fra køen. Køen viser derfor kun endringer som ikke er sendt ennå, og endringer som har feilet.

## Felter

| Felt | Beskrivelse |
|------|-------------|
| **Løpenr.** | Det unike nummeret til posten |
| **Handling** | Om kostnadsbæreren settes inn, oppdateres eller slettes i Visma Payroll |
| **Kostnadsbærertype** | Kostnadsbærertypen i Visma Payroll, fra dimensjonstilordningen |
| **Kostnadsbærerkode** | Koden som sendes til Visma Payroll |
| **Kostnadsbærernavn** | Navnet som sendes til Visma Payroll |
| **Gyldig til** | Sluttdatoen som settes i Visma Payroll, hvis noen |
| **Feil oppstod** | Om siste forsøk feilet |
| **Feilmelding** | Feilmeldingen fra siste forsøk som feilet |
| **Oppdatert fra kilde** | Når posten ble endret i Business Central |
| **Antall nye forsøk** | Hvor mange forsøk som har feilet. Feltet er skjult som standard, og kan vises med **Tilpass** |

## Handlinger

| Handling | Beskrivelse |
|----------|-------------|
| **Synkroniser nå** | Sender alle ventende poster til Visma Payroll med en gang, uten å vente på jobbkøen. Poster som har nådd maks antall forsøk hoppes over |
| **Nullstill antall forsøk** | Nullstiller antall forsøk og feilen på den valgte posten, slik at den prøves på nytt ved neste kjøring |

## Håndtering av feil

Når en post feiler, blir den liggende i køen, **Feil oppstod** settes, feilmeldingen fra Visma Payroll vises i **Feilmelding**, og antall forsøk økes med én. Posten prøves på nytt neste gang køen synkroniseres.

Når antall forsøk når **Maks antall forsøk** i [Visma dimensjonsoppsett](../setup/visma-dimension-setup.md), prøves posten ikke lenger. Dersom **Antall nye forsøk** vises på siden, er det gult så lenge posten vil bli prøvd på nytt, og rødt når den har nådd maks antall forsøk.

Slik retter du en post som har feilet:

1. Les **Feilmelding**. Vanlige årsaker er en kostnadsbærertype som ikke finnes i Visma Payroll, eller et tilkoblingsproblem
2. Rett årsaken, for eksempel tilkoblingen i **Visma dimensjonsoppsett**, eller kostnadsbærertypen i Visma Payroll
3. Velg posten og klikk **Nullstill antall forsøk**
4. Klikk **Synkroniser nå**, eller vent på neste kjøring av jobbkøen

:::info
Endringer i en dimensjonstilordning endrer ikke poster som allerede ligger i køen. Hvis **Visma CostUnitType-kode** på en tilordning var feil, rett tilordningen og gjør en ny endring på posten i Business Central, slik at en ny post opprettes med riktig kode.
:::
