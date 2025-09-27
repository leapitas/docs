# Setup for Visma Expense Import

## Set permissions

1. Click on search in Business Central and search for Users.
2. In the list of users, click on the user(s) who should have access to Leap Visma Payroll Import.
3. Under User Permission Sets, specify LEAVEAll for those who should have access to use the solution.

## Open setup

In the search menu in Business Central, search for "Visma Expense Setup" and click on the link.

### General

| Field | Description |
|-------|-------------|
| Enabled | Specifies whether the integration is active or not. |
| Visma Id | Specifies the code that identifies the customer's Visma environment. (In the upper right corner of Visma App Store, click on the dropdown icon and copy the value in Tenant ID). |

### Posting

| Field | Description |
|-------|-------------|
| Post to | Specifies how travel transactions should be posted. The following options are available:<br/>• Finance - Will create entries in finance journal as finance journal lines.<br/>• Finance and project - will create entries in finance journal as finance journal lines, but with project number and project task stamped. This leads to entries also being created in the project accounting by creating project ledger entries.<br/>• Project - Will create entries in the project accounting by creating project ledger entries. |
| Journal Template Name | Specifies the journal template to be used for posting. This points either to a finance journal or project journal depending on the selection in the Post-to field. |
| Journal Name | Specifies the journal to be used for posting. This points either to a finance journal or project journal depending on the selection in the Post-to field. |

### Project posting

| Field | Description |
|-------|-------------|
| Use fixed finance account for project | Specifies whether the same finance account should be used for all entries |
| Fixed finance account for project | Specifies the finance account to be used for all entries. |
| Project dimension id | Specifies the cost bearer in Visma that corresponds to project number in Business Central. |
| Project task handling | Specifies how the project task should be determined. The following options are available:<br/>• Use fixed - Specifies that a fixed project task should be used for posting to all projects. This project task must exist for all projects.<br/>• Use fixed per project - Specifies that a fixed project task is set up per project. This is specified on the project card under General in the field "Project task for travel and expenses".<br/>• Assign from dimension - Specify a cost bearer in Visma that corresponds to project task number in Business Central. |
| Project task no. | Specifies the fixed project task to be used for all projects. Only relevant if Use fixed is selected as project task handling. |
| Project task per project | The field shows the number of projects that are set up with project task for travel and expenses. By clicking on the field, the project list opens. For each project, you enter the project task under General on the project card. The field is only relevant if Use fixed per project is selected as project task handling. |
| Project task dimension id | Specifies the cost bearer in Visma that corresponds to project task number in Business Central. The field is only relevant if Assign from dimension is selected as project task handling. |
| Post transactions without project no. | Specifies whether you also want to post to project if the transactions are not marked with cost bearer for project. |
| Project no. For transactions without project | Specifies a fixed project where transactions that are not marked with cost bearer for project are posted against. |
| Project task no. For transactions without project | Specifies a fixed project task where transactions that are not marked with cost bearer for project are posted against. |
| Handling of paid by employer | Specifies how you want to import transactions marked as paid by employer. The following option is available.<br/>• Ignore – Skips the transaction during import.<br/>• Reverse sign – Imports the transaction but reverses the sign of the amount. |

### Finance posting

| Field | Description |
|-------|-------------|
| Balance account type | Specifies how travel transactions should be posted to finance. The following options are available:<br/>• Employee – Entries are posted to employee accounts receivable. NOTE! Note that this requires linking between employees in Visma Employees and employees in Business Central. You must therefore use our add-on app "Visma Employees Import" to synchronize employees between the systems.<br/>• Finance account – A fixed balance account is used when posting to finance. |

### Dimensions

| Field | Description |
|-------|-------------|
| Import dimensions | Specifies whether you want cost bearers in Visma to be added as dimensions in Business Central. |
| Dimension mappings | Shows the number of dimension mappings you have configured. Click on the number to add, remove or change mappings. |

### Missing dimension handling

| Field | Description |
|-------|-------------|
| Dimension | Specify how you want the system to handle missing dimensions. The following options are available:<br/>• Give error message – Gives an error message if a dimension is missing in Business Central.<br/>• Skip over – Does not read dimension values for dimensions that are missing. |
| Dimension value | Specify how you want the system to handle missing dimension values. The following options are available:<br/>• Give error message – Gives an error message if a dimension value is missing in Business Central.<br/>• Skip over – Does not read dimension values that are missing in Business Central.<br/>• Create – Creates the dimension value in Business Central. Code and name will be set to the value of the cost bearer in Visma. |

## Dimension mapping

Dimension mappings specify a mapping between cost bearers in Visma and dimensions in Business Central. Specify mapping between cost bearers in Visma and dimensions in Business Central.

From Visma Expense Setup, click the Dimension mappings button. Alternatively, you can click on the number that shows the number of configured dimension mappings under Posting and dimensions.

| Field | Description |
|-------|-------------|
| Visma dimension | Specifies the cost bearer in Visma. This is often a number between 1 and 10. |
| Dimension | Specifies the dimension in Business Central that corresponds to the cost bearer in Visma. |