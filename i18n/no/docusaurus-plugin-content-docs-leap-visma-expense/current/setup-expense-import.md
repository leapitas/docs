# Oppsett for Visma Expense Import

## Angi tillatelser

1. Trykk på søk i Business Central og søk etter Brukere.
2. I listen over brukere klikk på brukeren(e) som skal ha tilgang til Leap Visma Payroll Import.
3. Under Brukertillatelsessett angi LEAVEAll for de som skal ha tilgang til å bruke løsningen.

## Åpne oppsettet

I søkemenyen i Business Central søk på «Visma Expense Oppsett» og trykk på lenken.

### Generelt

| Felt | Beskrivelse |
|------|-------------|
| Aktivert | Angir om integrasjonen er aktiv eller ikke. |
| Visma Id | Angir koden som identifiserer kundens visma-miljø. (Øverst i høyre hjørne i Visma App Store trykk på nedrekks-ikonet og kopier verdien i Tenant ID). |

### Bokføring

| Felt | Beskrivelse |
|------|-------------|
| Bokfør til | Angir hvordan reisetransaksjoner skal bokføres. Følgende valg er tilgjengelige:<br/>• Finans - Vil skape føringer i finanskladd som finanskladdelinjer.<br/>• Finans og prosjekt - vil skape føringer i finanskladd som finanskladdelinjer, men med prosjektnummer og prosjektoppgave påstemplet. Dette fører til at det også skapes føringer i prosjektregnskapet ved at prosjektposter dannes.<br/>• Prosjekt - Vil skape føringer i prosjektregnskapet ved at prosjektposter dannes. |
| Kladdemalnavn | Angir kladdemal som skal benyttes ved bokføring. Dette peker enten mot en finanskladd, eller prosjektkladd avhengig av valg i felt Bokfør-til. |
| Kladdenavn | Angir kladden som skal benyttes ved bokføring. Dette peker enten mot en finanskladd, eller prosjektkladd avhengig av valg i felt Bokfør-til. |

### Prosjektbokføring

| Felt | Beskrivelse |
|------|-------------|
| Bruk fast finanskonto for prosjekt | Angir om en og samme finanskonto skal benyttes for alle føringer |
| Fast finanskonto for prosjekt | Angir finanskonto som skal benyttes for alle føringer. |
| Prosjektdimensjons id | Angir kostnadsbæreren i Visma som tilsvarer prosjektnummer i Business Central. |
| Håndtering av prosjektoppgave | Angir hvordan prosjektoppgaven skal avgjøres. Følgende valg er tilgjengelige:<br/>• Bruk fast - Angir at en fast prosjektoppgave skal benyttes for bokføring mot alle prosjekter. Denne prosjektoppgaven må finnes for alle prosjekter.<br/>• Bruk fast per prosjekt - Angir at det settes opp en fast prosjektoppgave per prosjekt. Man angir dette på prosjektkortet under Generelt i felt "Prosjektoppgave for reise og utlegg".<br/>• Tilordne fra dimensjon - Angi en kostnadsbærer i Visma som tilsvarer prosjektoppgavenummer i Business Central. |
| Prosjektoppgavenr. | Angir den faste prosjektoppgaven som skal benyttes for alle prosjekter. Kun relevant dersom Bruk fast er valgt som håndtering av prosjektoppgave. |
| Prosjektoppgave per prosjekt | Feltet viser antall prosjekter som er satt opp med prosjektoppgave for reise og utlegg. Ved trykk på feltet åpnes prosjektlisten. For hvert prosjekt legger man inn prosjektoppgave under Generelt på prosjektkortet. Feltet er kun relevant dersom Bruk fast per prosjekt er valgt som håndtering av prosjektoppgave. |
| Prosjektoppgave dimensjons id | Angir kostnadsbæreren i Visma som tilsvarer prosjektoppgavenummer i Business Central. Feltet er kun relevant dersom Tilordne fra dimensjon er valgt som håndtering av prosjektoppgave. |
| Bokfør transaksjoner uten prosjektnr | Angir om du også ønsker å bokføre til prosjekt dersom transaksjonene ikke er merket med kostnadsbærer for prosjekt. |
| Prosjektnr. For transaksjoner uten prosjekt | Angir et fast prosjekt der transaksjoner som ikke er merket med kostnadsbærer for prosjekt føres mot. |
| Prosjektoppgavenr. For transaksjoner uten prosjekt | Angir en fast prosjektoppgave der transaksjoner som ikke er merket med kostnadsbærer for prosjekt føres mot. |
| Håndtering av betalt av arbeidsgiver | Angir hvordan du ønsker å importere transaksjoner markert som betalt av arbeidsgiver. Følgende valg er tilgjengelig.<br/>• Ignorer – Hopper over transaksjonen under import.<br/>• Snu fortegn – Importerer transaksjonen, men snur fortegnet på beløpet. |

### Finansbokføring

| Felt | Beskrivelse |
|------|-------------|
| Balansekontotype | Angir hvordan reisetransaksjonene skal bokføres mot finans. Følgende valg er tilgjengelige:<br/>• Ansatt – Føringer føres mot ansattreskontro. OBS! Merk at dette krever knytning mellom ansatte i Visma Employees og ansatte i Business Central. Du må derfor ta i bruk vår tilleggsapp «Visma Employees Import» for å synkronisere ansatte mellom systemene.<br/>• Finanskonto – En fast balansekonto benyttes ved bokføring mot finans. |

### Dimensjoner

| Felt | Beskrivelse |
|------|-------------|
| Importer dimensjoner | Angir om du ønsker at kostnadsbærere i Visma skal legges til som dimensjoner i Business Central. |
| Dimensjonstilordninger | Viser antall dimensjonstilordninger du har konfigurert. Trykk på tallet for å legge til, fjerne eller endre tilordninger. |

### Manglende dimensjonshåndtering

| Felt | Beskrivelse |
|------|-------------|
| Dimensjon | Angi hvordan du ønsker at systemet skal håndtere manglende dimensjoner. Følgende valg er tilgjengelige:<br/>• Gi feilmelding – Gir en feilmelding hvis en dimensjon mangler i Business Central.<br/>• Hopp over – Leser ikke inn dimensjonsverdier for dimensjoner som mangler. |
| Dimensjonsverdi | Angi hvordan du ønsker at systemet skal håndtere manglende dimensjonsverdier. Følgende valg er tilgjengelige:<br/>• Gi feilmelding – Gir en feilmelding hvis en dimensjonsverdi mangler i Business Central.<br/>• Hopp over – Leser ikke inn dimensjonsverdier som mangler i Business Central.<br/>• Opprett – Oppretter dimensjonsverdien i Business Central. Kode og navn vil angis til verdien av kostnadsbæreren i Visma. |

## Dimensjonstilordning

Dimensjonstilordninger angir en tilordning mellom kostnadsbærere i Visma og dimensjoner i Business Central. Angi mapping mellom kostnadsbærere i Visma og dimensjoner i Business Central.

Fra Visma Expense Oppsett trykk på knapp Dimensjonstilordninger. Alternativt kan du trykke på tallet som viser antall konfigurerte dimensjonstilorninger under Bokføring og dimensjoner.

| Felt | Beskrivelse |
|------|-------------|
| Visma dimensjon | Angir kostnadsbæreren i Visma. Dette er ofte et tall mellom 1 og 10. |
| Dimensjon | Angir dimensjonen i Business Central som samsvarer med kostnadsbæreren i Visma. |