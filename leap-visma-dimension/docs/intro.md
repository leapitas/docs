---
sidebar_position: 1
---

# About Visma Dimension Integration

Leap Visma Dimension Integration keeps the cost units in Visma Payroll up to date with Microsoft Dynamics 365 Business Central. When you create, change, block, rename or delete a dimension value, a project or a project task in Business Central, the change is sent to Visma Payroll, so the same values are available when payroll is registered.

## Key Features

- **Business Central as master**: Dimension values, projects and project tasks are maintained in Business Central only, and sent to Visma Payroll as cost units
- **Flexible mapping**: Choose which dimensions, and whether projects and project tasks, should be sent, and which cost unit type in Visma Payroll they belong to
- **End dates**: Blocking a dimension value, blocking or completing a project, or setting an end date on a project task, sets the end date (Valid To) on the cost unit in Visma Payroll
- **Rename and delete**: Renamed and deleted records are also renamed and deleted in Visma Payroll
- **Sync queue**: All changes are placed in a queue, so nothing is lost if Visma Payroll cannot be reached. Failed entries are retried and show the error message from Visma Payroll
- **Automatic synchronisation**: A job queue entry sends the queue to Visma Payroll at the interval you choose

## How It Works

1. **Map dimensions to cost unit types**: On the **Visma Dimension Mappings** page you specify which dimensions, projects or project tasks should be sent to Visma Payroll, and the cost unit type in Visma Payroll they belong to.
2. **Work as usual**: Create and maintain dimension values, projects and project tasks in Business Central. Every change to a mapped record is added to the **Visma CostUnit Sync Queue**.
3. **Synchronise**: The job queue sends the queue to Visma Payroll. Entries that are sent successfully are removed from the queue. Entries that fail stay in the queue with the error message, and are tried again on the next run.

:::info
Leap Visma Dimension Integration sends data one way, from Business Central to Visma Payroll. To bring payroll transactions with dimensions back into Business Central, use [Leap Visma Payroll Import](/leap-visma-payroll/intro).
:::
