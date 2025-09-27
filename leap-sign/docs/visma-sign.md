# Visma Sign
To activate the Visma Sign connector in Business Central you need to go through a quick onboarding process with Leap IT AS. Please contact your Business Central Partner or Leap IT AS to schedule an appointment for onboarding.

Throughout the onboarding process, we will configure Business Central and Visma Sign with correct values to ensure that the integration works.

## Prepare for Onboarding
Before the onboarding process please prepare the steps below.

### 1. Visma Sign Customer
If your company isn't currently using Visma Sign's services, you'll need to contact Visma Sign to become a customer.

### 2. Download the Business Central App
If you have not already installed the Visma Sign App for Business Central, then please install it from [Microsoft AppSource](https://appsource.microsoft.com/).

### 3. Verify Permission Sets in Business Central
Make sure that the user(s) that is supposed to use Leap Sign has the following permission set assigned: **LEALSUSER**.

### 4. Check Visma Sign Setup in Business Central
Search for **Signing Setup** in the general search in Business Central and make sure you can open the page. The values in the fields will be filled during the onboarding process.

| Field | Description |
|-------|-------------|
| **E-Signing Service** | This must be set to Visma Sign |
| **Api Key** | Api key provided by Leap IT AS |
| **E-Signing Service Account** | The Business Id (organization number) same as in Visma Sign |
| **Default Folder Name** | The folder in Visma Sign to store documents |
| **Default Signature Type** | The default signature type for the Company in Business Central |

### 5. Check Permissions in Visma Sign
Make sure of the following:

- You have a user and can log into [https://vismasign.com/](https://vismasign.com/)
- Click **Settings → Organization info** and verify that you have a Business Id
- Verify that you have permission to enter **Settings → Integrations**