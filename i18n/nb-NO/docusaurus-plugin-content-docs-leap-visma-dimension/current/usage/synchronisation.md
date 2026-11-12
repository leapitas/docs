---
sidebar_position: 1
---

# Synkronisering

I daglig bruk er det ikke noe annet å gjøre enn å vedlikeholde dimensjonsverdier, prosjekter og prosjektoppgaver i Business Central. Hver endring på en post som dekkes av en aktiv [dimensjonstilordning](../setup/dimension-mapping.md) legges i [synkroniseringskøen](./sync-queue.md), og sendes derfra til Visma Payroll.

## Hvilke endringer som sendes

| Endring i Business Central | Resultat i Visma Payroll |
|----------------------------|--------------------------|
| **Opprett** en dimensjonsverdi, et prosjekt eller en prosjektoppgave | Kostnadsbæreren opprettes |
| **Endre** en dimensjonsverdi, et prosjekt eller en prosjektoppgave, for eksempel navn eller beskrivelse | Kostnadsbæreren oppdateres |
| **Sperr** en dimensjonsverdi | Kostnadsbæreren får gårsdagens dato som sluttdato (Gyldig til), slik at den ikke lenger kan brukes |
| **Sperr** et prosjekt, eller sett statusen til **Fullført** | Kostnadsbæreren får gårsdagens dato som sluttdato (Gyldig til), slik at den ikke lenger kan brukes |
| **Sett sluttdato** på en prosjektoppgave | Kostnadsbæreren får sluttdatoen til prosjektoppgaven som sluttdato (Gyldig til) |
| **Gi nytt navn** til en dimensjonsverdi, et prosjekt eller en prosjektoppgave | Kostnadsbæreren med den gamle koden slettes, og en ny opprettes med den nye koden |
| **Slett** en dimensjonsverdi, et prosjekt eller en prosjektoppgave | Kostnadsbæreren slettes |

:::tip
Sperr en dimensjonsverdi eller et prosjekt, eller fullfør prosjektet, i stedet for å slette det når det ikke lenger er i bruk. Kostnadsbæreren får da en sluttdato i Visma Payroll i stedet for å bli slettet.
:::

## Sende køen til Visma Payroll

Køen sendes til Visma Payroll på to måter:

- **Automatisk** av en jobbkøpost, med det intervallet du velger. Se [Automatisering](../automation.md)
- **Manuelt** med handlingen **Synkroniser nå** på siden **Visma synkroniseringskø for kostnadsbærere**. Se [Synkroniseringskø](./sync-queue.md)

Køen sendes kun når **Aktivert** er slått på i [Visma dimensjonsoppsett](../setup/visma-dimension-setup.md).
