---
sidebar_position: 2
---

# Kjøretøymaler

En kjøretøymal inneholder spesifikasjonene til en kjøretøymodell. Når et kjøretøy opprettes fra malen, kopieres spesifikasjonene til kjøretøyet, slik at du bare legger dem inn én gang for hver modell. Åpne malene ved å søke etter **Kjøretøymaler** i Business Central.

## Opprette en mal

1. Søk etter **Kjøretøymaler** og klikk **Ny**
2. Legg inn **Kjøretøymal** og **Malnavn**
3. Fyll ut feltene under **Kjøretøydetaljer**, **Vekt** og **Motor**

:::tip Finn maler med typegodkjenningsnummer
Når du oppretter et kjøretøy, kan du søke etter malen med typegodkjenningsnummeret. Søket finner malene der koden i **Kjøretøymal** starter med typegodkjenningsnummeret. Bruk typegodkjenningsnummeret som starten på malkoden, slik at riktig mal blir funnet.
:::

## Generelt

| Felt | Beskrivelse |
|------|-------------|
| **Kjøretøymal** | Den unike koden for malen |
| **Malnavn** | Et beskrivende navn for malen |

## Kjøretøydetaljer

| Felt | Beskrivelse |
|------|-------------|
| **Merke** | Fabrikanten av kjøretøyet |
| **Handelsbetegnelse** | Handelsbetegnelsen på kjøretøyet |
| **Kjøretøykategori** | Kategorikoden til kjøretøyet, for eksempel M1, N1 eller T3b |
| **Fullføringsgrad** | Om kjøretøyet er fullført (C), ikke fullført (I) eller fullført i flere stadier (V) |
| **Typegodkjenningstype** | Typen typegodkjenning: NAT, NKS, KS, EC eller IND |
| **Type** | Typebetegnelsen til kjøretøyet |
| **Variant** | Variantbetegnelsen til kjøretøyet |
| **Versjon** | Versjonsbetegnelsen til kjøretøyet |
| **Typegodkjenningsnr.** | Typegodkjenningsnummeret til kjøretøyet |

## Vekt

| Felt | Beskrivelse |
|------|-------------|
| **Kjøretøyvekt i kjøreklar tilstand (kg)** | Vekten av kjøretøyet i kjøreklar tilstand, i kilogram |
| **Faktisk kjøretøyvekt (kg)** | Den faktiske vekten på kjøretøyet, i kilogram |

## Motor

Feltene under **Motor** er valgfrie. De tas bare med i IVI-dokumentet når de er fylt ut.

| Felt | Beskrivelse |
|------|-------------|
| **Drivstoff** | Drivstoffet til kjøretøyet, valgt fra listen [Drivstoff for kjøretøy](./vehicle-fuels.md) |
| **Drivstoffbeskrivelse** | Beskrivelsen av valgt drivstoff |
| **Slagvolum (cm3)** | Slagvolumet til motoren i kubikkcentimeter. La feltet stå tomt for rene elbiler |
| **Motoreffekt (kW)** | Maksimal netto motoreffekt for forbrenningsmotoren, i kilowatt |

## Obligatoriske felt

Følgende felt må være fylt ut på kjøretøyet før IVI-dokumentet kan genereres. Fyll dem ut på malen, slik at kjøretøyene får dem fra malen:

- **Merke** og **Handelsbetegnelse**
- **Type**, **Variant** og **Versjon**
- **Typegodkjenningsnr.**
- **Kjøretøyvekt i kjøreklar tilstand (kg)** og **Faktisk kjøretøyvekt (kg)**

## Vedlegg

Malkortet har en faktaboks for **Vedlegg**. Dra og slipp filer på faktaboksen, eller bruk **Last opp filer**, for å legge ved dokumenter som samsvarssertifikat.

Vedleggene hører til malen. De kopieres ikke til kjøretøyene som opprettes fra malen. Når en mal slettes, slettes også vedleggene.

## Endre en mal

Endringer på en mal endrer ikke kjøretøyene som allerede er opprettet fra den. For å oppdatere et kjøretøy med de nye verdiene, velg malen på nytt i **Kjøretøymal** på kjøretøykortet. Se [Endre malen på et kjøretøy](../usage/create-vehicles.md#endre-malen-på-et-kjøretøy).
