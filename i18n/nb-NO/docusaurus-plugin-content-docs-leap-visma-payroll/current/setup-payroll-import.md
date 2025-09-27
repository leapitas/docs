# Oppsett for Visma Lønnsimport


Når «Leap Visma Payroll Import» er installert på ditt Business Central miljø må det fullføres et oppsett før man kan ta produktet i bruk.

## Angi tillatelser

### 1. Åpne brukerlisten
Trykk på **søk** i Business Central og søk etter **"Brukere"**.

### 2. Velg brukere
I listen over brukere klikk på brukeren(e) som skal ha tilgang til Leap Visma Payroll Import.

### 3. Tildel tillatelsessett
Under **Brukertillatelsessett** angi:

| Tillatelsessett | Beskrivelse |
|----------------|-------------|
| **LEAPIBASIC** | For de som skal ha tilgang til å bruke importen og endre tilordninger |
| **LEAPIFULL** | For de som i tillegg til bruk og tilordning skal gjøre oppsett for tilkobling til Visma Payroll |

## Åpne oppsettet

### Via assistert oppsett
1. I Business Central trykk på **innstillinger** øverst til høyre
2. Velg **"Assistert oppsett"**
3. Under **"Koble til med andre systemer"** se **"Konfigurer Leap Visma Payroll import"**
4. Trykk på denne for å starte oppsettet

### Alternativ tilgang
Søk etter **"Oppsett for Visma lønnsimport"** direkte i Business Central.

## Grunnleggende oppsett

| Felt | Beskrivelse |
|------|-------------|
| **Aktivert** | Avgjør om import fra Visma Payroll skal aktiveres. Når denne er aktivert vil menypunktet for import være synlig i systemet |
| **Tilgangsnøkkel** | En nøkkel som gir systemet tilgang til å kommunisere med Visma Payroll. Denne skal mottas ved bestilling av Leap Visma Payroll Import |
| **Visma Id** | Unik id fra Visma som identifiserer selskapet i Visma som det skal gjøres oppkobling mot. (Øverst i høyre hjørne i Visma App Store trykk på nedtrekks-ikonet og kopier verdien i Tenant ID) |

## Dimensjonsinnstillinger

| Felt | Beskrivelse |
|------|-------------|
| **Importer dimensjoner** | Avgjør om dimensjoner på lønnstransaksjoner skal importeres fra Visma Payroll til Business Central. Dersom denne er deaktivert vil ikke dimensjoner vises i bildet over lønnstransaksjoner |
| **Håndtering ved manglende dimensjon: Dimensjon** | Angir hva systemet skal gjøre dersom en dimensjon mangler i Business Central |
| **Håndtering ved manglende dimensjon: Dimensjonsverdi** | Angir hva systemet skal gjøre dersom en dimensjonsverdi mangler i Business Central |

### Alternativer for håndtering av manglende dimensjoner

| Alternativ | Beskrivelse |
|------------|-------------|
| **Gi feilmelding** | Stopper import og viser feilmelding hvis dimensjon/verdi mangler |
| **Hopp over** | Ignorerer manglende dimensjoner og fortsetter import |
| **Opprett** | Oppretter automatisk manglende dimensjoner/verdier |

## MVA-innstillinger

| Felt | Beskrivelse |
|------|-------------|
| **Importer MVA-numre** | Avgjør om MVA-numre skal importeres fra Visma Payroll. Når aktivert vil systemet hente MVA-koder for transaksjoner som har dette. **Advarsel**: Denne funksjonen krever tilleggstillatelser og vil gjøre import tregere da systemet må gjøre ekstra API-kall for hver transaksjon |

## Transaksjonsinnstillinger

| Felt | Beskrivelse |
|------|-------------|
| **Grupper transaksjoner** | Angir om systemet skal gruppere transaksjoner som deler kontonummer og dimensjoner. Dette vil redusere antall transaksjoner som bokføres i Business Central |

## Handlinger i oppsettet

| Handling | Beskrivelse |
|----------|-------------|
| **Test tilkoblingen** | Ved å trykke her forsøkes det å gjøre en oppkobling mot Visma Payroll for å verifisere at oppsettet er korrekt |
| **Kontotilordning** | Benyttes for å gjøre knytning mellom finanskonto i Visma og finanskonto i Business Central der hvor disse ikke samsvarer eller man vil overstyre kontonummer i Business Central |
| **Dimensjonstilordning** | Benyttes for å gjøre knytning mellom dimensjon i Visma og dimensjonsverdi i Business Central der hvor disse ikke samsvarer eller man vil overstyre kontonummer i Business Central |
| **MVA-nummertilordning** | Benyttes for å gjøre knytning mellom MVA-numre i Visma Payroll og MVA-numre i Business Central der hvor disse ikke samsvarer eller man vil overstyre MVA-numre i Business Central |