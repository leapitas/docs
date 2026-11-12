---
sidebar_position: 2
---

# Installation

## Prerequisites

Before installing Leap Vehicle Registration, ensure you have the following:

- Microsoft Dynamics 365 Business Central (version 26.0 or later)
- An API key for the integration, provided by Leap IT
- The organisation number of the company that submits the preregistrations

## Installing the Extension

Leap Vehicle Registration is installed directly in Business Central via the Extension Management page.

1. In Business Central, search for **Extension Management**
2. Click **Manage** and then **Upload Extension**
3. Upload the `.app` file provided by Leap IT
4. Select the language and click **Deploy**

Once installed, the **Vehicle Registration Setup** page will be available for configuration. The **Vehicle Fuels** list is filled with the fuel codes from the IVI code list.

## Permissions

The extension includes the permission set **LEAVRALL**. Assign it to the users who should maintain the setup and the templates, or create and preregister vehicles.

1. Search for **Users** in Business Central
2. Open the user
3. Add **LEAVRALL** under **User Permission Sets**

Users who post receipts of items with **Create Vehicle on Receipt** turned on also need the permission set, since the vehicles are created when the receipt is posted.
