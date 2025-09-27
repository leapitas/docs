# Oppsett for Visma Employees Import
Når «Leap Visma Employees Import» er installert på ditt Business Central miljø må det fullføres et oppsett før man kan ta produktet i bruk.

## Angi tillatelser

### 1. Åpne brukerlisten
Trykk på **søk** i Business Central og søk etter **"Brukere"**.

### 2. Velg brukere
I listen over brukere klikk på brukeren(e) som skal ha tilgang til Leap Visma Employees Import.

### 3. Tildel tillatelsessett
Under **Brukertillatelsessett** angi:

| Tillatelsessett | Beskrivelse |
|----------------|-------------|
| **LEAEIBASIC** | For de som skal ha tilgang til å sette i gang importen |
| **LEAEIFULL** | For de som i tillegg til bruk skal gjøre oppsett for tilkobling til Visma Employees |

## Åpne oppsettet

### Via assistert oppsett
1. I Business Central trykk på **innstillinger** øverst til høyre
2. Velg **"Assistert oppsett"**
3. Under **"Koble til med andre systemer"** se **"Konfigurer Leap Visma Employees import"**
4. Trykk på denne for å starte oppsettet

### Alternativ tilgang
Søk etter **"Oppsett for Visma ansattimport"** direkte i Business Central.

## Felter i oppsettet

| Felt | Beskrivelse |
|------|-------------|
| **Aktivert** | Avgjør om import fra Visma Employees skal aktiveres. Du må aktivere integrasjonen før du kan importere data fra Visma Employees |
| **Api-tilgangsnøkkel** | En nøkkel som gir systemet tilgang til å kommunisere med Visma Employees. Denne skal mottas ved bestilling av Leap Visma Employees Import |
| **Visma Id (tenant)** | Unik id fra Visma som identifiserer selskapet i Visma som det skal gjøres oppkobling mot. (Øverst i høyre hjørne i Visma App Store trykk på nedtrekks-ikonet og kopier verdien i Tenant ID) |
| **Bruk Visma nummerserie** | Angir om nummer på ansatt fra Visma skal brukes som ansattnummer og ressursnummer i Business Central. Ønsker du å benytte samme nummerserie i begge systemer, sørg for at nummerseriene for ansatt og ressurs er satt opp med manuelle nr |
| **Importer dimensjoner** | Angir om standarddimensjoner skal opprettes på ansatt og ressurs basert på dimensjoner i Visma |
| **Ansatt nummerserie** | Viser hva som er angitt som nummerserie for ansatt i BC |
| **Ansatt malkode** | Angir hvilken ansattmal som skal brukes ved opprettelse av ansatte fra Visma |
| **Oppdater ressurser** | Viser verdien "opprett ressurs automatisk" fra personaloppsettet. Dette må stå til "Ja" dersom ressurser skal opprettes |
| **Ressurs malkode** | Angir hvilken ressursmal som skal brukes ved opprettelse av ressurser |
| **Ressurs nummerserie** | Viser hva som er angitt som nummerserie for ressurser i BC |
| **Oppdater enhetskost på ressurs** | Angir om en beregnet enhetskost (time) skal angis på ressursen ved oppdatering |

## Handlinger i oppsettet

| Handling | Beskrivelse |
|----------|-------------|
| **Test tilkobling** | Ved å trykke her forsøkes det å gjøre en oppkobling mot Visma Employees for å verifisere at oppsettet er korrekt |
| **Opprett jobbkø** | Oppretter en post i jobbkø som muliggjør automatisk import av data fra Visma |
| **Dimensjonstilordning** | Benyttes for å gjøre knytning mellom dimensjon i Visma og dimensjonskode i Business Central der hvor disse ikke samsvarer eller man vil overstyre i Business Central |
| **Ansattmapping** | Åpner skjermbildet for mapping av ansatte og ressurser. Dette brukes dersom du har ansatte eller ressurser i Business Central fra før og ønsker å koble disse til Visma ansatte for å unngå duplikater |
| **Ansatte** | Åpner ansattlisten i Business Central |
| **Synkroniseringslogg** | Åpner logg for importen. Her kan man se ev. feil ved import |