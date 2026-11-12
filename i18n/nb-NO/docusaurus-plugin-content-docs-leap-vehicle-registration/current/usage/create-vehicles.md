---
sidebar_position: 1
---

# Opprette kjøretøy

Et kjøretøy opprettes fra en [kjøretøymal](../setup/vehicle-templates.md), og får spesifikasjonene fra malen. Du kan opprette kjøretøy manuelt som beskrevet her, eller automatisk når kjøretøyene mottas. Se [Opprette kjøretøy ved mottak](./create-vehicles-on-receipt.md).

## Opprette et kjøretøy fra en mal

1. Søk etter **Kjøretøy** i Business Central
2. Klikk **Ny fra mal**
3. Finn malen på en av disse måtene:
   - Legg inn typegodkjenningsnummeret i **Typegodkjenningsnr.**. Hvis én mal passer, blir den valgt. Hvis flere maler passer, velg malen i listen
   - Velg malen i **Kjøretøymal**
4. Legg inn **Understellsnr.**, understellsnummeret (VIN) til kjøretøyet. Understellsnummeret kan ha opptil 17 tegn
5. Legg inn **Produsert den**
6. Velg **Primærfarge**
7. Klikk **Opprett kjøretøy**

Kjøretøyet opprettes med status **Kladd**, og kjøretøykortet åpnes. Kjøretøyet er nå klart til å [preregistreres](./preregister-vehicles.md).

Et understellsnummer kan bare brukes på ett kjøretøy. Hvis et kjøretøy med understellsnummeret allerede finnes, opprettes ikke kjøretøyet.

## Kjøretøykortet

Kjøretøykortet har de samme feltene som malen under **Kjøretøydetaljer**, **Vekt** og **Motor**, og i tillegg følgende felt.

### Generelt

| Felt | Beskrivelse |
|------|-------------|
| **Understellsnr.** | Understellsnummeret (VIN) til kjøretøyet |
| **Kjøretøymal** | Malen kjøretøyet er opprettet fra |
| **Produsert den** | Datoen kjøretøyet ble produsert |
| **Status** | Statusen på preregistreringen. Se [Kjøretøystatus](./preregister-vehicles.md#kjøretøystatus) |
| **Har feil** | Angir om siste forespørsel til Statens vegvesen feilet. Se [loggen](./logs.md) for detaljer |

### Kjøretøydetaljer

| Felt | Beskrivelse |
|------|-------------|
| **Primærfarge** | Primærfargen til kjøretøyet |

### IVI informasjon

| Felt | Beskrivelse |
|------|-------------|
| **IVI Referanse ID** | Den unike referanse-ID-en for IVI-dokumentet |
| **IVI generert den** | Når IVI-dokumentet ble generert |
| **Sist sendt den** | Når IVI-dokumentet sist ble sendt til Statens vegvesen |

Kjøretøyet kan bare endres når statusen er **Kladd** eller **Kansellert**. Når preregistreringen er godtatt, er kjøretøyet låst.

## Endre malen på et kjøretøy

Når du velger en annen mal i **Kjøretøymal**, eller velger den samme malen på nytt, kopieres verdiene fra malen til kjøretøyet. Verdier du har endret på kjøretøyet overskrives. Du blir bedt om å bekrefte før verdiene overskrives.

## Vedlegg

Kjøretøykortet har en faktaboks for **Vedlegg**. Dra og slipp filer på faktaboksen, eller bruk **Last opp filer**, for å legge ved dokumenter som samsvarssertifikat eller bilder.

Vedleggene hører til kjøretøyet. Vedlegg på malen kopieres ikke til kjøretøyet. Når et kjøretøy slettes, slettes også vedleggene. Hvis understellsnummeret endres, følger vedleggene med kjøretøyet.
