---
sidebar_position: 1
---

# Visma dimensjonsoppsett

Siden **Visma dimensjonsoppsett** inneholder tilkoblingen til Visma Payroll. Åpne den ved å søke etter **Visma dimensjonsoppsett** i Business Central.

## Generelt

| Felt | Beskrivelse |
|------|-------------|
| **Aktivert** | Angir om integrasjonen er aktiv. Integrasjonen er deaktivert som standard. Synkroniseringskøen sendes kun til Visma Payroll når dette er aktivert. Endringer legges fortsatt i køen mens det er deaktivert, og sendes når det aktiveres |
| **Maks antall forsøk** | Maksimalt antall forsøk for hver post i køen. Når en post har feilet så mange ganger, prøves den ikke igjen før antall forsøk nullstilles. Standard er 5, og verdien kan være fra 1 til 10 |

## Tilkobling

| Felt | Beskrivelse |
|------|-------------|
| **API-basisadresse** | Basisadressen til Visma Payroll API: `https://payrollapi.no.visma.net` |
| **API-nøkkel** | API-nøkkelen levert av Leap IT |
| **Leietaker-ID** | Tenant ID for ditt firma i Visma. Se [Finn din Tenant ID](../installation.md#finn-din-tenant-id) |

## Handlinger

| Handling | Beskrivelse |
|----------|-------------|
| **Test tilkobling** | Prøver å koble til Visma Payroll med API-nøkkelen og leietaker-ID-en, og viser om tilkoblingen ble opprettet |
| **Dimensjonstilordning** | Åpner [dimensjonstilordningene](./dimension-mapping.md) |
| **Synkroniseringskø** | Åpner [synkroniseringskøen](../usage/sync-queue.md) |

## Kom i gang

1. Fyll inn **API-basisadresse**, **API-nøkkel** og **Leietaker-ID**
2. Klikk **Test tilkobling** og kontroller at tilkoblingen er opprettet. Ved feil, kontroller de tre feltene og prøv igjen, eller kontakt Leap IT
3. Sett opp [dimensjonstilordningene](./dimension-mapping.md)
4. Slå på **Aktivert**
5. Sett opp [jobbkøposten](../automation.md) som sender køen til Visma Payroll

:::tip
Sett opp dimensjonstilordningene før du slår på **Aktivert**, slik at data sendes til riktige kostnadsbærertyper i Visma Payroll fra starten av.
:::
