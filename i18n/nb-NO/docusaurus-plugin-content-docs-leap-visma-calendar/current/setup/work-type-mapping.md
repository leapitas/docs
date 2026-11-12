---
sidebar_position: 2
---

# Tilordning av arbeidstype

Tilordningen av arbeidstype kobler registreringstypene i Visma Calendar til arbeidstyper i Business Central. Arbeidstypen settes på hver linje i prosjektkladden, og avgjør for eksempel enhetsprisen for timene.

Åpne tilordningen fra **Visma Calendar oppsett** med handlingen **Tilordning av arbeidstype**, eller søk etter **Tilordning av arbeidstype**.

## Importer kategorier

Kategoriene og registreringstypene leses fra Visma Calendar, så du trenger ikke legge dem inn selv.

1. Klikk **Importer kategorier (arbeidstyper)**
2. Kategoriene i Visma Calendar vises i fet skrift, med registreringstypene under seg

Kjør **Importer kategorier (arbeidstyper)** på nytt når nye kategorier eller registreringstyper legges til i Visma Calendar. Eksisterende linjer og tilordninger beholdes, og beskrivelsene oppdateres.

## Felt

| Felt | Beskrivelse |
|------|-------------|
| **Ekstern kategoribeskrivelse** | Navnet på kategorien i Visma Calendar |
| **Ekstern registreringstype beskrivelse** | Navnet på registreringstypen i Visma Calendar |
| **Tilordnet arbeidstypekode** | Arbeidstypen i Business Central som brukes for timer med denne registreringstypen. Kan kun settes på registreringstyper, ikke på kategorier |
| **Tilordnet arbeidstype beskrivelse** | Beskrivelsen av den tilordnede arbeidstypen |
| **Skjul beskrivelse** | Angir at kommentaren på registreringen ikke kopieres til linjen i prosjektkladden. Kan kun settes på registreringstyper |
| **Ekstern Id** | ID-en til kategorien i Visma Calendar |
| **Ekstern registreringstype Id** | ID-en til registreringstypen i Visma Calendar |

## Sette opp tilordningen

1. Klikk **Importer kategorier (arbeidstyper)**
2. For hver registreringstype som brukes for timer på prosjekter, velg arbeidstypen i **Tilordnet arbeidstypekode**
3. Slå på **Skjul beskrivelse** for registreringstyper der kommentaren ikke skal vises på linjen i prosjektkladden

:::tip
Timer med en registreringstype som ikke er tilordnet overføres likevel til prosjektkladden, men uten arbeidstype.
:::
