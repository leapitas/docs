---
sidebar_position: 1
---

# Freja Setup

The **Freja Setup** page is the central configuration point for the integration. Open it by searching for **Freja Setup** in Business Central.

## General Settings

| Field | Description |
|-------|-------------|
| **Company Name** | Your company identifier used in filenames sent to Freja |
| **Client ID** | Your Freja client ID |
| **Client Name** | Your Freja client name |
| **Pick Orders Enabled** | Enable or disable creation of pick assignments |
| **Receipt Orders Enabled** | Enable or disable creation of receipt assignments |
| **Send Immediately** | When enabled, a pick or receipt assignment is automatically scheduled for sending as soon as it is created |

## SFTP Configuration

Configure the SFTP credentials used to transfer files to and from Freja.

| Field | Description |
|-------|-------------|
| **SFTP Host** | Hostname of the Freja SFTP server |
| **SFTP Port** | Port number (typically 22) |
| **SFTP Username** | Your SFTP login username |
| **SFTP Password** | Your SFTP login password |

## Folder Paths

Freja uses separate inbound and outbound folders for file exchange. You can configure both production and test folder paths and switch between them as needed.

| Field | Description |
|-------|-------------|
| **Outbound Folder** | Folder path where Business Central uploads files to Freja |
| **Inbound Folder** | Folder path where Freja places response files |
| **Use Test Folders** | Toggle between test and production folder paths |

## Number Series

| Field | Description |
|-------|-------------|
| **Pick Assignment Nos.** | Number series for pick assignment document numbers |
| **Receipt Assignment Nos.** | Number series for receipt assignment document numbers |

## Units

Specify the units of measure used when sending item data to Freja. These should match the units expected by your Freja setup.

| Field | Description |
|-------|-------------|
| **Weight Unit** | Unit used for item weights (e.g. g) |
| **Volume Unit** | Unit used for item volume (e.g. cm³) |
| **Length Unit** | Unit used for item dimensions such as height, width, and length (e.g. cm) |

## Azure Function Key

Communication between Business Central and the SFTP file exchange goes through an Azure Function provided by Leap IT. To enable this, you must enter the **Azure Function Key** on the Freja Setup page.

:::info
The Azure Function Key is provided by Leap IT. Contact Leap IT to obtain your key before configuring the integration.
:::

## Update Action

The **Update Action** field controls what happens to the source document when Freja returns a confirmed result.

| Option | Description |
|--------|-------------|
| **Update Quantities Only** | Updates the quantity to ship or quantity to receive on the source document, but does not post it |
| **Ship/Receive** | Updates quantities and also posts the source document with the ship or receive option |
| **Ship/Receive and Invoice** | Updates quantities, posts the shipment or receipt, and also posts the invoice |

## Sales Order Behavior

| Field | Description |
|-------|-------------|
| **Update Sales Order Quantity Directly** | When enabled, reduces the sales order line Quantity to the picked amount (sets Quantity = shipped + picked, Qty. to Ship = picked). When disabled, only Qty. to Ship is updated |
| **Insert Sales Shortage Comments** | When enabled, inserts a comment line on the sales order when Freja picks fewer items than ordered (only when nothing has been shipped yet on that line) |

## Testing the Connection

Use the **Test SFTP Connection** action on the Freja Setup page to verify that Business Central can connect to the Freja SFTP server using the configured credentials.
