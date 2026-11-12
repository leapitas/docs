---
sidebar_position: 2
---

# Installation

## Prerequisites

Before installing Sparebank1 Factoring, ensure you have the following:

- Microsoft Dynamics 365 Business Central (version 25.0 or later)
- **Leap File System** installed and connected to the location where files are exchanged with SpareBank 1 Factoring
- A factoring agreement with SpareBank 1 Factoring, and the client number you have been assigned
- Optionally **Enkel EHF**, if you send invoices as EHF

## Installing the Extension

Sparebank1 Factoring is installed directly in Business Central via the Extension Management page.

1. In Business Central, search for **Extension Management**
2. Click **Manage** and then **Upload Extension**
3. Upload the `.app` file provided by Leap IT
4. Select the language and click **Deploy**

Once installed, the extension is active and the **Sparebank1 Factoring Setup** page will be available for configuration.

## Enkel EHF

If you send invoices and credit memos as EHF with Enkel EHF, also install **Sparebank1 Factoring Enkel EHF** the same way. It replaces the payment ID (KID) on factored EHF documents with the SpareBank 1 Factoring KID, and needs no setup. The bank account in the EHF already comes from the document's company bank account, which is the factoring bank account on factored documents.
