---
sidebar_position: 1
---

# Item Master Export

Freja requires item master data (dimensions, weights, tracking requirements) to process warehouse operations correctly. Use the **Export Items to Freja** report to send this data.

## Manual Export

The **Export Items to Freja** report can be run from the **Items** list, or by searching for **Export Items to Freja** from anywhere in Business Central.

Set the report parameters:
- **Freja Location**: Select the Freja location code to export items for
- **Only Export Changed Items**: Enable to export only items that have changed since the last sync
- **Update Last Sync Date/Time**: Enable to update the tracking date after a successful export

Optionally filter items by, for example, **Item No.**, **Item Category Code**, or **Blocked** status.

The file is generated containing the item data and sent to Freja.

## Automated Item Export

To automate regular item exports, set up a dedicated job queue entry in Business Central:

1. Open **Job Queue Entries** and click **New**
2. Set **Object Type to Run** to **Report**
3. Set **Object ID to Run** to **77560**
4. Configure the report parameters via **Report Request Page Options**. It is recommended to enable **Only Export Changed Items** and **Update Last Sync Date/Time** to avoid sending unnecessary data and keep the sync date current
5. Set **No. of Minutes between Runs** (e.g., 1440 for daily)
6. Set **Status** to **Ready** to activate

See [Automation](../../automation) for general job queue setup guidance.
