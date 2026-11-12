---
sidebar_position: 1
---

# Visma Calendar oppsett

Siden **Visma Calendar oppsett** inneholder tilkoblingen til Visma Calendar, og avgjør hvordan timer overføres til prosjektkladden. Åpne den ved å søke etter **Visma Calendar oppsett** i Business Central.

## Generelt

| Felt | Beskrivelse |
|------|-------------|
| **Aktivert** | Aktiverer tjenesten som kobler til Visma Calendar |

### Tilkobling

| Felt | Beskrivelse |
|------|-------------|
| **API-nøkkel** | API-nøkkelen levert av Leap IT |
| **Visma Id** | Tenant ID for ditt firma i Visma. Se [Finn din Tenant ID](../installation.md#finn-din-tenant-id) |

## Prosjekt

| Felt | Beskrivelse |
|------|-------------|
| **Importer dimensjoner** | Angir om kostnadsbærerne på registreringene importeres. Dette er slått på som standard, og må være på, siden prosjektet og prosjektoppgaven leses fra kostnadsbærerne |
| **Prosjektkladdemal** | Prosjektkladdemalen som timene overføres til |
| **Prosjektkladd** | Prosjektkladden som timene overføres til |
| **Prosjektdimensjon** | ID-en til kostnadsbæreren i Visma Calendar som inneholder prosjektet. Verdien til denne kostnadsbæreren brukes som prosjektnr. i Business Central |
| **Prosjektoppgave dimensjon** | ID-en til kostnadsbæreren i Visma Calendar som inneholder prosjektoppgaven. Verdien til denne kostnadsbæreren brukes som prosjektoppgavenr. i Business Central |
| **Belastbar dimensjonsid** | ID-en til kostnadsbæreren i Visma Calendar som avgjør om timene er belastbare. Se [Belastbare timer](./dimension-mapping.md#belastbare-timer) |
| **Angi belastbar-dimensjon** | Åpner listen over verdier for kostnadsbæreren som er belastbare. Kun tilgjengelig når **Belastbar dimensjonsid** er fylt ut |

**Prosjektkladdemal**, **Prosjektkladd**, **Prosjektdimensjon** og **Prosjektoppgave dimensjon** må være fylt ut før timer kan overføres til prosjektkladden.

## Handlinger

| Handling | Beskrivelse |
|----------|-------------|
| **Test tilkobling** | Verifiserer at tilkoblingsinnstillingene er gyldige og at tjenesten kan nå Visma Calendar. En melding viser om tilkoblingen ble opprettet |
| **Tilordning av arbeidstype** | Åpner [tilordningen av arbeidstype](./work-type-mapping.md) |

## Prosjektoppgave på prosjektet

Dersom en registrering i Visma Calendar ikke har prosjektoppgave, hentes prosjektoppgaven fra feltet **Prosjektoppgave for timeføring** på prosjektkortet i Business Central, under **Generelt**. Feltet er også tilgjengelig i prosjektlisten.

Fyll ut **Prosjektoppgave for timeføring** på prosjektene der timer kan registreres uten prosjektoppgave. Prosjektoppgaven må være av typen **Bokføring**. Registreringer uten prosjektoppgave overføres ikke for prosjekter der feltet er tomt.

## Kom i gang

1. Fyll inn **API-nøkkel** og **Visma Id**
2. Klikk **Test tilkobling** og kontroller at tilkoblingen er opprettet. Ved feil, kontroller de to feltene og prøv igjen, eller kontakt Leap IT
3. Fyll ut feltene under **Prosjekt**
4. Sett opp [tilordningen av arbeidstype](./work-type-mapping.md) og [dimensjonstilordningen](./dimension-mapping.md)
5. Slå på **Aktivert**
