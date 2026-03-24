---
sidebar_position: 1
---

# About Freja Integration

Freja Integration is an application for Microsoft Dynamics 365 Business Central that connects Business Central with Freja Third Party Logistics (3PL) systems. It automates the exchange of warehouse operations data between the two systems, so information flows automatically without manual steps.

## Key Features

- **Pick Order Management**: Convert Sales Orders and Transfer Orders (outbound) into Freja pick assignments
- **Receipt Order Management**: Convert Purchase Orders and Transfer Orders (inbound) into Freja receipt assignments
- **Item Master Synchronization**: Export item specifications to Freja, including dimensions, volume, and item tracking requirements
- **Automated Response Processing**: Import pick and receipt reports from Freja with confirmed quantities
- **Full Item Tracking Support**: Handle lot numbers, serial numbers, and expiration dates
- **Role Center Activity Cues**: Freja activity cues integrate into Business Manager and Order Processor role centers

## How It Works

When you create a sales or purchase order in Business Central, Freja Integration lets you register a corresponding **assignment** with Freja — either to pick and ship items out, or to receive items in. The assignment is sent to Freja, Freja carries out the warehouse work, and the confirmed result is automatically brought back into Business Central and applied to the original order.

There are two types of assignments:

- **Pick Assignments** — for outbound shipments: items going out from a Freja warehouse, sourced from Sales Orders or Transfer Orders.
- **Receipt Assignments** — for inbound receipts: items arriving at a Freja warehouse, sourced from Purchase Orders or Transfer Orders.

Each assignment moves through a clear set of statuses so you always know where things stand:

1. **Created** — Assignment registered in Business Central
2. **Queued for Sending** — Assignment ready to be sent to Freja
3. **Sent** — Assignment delivered to Freja
4. **Handled** — Freja has completed the work and sent back confirmation
5. **Completed** — Confirmed quantities applied to the source order

If something goes wrong at any point, the assignment is flagged with an error so it can be reviewed and resolved without losing track of where it is in the process.
