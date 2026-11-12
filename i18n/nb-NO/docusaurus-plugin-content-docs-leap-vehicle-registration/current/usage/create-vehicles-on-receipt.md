---
sidebar_position: 2
---

# Opprette kjøretøy ved mottak

Kjøretøy kan opprettes automatisk når kjøretøyene mottas, for eksempel på en bestilling. Hvert kjøretøy er en vare med serienummer, og serienummeret brukes som understellsnummeret til kjøretøyet.

## Sette opp varen

1. Åpne varekortet til kjøretøyvaren
2. Sørg for at varen bruker en varesporingskode med serienummer
3. Slå på **Opprett kjøretøy ved mottak**

## Legge inn kjøretøydataene

Kjøretøydataene legges inn for hvert serienummer på varesporingslinjene.

1. Åpne bestillingen, og velg linjen med kjøretøyvaren
2. Åpne **Varesporingslinjer** fra linjen
3. Legg inn understellsnummeret til hvert kjøretøy i **Serienr.**
4. Fyll ut kjøretøydataene for hvert serienummer:

| Felt | Beskrivelse |
|------|-------------|
| **Typegodkjenningsnr.** | Søk etter malen med typegodkjenningsnummeret. Hvis én mal passer, blir den valgt i **Kjøretøymal**. Hvis flere maler passer, velg malen i listen |
| **Kjøretøymal** | Malen kjøretøyet opprettes fra |
| **Kjøretøy - primærfarge** | Primærfargen til kjøretøyet |
| **Kjøretøy - Produsert den** | Datoen kjøretøyet ble produsert |

Feltene vises på varesporingslinjene for inngående dokumenter.

## Bokføre mottaket

Når mottaket bokføres, opprettes et kjøretøy med status **Kladd** for hvert serienummer, med verdiene fra malen og kjøretøydataene fra varesporingslinjene.

Kjøretøy opprettes for alle inngående bokføringer av varen, som varemottak, oppjusteringer, avgang fra produksjon og salgsreturer. Hvis et kjøretøy med understellsnummeret allerede finnes, opprettes ikke et nytt kjøretøy.

:::info
Hvis ingen mal er lagt inn på varesporingslinjen, opprettes kjøretøyet bare med understellsnummeret og kjøretøydataene fra linjen. Velg malen på kjøretøykortet etterpå for å fylle ut resten.
:::

## Etter bokføring

Kjøretøydataene beholdes på de bokførte postene:

- **Bokførte varesporingslinjer** viser **Kjøretøymal**, **Kjøretøy - primærfarge** og **Kjøretøy - Produsert den**
- **Vareposter** har de samme feltene. De er skjult som standard, og kan vises med **Tilpass**
