---
sidebar_position: 1
---

# About Vehicle Registration

Leap Vehicle Registration lets you preregister imported vehicles with the Norwegian Public Roads Administration (Statens vegvesen) directly from Microsoft Dynamics 365 Business Central. The vehicle data is sent as an IVI document (Initial Vehicle Information), and every request and response is logged on the vehicle.

## Key Features

- **Vehicle templates**: Store the specifications of the vehicle models you buy, such as make, category, type approval and mass, so you only enter them once
- **Create vehicles from templates**: Create a vehicle by selecting a template and entering the VIN number, the date of manufacture and the primary colour
- **Create vehicles on receipt**: Vehicles are created automatically when items with serial numbers are received. The serial number is used as the VIN number
- **IVI document**: The IVI document is generated from the vehicle data, and can be viewed and edited before it is sent
- **Preregistration**: Send the IVI document to Statens vegvesen, and cancel the preregistration if needed
- **Status and logs**: The status of each vehicle shows whether it is preregistered, and the log keeps every request and response
- **Attachments**: Attach documents, such as a certificate of conformity or photos, to templates and vehicles

## How It Works

1. **Template**: Create a vehicle template for each vehicle model you buy.
2. **Vehicle**: Create a vehicle from the template, manually or automatically when the vehicles are received. The vehicle gets the status **Draft**.
3. **IVI document**: Generate the IVI document on the vehicle.
4. **Preregistration**: Send the IVI document to Statens vegvesen. When the preregistration is accepted, the vehicle gets the status **Accepted**.
