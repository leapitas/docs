---
sidebar_position: 2
---

# Timeposter liste

**Timeposter liste** viser registreringene som er importert fra Visma Calendar, og om de er overført til prosjektkladden. Åpne den ved å søke etter **Timeposter liste** i Business Central.

Kun registreringer med prosjekt vises.

## Felt

| Felt | Beskrivelse |
|------|-------------|
| **Ansatt** | Navnet på den ansatte som registrerte timene |
| **Prosjektnr.** | Prosjektet til registreringen. Vises i rødt dersom prosjektet ikke finnes i Business Central |
| **Prosjektoppgavenr.** | Prosjektoppgaven til registreringen |
| **Overført til prosjekt** | Angir at registreringen er overført til prosjektkladden |
| **Beskrivelse** | Kommentaren på registreringen |
| **Startdato**, **Starttidspunkt** | Når registreringen starter |
| **Sluttdato**, **Slutt tid** | Når registreringen slutter |
| **Timer** | Timene på registreringen |
| **Ekstern registreringstype** | Registreringstypen i Visma Calendar |
| **Timeregistreringstype** | Hvordan timene er registrert i Visma Calendar, for eksempel som timer eller som et intervall |
| **Belastbar** | Angir at timene er [belastbare](../setup/dimension-mapping.md#belastbare-timer) |

## Handlinger

| Handling | Beskrivelse |
|----------|-------------|
| **Importer timer** | Leser registreringene for et datointervall fra Visma Calendar inn i listen |
| **Overfør til prosjektkladd** | Oppretter linjer i prosjektkladden for alle registreringer som ikke er overført |

## Importere på nytt

Hver registrering importeres én gang. Dersom du importerer et datointervall på nytt, oppdateres registreringer som allerede finnes i listen med de siste verdiene fra Visma Calendar, og nye registreringer legges til.

Registreringer som allerede er overført til prosjektkladden overføres ikke på nytt, selv om de endres i Visma Calendar. Rett linjen i prosjektkladden, eller de bokførte postene, i Business Central dersom en overført registrering endres i etterkant.
