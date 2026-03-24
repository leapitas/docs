---
sidebar_position: 1
---

# Om Freja Integrasjonen

Vår Freja Integrasjon er en applikasjon for Microsoft Dynamics 365 Business Central som kobler Business Central sammen med Freja tredjepartslogistikk (3PL). Den automatiserer utvekslingen av lagerdata mellom de to systemene, slik at informasjon flyter automatisk uten manuelle steg.

## Nøkkelfunksjoner

- **Opprettelse av plukkoppdrag**: Konverter salgsordrer og utgående overføringsordrer til plukkoppdrag
- **Opprettelse av mottaksoppdrag**: Konverter bestillinger og inngående overføringsordrer til mottaksoppdrag
- **Synkronisering av varer**: Eksporter informasjon om varer til Freja, inkludert mål, volum og varesporingskrav
- **Automatisk behandling av tilbakemeldinger**: Importer plukk- og mottaksrapporter fra Freja med bekreftede antall
- **Full støtte for varesporing**: Håndter partinumre, serienumre og utløpsdatoer
- **Visning i rollesenter**: Freja-aktiviteter er integrert i rollesentrene Forretningsleder og Ordrebehandler

## Slik fungerer det

Når du oppretter en salgsordre eller bestilling i Business Central, lar Freja Integrasjonen deg registrere et tilsvarende **oppdrag** hos Freja — enten for å plukke og sende ut varer, eller for å motta varer inn. Oppdraget sendes til Freja, Freja utfører lagerarbeidet, og det bekreftede resultatet hentes automatisk tilbake til Business Central og påføres den opprinnelige ordren.

Det finnes to typer tildelinger:

- **Plukkoppdrag** — for utgående forsendelser: varer som sendes ut fra et Freja-lager, hentet fra salgsordrer eller overføringsordrer.
- **Mottaksoppdrag** — for inngående mottak: varer som ankommer et Freja-lager, hentet fra bestillinger eller overføringsordrer.

Hvert oppdrag går gjennom et tydelig sett av statuser, slik at du alltid vet hvor ting står:

1. **Opprettet** — oppdraget er registrert i Business Central
2. **I kø for sending** — oppdraget er klar til å sendes til Freja
3. **Sendt** — oppdraget er levert til Freja
4. **Behandlet** — Freja har utført arbeidet og sendt tilbake bekreftelse
5. **Fullført** — Bekreftede antall er oppdatert på kildedokumentet

Hvis noe skulle gå galt på et hvilket som helst tidspunkt, flagges oppdraget med en feil slik at den kan gjennomgås og løses uten at man mister oversikten over hvor den er i prosessen.
