---
sidebar_position: 1
---

# Om Vehicle Registration

Leap Vehicle Registration lar deg preregistrere importerte kjøretøy hos Statens vegvesen direkte fra Microsoft Dynamics 365 Business Central. Kjøretøydataene sendes som et IVI-dokument (Initial Vehicle Information), og alle forespørsler og svar logges på kjøretøyet.

## Hovedfunksjoner

- **Kjøretøymaler**: Lagre spesifikasjonene til kjøretøymodellene du kjøper, som merke, kategori, typegodkjenning og vekt, slik at du bare legger dem inn én gang
- **Opprett kjøretøy fra maler**: Opprett et kjøretøy ved å velge en mal og legge inn understellsnummer, produksjonsdato og primærfarge
- **Opprett kjøretøy ved mottak**: Kjøretøy opprettes automatisk når varer med serienummer mottas. Serienummeret brukes som understellsnummer
- **IVI-dokument**: IVI-dokumentet genereres fra kjøretøydataene, og kan ses og endres før det sendes
- **Preregistrering**: Send IVI-dokumentet til Statens vegvesen, og kanseller preregistreringen ved behov
- **Status og logger**: Statusen på hvert kjøretøy viser om det er preregistrert, og loggen tar vare på alle forespørsler og svar
- **Vedlegg**: Legg ved dokumenter, som samsvarssertifikat eller bilder, på maler og kjøretøy

## Slik fungerer det

1. **Mal**: Opprett en kjøretøymal for hver kjøretøymodell du kjøper.
2. **Kjøretøy**: Opprett et kjøretøy fra malen, manuelt eller automatisk når kjøretøyene mottas. Kjøretøyet får status **Kladd**.
3. **IVI-dokument**: Generer IVI-dokumentet på kjøretøyet.
4. **Preregistrering**: Send IVI-dokumentet til Statens vegvesen. Når preregistreringen er godtatt, får kjøretøyet status **Godtatt**.
