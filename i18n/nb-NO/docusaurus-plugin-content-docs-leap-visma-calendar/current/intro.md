---
sidebar_position: 1
---

# Om Visma Calendar Import

Leap Visma Calendar Import importerer timer registrert i Visma Calendar til Microsoft Dynamics 365 Business Central. Registreringene legges som ressurslinjer i en prosjektkladd, med prosjekt, prosjektoppgave, arbeidstype, dimensjoner og timer, klare til å kontrolleres og bokføres.

## Hovedfunksjoner

- **Import av timer**: Registreringer i Visma Calendar for datointervallet du velger importeres til Business Central
- **Prosjekt og prosjektoppgave fra Visma**: Prosjektet og prosjektoppgaven leses fra kostnadsbærerne på registreringen i Visma Calendar
- **Tilordning av arbeidstype**: Kategorier og registreringstyper i Visma Calendar tilordnes arbeidstyper i Business Central
- **Dimensjoner**: Kostnadsbærere i Visma Calendar tilordnes dimensjoner i Business Central. Dimensjonsverdier som mangler opprettes automatisk
- **Belastbare timer**: En kostnadsbærer i Visma Calendar avgjør om timene er belastbare. Timer som ikke er belastbare får enhetspris 0
- **Ingen dobbel import**: Hver registrering importeres én gang. Registreringer som allerede er overført til prosjektkladden overføres ikke på nytt

## Slik fungerer det

1. **Import**: Registreringene for valgt datointervall leses fra Visma Calendar inn i **Timeposter liste** i Business Central.
2. **Overføring**: Registreringer som ikke er overført ennå opprettes som linjer i prosjektkladden fra oppsettet. Hver linje får ressursen til den ansatte, prosjektet og prosjektoppgaven, arbeidstypen, timene og dimensjonene.
3. **Bokføring**: Kontroller prosjektkladden og bokfør den som vanlig.

:::info
Leap Visma Calendar Import bruker de ansatte fra [Leap Visma Employees Import](/nb-NO/leap-visma-employees/intro) for å finne ressursen til hver registrering. Leap Visma Employees Import må være installert, og de ansatte må være importert, før timer kan importeres.
:::
