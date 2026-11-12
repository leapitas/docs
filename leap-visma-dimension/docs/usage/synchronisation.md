---
sidebar_position: 1
---

# Synchronisation

There is nothing to do in daily use other than maintaining dimension values, projects and project tasks in Business Central. Every change to a record that is covered by an active [dimension mapping](../setup/dimension-mapping.md) is added to the [sync queue](./sync-queue.md), and sent to Visma Payroll from there.

## Which Changes Are Sent

| Change in Business Central | Result in Visma Payroll |
|----------------------------|-------------------------|
| **Create** a dimension value, project or project task | The cost unit is created |
| **Change** a dimension value, project or project task, for example the name or description | The cost unit is updated |
| **Block** a dimension value | The cost unit gets yesterday's date as end date (Valid To), so it can no longer be used |
| **Block** a project, or set its status to **Completed** | The cost unit gets yesterday's date as end date (Valid To), so it can no longer be used |
| **Set an end date** on a project task | The cost unit gets the end date of the project task as end date (Valid To) |
| **Rename** a dimension value, project or project task | The cost unit with the old code is deleted, and a new one is created with the new code |
| **Delete** a dimension value, project or project task | The cost unit is deleted |

:::tip
Block a dimension value or a project, or complete the project, instead of deleting it when it is no longer in use. The cost unit then gets an end date in Visma Payroll instead of being deleted.
:::

## Sending the Queue to Visma Payroll

The queue is sent to Visma Payroll in two ways:

- **Automatically** by a job queue entry, at the interval you choose. See [Automation](../automation.md)
- **Manually** with the **Synchronise Now** action on the **Visma CostUnit Sync Queue** page. See [Sync Queue](./sync-queue.md)

The queue is only sent when **Enabled** is turned on in [Visma Dimension Setup](../setup/visma-dimension-setup.md).
