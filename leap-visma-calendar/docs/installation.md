---
sidebar_position: 2
---

# Installation

## Prerequisites

Before installing Leap Visma Calendar Import, ensure you have the following:

- Microsoft Dynamics 365 Business Central
- [Leap Visma Employees Import](/leap-visma-employees/intro), with the employees imported from Visma. Each employee that registers hours must have a **Resource No.** on the employee card in Business Central
- Visma Calendar, where the hours are registered with project and project task as cost units
- An API key for the integration, provided by Leap IT
- The Tenant ID of your company in Visma

## Installing the Extension

Leap Visma Calendar Import is installed directly in Business Central via the Extension Management page.

1. In Business Central, search for **Extension Management**
2. Click **Manage** and then **Upload Extension**
3. Upload the `.app` file provided by Leap IT
4. Select the language and click **Deploy**

Once installed, the **Visma Calendar Setup** page will be available for configuration.

## Permissions

The extension includes the permission set **LEAVCALL**. Assign it to the users who should maintain the setup and the mappings, or import hours.

1. Search for **Users** in Business Central
2. Open the user
3. Add **LEAVCALL** under **User Permission Sets**

## Install in Visma App Store

Business Central connects to Visma Calendar through the **Leap Calendar Import** application in Visma App Store.

1. Go to [apps.visma.com](https://apps.visma.com) and log in with the same credentials you use for Visma.net
2. Search for **Leap Calendar Import** and open the application
3. Click **Integrate** and give consent to the API permissions. The integration needs access to read registrations in Visma Calendar

:::warning App Store not available?
If the Visma App Store is not available, see [guide to activate Visma App Store](/leap-visma-employees/activate-app-store).
:::

### Find your Tenant ID

You need the Tenant ID to complete the setup in Business Central.

1. **In the top right corner** of Visma, click on the dropdown icon
2. **Copy the value** in "Tenant ID"
3. **Keep this** for later, as it is entered in the **Visma Id** field in [Visma Calendar Setup](./setup/visma-calendar-setup.md)
