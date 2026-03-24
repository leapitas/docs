---
sidebar_position: 4
---

# Automatisering og jobbkøer

Freja Integrasjon støtter automatisering av SFTP-filoverføringer og oppdragsbehandling via Business Centrals jobbkøsystem.

## Oppsett av hoved-jobbkøen

Hoved-integrasjonsjobbkøen håndterer opplasting og nedlasting av alle filer automatisk.

1. Åpne **Freja-oppsett** i Business Central
2. Naviger til seksjonen **Freja jobbkø** og konfigurer:
   - **SFTP-jobbkøkategorikode**: Velg eller opprett en jobbkøkategori
   - **SFTP-jobbkø kjøringsintervall (minutter)**: Angi hvor ofte jobben skal kjøres (f.eks. 5 minutter)
3. Klikk **Opprett/oppdater jobbkø**

Systemet oppretter en jobbkøpost som er ansvarlig for å kjøre jobben regelmessig.

**Hva jobbkøen gjør:**
- Laster opp utgående filer (plukkoppdrag, mottaksoppdrag, vareeksporter) til Freja via SFTP
- Laster ned innkommende responsfiler fra Freja via SFTP
- Importerer nedlastede responsfiler og oppdaterer oppdragsstatuser
- Påfører bekreftede antall på kildedokumenter basert på handling ved oppdatering-innstillingen i Freja-oppsett

**Kjøre prosesser manuelt:**
- **Behandle Freja-prosesser**: Utløs alle integrasjonstrinn manuelt umiddelbart
- **Eksporter til SFTP**: Last bare opp utgående filer
- **Importer fra SFTP**: Last ned og behandle bare innkommende filer
- **Slett jobbkø**: Fjern den automatiserte jobbkøposten
- **Test SFTP-tilkobling**: Kontroller SFTP-opplysninger og tilkobling

## Visning i rollesentre

Freja-aktivitetssiden legges automatisk til i rollsentrene **Forretningsleder** og **Ordrebehandler** når utvidelsen er installert. Den gir en rask oversikt over:

- Plukk- og mottaksoppdrag etter status (Opprettet, I kø for sending, Sendt, Behandlet, Fullført)
- Oppdrag med feil
- Aktive jobbkøposter
