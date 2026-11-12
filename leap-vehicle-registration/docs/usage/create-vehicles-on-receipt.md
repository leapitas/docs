---
sidebar_position: 2
---

# Create Vehicles on Receipt

Vehicles can be created automatically when the vehicles are received, for example on a purchase order. Each vehicle is an item with a serial number, and the serial number is used as the VIN number of the vehicle.

## Set Up the Item

1. Open the item card of the vehicle item
2. Make sure the item uses an item tracking code with serial numbers
3. Turn on **Create Vehicle on Receipt**

## Enter the Vehicle Data

The vehicle data is entered for each serial number on the item tracking lines.

1. Open the purchase order, and select the line with the vehicle item
2. Open **Item Tracking Lines** from the line
3. Enter the VIN number of each vehicle in **Serial No.**
4. For each serial number, fill in the vehicle data:

| Field | Description |
|-------|-------------|
| **Type Approval Number** | Search for the template by the type approval number. If one template matches, it is selected in **Vehicle Template**. If several templates match, select the template in the list |
| **Vehicle Template** | The template the vehicle is created from |
| **Vehicle Primary Colour** | The primary colour of the vehicle |
| **Vehicle Date of Manufacture** | The date the vehicle was manufactured |

The fields are shown on the item tracking lines for inbound documents.

## Post the Receipt

When the receipt is posted, a vehicle is created with the status **Draft** for each serial number, with the values from the template and the vehicle data from the item tracking lines.

Vehicles are created for all inbound postings of the item, such as purchase receipts, positive adjustments, output and sales returns. If a vehicle with the VIN number already exists, no new vehicle is created.

:::info
If no template is entered on the item tracking line, the vehicle is created with only the VIN number and the vehicle data from the line. Select the template on the vehicle card afterwards, to fill in the rest.
:::

## After Posting

The vehicle data is kept on the posted entries:

- **Posted Item Tracking Lines** shows **Vehicle Template**, **Vehicle Primary Colour** and **Vehicle Date of Manufacture**
- **Item Ledger Entries** has the same fields. They are hidden by default, and can be shown with **Personalize**
