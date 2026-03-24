---
sidebar_position: 4
---

# Transfer Orders

Transfer Orders can generate both a pick assignment and a receipt assignment, representing the two legs of a warehouse transfer — outbound from the Transfer-from Location and inbound to the Transfer-to Location.

## Pick Assignment (Outbound Leg)

The pick assignment covers items shipping out from the Transfer-from Location.

1. Open the **Transfer Order** in Business Central
2. Click **Create Pick Assignment** (in the Freja action group)
3. The system creates a pick assignment for items shipping from the Transfer-from Location
4. Follow the same export and confirmation process as for [Sales Order pick assignments](../pick-assignments)

## Receipt Assignment (Inbound Leg)

The receipt assignment covers items being received at the Transfer-to Location.

1. From the same Transfer Order, click **Create Receipt Assignment**
2. The system creates a receipt assignment for items receiving to the Transfer-to Location
3. Follow the same export and confirmation process as for [Purchase Order receipt assignments](../receipt-assignments)

A single Transfer Order can have both a pick assignment and a receipt assignment active at the same time, representing both legs of the transfer independently. This only applies when both the Transfer-from Location and the Transfer-to Location are mapped to Freja locations.
