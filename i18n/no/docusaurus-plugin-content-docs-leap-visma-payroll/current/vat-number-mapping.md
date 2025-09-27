# MVA-nummertilordning

Dersom det er forskjeller mellom MVA-numre i Business Central og Visma Payroll, kan dette tilordnes i et eget oppsett for å sikre riktig MVA-håndtering under import.

## Når trenger du MVA-nummertilordning?

MVA-nummertilordning er nødvendig når **MVA-numre** er forskjellige mellom systemene

## Forutsetninger

Før oppsett av MVA-nummertilordning:
- **Importer MVA-numre** må være aktivert i Visma Payroll-oppsettet
- Tilleggsscope `payrollno:transactions:read` må være akseptert av kunden
- MVA-numre må være riktig konfigurert i både Business Central og Visma Payroll

## Åpne MVA-nummertilordning

### Via oppsettet
1. **Søk etter** og åpne **"Oppsett for Visma lønnsimport"**
2. **Trykk på** **"MVA-nummertilordning"** for å åpne skjermbildet for MVA-nummertilordninger
3. **Angi tilordninger** du ønsker for MVA-numre

## Hvordan sette opp tilordning

| Felt | Beskrivelse |
|------|-------------|
| **Visma MVA-nummer** | MVA-nummeret fra Visma Payroll som skal tilordnes |
| **MVA-nummer** | Tilsvarende MVA-nummer i Business Central som skal brukes i stedet |