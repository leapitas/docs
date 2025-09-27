# Setup for Visma Employees Import
When "Leap Visma Employees Import" is installed on your Business Central environment, a setup must be completed before you can use the product.

## Set permissions

### 1. Open the user list
Click on **search** in Business Central and search for **"Users"**.

### 2. Select users
In the list of users, click on the user(s) who should have access to Leap Visma Employees Import.

### 3. Assign permission sets
Under **User Permission Sets** specify:

| Permission Set | Description |
|----------------|-------------|
| **LEAEIBASIC** | For those who should have access to start the import |
| **LEAEIFULL** | For those who in addition to use should do setup for connection to Visma Employees |

## Open the setup

### Via assisted setup
1. In Business Central click on **settings** in the upper right
2. Select **"Assisted Setup"**
3. Under **"Connect with other systems"** see **"Configure Leap Visma Employees import"**
4. Click on this to start the setup

### Alternative access
Search for **"Setup for Visma employee import"** directly in Business Central.

## Fields in the setup

| Field | Description |
|-------|-------------|
| **Enabled** | Determines whether import from Visma Employees should be activated. You must activate the integration before you can import data from Visma Employees |
| **Api Access Key** | A key that gives the system access to communicate with Visma Employees. This should be received when ordering Leap Visma Employees Import |
| **Visma Id (tenant)** | Unique id from Visma that identifies the company in Visma that the connection should be made to. (In the upper right corner in Visma App Store click on the dropdown icon and copy the value in Tenant ID) |
| **Use Visma number series** | Specifies whether the employee number from Visma should be used as employee number and resource number in Business Central. If you want to use the same number series in both systems, make sure that the number series for employee and resource are set up with manual numbers |
| **Import dimensions** | Specifies whether default dimensions should be created on employee and resource based on dimensions in Visma |
| **Employee number series** | Shows what is specified as number series for employee in BC |
| **Employee template** | Specifies which employee template should be used when creating employees from Visma |
| **Update resources** | Shows the value "create resource automatically" from the personnel setup. This must be set to "Yes" if resources should be created |
| **Resource template** | Specifies which resource template should be used when creating resources |
| **Resource number series** | Shows what is specified as number series for resources in BC |
| **Update unit cost on resource** | Specifies whether a calculated unit cost (hour) should be specified on the resource when updating |

## Actions in the setup

| Action | Description |
|--------|-------------|
| **Test connection** | By clicking here, an attempt is made to make a connection to Visma Employees to verify that the setup is correct |
| **Create job queue** | Creates a post in job queue that enables automatic import of data from Visma |
| **Dimension mapping** | Used to make connections between dimension in Visma and dimension code in Business Central where these do not match or you want to override in Business Central |
| **Employee mapping** | Opens the screen for mapping employees and resources. This is used if you have employees or resources in Business Central from before and want to link these to Visma employees to avoid duplicates |
| **Employees** | Opens the employee list in Business Central |
| **Synchronization log** | Opens log for the import. Here you can see any errors in import |