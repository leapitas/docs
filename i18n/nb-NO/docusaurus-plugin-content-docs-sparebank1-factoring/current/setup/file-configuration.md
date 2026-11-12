---
sidebar_position: 2
---

# Filkonfigurasjon

Alle filer til og fra SpareBank 1 Factoring utveksles via **Leap File System**. Sparebank1 Factoring legger til fire filbehandlere i Leap File System, og hver av dem trenger en filkonfigurasjon.

## Opprette filkonfigurasjonene

1. Søk etter **Liste over Filkonfigurasjoner** i Business Central
2. Opprett en filkonfigurasjon for hver av filbehandlerne nedenfor
3. Velg **Filbehandler** og angi mappen filene skal skrives til eller leses fra

| Filbehandler | Retning | Innhold |
|--------------|---------|---------|
| **SB1 Factoring - Fakturaeksport** | Utgående | Fakturafilen med fakturaene og kreditnotaene i bunten |
| **SB1 Factoring - Kundeeksport** | Utgående | Kundefilen med Faktura til-kundene i bunten |
| **SB1 Factoring - PDF-eksport** | Utgående | PDF-kopier av fakturaene og kreditnotaene i bunten |
| **SB1 Factoring - Import** | Inngående | Transaksjonsfilene som returneres fra SpareBank 1 Factoring |

:::info
En eksport stoppes med en feilmelding hvis en av de tre filbehandlerne for eksport mangler filkonfigurasjon. Dette hindrer at det lages filer som aldri blir overført.
:::

## Eksporterte filer

Hver eksport lager følgende filer:

| Fil | Navn |
|-----|------|
| Fakturafil | `Factoring<buntnr.>_<dato og klokkeslett>.txt` |
| Kundefil | `Customers_<buntnr.>.txt` |
| PDF av hver faktura | `Invoice_<buntnr.>_<bilagsnr.>.pdf` |
| PDF av hver kreditnota | `CreditMemo_<buntnr.>_<bilagsnr.>.pdf` |

PDF-kopiene skrives ut med rapporten som er valgt for kunden, på samme måte som når dokumentet sendes til kunden.
