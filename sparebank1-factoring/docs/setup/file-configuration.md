---
sidebar_position: 2
---

# File Configuration

All files to and from SpareBank 1 Factoring are exchanged through **Leap File System**. Sparebank1 Factoring adds four file handlers to Leap File System, and each of them needs a file configuration.

## Creating the File Configurations

1. Search for **File Configuration List** in Business Central
2. Create a file configuration for each of the file handlers below
3. Select the **File Handler** and set the folder that the files are written to or read from

| File Handler | Direction | Content |
|--------------|-----------|---------|
| **SB1 Factoring Export Invoice** | Outbound | The invoice file with the invoices and credit memos in the batch |
| **SB1 Factoring Export Customer** | Outbound | The customer file with the bill-to customers in the batch |
| **SB1 Factoring Export PDF** | Outbound | PDF copies of the invoices and credit memos in the batch |
| **SB1 Factoring Import** | Inbound | The transaction files returned from SpareBank 1 Factoring |

:::info
An export is stopped with an error if one of the three export file handlers has no file configuration. This prevents files from being created without being transferred anywhere.
:::

## Exported Files

Each export creates the following files:

| File | Name |
|------|------|
| Invoice file | `Factoring<batch no.>_<date and time>.txt` |
| Customer file | `Customers_<batch no.>.txt` |
| PDF of each invoice | `Invoice_<batch no.>_<document no.>.pdf` |
| PDF of each credit memo | `CreditMemo_<batch no.>_<document no.>.pdf` |

The PDF copies are printed with the report selected for the customer, the same way as when the document is sent to the customer.
