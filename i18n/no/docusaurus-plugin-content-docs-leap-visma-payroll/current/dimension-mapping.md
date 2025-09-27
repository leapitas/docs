# Tilordning av dimensjoner og dimensjonsverdier
Dersom det forekommer forskjeller eller mangler i dimensjoner mellom Business Central og Visma Payroll, så kan dette tilordnes i et eget oppsett.

## Når trenger du dimensjonstilordning?

Dimensjonstilordning er nødvendig når:
- **Dimensjonskoder** er forskjellige mellom systemene
- **Ønsker å overstyre** automatisk mapping

## Åpne dimensjonstilordning

### Via oppsettet
1. **Søk etter** og åpne **"Oppsett for Visma Lønnsimport"**
2. **Klikk på** **"Dimensjonstilordning"** for å åpne skjermbildet for dimensjonstilordninger
3. **Legg inn tilordninger** man ønsker mellom Business Central og Visma Payroll.

## Indikering av manglende tilordninger

### I lønnstransaksjonslisten
Dersom en dimensjon fra Visma ikke er tilordnet, vil dette indikeres i listen over lønnstransaksjoner ved at det står **[Mangler]** over dimensjonsverdiene i listen. Basert på hva du har angitt i Håndtering ved manglende dimensjon i oppsettet vil dette gi en feilmelding eller ignoreres ved import til finanskladd.

## Håndtering av dimensjonsverdier

### Interaktiv redigering
Man kan alltid **klikke på en dimensjonsverdi** for å opprette eller endre en verdi direkte fra lønnstransaksjonslisten.

### Fargeindikering basert på oppsett

Avhengig av hva du har valgt i oppsettet for håndtering av manglende dimensjonsverdi vil dimensjonsverdier vises med forskjellige farger:

#### Gi feilmelding
- **Blå farge**: Dimensjonsverdier som finnes i systemet
- **Rød farge**: Dimensjonsverdier som mangler
- **Klikk** på dimensjonsverdien for å opprette/endre den

#### Hopp over
- **Blå farge**: Dimensjonsverdier som finnes
- **Grå farge**: Dimensjonsverdier som ikke finnes

#### Opprett
- **Blå farge**: Alle dimensjonsverdier vises i blå
- **Ikke uthevet**: Manglende verdier indikeres ved at de ikke er uthevet
- **Automatisk oppretting** av alle manglende dimensjonsverdier ved overføring til finanskladd