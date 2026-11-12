---
sidebar_position: 3
---

# Invoice and Credit Memo Layouts

SpareBank 1 Factoring requires an assignment notice and the SpareBank 1 Factoring KID on all factored invoices and credit memos.

## Included Layouts

The app includes two RDLC layouts with the assignment notice and the KID:

| Report | Layout |
|--------|--------|
| **Standard Sales - Invoice** | **SpareBank 1 Factoring Invoice (RDLC)** |
| **Standard Sales - Credit Memo** | **SpareBank 1 Factoring Credit Memo (RDLC)** |

Select them on the **Report Layouts** page, or in **Report Selection - Sales** for the usages **Invoice** and **Credit Memo**. The invoice layout also prints the serial numbers of the shipped items under each line.

## Using Your Own Layout

If you use your own layout, the app adds the following columns to the dataset of **Standard Sales - Invoice** and **Standard Sales - Credit Memo**, so they can be placed in any layout:

| Column | Content |
|--------|---------|
| `LEASBIsFactored` | True when the document is factored |
| `LEASBFactoringNotice` | The assignment notice SpareBank 1 Factoring requires |
| `LEASBFactoringKID` | The SpareBank 1 Factoring KID |
| `LEASBFactoringKID_Lbl` | The caption of the KID |

The notice and the KID are blank on documents that are not factored. The bank account no., IBAN and SWIFT in the standard columns of the reports already come from the document's company bank account, which is the factoring bank account on factored documents.

## The Assignment Notice

The assignment notice is printed in Norwegian with the bank account no. for domestic customers, and in English with IBAN and SWIFT for foreign customers. A customer is domestic when the bill-to country/region code is blank or the same as the country/region code in the company information.

:::warning
SpareBank 1 Factoring requires the exact wording of the assignment notice. Do not change or translate it in your layout.
:::

## KID

The KID is made from the **Domestic Client No.** in the setup and the document number. No KID is produced while the **Domestic Client No.** is blank.
