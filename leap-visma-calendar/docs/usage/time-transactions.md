---
sidebar_position: 2
---

# TimeTransaction List

The **TimeTransaction List** shows the registrations imported from Visma Calendar, and whether they are transferred to the project journal. Open it by searching for **TimeTransaction List** in Business Central.

Only registrations with a project are shown.

## Fields

| Field | Description |
|-------|-------------|
| **Employee Name** | The name of the employee who registered the hours |
| **Project No.** | The project of the registration. Shown in red if the project does not exist in Business Central |
| **Project Task No.** | The project task of the registration |
| **Transferred to Project** | Specifies that the registration is transferred to the project journal |
| **Description** | The comment on the registration |
| **Start Date**, **Start Time** | When the registration starts |
| **End Date**, **End Time** | When the registration ends |
| **Hours** | The hours of the registration |
| **External Reg. Type Description** | The registration type in Visma Calendar |
| **Time Registration Type** | How the hours are registered in Visma Calendar, for example as hours or as an interval |
| **Chargeable** | Specifies that the hours are [chargeable](../setup/dimension-mapping.md#chargeable-hours) |

## Actions

| Action | Description |
|--------|-------------|
| **Import Hours** | Reads the registrations for a date interval from Visma Calendar into the list |
| **Transfer to Project Journal** | Creates project journal lines for all registrations that are not transferred |

## Importing Again

Each registration is imported once. If you import a date interval again, registrations that already exist in the list are updated with the latest values from Visma Calendar, and new registrations are added.

Registrations that are already transferred to the project journal are not transferred again, even if they are changed in Visma Calendar. Correct the project journal line, or the posted entries, in Business Central if a transferred registration is changed afterwards.
