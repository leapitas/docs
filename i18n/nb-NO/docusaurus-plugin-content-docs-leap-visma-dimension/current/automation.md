---
sidebar_position: 5
---

# Automatisering og jobbkøer

Synkroniseringskøen sendes til Visma Payroll av en jobbkøpost i Business Central. Uten en jobbkøpost sendes endringer kun når noen klikker **Synkroniser nå** i [synkroniseringskøen](./usage/sync-queue.md).

## Sette opp jobbkøposten

1. Søk etter **Jobbkøposter** i Business Central
2. Klikk **Ny**
3. Fyll inn følgende felter:

| Felt | Verdi |
|------|-------|
| **Objekttype som skal kjøres** | Codeunit |
| **Objekt-ID som skal kjøres** | 86885 (LEACUVismaCostUnitSyncJobQueue) |
| **Tidligste startdato/-klokkeslett** | Valgfritt. Fyll inn dersom jobben ikke skal starte med en gang |
| **Gjentakende jobb** | Velg dagene jobben skal kjøre, og fyll inn **Antall minutter mellom kjøringer**, for eksempel 15 |

4. Sett status til **Klar**

Jobbkøen sender nå synkroniseringskøen til Visma Payroll med det intervallet du har valgt.

## Slik fungerer jobben

- Alle poster i synkroniseringskøen som ikke har nådd **Maks antall forsøk**, sendes til Visma Payroll
- Poster som sendes uten feil fjernes fra køen
- Poster som feiler blir liggende i køen med feilmeldingen, og prøves på nytt ved neste kjøring
- Når **Aktivert** er slått av i [Visma dimensjonsoppsett](./setup/visma-dimension-setup.md), gjør jobben ingenting, og postene blir liggende i køen til det slås på

:::warning
Når Visma Payroll avviser en post, fortsetter jobben med neste post, så jobbkøposten viser ikke feilen. Sjekk [synkroniseringskøen](./usage/sync-queue.md) jevnlig for poster med **Feil oppstod**.

Dersom selve tilkoblingen feiler, for eksempel fordi API-nøkkelen eller leietaker-ID-en er feil, feiler kjøringen og jobbkøposten viser feilen. Rett tilkoblingen i [Visma dimensjonsoppsett](./setup/visma-dimension-setup.md), og sett jobbkøposten tilbake til **Klar** dersom den har stoppet.
:::
