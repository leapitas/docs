# Netvisor Sign

:::info
Visma Sign changed its name to **Netvisor Sign** on November 11, 2026. The service and the integration work exactly as before, and no changes are needed in Business Central. E-mails from the service (such as signing invitations) are now sent from **netvisor.sign@visma.com**.
:::

To activate the Netvisor Sign connector in Business Central you need to go through a quick onboarding process with Leap IT AS. Please contact your Business Central Partner or Leap IT AS to schedule an appointment for onboarding.

Throughout the onboarding process, we will configure Business Central and Netvisor Sign with correct values to ensure that the integration works.

## Prepare for Onboarding
Before the onboarding process please prepare the steps below.

### 1. Netvisor Sign Customer
If your company isn't currently using Netvisor Sign's services, you'll need to contact Netvisor Sign to become a customer.

### 2. Download the Business Central App
If you have not already installed the Netvisor Sign App for Business Central, then please install it from [Microsoft Marketplace](https://marketplace.microsoft.com/).

### 3. Verify Permission Sets in Business Central
Make sure that the user(s) that is supposed to use Leap Sign has the following permission set assigned: **LEALSUSER**.

### 4. Check Netvisor Sign Setup in Business Central
Search for **Signing Setup** in the general search in Business Central and make sure you can open the page. The values in the fields will be filled during the onboarding process.

| Field | Description |
|-------|-------------|
| **E-Signing Service** | This must be set to Netvisor Sign |
| **Api Key** | Api key provided by Leap IT AS |
| **E-Signing Service Account** | The Business Id (organization number) same as in Netvisor Sign |
| **Default Folder Name** | The folder in Netvisor Sign to store documents |
| **Default Signature Type** | The default signature type for the Company in Business Central |

### 5. Check Permissions in Netvisor Sign
Make sure of the following:

- You have a user and can log into [https://netvisorsign.com/](https://netvisorsign.com/)
- Click **Settings → Organization info** and verify that you have a Business Id
- Verify that you have permission to enter **Settings → Integrations**