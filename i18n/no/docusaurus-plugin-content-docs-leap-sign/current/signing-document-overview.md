# Oversikt over signeringsdokument
:::info
Signeringsdokumentet inneholder alle detaljer og tilhørende informasjon til en elektronisk signatur. Dette inkluderer invitasjoner, vedlegg, signeringsstatus og mer.
:::

## Generelt
Generell informasjon om den elektroniske signaturen.

| Felt | Beskrivelse |
|-------|-------------|
| **Beskrivelse** | Beskrivelsen av signeringsdokumentet |
| **Relasjonstype** | Type relasjon signeringsdokumentet er koblet til. Gyldige alternativer er Blank, Kunde, Leverandør og Ansatt |
| **Relasjonsnr.** | Nummeret på relasjonen, f.eks. Kundenr. |
| **Kontaktnr.** | Kontakten relatert til den spesifikke relasjonen |
| **Status** | Gjeldende status for den elektroniske signaturen |
| **Tilleggsmelding** | Hvis den valgte elektroniske signaturleverandøren har støtte for tilleggsmeldinger på den elektroniske signaturen kan du skrive det i dette feltet |

### Handlinger
| Handling | Beskrivelse |
|--------|-------------|
| **Send** | Sender signeringsdokumentet til signaturleverandøren for å starte signeringsprosessen |
| **Oppdater Status** | Oppdaterer statusen til signeringsdokumentet fra signaturleverandøren |
| **Avbryt** | Avbryter den pågående signeringsprosessen |

## Invitasjoner
Administrer invitasjoner og se signeringsstatusen til de forskjellige partene i signeringsprosessen.

| Felt | Beskrivelse |
|-------|-------------|
| **Navn** | Navn på personen som skal motta invitasjonen |
| **E-post** | E-postadresse til mottakeren av invitasjonen |
| **Status** | Statusen til den spesifikke invitasjonen. Viser en av: Ikke Sendt, Sendt, Åpnet, Signert, Avbrutt |
| **Signaturtype** | Hvordan mottakeren skal signere dokumentet. Gyldige alternativer er Sterk (standard) og Hånd |
| **Språk** | Språket invitasjonen skal mottas på |
| **Mobilnummer** | Mobilnummeret til mottakeren |

## Filer
Viser vedlegg som vil bli inkludert i det elektroniske signeringsdokumentet. Handlinger for å administrere vedlegg er inkludert sammen med en forhåndsvisning.

:::info
Noen leverandører vil slå sammen vedleggene når signeringsprosessen startes. Signeringsdokumentet vil da inneholde ett vedlegg med samme navn som beskrivelsen av signeringsdokumentet.
:::

### Filhandlinger

| Handling | Beskrivelse |
|--------|-------------|
| **Last opp Fil** | Last opp en lokalt lagret fil som del av signeringsdokumentet |
| **Legg til Fra Vedlegg** | Hvis signeringsdokumentets relaterte post inneholder noen dokumentvedlegg, kan du velge å inkludere ett eller flere av disse vedleggene i signeringsdokumentet |
| **Last ned Fil** | Laster ned dokumentet fra signaturleverandøren |