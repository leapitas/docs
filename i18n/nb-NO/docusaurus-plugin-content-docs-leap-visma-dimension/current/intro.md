---
sidebar_position: 1
---

# Om Visma Dimension Integration

Leap Visma Dimension Integration holder kostnadsbærerne i Visma Payroll oppdatert fra Microsoft Dynamics 365 Business Central. Når du oppretter, endrer, sperrer, gir nytt navn til eller sletter en dimensjonsverdi, et prosjekt eller en prosjektoppgave i Business Central, sendes endringen til Visma Payroll, slik at de samme verdiene er tilgjengelige når lønn registreres.

## Hovedfunksjoner

- **Business Central som master**: Dimensjonsverdier, prosjekter og prosjektoppgaver vedlikeholdes kun i Business Central, og sendes til Visma Payroll som kostnadsbærere
- **Fleksibel tilordning**: Velg hvilke dimensjoner, og om prosjekter og prosjektoppgaver, som skal sendes, og hvilken kostnadsbærertype i Visma Payroll de hører til
- **Sluttdato**: Når en dimensjonsverdi sperres, et prosjekt sperres eller fullføres, eller en prosjektoppgave får sluttdato, settes sluttdato (Gyldig til) på kostnadsbæreren i Visma Payroll
- **Nytt navn og sletting**: Poster som får nytt navn eller slettes, får også nytt navn eller slettes i Visma Payroll
- **Synkroniseringskø**: Alle endringer legges i en kø, slik at ingenting går tapt om Visma Payroll ikke kan nås. Poster som feiler prøves på nytt og viser feilmeldingen fra Visma Payroll
- **Automatisk synkronisering**: En jobbkøpost sender køen til Visma Payroll med det intervallet du velger

## Slik fungerer det

1. **Tilordne dimensjoner til kostnadsbærertyper**: På siden **Visma dimensjonstilordning** angir du hvilke dimensjoner, prosjekter eller prosjektoppgaver som skal sendes til Visma Payroll, og hvilken kostnadsbærertype i Visma Payroll de hører til.
2. **Jobb som vanlig**: Opprett og vedlikehold dimensjonsverdier, prosjekter og prosjektoppgaver i Business Central. Hver endring på en post som er tilordnet legges i **Visma synkroniseringskø for kostnadsbærere**.
3. **Synkroniser**: Jobbkøen sender køen til Visma Payroll. Poster som sendes uten feil fjernes fra køen. Poster som feiler blir liggende i køen med feilmeldingen, og prøves på nytt ved neste kjøring.

:::info
Leap Visma Dimension Integration sender data én vei, fra Business Central til Visma Payroll. For å hente lønnstransaksjoner med dimensjoner inn i Business Central, bruk [Leap Visma Payroll Import](/nb-NO/leap-visma-payroll/intro).
:::
