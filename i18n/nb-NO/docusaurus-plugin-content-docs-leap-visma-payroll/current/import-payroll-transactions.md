# Importere lønnstransaksjoner i Business Central
Denne guiden viser hvordan du importerer lønnstransaksjoner fra Visma Payroll til Business Central og overfører dem til finanskladd for bokføring.

## Starte importen

### 1. Åpne finanskladd
1. **Søk etter** "finanskladder" i Business Central
2. **Velg** den finanskladden du ønsker å importere lønnstransaksjoner til

### 2. Start importprosessen
1. **Velg** "Lønn" i menyen
2. **Klikk** "Importer Lønnstransaksjoner"

:::info Ekstern tjeneste
Leap Visma Payroll Import bruker Visma Payroll sitt API for å hente data (ekstern tjeneste). Får du meldingen "Utvidelsen Leap Visma Payroll Import fra LEAP IT AS sender en forespørsel til en ekstern tjeneste. Vil du tillatte denne forespørselen?", så velg **"Tillat alltid"**.
:::

## Velg Visma lønnskjøring
Skjermbildet "Velg Visma lønnskjøring" viser en liste over lønnskjøringer fra Visma. Her vises både nye og historiske lønnskjøringer.

### Handlinger i listen

| Ikon | Beskrivelse |
|------|-------------|
| Søk | Søk etter data i listen over lønnskjøringer |
| Rediger | Åpner lønnstransaksjoner for den valgte lønnskjøringen i redigeringsmodus |
| Vis | Åpner lønnstransaksjoner for den valgte lønnskjøringen i visningsmodus |
| Oppdater | Ser etter nye data i Visma og oppdaterer listen over lønnskjøringer |
| Flytt til nye | "Flytt til nye" endrer statusen for valgte lønnskjøringer fra Importert til Ny |
| Flytt til importerte | "Flytt til importerte" endrer statusen for valgte lønnskjøringer fra Ny til Importert |

### Filtreringsalternativer

| Filter | Beskrivelse |
|--------|-------------|
| **Nye** | Viser nye lønnskjøringer fra Visma som skal behandles i Business Central |
| **Importerte** | Viser alle lønnskjøringer som tidligere er overført til finanskladd |
| **Alle** | Viser alle lønnskjøringer fra Visma. Dette inkluderer nye samt lønnskjøringer som er overført til finanskladd tidligere |

### Åpne en lønnskjøring
**Klikk på en lønnskjøring** for å åpne lønnstransaksjoner for den valgte lønnskjøringen i redigeringsmodus.

## Behandle lønnskjøring

### Oversikt over transaksjoner
I skjermbildet ser du nå en oversikt over den valgte lønnskjøringen med **transaksjoner** slik de ligger i Visma Payroll.

### Redigere kontonummer
- **Kontonummer kan endres** direkte i listen
- **Slike endringer oppdaterer** alle transaksjoner mot den samme kontoen i bildet
- **Oppsettet oppdateres automatisk** slik at tilordningene er like ved neste import

### Endre dimensjonstilordning
For å endre tilordning av dimensjoner:
1. **Klikk på** "Oppsett"
2. **Deretter** "Dimensjonstilordning"
3. **Denne endringen** gjelder til du eventuelt endrer oppsettet igjen

### Angi betalingsdato
**Betalingsdato for lønnskjøringen:**
- **Dersom du angir en dato** i feltet betalingsdato vil datoen benyttes som bokføringsdato når lønnskjøringen overføres til en finanskladd
- **Hvis betalingsdato ikke er fylt ut** vil startdato for lønnsperioden brukes som bokføringsdato

## Overføre til finanskladd

### Overføringsprosess
For å overføre transaksjonene til finanskladd:
1. **Trykk på** "Overfør"
2. **Deretter** "Overfør til kladd"
3. **Transaksjonene overføres** nå til finanskladden
4. **Finanskladden kan bokføres** på vanlig måte