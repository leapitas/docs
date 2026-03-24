---
sidebar_position: 3
---

# Item Configuration

For accurate item specifications sent to Freja, ensure the following fields are filled in on each item in Business Central:

| Field | Location in Business Central |
|-------|------------------------------|
| **Net Weight** | Item Card |
| **Gross Weight** | Item Card (used as fallback if Net Weight is empty) |
| **Unit Volume** | Item Card |
| **Height / Width / Length** | Item Units of Measure (optional, but recommended) |
| **Item Tracking Code** | Item Card (only required if the item is tracked by lot number, serial number, or expiration date) |

These values are included in the item specification file sent to Freja when you export item master data.
