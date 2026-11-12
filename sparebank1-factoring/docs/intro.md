---
sidebar_position: 1
---

# About Sparebank1 Factoring

Sparebank1 Factoring is an application for Microsoft Dynamics 365 Business Central that connects Business Central with SpareBank 1 Factoring. It sends your factored sales invoices and credit memos to SpareBank 1 Factoring, and brings the transactions that SpareBank 1 Factoring sends back into Business Central as general journal lines.

## Key Features

- **Factoring by payment method**: A document is factored when it has the factoring payment method. Customers, open sales documents and posted documents all follow the same rule
- **Correct bank account on documents**: Factored documents automatically get SpareBank 1 Factoring's bank account as company bank account, so the right account no., IBAN and SWIFT are printed
- **Export to factoring**: Export posted invoices and credit memos in batches, together with a customer file and PDF copies of the documents
- **Daily export**: Let a job queue entry export all documents that are ready, once a day
- **Import of transactions**: Import the transaction files from SpareBank 1 Factoring and create general journal lines, applied to the customers' open entries
- **Assignment notice and KID**: Invoice and credit memo layouts with the assignment notice SpareBank 1 Factoring requires, and the SpareBank 1 Factoring KID
- **EHF support**: With the add-on app **Sparebank1 Factoring Enkel EHF**, the SpareBank 1 Factoring KID is also used on invoices sent as EHF

## How It Works

1. **Mark customers as factored**: Give the customers that are factored the factoring payment method. Their new sales documents get the payment method and the factoring bank account automatically.
2. **Post as usual**: Invoices and credit memos are posted the normal way. Factored documents are printed with the assignment notice and the SpareBank 1 Factoring KID.
3. **Export to factoring**: Posted factored documents are collected on the **Export to Factoring** page. They are marked with a batch number and exported as an invoice file, a customer file and PDF copies, either manually or by the daily job queue entry.
4. **Import from factoring**: SpareBank 1 Factoring returns transaction files, for example with payments from your customers. These are imported on the **Import from Factoring** page and transferred to a general journal, where they can be reviewed and posted.

All files are exchanged through **Leap File System**, which must be installed and set up.
