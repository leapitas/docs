---
sidebar_position: 2
---

# Installation

## Prerequisites

Before installing Leap Visma Dimension Integration, ensure you have the following:

- Microsoft Dynamics 365 Business Central (version 28.0 or later)
- Visma Payroll with API access, and the cost unit types you want to fill from Business Central (for example project and department)
- An API key for the integration, provided by Leap IT
- The Tenant ID of your company in Visma

## Installing the Extension

Leap Visma Dimension Integration is installed directly in Business Central via the Extension Management page.

1. In Business Central, search for **Extension Management**
2. Click **Manage** and then **Upload Extension**
3. Upload the `.app` file provided by Leap IT
4. Select the language and click **Deploy**

Once installed, the **Visma Dimension Setup** page will be available for configuration.

## Permissions

The extension includes the permission set **LEACUALL**. Assign it to the users who should maintain the setup and the mappings, or work with the sync queue.

1. Search for **Users** in Business Central
2. Open the user
3. Add **LEACUALL** under **User Permission Sets**

Users who only create and change dimension values, projects and project tasks do not need any extra permissions. Their changes are added to the sync queue automatically.

## Install in Visma App Store

Business Central connects to Visma Payroll through the same Visma App Store application as [Leap Visma Payroll Import](/leap-visma-payroll/install-visma-payroll).

1. Open [apps.visma.com/NO/app/isv_leap_payroll_import](https://apps.visma.com/NO/app/isv_leap_payroll_import) and log in with the same credentials you use for Visma.net
2. Scroll to the bottom of the page and click **Integrate**. If the application is already in use, for example by Leap Visma Payroll Import, click **Manage** instead
3. Give consent to the API permissions and save. The integration needs **Accounting Write Access** to create cost units

:::warning App Store not available?
If the Visma App Store is not available, see [guide to activate Visma App Store](/leap-visma-employees/activate-app-store).
:::

### Find your Tenant ID

You need the Tenant ID to complete the setup in Business Central.

1. **In the top right corner** of Visma, click on the dropdown icon
2. **Copy the value** in "Tenant ID"
3. **Keep this** for later, as it is entered in the [Visma Dimension Setup](./setup/visma-dimension-setup.md)
