---
sidebar_position: 5
---

# Automation & Job Queues

The sync queue is sent to Visma Payroll by a job queue entry in Business Central. Without a job queue entry, changes are only sent when someone clicks **Synchronise Now** on the [sync queue](./usage/sync-queue.md).

## Setting Up the Job Queue Entry

1. Search for **Job Queue Entries** in Business Central
2. Click **New**
3. Fill in the following fields:

| Field | Value |
|-------|-------|
| **Object Type to Run** | Codeunit |
| **Object ID to Run** | 86885 (LEACUVismaCostUnitSyncJobQueue) |
| **Earliest Start Date/Time** | Optional. Set it if the job should not start right away |
| **Recurring Job** | Select the days the job should run on, and enter **No. of Minutes between Runs**, for example 15 |

4. Set the status to **Ready**

The job queue now sends the sync queue to Visma Payroll at the interval you have chosen.

## How the Job Works

- Every entry in the sync queue that has not reached **Max Retry Count** is sent to Visma Payroll
- Entries that are sent successfully are removed from the queue
- Entries that fail stay in the queue with the error message, and are tried again on the next run
- When **Enabled** is turned off in [Visma Dimension Setup](./setup/visma-dimension-setup.md), the job does nothing, and the entries stay in the queue until it is turned on

:::warning
When Visma Payroll rejects an entry, the job continues with the next one, so the job queue entry does not show the error. Check the [sync queue](./usage/sync-queue.md) from time to time for entries with **Error Occurred**.

If the connection itself fails, for example because the API key or Tenant ID is wrong, the job run fails and the job queue entry shows the error. Correct the connection in [Visma Dimension Setup](./setup/visma-dimension-setup.md), and set the job queue entry back to **Ready** if it has stopped.
:::
