---
sidebar_position: 2
---

# Plukktildelinger

Plukktildelinger representerer utgående lageroperasjoner — varer som sendes ut fra et Freja-administrert lager. De kan opprettes fra salgsordrer.

## Opprette en plukktildeling fra en salgsordre

1. Åpne **Salgsordren** i Business Central
2. Klikk handlingen **Opprett plukktildeling** (i Freja-handlingsgruppen)
3. Systemet kontrollerer:
   - At plukk er aktivert i Freja-oppsett
   - At minst én ordrelinje har varer som skal sendes fra en Freja-lokasjon
   - At ingen pågående plukktildeling allerede finnes for denne ordren
4. Plukktildelingen opprettes med status **Opprettet**. Hvis **Send umiddelbart** er aktivert i Freja-oppsett, settes den automatisk i kø for sending med det samme

## Eksportere plukktildelingen manuelt

Når tildelingen er opprettet, kan den eksporteres og sendes til Freja manuelt. Åpne plukktildelingen enten ved å:

- Søke etter **Plukktildelinger** i Business Central, eller
- Åpne salgsordren og klikke **Vis plukktildelinger** under fanen **Freja**

Deretter:

1. Klikk handlingen **Send til Freja**
2. Tildelingsstatusen oppdateres til **Klar for sending** og deretter **Sendt** når den er overført

Hvis jobbkøen er konfigurert for automatisk behandling, skjer dette automatisk. Se [Automatisering](../../automation) for detaljer.

## Behandle plukkrekvisisjoner manuelt

Når Freja har utført plukket, plasseres en responsfil i den innkommende mappen.

1. Åpne plukktildelingen og klikk **Oppdater fra Freja**, eller la den automatiserte jobbkøen behandle den
2. Systemet leser bekreftede antall, lotnumre, serienumre og utløpsdatoer
3. Tildelingsstatusen oppdateres til **Behandlet**
4. Klikk **Oppdater kildedokument** på kildesalgsordren for å påføre de bekreftede antallene
5. Tildelingsstatusen oppdateres til **Fullført**
6. Avhengig av **Oppdateringshandling** konfigurert i Freja-oppsett, kan salgsordren være klar for bokføring, eller kan allerede ha blitt bokført
