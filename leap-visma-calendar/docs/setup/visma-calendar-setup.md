---
sidebar_position: 1
---

# Visma Calendar Setup

The **Visma Calendar Setup** page holds the connection to Visma Calendar and decides how hours are transferred to the project journal. Open it by searching for **Visma Calendar Setup** in Business Central.

## General

| Field | Description |
|-------|-------------|
| **Enabled** | Enables the service that connects to Visma Calendar |

### Connection Settings

| Field | Description |
|-------|-------------|
| **Api key** | The API key provided by Leap IT |
| **Visma Id** | The Tenant ID of your company in Visma. See [Find your Tenant ID](../installation.md#find-your-tenant-id) |

## Project

| Field | Description |
|-------|-------------|
| **Import Dimensions** | Specifies whether the cost units on the registrations are imported. This is turned on by default, and must stay on, since the project and the project task are read from the cost units |
| **Project Journal Template Name** | The project journal template that the hours are transferred to |
| **Project Journal Batch Name** | The project journal batch that the hours are transferred to |
| **Project Dimension Id** | The ID of the cost unit in Visma Calendar that holds the project. The value of this cost unit is used as the project no. in Business Central |
| **Project Task Dimension Id** | The ID of the cost unit in Visma Calendar that holds the project task. The value of this cost unit is used as the project task no. in Business Central |
| **Chargeable Dimension Id** | The ID of the cost unit in Visma Calendar that decides whether the hours are chargeable. See [Chargeable Hours](./dimension-mapping.md#chargeable-hours) |
| **Set chargeable dimensions** | Opens the list of cost unit values that are chargeable. Only available when **Chargeable Dimension Id** is filled in |

**Project Journal Template Name**, **Project Journal Batch Name**, **Project Dimension Id** and **Project Task Dimension Id** must be filled in before hours can be transferred to the project journal.

## Actions

| Action | Description |
|--------|-------------|
| **Test Connection** | Checks if the connection settings are valid and the system can access Visma Calendar. A message shows whether the connection was established |
| **Work Type Mapping** | Opens the [work type mapping](./work-type-mapping.md) |

## Project Task on the Project

If a registration in Visma Calendar has no project task, the project task is taken from the field **Time Job Task** on the project card in Business Central, under **General**. The field is also available on the project list.

Set **Time Job Task** on the projects where hours can be registered without a project task. The project task must be of the type **Posting**. Registrations without a project task are not transferred for projects where the field is empty.

## Getting Started

1. Enter **Api key** and **Visma Id**
2. Click **Test Connection** and check that the connection is established. If it fails, check the two fields and try again, or contact Leap IT
3. Fill in the fields under **Project**
4. Set up the [work type mapping](./work-type-mapping.md) and the [dimension mapping](./dimension-mapping.md)
5. Turn on **Enabled**
