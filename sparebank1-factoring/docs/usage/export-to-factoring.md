---
sidebar_position: 1
---

# Export to Factoring

Posted invoices and credit memos with the factoring payment method are sent to SpareBank 1 Factoring in batches. Each batch gets a batch number from the **Batch No. Series** in the setup.

## Documents Ready for Export

Search for **Export to Factoring** in Business Central. The page lists the posted invoices and credit memos that:

- have the factoring payment method
- have not been exported to factoring, and are not marked with a batch number
- are posted on or after the first day of the month three months before the work date

Credit memos are shown in red. The **Next Batch No.** at the top of the page is the batch number the marked documents are exported with.

## Exporting a Batch Manually

1. Select the documents to export and click **Mark Lines with Batch No.** The documents get the next batch number. Choose the action again to remove the mark from selected documents
2. Click **Export Factoring Files** and confirm
3. The marked documents are stamped as exported, and the invoice file, the customer file and the PDF copies are created through Leap File System
4. A message shows the batch number and the total invoiced, credited and net amounts in local currency

The batch can also be exported automatically every day. See [Automation](../automation.md).

## Exported Documents

The following fields are shown on **Posted Sales Invoice** and **Posted Sales Credit Memo**, and can be added to the lists **Posted Sales Invoices** and **Posted Sales Credit Memos**:

| Field | Description |
|-------|-------------|
| **Exported To Factoring** | Whether the document has been exported to SpareBank 1 Factoring |
| **Factoring Batch No.** | The batch the document was exported in |
| **Exported To Factoring At** | When the document was exported |
| **Exported To Factoring By** | The user who exported the document |

## Exporting a Document Again

**Exported To Factoring** and **Factoring Batch No.** can be changed with the **Update Document** action on the posted invoice or credit memo. To export a document again, clear both fields. The document is then listed on the **Export to Factoring** page again.
