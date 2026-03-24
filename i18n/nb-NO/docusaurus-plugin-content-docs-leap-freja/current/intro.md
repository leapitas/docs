---
sidebar_position: 1
---

# Om Freja Integrasjon

Freja Integrasjon er en applikasjon for Microsoft Dynamics 365 Business Central som kobler Business Central sammen med Freja tredjepartslogistikk (3PL). Den automatiserer utvekslingen av lageroperasjonsdata mellom de to systemene, slik at informasjon flyter automatisk uten manuelle steg.

## Nøkkelfunksjoner

- **Plukkordreoppretting**: Konverter salgsordrer og overføringsordrer (utgående) til Freja-plukktildelinger
- **Mottakskordreoppretting**: Konverter bestillinger og overføringsordrer (inngående) til Freja-mottakstildelinger
- **Varesynkronisering**: Eksporter varespesifikasjoner til Freja, inkludert mål, volum og varesporingskrav
- **Automatisk responsbehandling**: Importer plukk- og mottaksrapporter fra Freja med bekreftede antall
- **Full varesporingsstøtte**: Håndter lotnumre, serienumre og utløpsdatoer
- **Toveis statusoppdatering**: Påfør automatisk Freja-bekreftede antall tilbake på kildedokumenter
- **Komplett revisjonsspor**: Integrasjonsloggen sporer alle operasjoner med tidsstempler og status
- **Aktivitetscuer i rollsentre**: Freja-aktiviteter er integrert i rollsentrene Business Manager og Ordrebehandler

## Slik fungerer det

Når du oppretter en salgsordre eller bestilling i Business Central, lar Freja Integrasjon deg registrere en tilsvarende **tildeling** hos Freja — enten for å plukke og sende ut varer, eller for å motta varer inn. Tildelingen sendes til Freja, Freja utfører lagerarbeidet, og det bekreftede resultatet hentes automatisk tilbake til Business Central og påføres den opprinnelige ordren.

Det finnes to typer tildelinger:

- **Plukktildelinger** — for utgående forsendelser: varer som sendes ut fra et Freja-lager, hentet fra salgsordrer eller overføringsordrer.
- **Mottakstildelinger** — for inngående mottak: varer som ankommer et Freja-lager, hentet fra bestillinger eller overføringsordrer.

Hver tildeling går gjennom et tydelig sett av statuser, slik at du alltid vet hvor ting står:

1. **Opprettet** — Tildelingen er registrert i Business Central
2. **Klar for sending** — Tildelingen er klar til å sendes til Freja
3. **Sendt** — Tildelingen er levert til Freja
4. **Behandlet** — Freja har utført arbeidet og sendt tilbake bekreftelse
5. **Fullført** — Bekreftede antall er påført kildeordren

Hvis noe går galt på et hvilket som helst tidspunkt, flagges tildelingen med en feil slik at den kan gjennomgås og løses uten at man mister oversikten over hvor den er i prosessen.
