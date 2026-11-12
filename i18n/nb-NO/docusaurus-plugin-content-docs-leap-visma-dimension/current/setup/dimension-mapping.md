---
sidebar_position: 2
---

# Dimensjonstilordning

Dimensjonstilordningene bestemmer hva som sendes til Visma Payroll. Hver tilordning kobler en kilde i Business Central til en kostnadsbærertype i Visma Payroll. Kun poster som dekkes av en aktiv tilordning sendes.

Åpne tilordningene fra **Visma dimensjonsoppsett** med handlingen **Dimensjonstilordning**, eller søk etter **Visma dimensjonstilordning**.

## Felter

| Felt | Beskrivelse |
|------|-------------|
| **Beskrivelse** | En beskrivelse av tilordningen, for eksempel «Avdeling» |
| **Fra type** | Hva som sendes til Visma Payroll: **Dimensjon**, **Prosjekt** eller **Prosjektoppgave** |
| **Dimensjonskode** | Dimensjonen som verdiene sendes fra. Brukes, og kan kun redigeres, når **Fra type** er **Dimensjon** |
| **Visma CostUnitType-kode** | ID-en til kostnadsbærertypen i Visma Payroll som verdiene opprettes under. Kostnadsbærertypen må finnes i Visma Payroll |
| **Aktiv** | Angir om tilordningen er i bruk. Endringer sendes kun for aktive tilordninger |

## Opprette en tilordning

1. Klikk **Ny**
2. Fyll inn **Beskrivelse**
3. Velg **Fra type**
4. Dersom **Fra type** er **Dimensjon**, velg dimensjonen i **Dimensjonskode**
5. Fyll inn ID-en til kostnadsbærertypen fra Visma Payroll i **Visma CostUnitType-kode**
6. Slå på **Aktiv**

### Eksempel

| Beskrivelse | Fra type | Dimensjonskode | Visma CostUnitType-kode | Aktiv |
|-------------|----------|----------------|-------------------------|-------|
| Prosjekt | Prosjekt | | 7 | Ja |
| Avdeling | Dimensjon | AVDELING | 1 | Ja |
| Prosjektoppgave | Prosjektoppgave | | 5 | Nei |

Du kan ha flere aktive tilordninger av samme type, for eksempel to dimensjoner som sendes til to ulike kostnadsbærertyper. En kilde kan også tilordnes mer enn én kostnadsbærertype, og endringen sendes da til hver av dem.

## Hva som sendes

| Fra type | Kode i Visma Payroll | Navn i Visma Payroll |
|----------|----------------------|----------------------|
| **Dimensjon** | Dimensjonsverdikoden | Navnet på dimensjonsverdien |
| **Prosjekt** | Prosjektnr. | Prosjektbeskrivelsen |
| **Prosjektoppgave** | Prosjektoppgavenr. | Beskrivelsen av prosjektoppgaven |

:::info Prosjektoppgaver
Prosjektoppgaver sendes kun med prosjektoppgavenr., ikke prosjektnr. Prosjektoppgaver med samme nr. på ulike prosjekter oppdaterer derfor samme kostnadsbærer i Visma Payroll.
:::

:::warning Eksisterende poster
Kun endringer som gjøres etter at en tilordning er satt opp og aktiv, sendes. Dimensjonsverdier, prosjekter og prosjektoppgaver som allerede finnes, sendes ikke før de endres. Sørg for at de eksisterende verdiene finnes i Visma Payroll før du starter, eller gjør en endring på dem slik at de legges i synkroniseringskøen.
:::
