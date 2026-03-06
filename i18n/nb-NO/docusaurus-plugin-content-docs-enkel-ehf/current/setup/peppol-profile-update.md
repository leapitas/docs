---
sidebar_position: 5
---

# Oppdatering av profiler basert på Peppol

For å gjøre det enklere å avgjøre om kunder skal motta EHF kan du gjøre en automatisk sjekk mot Peppol-registeret. Dersom kunden har registrert seg som mottaker av EHF skal de dukke opp i registeret.

## Oppsett av Peppol Register

1. Søk på "**Peppol Register Oppsett**" i søkemenyen og trykk på tilhørende lenke
2. I felt "**Profil for dokumentsending - Registrert i Peppol**" legg inn profilen du opprettet for sending av EHF
3. I felt "**Profil for dokumentsending - Ikke registrert i Peppol**" legg inn ønsket profil, f.eks. profil for sending av bilag på e-post
4. Huk av i felt "**Aktiv**"
5. Konfigurer eventuelt "**Oppdater ved bokføring**" for å automatisk sjekke og oppdatere kundens PEPPOL-registreringsstatus når et salgsbilag bokføres:
   - **Nei** (standard) – ingen sjekk utføres ved bokføring.
   - **Ja** – PEPPOL-registeret sjekkes i bakgrunnen. Dersom statusen har endret seg, oppdateres profil for dokumentsending automatisk.
   - **Ja - spør** – PEPPOL-registeret sjekkes. Dersom statusen har endret seg, får brukeren forespørsel om profilen skal oppdateres.
   - Begge feltene for profil for dokumentsending må være konfigurert for at denne funksjonen skal være aktivert.

Når du nå legger inn nye kunder og har fylt ut både organisasjonsnummer og lands-/områdekode, vil systemet gjøre oppslag mot Peppol-registeret og automatisk angi profil for dokumentsending avhengig av om kunden er registrert, eller ikke.

## Masseoppdatering av kunder

Det er også mulig å kjøre oppslaget som en masseoppdatering av kunder:

1. Søk på "**Peppol register oppdatering**" i søkemenyen og trykk på tilhørende lenke
2. Legg inn ønskede filter dersom du kun ønsker å oppdatere spesifikke kunder
3. Hvis du ønsker å kjøre for alle kunder, trykk OK
