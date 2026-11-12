---
sidebar_position: 2
---

# Dimension Mappings

The dimension mappings decide what is sent to Visma Payroll. Each mapping connects a source in Business Central to a cost unit type in Visma Payroll. Only records that are covered by an active mapping are sent.

Open the mappings from **Visma Dimension Setup** with the **Dimension Mappings** action, or search for **Visma Dimension Mappings**.

## Fields

| Field | Description |
|-------|-------------|
| **Description** | A description of the mapping, for example "Department" |
| **From Type** | What is sent to Visma Payroll: **Dimension**, **Project** or **Project Task** |
| **Dimension Code** | The dimension whose values are sent. Only used, and only editable, when **From Type** is **Dimension** |
| **Visma CostUnitType Code** | The ID of the cost unit type in Visma Payroll that the values are created under. The cost unit type must exist in Visma Payroll |
| **Active** | Specifies whether the mapping is in use. Changes are only sent for active mappings |

## Creating a Mapping

1. Click **New**
2. Fill in **Description**
3. Select **From Type**
4. If **From Type** is **Dimension**, select the dimension in **Dimension Code**
5. Enter the ID of the cost unit type from Visma Payroll in **Visma CostUnitType Code**
6. Turn on **Active**

### Example

| Description | From Type | Dimension Code | Visma CostUnitType Code | Active |
|-------------|-----------|----------------|-------------------------|--------|
| Project | Project | | 7 | Yes |
| Department | Dimension | DEPARTMENT | 1 | Yes |
| Project task | Project Task | | 5 | No |

You can have several active mappings of the same type, for example two dimensions sent to two different cost unit types. A source can also be mapped to more than one cost unit type, and the change is then sent to each of them.

## What Is Sent

| From Type | Code in Visma Payroll | Name in Visma Payroll |
|-----------|-----------------------|-----------------------|
| **Dimension** | The dimension value code | The dimension value name |
| **Project** | The project no. | The project description |
| **Project Task** | The project task no. | The project task description |

:::info Project tasks
Project tasks are sent with the project task no. only, not the project no. Project tasks with the same no. on different projects therefore update the same cost unit in Visma Payroll.
:::

:::warning Existing records
Only changes made after a mapping is set up and active are sent. Dimension values, projects and project tasks that already exist are not sent until they are changed. Make sure the existing values are present in Visma Payroll before you start, or make a change to them so they are added to the sync queue.
:::
