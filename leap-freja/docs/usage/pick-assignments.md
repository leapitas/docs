---
sidebar_position: 2
---

# Pick Assignments

Pick assignments represent outbound warehouse operations — items being shipped from a Freja-managed location. They can be created from Sales Orders.

## Creating a Pick Assignment from a Sales Order

1. Open the **Sales Order** in Business Central
2. Click the **Create Pick Assignment** action (in the Freja action group)
3. The system validates:
   - Pick orders are enabled in Freja Setup
   - At least one order line has items to be shipped from a Freja location
   - No ongoing pick assignment already exists for this order
4. The pick assignment is created with status **Created**. If **Send Immediately** is enabled in Freja Setup, it is automatically queued for sending right away

## Exporting the Pick Assignment Manually

Once created, the assignment can be exported and sent to Freja manually. Open the pick assignment either by:

- Searching for **Pick Assignments** in Business Central, or
- Opening the Sales Order and clicking **View Pick Assignments** under the **Freja** tab

Then:

1. Click the **Send to Freja** action
2. The assignment status updates to **Queued for Sending** and then **Sent** once transmitted

If the job queue is configured for automated processing, this happens automatically. See [Automation](../../automation) for details.

## Processing Pick Confirmations Manually

When Freja has fulfilled the pick order, a response file is placed in the inbound folder.

1. Open the pick assignment and click **Update from Freja**, or let the automated job queue process it
2. The system reads the confirmed quantities, lot numbers, serial numbers, and expiration dates
3. The assignment status updates to **Handled**
4. On the source Sales Order, click **Update Source Document** to apply the confirmed quantities
5. The assignment status updates to **Completed**
6. Depending on the **Update Action** configured in Freja Setup, the Sales Order may be ready for posting, or may already have been posted
