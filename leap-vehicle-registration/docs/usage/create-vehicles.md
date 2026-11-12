---
sidebar_position: 1
---

# Create Vehicles

A vehicle is created from a [vehicle template](../setup/vehicle-templates.md), and gets the specifications from the template. You can create vehicles manually as described here, or automatically when the vehicles are received. See [Create Vehicles on Receipt](./create-vehicles-on-receipt.md).

## Create a Vehicle from a Template

1. Search for **Vehicles** in Business Central
2. Click **New from Template**
3. Find the template in one of these ways:
   - Enter the type approval number in **Type Approval Number**. If one template matches, it is selected. If several templates match, select the template in the list
   - Select the template in **Vehicle Template**
4. Enter **VIN Number**, the chassis number of the vehicle. The VIN number can have up to 17 characters
5. Enter **Date of Manufacture**
6. Select **Primary Colour**
7. Click **Create Vehicle**

The vehicle is created with the status **Draft**, and the vehicle card opens. The vehicle is now ready to be [preregistered](./preregister-vehicles.md).

A VIN number can only be used for one vehicle. If a vehicle with the VIN number already exists, the vehicle is not created.

## The Vehicle Card

The vehicle card has the same fields as the template under **Vehicle Details**, **Mass** and **Engine**, and in addition the following fields.

### General

| Field | Description |
|-------|-------------|
| **VIN Number** | The vehicle identification number (chassis number) of the vehicle |
| **Vehicle Template** | The template the vehicle is created from |
| **Date of Manufacture** | The date the vehicle was manufactured |
| **Status** | The status of the preregistration. See [Vehicle Status](./preregister-vehicles.md#vehicle-status) |
| **Has Error** | Specifies whether the last request to Statens vegvesen failed. See the [log](./logs.md) for details |

### Vehicle Details

| Field | Description |
|-------|-------------|
| **Primary Colour** | The primary colour of the vehicle |

### IVI Information

| Field | Description |
|-------|-------------|
| **IVI Reference ID** | The unique reference ID of the IVI document |
| **IVI Generated Date/Time** | When the IVI document was generated |
| **Last Sent Date/Time** | When the IVI document was last sent to Statens vegvesen |

The vehicle can only be changed when the status is **Draft** or **Cancelled**. When the preregistration is accepted, the vehicle is locked.

## Change the Template on a Vehicle

When you select another template in **Vehicle Template**, or select the same template again, the values from the template are copied to the vehicle. Values you have changed on the vehicle are overwritten. You are asked to confirm before the values are overwritten.

## Attachments

The vehicle card has an **Attachments** FactBox. Drag and drop files onto the FactBox, or use **Upload files**, to attach documents such as a certificate of conformity or photos.

The attachments belong to the vehicle. Attachments on the template are not copied to the vehicle. When a vehicle is deleted, its attachments are deleted as well. If the VIN number is changed, the attachments follow the vehicle.
