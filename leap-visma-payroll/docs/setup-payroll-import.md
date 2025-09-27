# Setup for Visma Payroll Import


When "Leap Visma Payroll Import" is installed on your Business Central environment, a setup must be completed before the product can be used.

## Set Permissions

### 1. Open user list
Click **search** in Business Central and search for **"Users"**.

### 2. Select users
In the list of users, click on the user(s) who should have access to Leap Visma Payroll Import.

### 3. Assign permission sets
Under **User Permission Sets** specify:

| Permission Set | Description |
|----------------|-------------|
| **LEAPIBASIC** | For those who should have access to use the import and change mappings |
| **LEAPIFULL** | For those who in addition to use and mapping should do setup for connection to Visma Payroll |

## Open the setup

### Via assisted setup
1. In Business Central click **settings** in the top right
2. Select **"Assisted Setup"**
3. Under **"Connect to other systems"** see **"Configure Leap Visma Payroll import"**
4. Click on this to start the setup

### Alternative access
Search for **"Setup for Visma payroll import"** directly in Business Central.

## Basic setup

| Field | Description |
|-------|-------------|
| **Enabled** | Determines whether import from Visma Payroll should be activated. When this is enabled, the menu item for import will be visible in the system |
| **Access Key** | A key that gives the system access to communicate with Visma Payroll. This should be received when ordering Leap Visma Payroll Import |
| **Visma Id** | Unique id from Visma that identifies the company in Visma that the connection should be made to. (In the top right corner of Visma App Store click on the dropdown icon and copy the value in Tenant ID) |

## Dimension settings

| Field | Description |
|-------|-------------|
| **Import dimensions** | Determines whether dimensions on payroll transactions should be imported from Visma Payroll to Business Central. If this is disabled, dimensions will not be shown in the payroll transactions view |
| **Handling when dimension missing: Dimension** | Specifies what the system should do if a dimension is missing in Business Central |
| **Handling when dimension missing: Dimension Value** | Specifies what the system should do if a dimension value is missing in Business Central |

### Options for handling missing dimensions

| Option | Description |
|--------|-------------|
| **Give error message** | Stops import and shows error message if dimension/value is missing |
| **Skip** | Ignores missing dimensions and continues import |
| **Create** | Automatically creates missing dimensions/values |

## VAT settings

| Field | Description |
|-------|-------------|
| **Import VAT Numbers** | Determines whether VAT numbers should be imported from Visma Payroll. When enabled, the system will fetch VAT codes for transactions that support VAT registration. **Warning**: This feature requires additional permissions and will slow down imports as the system needs to make extra API calls for each applicable transaction |

## Transaction settings

| Field | Description |
|-------|-------------|
| **Group transactions** | Specifies whether the system should group transactions that share account number and dimensions. This will reduce the number of transactions posted in Business Central |

## Actions in setup

| Action | Description |
|--------|-------------|
| **Test connection** | By clicking here an attempt is made to connect to Visma Payroll to verify that the setup is correct |
| **Account mapping** | Used to create mapping between general ledger account in Visma and general ledger account in Business Central where these do not match or you want to override account number in Business Central |
| **Dimension mapping** | Used to create mapping between dimension in Visma and dimension value in Business Central where these do not match or you want to override account number in Business Central |
| **VAT Number mapping** | Used to create mapping between VAT numbers in Visma Payroll and VAT numbers in Business Central where these do not match or you want to override VAT numbers in Business Central |