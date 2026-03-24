---
sidebar_position: 3
---

# Mottaksoppdrag

Mottaksoppdrag representerer inngående lageroperasjoner — varer som mottas til et Freja-administrert lager. De kan opprettes fra bestillinger.

## Opprette et mottaksoppdrag fra en bestilling

1. Åpne **Bestillingen** i Business Central
2. Klikk handlingen **Opprett mottaksoppdrag** (under Freja)
3. Systemet kontrollerer:   
   - At minst én bestillingslinje har varer som skal mottas til en Freja-lokasjon
   - At ingen pågående mottaksoppdrag allerede finnes for denne bestillingen
4. Mottaksoppdraget opprettes med status **Opprettet**. Hvis **Send umiddelbart** er aktivert i Freja-oppsett, settes det automatisk i kø for sending.

## Eksportere mottaksoppdraget manuelt

Når oppdraget er opprettet, kan det eksporteres og sendes til Freja manuelt. Åpne mottaksoppdraget enten ved å:

- Søke etter **Mottaksoppdrag** i Business Central, eller
- Åpne bestillingen og klikke **Se mottaksoppdrag** under fanen **Freja**

Deretter:

1. Klikk handlingen **Send til Freja**
2. Oppdragsstatusen oppdateres til **I kø for sending** og deretter **Sendt** når den er overført

Hvis jobbkøen er konfigurert for automatisk behandling, skjer dette automatisk. Se [Automatisering](../../automation) for detaljer.

## Behandle mottaksbekreftelser manuelt

Når Freja har behandlet det inngående mottaket, plasseres en responsfil i den innkommende SFTP-mappen.

1. Åpne mottaksoppdraget og klikk **Oppdater fra Freja**, eller la den automatiserte jobbkøen behandle den
2. Systemet leser bekreftede antall, partinumre, serienumre og utløpsdatoer
3. Oppdragsstatusen oppdateres til **Behandlet**
4. Klikk **Oppdater kildedokument** på mottaksoppdraget for å påføre de bekreftede antallene
5. Oppdragsstatusen oppdateres til **Fullført**
6. Avhengig av **Handling ved oppdatering** konfigurert i Freja-oppsett, kan bestillingen være klar for bokføring, eller kan allerede ha blitt bokført
