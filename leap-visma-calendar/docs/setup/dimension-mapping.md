---
sidebar_position: 3
---

# Dimension Mapping

The cost units on a registration in Visma Calendar can be added as dimensions on the project journal line. The dimension mapping decides which dimension in Business Central each cost unit belongs to.

Open the mapping by searching for **Dimension Mapping List** in Business Central.

## Fields

| Field | Description |
|-------|-------------|
| **Visma Dimension** | The ID of the cost unit in Visma Calendar |
| **Dimension** | The dimension code in Business Central that is used when the hours are posted |

## Creating a Mapping

1. Click **New**
2. Enter the ID of the cost unit from Visma Calendar in **Visma Dimension**
3. Select the dimension in Business Central in **Dimension**

The value of the cost unit is used as the dimension value code. If the dimension value does not exist in Business Central, it is created, with the code as name.

Cost units that are not mapped are not added as dimensions. The project and the project task are read from the cost units set up in [Visma Calendar Setup](./visma-calendar-setup.md), and do not need a mapping.

## Chargeable Hours

The chargeable dimension decides whether the hours are chargeable, and can be invoiced to the customer.

1. In **Visma Calendar Setup**, enter the ID of the cost unit in Visma Calendar in **Chargeable Dimension Id**
2. Click **Set chargeable dimensions** to open the list of chargeable values
3. Add a line for each value of the cost unit, and turn on **Chargeable** for the values that mean the hours are chargeable

| Field | Description |
|-------|-------------|
| **Visma Dimension Value** | The value of the chargeable cost unit in Visma Calendar |
| **Chargeable** | Specifies that hours with this value are chargeable |

Hours that are chargeable get the unit price from Business Central on the project journal line. Hours that are not chargeable get unit price 0.

:::warning
If **Chargeable Dimension Id** is empty, or the registration does not have a chargeable value, the hours are not chargeable, and all project journal lines get unit price 0.
:::
