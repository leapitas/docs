---
sidebar_position: 1
---

# Freja-oppsett

Siden **Freja-oppsett** er det sentrale konfigurasjonsstedet for integrasjonen. Åpne den ved å søke etter **Freja-oppsett** i Business Central.

## Generelle innstillinger

| Felt | Beskrivelse |
|------|-------------|
| **Firmanavn** | Din firmaidentifikator brukt i filnavn sendt til Freja |
| **Klient-ID** | Din Freja-klient-ID |
| **Klientnavn** | Ditt Freja-klientnavn |
| **Plukk aktivert** | Aktiver eller deaktiver opprettelse av plukktildelinger |
| **Mottak aktivert** | Aktiver eller deaktiver opprettelse av mottakstildelinger |
| **Send umiddelbart** | Når aktivert, settes en plukk- eller mottakstildeling automatisk i kø for sending så snart den er opprettet |

## SFTP-konfigurasjon

Konfigurer SFTP-opplysningene som brukes til å overføre filer til og fra Freja.

| Felt | Beskrivelse |
|------|-------------|
| **SFTP-vert** | Vertsnavnet til Frejas SFTP-server |
| **SFTP-port** | Portnummer (vanligvis 22) |
| **SFTP-brukernavn** | Ditt SFTP-påloggingsbrukernavn |
| **SFTP-passord** | Ditt SFTP-påloggingspassord |

## Mappestier

Freja bruker separate innkommende og utgående mapper for filutveksling. Du kan konfigurere både produksjons- og testmappestier og bytte mellom dem etter behov.

| Felt | Beskrivelse |
|------|-------------|
| **Utgående mappe** | Mappesti der Business Central laster opp filer til Freja |
| **Innkommende mappe** | Mappesti der Freja plasserer responsfiler |
| **Bruk testmapper** | Bytt mellom test- og produksjonsmappestier |

## Nummerserie

| Felt | Beskrivelse |
|------|-------------|
| **Plukktildelingsnumre** | Nummerserie for plukktildelingsdokumentnumre |
| **Mottakstildelingsnumre** | Nummerserie for mottakstildelingsdokumentnumre |

## Enheter

Angi målenhetene som brukes når varedata sendes til Freja. Disse bør samsvare med enhetene som er forventet i ditt Freja-oppsett.

| Felt | Beskrivelse |
|------|-------------|
| **Vektenhet** | Enhet brukt for varevekter (f.eks. g) |
| **Volumenhet** | Enhet brukt for varevolum (f.eks. cm³) |
| **Lendeenhet** | Enhet brukt for varemål som høyde, bredde og dybde (f.eks. cm) |

## Azure Function-nøkkel

Kommunikasjonen mellom Business Central og SFTP-filutvekslingen går gjennom en Azure Function levert av Leap IT. For å aktivere dette må du angi **Azure Function-nøkkelen** på Freja-oppsett-siden.

:::info
Azure Function-nøkkelen leveres av Leap IT. Kontakt Leap IT for å få nøkkelen din før du konfigurerer integrasjonen.
:::

## Oppdateringshandling

Feltet **Oppdateringshandling** styrer hva som skjer med kildedokumentet når Freja returnerer et bekreftet resultat.

| Alternativ | Beskrivelse |
|------------|-------------|
| **Oppdater kun antall** | Oppdaterer antall som skal leveres eller mottas på kildedokumentet, men bokfører det ikke |
| **Lever/motta** | Oppdaterer antall og bokfører også kildedokumentet med lever- eller mottaksalternativet |
| **Lever/motta og fakturer** | Oppdaterer antall, bokfører levering eller mottak, og bokfører også fakturaen |

## Salgsordreadferd

| Felt | Beskrivelse |
|------|-------------|
| **Oppdater salgsordreantall direkte** | Når aktivert, reduseres salgsordrelinjeantallet til det plukket antallet (setter Antall = levert + plukket, Levere (antall) = plukket). Når deaktivert, oppdateres bare Levere (antall) |
| **Sett inn kommentarlinjer ved manko** | Når aktivert, settes det inn en kommentarlinje på salgsordren når Freja plukker færre varer enn bestilt (bare når ingenting er levert ennå på den linjen) |

## Test tilkoblingen

Bruk handlingen **Test SFTP-tilkobling** på Freja-oppsett-siden for å kontrollere at Business Central kan koble til Frejas SFTP-server med de konfigurerte opplysningene.
