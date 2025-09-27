# Import payroll transactions in Business Central
This guide shows how to import payroll transactions from Visma Payroll to Business Central and transfer them to general journal for posting.

## Start the import

### 1. Open general journal
1. **Search for** "general journals" in Business Central
2. **Select** the general journal you want to import payroll transactions to

### 2. Start import process
1. **Select** "Payroll" in the menu
2. **Click** "Import Payroll Transactions"

:::info External service
Leap Visma Payroll Import uses Visma Payroll's API to retrieve data (external service). If you get the message "The extension Leap Visma Payroll Import from LEAP IT AS is sending a request to an external service. Do you want to allow this request?", select **"Always allow"**.
:::

## Select Visma payroll run
The screen "Select Visma payroll run" shows a list of payroll runs from Visma. Here both new and historical payroll runs are shown.

### Actions in the list

| Icon | Description |
|------|-------------|
| Search | Search for data in the list of payroll runs |
| Edit | Opens payroll transactions for the selected payroll run in edit mode |
| View | Opens payroll transactions for the selected payroll run in view mode |
| Update | Looks for new data in Visma and updates the list of payroll runs |
| Move to new | "Move to new" changes the status for selected payroll runs from Imported to New |
| Move to imported | "Move to imported" changes the status for selected payroll runs from New to Imported |

### Filter options

| Filter | Description |
|--------|-------------|
| **New** | Shows new payroll runs from Visma that should be processed in Business Central |
| **Imported** | Shows all payroll runs that have previously been transferred to general journal |
| **All** | Shows all payroll runs from Visma. This includes new as well as payroll runs that have been transferred to general journal previously |

### Open a payroll run
**Click on a payroll run** to open payroll transactions for the selected payroll run in edit mode.

## Process payroll run

### Overview of transactions
In the screen you now see an overview of the selected payroll run with **transactions** as they exist in Visma Payroll.

### Edit account numbers
- **Account numbers can be changed** directly in the list
- **Such changes update** all transactions against the same account in the view
- **The setup is automatically updated** so that the mappings are the same for the next import

### Change dimension mapping
To change mapping of dimensions:
1. **Click on** "Setup"
2. **Then** "Dimension mapping"
3. **This change** applies until you possibly change the setup again

### Set payment date
**Payment date for the payroll run:**
- **If you specify a date** in the payment date field, the date will be used as posting date when the payroll run is transferred to a general journal
- **If payment date is not filled out** the start date for the payroll period will be used as posting date

## Transfer to general journal

### Transfer process
To transfer the transactions to general journal:
1. **Click on** "Transfer"
2. **Then** "Transfer to journal"
3. **The transactions are now transferred** to the general journal
4. **The general journal can be posted** in the usual way