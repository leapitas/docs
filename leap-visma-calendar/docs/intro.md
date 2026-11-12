---
sidebar_position: 1
---

# About Visma Calendar Import

Leap Visma Calendar Import imports hours registered in Visma Calendar into Microsoft Dynamics 365 Business Central. The registrations are placed as resource lines in a project journal, with project, project task, work type, dimensions and hours, ready to be reviewed and posted.

## Key Features

- **Import of hours**: Registrations in Visma Calendar for the date interval you choose are imported to Business Central
- **Project and project task from Visma**: The project and the project task are read from the cost units on the registration in Visma Calendar
- **Work type mapping**: Categories and registration types in Visma Calendar are mapped to work types in Business Central
- **Dimensions**: Cost units in Visma Calendar are mapped to dimensions in Business Central. Missing dimension values are created automatically
- **Chargeable hours**: A cost unit in Visma Calendar decides whether the hours are chargeable. Hours that are not chargeable get unit price 0
- **No double import**: Each registration is imported once. Registrations that are already transferred to the project journal are not transferred again

## How It Works

1. **Import**: The registrations for the chosen date interval are read from Visma Calendar into the **TimeTransaction List** in Business Central.
2. **Transfer**: Registrations that are not yet transferred are created as lines in the project journal from the setup. Each line gets the resource of the employee, the project and project task, the work type, the hours and the dimensions.
3. **Post**: Review the project journal and post it as usual.

:::info
Leap Visma Calendar Import uses the employees from [Leap Visma Employees Import](/leap-visma-employees/intro) to find the resource for each registration. Leap Visma Employees Import must be installed, and the employees must be imported, before hours can be imported.
:::
