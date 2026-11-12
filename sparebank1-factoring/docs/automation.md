---
sidebar_position: 5
---

# Automation & Job Queues

Instead of exporting manually, Sparebank1 Factoring can export all documents that are ready once a day through Business Central's job queue. The job does the same as a user on the **Export to Factoring** page: it marks every document ready for export with the next batch number and exports the batch.

## Setting Up the Daily Export

1. Open **Sparebank1 Factoring Setup** in Business Central
2. Click **Schedule Daily Export**
3. The job queue entry opens. The first time, it is created with the status **On Hold**, set to run every day at midnight
4. Change **Starting Time** to the time the export should run
5. Set the status to **Ready** to start the daily export

## How the Daily Export Works

- When there are no documents ready for export, nothing is done, so no batch number is used and no empty files are created
- When no factoring payment method is set up, nothing is exported
- A failed run is retried up to 3 times, 30 minutes apart

:::warning
After the third failed attempt, the job queue entry stops with the status **Error** and is not run again until it is set back to **Ready**. Check the job queue entry and its log from time to time.
:::
