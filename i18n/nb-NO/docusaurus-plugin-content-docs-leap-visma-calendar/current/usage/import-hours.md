---
sidebar_position: 1
---

# Importer timer

Timer importeres fra Visma Calendar og overføres til prosjektkladden fra oppsettet. Du kan starte importen på to måter.

## Fra prosjektkladden

1. Åpne prosjektkladden
2. Under **Forbered**, eller **Funksjoner**, klikk **Importer timer**
3. Legg inn datointervallet som skal importeres i **Periodestart** og **Periodeslutt**, og klikk **OK**

Registreringene leses fra Visma Calendar, og alle registreringer som ikke er overført ennå opprettes som linjer i prosjektkladden.

## Fra Timeposter liste

Bruk **Timeposter liste** dersom du vil kontrollere registreringene før de overføres.

1. Søk etter **Timeposter liste** i Business Central
2. Klikk **Importer timer** og legg inn datointervallet i **Periodestart** og **Periodeslutt**. Registreringene leses inn i listen, men overføres ikke
3. Kontroller registreringene. Se [Timeposter liste](./time-transactions.md)
4. Klikk **Overfør til prosjektkladd** for å opprette linjene i prosjektkladden

:::info
Linjene opprettes alltid i prosjektkladden som er satt opp i **Prosjektkladdemal** og **Prosjektkladd** i [Visma Calendar oppsett](../setup/visma-calendar-setup.md), også når du kjører importen fra en annen kladd.
:::

## Linjene i prosjektkladden

Hver registrering blir én ressurslinje i prosjektkladden.

| Felt | Verdi |
|------|-------|
| **Bokføringsdato** | Startdatoen til registreringen |
| **Dokumentnr.** | Tidspunktet for overføringen |
| **Prosjektnr.** | Verdien til prosjekt-kostnadsbæreren på registreringen |
| **Prosjektoppgavenr.** | Verdien til prosjektoppgave-kostnadsbæreren på registreringen, eller **Prosjektoppgave for timeføring** på prosjektet dersom registreringen ikke har prosjektoppgave |
| **Type** | Ressurs |
| **Nr.** | Ressursnummeret til den ansatte som registrerte timene |
| **Arbeidstypekode** | Arbeidstypen fra [tilordningen av arbeidstype](../setup/work-type-mapping.md) |
| **Antall** | Timene på registreringen. Dersom registreringen ikke har timer, beregnes de fra start- og sluttidspunktet |
| **Beskrivelse 2** | Kommentaren på registreringen, med mindre **Skjul beskrivelse** er slått på for registreringstypen |
| **Enhetspris** | 0 dersom timene ikke er [belastbare](../setup/dimension-mapping.md#belastbare-timer) |
| **Dimensjoner** | Kostnadsbærerne som har en [dimensjonstilordning](../setup/dimension-mapping.md) |

Kladden bokføres ikke automatisk. Kontroller linjene, og bokfør kladden som vanlig.

## Registreringer som ikke overføres

En registrering hoppes over, og blir liggende i **Timeposter liste** som ikke overført, når:

- Registreringen ikke har prosjekt, eller prosjektet ikke finnes i Business Central
- Registreringen ikke har prosjektoppgave, og **Prosjektoppgave for timeføring** er tom på prosjektet

Rett prosjektet i Visma Calendar eller i Business Central, og kjør importen på nytt. Registreringen blir da overført.
