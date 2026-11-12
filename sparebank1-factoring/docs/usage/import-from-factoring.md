---
sidebar_position: 2
---

# Import from Factoring

SpareBank 1 Factoring returns transaction files, for example with the payments from your customers. These are imported into Business Central and transferred to the general journal set up on the **Sparebank1 Factoring Setup** page.

## Importing Transaction Files

1. Search for **Import from Factoring** in Business Central
2. Click **Import Factoring Files**
3. All files received through the file configuration for **SB1 Factoring Import** that are not processed yet are read, and their transactions are listed on the page

The page only shows transactions that have not been transferred to the journal. Remove the filter on **Imported To Journal** to see all transactions.

The **Factoring** action group on the **Cash Receipt Journal** also has **Import Factoring Files** and **Import from Factoring**.

## Transaction Types

| Type | Description |
|------|-------------|
| 16 | Interest note |
| 21 | Invoice |
| 22 | Credit memo |
| 25 | OCR payment |
| 26 | All other payments |
| 27 | Cash discount |
| 98 | Opening balance |

## Creating Journal Lines

1. Filter the page to the transactions you want to transfer
2. Click **Create Journal Lines** and confirm
3. A general journal line is created for each transaction shown on the page
4. Click **Open Journal** to review and post the lines

Each journal line gets:

- The **transaction date** as posting date
- The **customer** from the transaction as account. If the customer is not found, the account is left blank and must be filled in manually
- The **amount** from the transaction
- The **Domestic Bal. Account No.** as balancing account when the transaction is on the domestic client no., otherwise the **Foreign Bal. Account No.**
- An application to the customer's open entry with the same document number, when there is one

You are asked to confirm if a transaction has already been transferred to the journal.

## Reversals

A payment that SpareBank 1 Factoring reverses (type 26 with the text TBF) also gets a counter line in the journal. The counter line has **Reversed From Factoring** set, and the field is carried over to the customer ledger entry. The field can be shown on **General Journal** and **Customer Ledger Entries**.

## Deleting Transactions

Select transactions and click **Delete Selected Lines** to delete them, for example after importing a file by mistake.
