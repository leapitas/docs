---
sidebar_position: 3
---

# Preregister Vehicles

A vehicle is preregistered with Statens vegvesen by sending an IVI document. The IVI document is generated from the vehicle data, and the actions are found on the vehicle card.

## Preregister a Vehicle

1. Open the vehicle with the status **Draft**
2. Click **Generate IVI Document**
3. Optionally, click **View/Edit IVI XML** to check the document
4. Click **Send IVI to Vegvesen**

A message shows whether the IVI document was sent and accepted. When it is accepted, the status changes to **Accepted**. If it fails, **Has Error** is turned on, and the reason is shown in the [log](./logs.md).

## Actions

| Action | Description |
|--------|-------------|
| **Generate IVI Document** | Builds the IVI document from the vehicle data. Available when the status is **Draft** or **Cancelled** |
| **View/Edit IVI XML** | Opens the generated IVI document, so you can check it or change it before it is sent. Available when the IVI document is generated |
| **Send IVI to Vegvesen** | Sends the IVI document to Statens vegvesen. Available when the status is **Draft** and the IVI document is generated |
| **Cancel Preregistration** | Cancels the preregistration with Statens vegvesen. Available when the status is **Accepted** |

## Generate the IVI Document

The following fields must be filled in, or the IVI document is not generated:

- **VIN Number** and **Date of Manufacture**
- **Make** and **Commercial Name**
- **Type**, **Variant** and **Version**
- **Type Approval Number**
- **Mass of Vehicle in Running Order (kg)** and **Actual Mass of Vehicle (kg)**

Each time the IVI document is generated, the vehicle gets a new **IVI Reference ID**, and **IVI Generated Date/Time** is updated. Generate the IVI document again if you change the vehicle after it was generated, since the document is not updated automatically.

## Edit the IVI Document

**View/Edit IVI XML** opens the **IVI XML Editor**, where you can change the XML directly.

| Action | Description |
|--------|-------------|
| **Save XML** | Saves the changes to the IVI document |
| **Reload XML** | Discards the changes that are not saved, and shows the saved IVI document |

:::warning
Changes made in the editor are overwritten when you click **Generate IVI Document** again.
:::

## Cancel a Preregistration

1. Open the vehicle with the status **Accepted**
2. Click **Cancel Preregistration** and confirm

The status changes to **Cancelled**, and the vehicle can be changed again. To preregister the vehicle again, click **Generate IVI Document**. The status changes back to **Draft**, and the IVI document can be sent.

## Vehicle Status

| Status | Description |
|--------|-------------|
| **Draft** | The vehicle is created, but not preregistered |
| **Accepted** | Statens vegvesen has accepted the preregistration. The vehicle can not be changed |
| **Cancelled** | The preregistration is cancelled. The vehicle can be changed and preregistered again |
