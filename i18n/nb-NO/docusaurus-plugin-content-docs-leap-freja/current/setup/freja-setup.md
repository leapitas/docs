---
sidebar_position: 1
---

# Freja-oppsett

Siden **Freja-oppsett** er hovedoppsettet for integrasjonen. Åpne oppsettet ved å søke etter **Freja-oppsett** i Business Central.

## Generelle innstillinger

| Felt | Beskrivelse |
|------|-------------|
| **Selskapsnavn** | Din firmaidentifikator brukt i filnavn sendt til Freja |
| **Klient-ID** | Din Freja-klient-ID |
| **Klient-Navn** | Ditt Freja-klientnavn |
| **Send umiddelbart** | Når aktivert, settes et plukk- eller mottaksoppdrag automatisk i kø for sending så snart det er opprettet |

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
| **Utgående mappesti** | Mappesti der Business Central laster opp filer til Freja |
| **Inngående mappesti** | Mappesti der Freja plasserer responsfiler |
| **Bruk testmapper** | Bytt mellom test- og produksjonsmappestier |

## Nummerserie

| Felt | Beskrivelse |
|------|-------------|
| **Nummerserie for mottaksoppdrag** | Nummerserie for mottaksoppdragsdokumentnumre |
| **Nummerserie for plukkoppdrag** | Nummerserie for plukkoppdragsdokumentnumre |

## Enheter

Angi målenhetene som brukes når varedata sendes til Freja.

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

## Handling ved oppdatering

Feltet **Handling ved oppdatering** styrer hva som skjer med kildedokumentet når Freja returnerer et bekreftet resultat.

| Alternativ | Beskrivelse |
|------------|-------------|
| **Oppdater kun antall** | Oppdaterer antall som skal leveres eller mottas på kildedokumentet, men bokfører det ikke |
| **Lever/motta** | Oppdaterer antall og bokfører også kildedokumentet med lever- eller motta |
| **Lever/motta og fakturer** | Oppdaterer antall, bokfører levering eller mottak, og fakturerer også bilaget |

## Alternativer for salgsordre

| Felt | Beskrivelse |
|------|-------------|
| **Oppdater ordreantall direkte** | Når aktivert, reduseres antallet på ordrelinjen til det plukkede antallet (setter Antall = levert + plukket, Levere (antall) = plukket). Når deaktivert, oppdateres bare Levere (antall) |
| **Opprett ordrekommentar om varemangel** | Når aktivert, settes det inn en kommentarlinje på salgsordren når Freja plukker færre varer enn bestilt (forekommer bare dersom ingenting er levert ennå på linjen) |

## Test tilkoblingen

Bruk handlingen **Test SFTP-tilkobling** på Freja-oppsett-siden for å kontrollere at Business Central kan koble til Frejas SFTP-server med de konfigurerte opplysningene.
