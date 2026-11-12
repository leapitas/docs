---
sidebar_position: 2
---

# Sync Queue

The **Visma CostUnit Sync Queue** shows the changes that are waiting to be sent to Visma Payroll. Open it from **Visma Dimension Setup** with the **Sync Queue** action, or search for **Visma CostUnit Sync Queue**.

Entries that are sent successfully are removed from the queue. The queue therefore only shows changes that have not been sent yet, and changes that have failed.

## Fields

| Field | Description |
|-------|-------------|
| **Entry No.** | The unique number of the entry |
| **Action** | Whether the cost unit is inserted, updated or deleted in Visma Payroll |
| **CostUnit Type Code** | The cost unit type in Visma Payroll, from the dimension mapping |
| **CostUnit Code** | The code that is sent to Visma Payroll |
| **CostUnit Name** | The name that is sent to Visma Payroll |
| **Valid To** | The end date that is set in Visma Payroll, if any |
| **Error Occurred** | Whether the last attempt failed |
| **Error Message** | The error message from the last failed attempt |
| **Updated From Source At** | When the record was changed in Business Central |
| **Retry Count** | How many attempts have failed. This field is hidden by default, and can be shown with **Personalize** |

## Actions

| Action | Description |
|--------|-------------|
| **Synchronise Now** | Sends all waiting entries to Visma Payroll right away, without waiting for the job queue. Entries that have reached the max retry count are skipped |
| **Reset Retry Count** | Resets the retry count and the error on the selected entry, so it is tried again on the next run |

## Handling Errors

When an entry fails, it stays in the queue, **Error Occurred** is set, the error message from Visma Payroll is shown in **Error Message**, and the retry count is increased by one. The entry is tried again the next time the queue is synchronised.

When the retry count reaches **Max Retry Count** in [Visma Dimension Setup](../setup/visma-dimension-setup.md), the entry is no longer tried. If **Retry Count** is shown on the page, it is yellow while the entry will be tried again, and red when it has reached the max retry count.

To fix a failed entry:

1. Read the **Error Message**. Common causes are a cost unit type that does not exist in Visma Payroll, or a connection problem
2. Correct the cause, for example the connection in **Visma Dimension Setup**, or the cost unit type in Visma Payroll
3. Select the entry and click **Reset Retry Count**
4. Click **Synchronise Now**, or wait for the next job queue run

:::info
Changing a dimension mapping does not change entries that are already in the queue. If the **Visma CostUnitType Code** on a mapping was wrong, correct the mapping and make a new change to the record in Business Central, so a new entry is created with the correct code.
:::
