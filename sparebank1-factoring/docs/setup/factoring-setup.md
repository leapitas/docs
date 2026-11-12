---
sidebar_position: 1
---

# Sparebank1 Factoring Setup

The **Sparebank1 Factoring Setup** page is the central configuration point for the integration. Open it by searching for **Sparebank1 Factoring Setup** in Business Central.

## General

| Field | Description |
|-------|-------------|
| **Factoring Payment Method** | The payment method that marks invoices and credit memos as factored. Documents with this payment method are sent to SpareBank 1 Factoring and get the factoring bank account as company bank account |
| **Factoring Bank Account** | The bank account holding SpareBank 1 Factoring's account no., IBAN and SWIFT. It is set as company bank account on factored sales documents |
| **Domestic Client No.** | The client number assigned by SpareBank 1 Factoring. It is used in the export files and in the KID. No KID is produced while it is blank |
| **Batch No. Series** | The number series used to assign factoring batch numbers |

:::info
The factoring payment method cannot have a balancing account. A balancing account would post a payment together with the invoice, but factored invoices are paid to SpareBank 1 Factoring.
:::

## Journal

These fields control how transactions imported from SpareBank 1 Factoring are transferred to the general journal.

| Field | Description |
|-------|-------------|
| **Journal Template Name** | The general journal template that imported factoring transactions are transferred to |
| **Journal Batch Name** | The general journal batch that imported factoring transactions are transferred to |
| **Domestic Bal. Account No.** | The balancing G/L account used for transactions on the domestic client no. |
| **Foreign Bal. Account No.** | The balancing G/L account used for transactions on any other client no. |

## Customers

| Field | Description |
|-------|-------------|
| **Factoring on New Customers** | When enabled, new customers get the factoring payment method and the factoring payment terms |
| **Factoring Payment Terms** | The payment terms set on a customer when the customer gets the factoring payment method. Leave it blank to keep the customer's payment terms |
| **Non-Factoring Payment Terms** | The payment terms set on a customer when the customer's payment method is changed from the factoring payment method to another one. Leave it blank to keep the customer's payment terms |

## Factored Customers and Documents

Factoring is controlled by the payment method alone:

- **Customers**: Set the factoring payment method on the customers that are factored. When a customer's payment method is changed to or from the factoring payment method, the customer's payment terms are updated from the setup, and you are asked whether the customer's open sales documents should get the new payment method too.
- **Sales documents**: Sales documents get the payment method from the bill-to customer. This also applies to credit memos and return orders, where Business Central would normally leave the payment method blank, so credit memos follow the invoices to factoring.
- **Company bank account**: When a sales document gets the factoring payment method, its company bank account is set to the factoring bank account. When the payment method is changed to another one, the default bank account for the document currency is used instead.

## Actions

| Action | Description |
|--------|-------------|
| **Update Company Bank Accounts** | Sets the company bank account on all open sales documents from their payment method, for example after changing the factoring bank account |
| **Schedule Daily Export** | Opens the job queue entry for the daily export. See [Automation](../automation.md) |
| **Export to Factoring** | Opens the list of posted documents that are ready to be exported |
| **Import from Factoring** | Opens the transactions imported from SpareBank 1 Factoring |
