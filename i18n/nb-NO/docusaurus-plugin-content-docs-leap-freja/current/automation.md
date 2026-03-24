---
sidebar_position: 4
---

# Automatisering og jobbkøer

Freja Integration støtter automatisering av SFTP-filoverføringer og tildelingsbehandling via Business Centrals jobbkøsystem.

## Sette opp hoved-jobbkøen

Hoved-integrasjonsjobbkøen håndterer opplasting og nedlasting av alle filer automatisk.

1. Åpne **Freja-oppsett** i Business Central
2. Naviger til seksjonen **Jobbkø** og konfigurer:
   - **SFTP-jobbkøkategorikode**: Velg eller opprett en jobbkøkategori
   - **SFTP-jobbkø kjøringsintervall (minutter)**: Angi hvor ofte jobben skal kjøres (f.eks. 5 minutter)
3. Klikk **Opprett/oppdater jobbkø**

Systemet oppretter en jobbkøpost som kjører integrasjonsplanleggerens kodeenhet.

**Hva jobbkøen gjør:**
- Laster opp utgående filer (plukktildelinger, mottakstildelinger, vareeksporter) til Freja via SFTP
- Laster ned innkommende responsfiler fra Freja via SFTP
- Importerer nedlastede responsfiler og oppdaterer tildelingsstatuser
- Påfører bekreftede antall på kildedokumenter basert på oppdateringshandlingsinnstillingen i Freja-oppsett

**Kjøre prosesser manuelt:**
- **Behandle Freja-integrasjoner**: Utløs alle integrasjonstrinn manuelt umiddelbart
- **Eksporter til SFTP**: Last bare opp utgående filer
- **Importer fra SFTP**: Last ned og behandle bare innkommende filer
- **Slett jobbkø**: Fjern den automatiserte jobbkøposten
- **Test SFTP-tilkobling**: Kontroller SFTP-opplysninger og tilkobling

## Aktivitetscuer i rollsentre

Freja-aktivitetssiden legges automatisk til i rollsentrene **Business Manager** og **Ordrebehandler** når utvidelsen er installert. Den gir en rask oversikt over:

- Plukk- og mottakstildelinger etter status (Opprettet, Klar for sending, Sendt, Behandlet, Fullført)
- Tildelinger med feil
- Aktive jobbkøposter
