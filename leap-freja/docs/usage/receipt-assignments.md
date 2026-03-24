---
sidebar_position: 3
---

# Receipt Assignments

Receipt assignments represent inbound warehouse operations — items being received into a Freja-managed location. They can be created from Purchase Orders.

## Creating a Receipt Assignment from a Purchase Order

1. Open the **Purchase Order** in Business Central
2. Click the **Create Receipt Assignment** action (in the Freja action group)
3. The system validates:
   - Receipt orders are enabled in Freja Setup
   - At least one order line has items to be received at a Freja location
   - No ongoing receipt assignment already exists for this order
4. The receipt assignment is created with status **Created**. If **Send Immediately** is enabled in Freja Setup, it is automatically queued for sending right away

## Exporting the Receipt Assignment Manually

Once created, the assignment can be exported and sent to Freja manually. Open the receipt assignment either by:

- Searching for **Receipt Assignments** in Business Central, or
- Opening the Purchase Order and clicking **View Receipt Assignment** under the **Freja** tab

Then:

1. Click the **Send to Freja** action
2. The assignment status updates to **Queued for Sending** and then **Sent** once transmitted

If the job queue is configured for automated processing, this happens automatically. See [Automation](../../automation) for details.

## Processing Receipt Confirmations Manually

When Freja has processed the inbound receipt, a response file is placed in the inbound folder.

1. Open the receipt assignment and click **Update from Freja**, or let the automated job queue process it
2. The system reads the confirmed quantities, lot numbers, serial numbers, and expiration dates
3. The assignment status updates to **Handled**
4. On the source Purchase Order, click **Update Source Document** to apply the confirmed quantities
5. The assignment status updates to **Completed**
6. Depending on the **Update Action** configured in Freja Setup, the Purchase Order may be ready for posting, or may already have been posted
