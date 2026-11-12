---
sidebar_position: 1
---

# Kjøretøyregistreringsoppsett

Siden **Kjøretøyregistreringsoppsett** inneholder koblingen til Statens vegvesen. Åpne den ved å søke etter **Kjøretøyregistreringsoppsett** i Business Central.

## Generelt

| Felt | Beskrivelse |
|------|-------------|
| **Organisasjonsnr.** | Organisasjonsnummeret til selskapet som sender inn preregistreringene |
| **Miljø** | Om preregistreringene sendes til miljøet **Test** eller **Produksjon** |
| **Tilgangsnøkkel** | API-nøkkelen levert av Leap IT |

## Miljø

| Verdi | Beskrivelse |
|-------|-------------|
| **Test** | Preregistreringene sendes til testmiljøet. Bruk dette mens du blir kjent med løsningen |
| **Produksjon** | Preregistreringene sendes til Statens vegvesen på ordentlig |

Når et produksjonsmiljø kopieres til en sandkasse, settes **Miljø** til **Test** i sandkassen, slik at ingen preregistreringer sendes til produksjon fra sandkassen.

## Kom i gang

1. Legg inn **Organisasjonsnr.** og **Tilgangsnøkkel**
2. Sett **Miljø** til **Test**, og prøv å preregistrere et kjøretøy. Se [Preregistrere kjøretøy](../usage/preregister-vehicles.md)
3. Sett **Miljø** til **Produksjon** når du er klar til å preregistrere kjøretøy på ordentlig

Hvis API-nøkkelen er feil, feiler preregistreringen med meldingen *Kan ikke koble til. Api-nøkkelen kan være feil.* i [loggen](../usage/logs.md) på kjøretøyet.
