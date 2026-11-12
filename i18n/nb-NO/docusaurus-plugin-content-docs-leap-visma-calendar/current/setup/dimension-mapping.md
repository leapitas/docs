---
sidebar_position: 3
---

# Dimensjonstilordning

Kostnadsbærerne på en registrering i Visma Calendar kan legges til som dimensjoner på linjen i prosjektkladden. Dimensjonstilordningen avgjør hvilken dimensjon i Business Central hver kostnadsbærer hører til.

Åpne tilordningen ved å søke etter **Dimensjonstilordning liste** i Business Central.

## Felt

| Felt | Beskrivelse |
|------|-------------|
| **Visma Dimensjon** | ID-en til kostnadsbæreren i Visma Calendar |
| **Dimensjon** | Dimensjonskoden i Business Central som brukes når timene bokføres |

## Opprette en tilordning

1. Klikk **Ny**
2. Legg inn ID-en til kostnadsbæreren fra Visma Calendar i **Visma Dimensjon**
3. Velg dimensjonen i Business Central i **Dimensjon**

Verdien til kostnadsbæreren brukes som kode for dimensjonsverdien. Dersom dimensjonsverdien ikke finnes i Business Central, opprettes den, med koden som navn.

Kostnadsbærere som ikke er tilordnet legges ikke til som dimensjoner. Prosjektet og prosjektoppgaven leses fra kostnadsbærerne som er satt opp i [Visma Calendar oppsett](./visma-calendar-setup.md), og trenger ingen tilordning.

## Belastbare timer

Den belastbare dimensjonen avgjør om timene er belastbare, og kan faktureres til kunden.

1. I **Visma Calendar oppsett**, legg inn ID-en til kostnadsbæreren i Visma Calendar i **Belastbar dimensjonsid**
2. Klikk **Angi belastbar-dimensjon** for å åpne listen over belastbare verdier
3. Legg til en linje for hver verdi av kostnadsbæreren, og slå på **Belastbar** for verdiene som betyr at timene er belastbare

| Felt | Beskrivelse |
|------|-------------|
| **Visma dimensjonsverdi** | Verdien til den belastbare kostnadsbæreren i Visma Calendar |
| **Belastbar** | Angir at timer med denne verdien er belastbare |

Timer som er belastbare får enhetsprisen fra Business Central på linjen i prosjektkladden. Timer som ikke er belastbare får enhetspris 0.

:::warning
Dersom **Belastbar dimensjonsid** er tom, eller registreringen ikke har en belastbar verdi, er timene ikke belastbare, og alle linjer i prosjektkladden får enhetspris 0.
:::
