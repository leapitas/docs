---
sidebar_position: 2
---

# Work Type Mapping

The work type mapping connects the registration types in Visma Calendar to work types in Business Central. The work type is set on each project journal line, and decides for example the unit price of the hours.

Open the mapping from **Visma Calendar Setup** with the **Work Type Mapping** action, or search for **Work Type Mapping**.

## Import Categories

The categories and registration types are read from Visma Calendar, so you do not have to enter them yourself.

1. Click **Import Categories**
2. The categories in Visma Calendar are shown in bold, with their registration types below them

Run **Import Categories** again when new categories or registration types are added in Visma Calendar. Existing lines and mappings are kept, and the descriptions are updated.

## Fields

| Field | Description |
|-------|-------------|
| **External Category Description** | The name of the category in Visma Calendar |
| **External Registration Type Description** | The name of the registration type in Visma Calendar |
| **Mapped Work Type Code** | The work type in Business Central that is used for hours with this registration type. Can only be set on registration types, not on categories |
| **Mapped Work Type Description** | The description of the mapped work type |
| **Hide Description** | Specifies that the comment on the registration is not copied to the project journal line. Can only be set on registration types |
| **External Id** | The ID of the category in Visma Calendar |
| **External Registration Type Id** | The ID of the registration type in Visma Calendar |

## Setting Up the Mapping

1. Click **Import Categories**
2. For each registration type that is used for hours on projects, select the work type in **Mapped Work Type Code**
3. Turn on **Hide Description** for registration types where the comment should not be shown on the project journal line

:::tip
Hours with a registration type that is not mapped are still transferred to the project journal, but without a work type.
:::
