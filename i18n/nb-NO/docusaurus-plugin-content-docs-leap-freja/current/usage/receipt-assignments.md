---
sidebar_position: 3
---

# Mottakstildelinger

Mottakstildelinger representerer inngående lageroperasjoner — varer som mottas til et Freja-administrert lager. De kan opprettes fra bestillinger.

## Opprette en mottakstildeling fra en bestilling

1. Åpne **Bestillingen** i Business Central
2. Klikk handlingen **Opprett mottakstildeling** (i Freja-handlingsgruppen)
3. Systemet kontrollerer:
   - At mottak er aktivert i Freja-oppsett
   - At minst én ordrelinje har varer som skal mottas til en Freja-lokasjon
   - At ingen pågående mottakstildeling allerede finnes for denne ordren
4. Mottakstildelingen opprettes med status **Opprettet**. Hvis **Send umiddelbart** er aktivert i Freja-oppsett, settes den automatisk i kø for sending med det samme

## Eksportere mottakstildelingen manuelt

Når tildelingen er opprettet, kan den eksporteres og sendes til Freja manuelt. Åpne mottakstildelingen enten ved å:

- Søke etter **Mottakstildelinger** i Business Central, eller
- Åpne bestillingen og klikke **Vis mottakstildeling** under fanen **Freja**

Deretter:

1. Klikk handlingen **Send til Freja**
2. Tildelingsstatusen oppdateres til **Klar for sending** og deretter **Sendt** når den er overført

Hvis jobbkøen er konfigurert for automatisk behandling, skjer dette automatisk. Se [Automatisering](../../automation) for detaljer.

## Behandle mottaksbekreftelser manuelt

Når Freja har behandlet det inngående mottaket, plasseres en responsfil i den innkommende mappen.

1. Åpne mottakstildelingen og klikk **Oppdater fra Freja**, eller la den automatiserte jobbkøen behandle den
2. Systemet leser bekreftede antall, lotnumre, serienumre og utløpsdatoer
3. Tildelingsstatusen oppdateres til **Behandlet**
4. Klikk **Oppdater kildedokument** på kildebestillingen for å påføre de bekreftede antallene
5. Tildelingsstatusen oppdateres til **Fullført**
6. Avhengig av **Oppdateringshandling** konfigurert i Freja-oppsett, kan bestillingen være klar for bokføring, eller kan allerede ha blitt bokført
