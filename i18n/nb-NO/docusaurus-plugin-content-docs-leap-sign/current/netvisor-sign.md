# Netvisor Sign

:::info
Visma Sign har byttet navn til **Netvisor Sign** fra 11. november 2026. Tjenesten og integrasjonen fungerer akkurat som før, og det kreves ingen endringer i Business Central. E-poster fra tjenesten (for eksempel signeringsinvitasjoner) sendes nå fra **netvisor.sign@visma.com**.
:::

For å aktivere Netvisor Sign-konnektoren i Business Central må du gå gjennom en rask onboarding-prosess med Leap IT AS. Vennligst kontakt din Business Central-partner eller Leap IT AS for å avtale et møte for onboarding.

Gjennom onboarding-prosessen vil vi konfigurere Business Central og Netvisor Sign med korrekte verdier for å sikre at integrasjonen fungerer.

## Forbered for onboarding
Før onboarding-prosessen, vennligst forbered trinnene nedenfor.

### 1. Netvisor Sign kunde
Hvis selskapet ditt ikke bruker Netvisor Sign sine tjenester for øyeblikket, må du kontakte Netvisor Sign for å bli kunde.

### 2. Last ned Business Central appen
Hvis du ikke allerede har installert Netvisor Sign Appen for Business Central, vennligst installer den fra [Microsoft Marketplace](https://marketplace.microsoft.com/).

### 3. Verifiser tillatelsessett i Business Central
Sørg for at brukeren(e) som skal bruke Leap Sign har følgende tillatelsessett tildelt: **LEALSUSER**.

### 4. Sjekk Netvisor Sign oppsett i Business Central
Søk etter **Signeringsoppsett** i det generelle søket i Business Central og sørg for at du kan åpne siden. Verdiene i feltene vil bli fylt ut under onboarding-prosessen.

| Felt | Beskrivelse |
|-------|-------------|
| **E-signeringstjeneste** | Dette må settes til Netvisor Sign |
| **Api-nøkkel** | Api-nøkkel levert av Leap IT AS |
| **E-signeringstjenestekonto** | Organisasjonsnummeret (samme som i Netvisor Sign) |
| **Standard Mappenavn** | Mappen i Netvisor Sign for å lagre dokumenter |
| **Standard Signaturtype** | Standard signaturtype for selskapet i Business Central |

### 5. Sjekk tillatelser i Netvisor Sign
Sørg for følgende:

- Du har en bruker og kan logge inn på [https://netvisorsign.com/](https://netvisorsign.com/)
- Klikk **Innstillinger → Organisasjonsinfo** og verifiser at du har et organisasjonsnummer
- Verifiser at du har tillatelse til å gå inn på **Innstillinger → Integrasjoner**