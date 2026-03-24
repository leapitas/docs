---
sidebar_position: 1
---

# Vareeksport

Freja trenger varedata (mål, vekter, sporingskrav) for å behandle lageroperasjoner korrekt. Bruk rapporten **Eksporter varer til Freja** for å sende disse dataene.

## Manuell eksport

Rapporten **Eksporter varer til Freja** kan kjøres fra **Varelisten**, eller ved å søke etter **Eksporter varer til Freja** fra hvor som helst i Business Central.

Angi rapportparametrene:
- **Freja-lokasjon**: Velg Freja-lokasjonskoden du eksporterer varer for
- **Bare eksporter endrede varer**: Aktiver for å eksportere bare varer som har endret seg siden siste synkronisering
- **Oppdater siste synkroniseringsdato/-tid**: Aktiver for å oppdatere sporingsdatoen etter en vellykket eksport

Filtrer eventuelt varer etter for eksempel **Varenr.**, **Varekategorikode** eller **Sperret**-status.

Filen genereres med varedata og sendes til Freja.

## Automatisk vareeksport

For å automatisere regelmessige vareeksporter, sett opp en dedikert jobbkøpost i Business Central:

1. Åpne **Jobbkøposter** og klikk **Ny**
2. Sett **Objekttype som skal kjøres** til **Rapport**
3. Sett **Objekt-ID som skal kjøres** til **77560**
4. Konfigurer rapportparametrene via **Rapportforespørselsside-alternativer**. Det anbefales å aktivere **Bare eksporter endrede varer** og **Oppdater siste synkroniseringsdato/-tid** for å unngå å sende unødvendige data og holde synkroniseringsdatoen oppdatert
5. Angi **Antall minutter mellom kjøringer** (f.eks. 1440 for daglig)
6. Sett **Status** til **Klar** for å aktivere

Se [Automatisering](../../automation) for generell veiledning om jobbkøoppsett.
