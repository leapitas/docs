# Signing Document Overview
:::info
The signing document holds all details and associated information to an electronic signature. This includes invitations, attachments, signing status, and more.
:::

## General
General information about the electronic signature.

| Field | Description |
|-------|-------------|
| **Description** | The description of the signing document |
| **Relation Type** | Type of relation the signing document is connected to. Valid options are Blank, Customer, Vendor and Employee |
| **Relation No.** | The number of the relation, e.g. Customer No. |
| **Contact No.** | The contact related to the specific relation |
| **Status** | The current status of the electronic signature |
| **Additional Message** | If the selected electronic signature provider has support for additional messages on the electronic signature you can write it in this field |

### Actions
| Action | Description |
|--------|-------------|
| **Send** | Sends the signing document to the signing provider to start the signing process |
| **Update Status** | Updates the status of the signing document from the signing provider |
| **Cancel** | Cancels the ongoing signing process |

## Invitations
Manage invitations and see the signing status of the different parties in the signing process.

| Field | Description |
|-------|-------------|
| **Name** | Name of the person to receive the invitation |
| **Email** | Email-address to the receiver of the invitation |
| **Status** | The status of the specific invitation. Shows one of: Not Sent, Sent, Opened, Signed, Cancelled |
| **Signature Type** | How the receiver should sign the document. Valid options are Strong (default) and Hand |
| **Language** | The language the invitation shall be received in |
| **Mobile Phone No.** | The mobile phone no. of the receiver |

## Files
Shows attachments that will be included in the electronic signing document. Actions to manage attachments are included together with a preview.

:::info
Some providers will merge the attachments when the signing process is started. The signing document will then contain one attachment with the same name as the description of the signing document.
:::

### File Actions

| Action | Description |
|--------|-------------|
| **Upload File** | Upload a locally stored file as part of the signing document |
| **Add From Attachments** | If the signing document's related record contains any document attachments, you can choose to include one or more of these attachments in the signing document |
| **Download File** | Downloads the document from the signing provider |