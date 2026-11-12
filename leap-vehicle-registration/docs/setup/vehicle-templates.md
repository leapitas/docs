---
sidebar_position: 2
---

# Vehicle Templates

A vehicle template holds the specifications of a vehicle model. When a vehicle is created from the template, the specifications are copied to the vehicle, so you only enter them once for each model. Open the templates by searching for **Vehicle Templates** in Business Central.

## Create a Template

1. Search for **Vehicle Templates** and click **New**
2. Enter **Vehicle Template** and **Template Name**
3. Fill in the fields under **Vehicle Details**, **Mass** and **Engine**

:::tip Find templates by type approval number
When you create a vehicle, you can search for the template by the type approval number. The search finds the templates where the code in **Vehicle Template** starts with the type approval number. Use the type approval number as the start of the template code, so that the right template is found.
:::

## General

| Field | Description |
|-------|-------------|
| **Vehicle Template** | The unique code of the template |
| **Template Name** | A descriptive name of the template |

## Vehicle Details

| Field | Description |
|-------|-------------|
| **Make** | The manufacturer of the vehicle |
| **Commercial Name** | The commercial name of the vehicle |
| **Vehicle Category** | The vehicle category code, for example M1, N1 or T3b |
| **Stage of Completion** | Whether the vehicle is complete (C), incomplete (I) or completed in several stages (V) |
| **Type Approval Type** | The type of type approval: NAT, NKS, KS, EC or IND |
| **Type** | The type designation of the vehicle |
| **Variant** | The variant designation of the vehicle |
| **Version** | The version designation of the vehicle |
| **Type Approval Number** | The type approval number of the vehicle |

## Mass

| Field | Description |
|-------|-------------|
| **Mass of Vehicle in Running Order (kg)** | The mass of the vehicle in running order, in kilograms |
| **Actual Mass of Vehicle (kg)** | The actual mass of the vehicle, in kilograms |

## Engine

The fields under **Engine** are optional. They are only included in the IVI document when they are filled in.

| Field | Description |
|-------|-------------|
| **Fuel** | The fuel of the vehicle, selected from the [Vehicle Fuels](./vehicle-fuels.md) list |
| **Fuel Description** | The description of the selected fuel |
| **Engine Capacity (cm3)** | The engine capacity in cubic centimetres. Leave it blank for pure electric vehicles |
| **Maximum Net Power (kW)** | The maximum net power of the combustion engine, in kilowatts |

## Required Fields

The following fields must be filled in on the vehicle before the IVI document can be generated. Fill them in on the template, so that the vehicles get them from the template:

- **Make** and **Commercial Name**
- **Type**, **Variant** and **Version**
- **Type Approval Number**
- **Mass of Vehicle in Running Order (kg)** and **Actual Mass of Vehicle (kg)**

## Attachments

The template card has an **Attachments** FactBox. Drag and drop files onto the FactBox, or use **Upload files**, to attach documents such as a certificate of conformity.

The attachments belong to the template. They are not copied to the vehicles created from the template. When a template is deleted, its attachments are deleted as well.

## Changing a Template

Changes to a template do not change the vehicles that are already created from it. To update a vehicle with the new values, select the template again in **Vehicle Template** on the vehicle card. See [Change the Template on a Vehicle](../usage/create-vehicles.md#change-the-template-on-a-vehicle).
