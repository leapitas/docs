---
sidebar_position: 3
---

# Oppsett for faktura og kreditnota

SpareBank 1 Factoring krever en overdragelsesnotis og KID fra SpareBank 1 Factoring på alle fakturaer og kreditnotaer som factores.

## Inkluderte oppsett

Appen inneholder to RDLC-oppsett med overdragelsesnotisen og KID:

| Rapport | Oppsett |
|---------|---------|
| **Standard Sales - Invoice** | **SpareBank 1 Factoring faktura (RDLC)** |
| **Standard Sales - Credit Memo** | **SpareBank 1 Factoring kreditnota (RDLC)** |

Velg dem på siden **Rapportoppsett**, eller i **Rapportvalg - salg** for bruksområdene **Faktura** og **Kreditnota**. Fakturaoppsettet skriver også ut serienumrene til de leverte varene under hver linje.

## Bruke ditt eget oppsett

Hvis du bruker ditt eget oppsett, legger appen til følgende kolonner i datasettet til **Standard Sales - Invoice** og **Standard Sales - Credit Memo**, slik at de kan plasseres i et hvilket som helst oppsett:

| Kolonne | Innhold |
|---------|---------|
| `LEASBIsFactored` | Sann når dokumentet factores |
| `LEASBFactoringNotice` | Overdragelsesnotisen SpareBank 1 Factoring krever |
| `LEASBFactoringKID` | KID fra SpareBank 1 Factoring |
| `LEASBFactoringKID_Lbl` | Ledeteksten for KID |

Notisen og KID er tomme på dokumenter som ikke factores. Bankkontonr., IBAN og SWIFT i standardkolonnene i rapportene hentes allerede fra dokumentets firmabankkonto, som er factoring-bankkontoen på dokumenter som factores.

## Overdragelsesnotisen

Overdragelsesnotisen skrives ut på norsk med bankkontonummeret for innenlandske kunder, og på engelsk med IBAN og SWIFT for utenlandske kunder. En kunde er innenlandsk når lands-/områdekoden for Faktura til er tom eller lik lands-/områdekoden i firmaopplysningene.

:::warning
SpareBank 1 Factoring krever den nøyaktige ordlyden i overdragelsesnotisen. Ikke endre eller oversett den i oppsettet ditt.
:::

## KID

KID lages fra **Klient nr. innenlands** i oppsettet og bilagsnummeret. Det lages ingen KID så lenge **Klient nr. innenlands** er tomt.
