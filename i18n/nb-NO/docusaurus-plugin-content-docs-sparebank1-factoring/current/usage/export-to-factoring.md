---
sidebar_position: 1
---

# Eksporter til factoring

Bokførte fakturaer og kreditnotaer med betalingsmåten for factoring sendes til SpareBank 1 Factoring i bunter. Hver bunt får et buntnummer fra **Nummerserie for bunter** i oppsettet.

## Dokumenter som er klare til eksport

Søk etter **Eksporter til factoring** i Business Central. Siden viser de bokførte fakturaene og kreditnotaene som:

- har betalingsmåten for factoring
- ikke er eksportert til factoring, og ikke er merket med et buntnummer
- er bokført på eller etter den første dagen i måneden tre måneder før arbeidsdatoen

Kreditnotaer vises i rødt. **Neste buntnr.** øverst på siden er buntnummeret de merkede dokumentene eksporteres med.

## Eksportere en bunt manuelt

1. Velg dokumentene som skal eksporteres, og klikk **Merk linjer med buntnr.** Dokumentene får neste buntnummer. Velg handlingen på nytt for å fjerne merkingen av valgte dokumenter
2. Klikk **Eksporter factoringfiler** og bekreft
3. De merkede dokumentene markeres som eksportert, og fakturafilen, kundefilen og PDF-kopiene lages via Leap File System
4. En melding viser buntnummeret og totalt fakturert, kreditert og netto beløp i lokal valuta

Bunten kan også eksporteres automatisk hver dag. Se [Automatisering](../automation.md).

## Eksporterte dokumenter

Følgende felt vises på **Bokført salgsfaktura** og **Bokført salgskreditnota**, og kan legges til i listene **Bokførte salgsfakturaer** og **Bokførte salgskreditnotaer**:

| Felt | Beskrivelse |
|------|-------------|
| **Eksportert til factoring** | Om dokumentet er eksportert til SpareBank 1 Factoring |
| **Factoring buntnr.** | Bunten dokumentet ble eksportert i |
| **Eksportert til factoring den** | Når dokumentet ble eksportert |
| **Eksportert til factoring av** | Brukeren som eksporterte dokumentet |

## Eksportere et dokument på nytt

**Eksportert til factoring** og **Factoring buntnr.** kan endres med handlingen **Oppdater dokument** på den bokførte fakturaen eller kreditnotaen. For å eksportere et dokument på nytt, tøm begge feltene. Dokumentet vises da på siden **Eksporter til factoring** igjen.
