---
sidebar_position: 4
---

# Logger

Hver gang et IVI-dokument sendes, eller en preregistrering kanselleres, opprettes en loggpost på kjøretøyet. Loggpostene vises under **Logger** på kjøretøykortet.

## Loggposter

| Felt | Beskrivelse |
|------|-------------|
| **Dato/klokkeslett** | Når loggposten ble opprettet |
| **Status** | **Vellykket**, **Advarsel** eller **Feil** |
| **Melding** | En kort melding om resultatet |
| **HTTP Statuskode** | HTTP-statuskoden fra svaret |

| Status | Beskrivelse |
|--------|-------------|
| **Vellykket** | Forespørselen ble godtatt |
| **Advarsel** | Forespørselen ble godtatt, men Statens vegvesen returnerte en advarsel. Advarselen vises i **Detaljert melding** |
| **Feil** | Forespørselen feilet. **Har feil** slås på for kjøretøyet |

## Detaljer om loggposten

Velg en loggpost og klikk **Vis detaljer** for å se hele loggposten.

| Del | Beskrivelse |
|-----|-------------|
| **Generelt** | **Løpenr.**, **Understellsnr.**, **Dato/klokkeslett**, **Status**, **Melding** og **HTTP Statuskode** |
| **Detaljer** | **Detaljert melding**, med meldingen fra Statens vegvesen. For feil inneholder den meldingskoden og feltene med feil |
| **Forespørsel XML** | Forespørselen som ble sendt |
| **Svar XML** | Svaret som ble mottatt |

## Feilsøking

| Melding | Løsning |
|---------|---------|
| *Kan ikke koble til. Api-nøkkelen kan være feil.* | Kontroller **Tilgangsnøkkel** i [Kjøretøyregistreringsoppsett](../setup/vehicle-registration-setup.md) |
| *Sending av IVI-dokument feilet* eller *Kansellering feilet*, med **Forespørsel feilet** i detaljene | Statens vegvesen kunne ikke nås. Prøv igjen senere, eller kontakt Leap IT |
| Andre feil | Se i **Detaljert melding** etter feltene med feil. Rett kjøretøyet, klikk **Generer IVI dokument**, og send det på nytt |
