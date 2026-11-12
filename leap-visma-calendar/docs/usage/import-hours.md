---
sidebar_position: 1
---

# Import Hours

Hours are imported from Visma Calendar and transferred to the project journal from the setup. You can start the import in two ways.

## From the Project Journal

1. Open the project journal
2. Under **Prepare**, or **Functions**, click **Import Hours**
3. Enter the date interval to import in **Period Start** and **Period End**, and click **OK**

The registrations are read from Visma Calendar, and all registrations that are not yet transferred are created as lines in the project journal.

## From the TimeTransaction List

Use the **TimeTransaction List** if you want to check the registrations before they are transferred.

1. Search for **TimeTransaction List** in Business Central
2. Click **Import Hours** and enter the date interval in **Period Start** and **Period End**. The registrations are read into the list, but not transferred
3. Check the registrations. See [TimeTransaction List](./time-transactions.md)
4. Click **Transfer to Project Journal** to create the lines in the project journal

:::info
The lines are always created in the project journal set up in **Project Journal Template Name** and **Project Journal Batch Name** in [Visma Calendar Setup](../setup/visma-calendar-setup.md), also when you run the import from another journal.
:::

## The Project Journal Lines

Each registration becomes one resource line in the project journal.

| Field | Value |
|-------|-------|
| **Posting Date** | The start date of the registration |
| **Document No.** | The time of the transfer |
| **Project No.** | The value of the project cost unit on the registration |
| **Project Task No.** | The value of the project task cost unit on the registration, or the **Time Job Task** on the project if the registration has no project task |
| **Type** | Resource |
| **No.** | The resource no. of the employee who registered the hours |
| **Work Type Code** | The work type from the [work type mapping](../setup/work-type-mapping.md) |
| **Quantity** | The hours of the registration. If the registration has no hours, they are calculated from the start and end time |
| **Description 2** | The comment on the registration, unless **Hide Description** is turned on for the registration type |
| **Unit Price** | 0 if the hours are not [chargeable](../setup/dimension-mapping.md#chargeable-hours) |
| **Dimensions** | The cost units with a [dimension mapping](../setup/dimension-mapping.md) |

The journal is not posted automatically. Review the lines, and post the journal as usual.

## Registrations That Are Not Transferred

A registration is skipped, and stays in the **TimeTransaction List** as not transferred, when:

- The registration has no project, or the project does not exist in Business Central
- The registration has no project task, and **Time Job Task** is empty on the project

Correct the project in Visma Calendar or in Business Central, and run the import again. The registration is then transferred.
