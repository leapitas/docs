---
sidebar_position: 2
---

# Plukkoppdrag

Plukkoppdrag representerer utgående lageroperasjoner — varer som sendes ut fra et Freja-administrert lager. De kan opprettes fra salgsordrer.

## Opprette et plukkoppdrag fra en salgsordre

1. Åpne **Salgsordren** i Business Central
2. Klikk handlingen **Opprett plukkoppdrag** (under Freja)
3. Systemet kontrollerer:   
   - At minst én ordrelinje har varer som skal sendes fra en Freja-lokasjon
   - At ingen pågående plukkoppdrag allerede finnes for denne ordren
4. Plukkoppdraget opprettes med status **Opprettet**. Hvis **Send umiddelbart** er aktivert i Freja-oppsett, settes det automatisk i kø for sending med det samme

## Eksportere plukkoppdraget manuelt

Når oppdraget er opprettet, kan det eksporteres og sendes til Freja manuelt. Åpne plukkoppdraget enten ved å:

- Søke etter **Plukkoppdrag** i Business Central, eller
- Åpne salgsordren og klikke **Se plukkoppdrag** under fanen **Freja**

Deretter:

1. Klikk handlingen **Send til Freja**
2. Oppdragsstatusen oppdateres til **I kø for sending** og deretter **Sendt** når den er overført

Hvis jobbkøen er konfigurert for automatisk behandling, skjer dette automatisk. Se [Automatisering](../../automation) for detaljer.

## Behandle plukkoppdrag manuelt

Når Freja har utført plukket, plasseres en responsfil i den innkommende mappen på SFTP-serveren.

1. Åpne plukkoppdraget og klikk **Oppdater fra Freja**, eller la den automatiserte jobbkøen behandle den
2. Systemet leser bekreftede antall, partinumre, serienumre og utløpsdatoer
3. Oppdragsstatusen oppdateres til **Behandlet**
4. Klikk **Oppdater kildedokument** på plukkoppdraget for å påføre de bekreftede antallene
5. Oppdragsstatusen oppdateres til **Fullført**
6. Avhengig av **Handling ved oppdatering** konfigurert i Freja-oppsett, kan salgsordren være klar for bokføring, eller kan allerede ha blitt bokført
