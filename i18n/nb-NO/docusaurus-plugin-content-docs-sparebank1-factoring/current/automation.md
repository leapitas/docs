---
sidebar_position: 5
---

# Automatisering og jobbkøer

I stedet for å eksportere manuelt kan Sparebank1 Factoring eksportere alle dokumenter som er klare, én gang om dagen via jobbkøen i Business Central. Jobben gjør det samme som en bruker på siden **Eksporter til factoring**: den merker alle dokumenter som er klare til eksport med neste buntnummer og eksporterer bunten.

## Sette opp den daglige eksporten

1. Åpne **Oppsett for Sparebank1 Factoring** i Business Central
2. Klikk **Sett opp daglig eksport**
3. Jobbkøposten åpnes. Første gang opprettes den med statusen **På vent**, satt opp til å kjøre hver dag ved midnatt
4. Endre **Starttidspunkt** til tidspunktet eksporten skal kjøre
5. Sett statusen til **Klar** for å starte den daglige eksporten

## Slik fungerer den daglige eksporten

- Når ingen dokumenter er klare til eksport, gjøres ingenting, slik at det ikke brukes noe buntnummer og ikke lages tomme filer
- Når det ikke er satt opp noen betalingsmåte for factoring, eksporteres ingenting
- En kjøring som feiler, prøves på nytt opptil 3 ganger med 30 minutters mellomrom

:::warning
Etter tredje mislykkede forsøk stopper jobbkøposten med statusen **Feil**, og den kjøres ikke igjen før den settes tilbake til **Klar**. Sjekk jobbkøposten og loggen jevnlig.
:::
