---
sidebar_position: 1
---

# Visma Dimension Setup

The **Visma Dimension Setup** page holds the connection to Visma Payroll. Open it by searching for **Visma Dimension Setup** in Business Central.

## General

| Field | Description |
|-------|-------------|
| **Enabled** | Specifies whether the integration is active. The integration is disabled by default. The sync queue is only sent to Visma Payroll when this is enabled. Changes are still added to the queue while it is disabled, and are sent once it is enabled |
| **Max Retry Count** | The maximum number of attempts for each queue entry. When an entry has failed this many times, it is no longer tried until the retry count is reset. The default is 5, and the value can be from 1 to 10 |

## Connection

| Field | Description |
|-------|-------------|
| **API Base URL** | The base URL of the Visma Payroll API: `https://payrollapi.no.visma.net` |
| **API Key** | The API key provided by Leap IT |
| **Tenant ID** | The Tenant ID of your company in Visma. See [Find your Tenant ID](../installation.md#find-your-tenant-id) |

## Actions

| Action | Description |
|--------|-------------|
| **Test Connection** | Tries to connect to Visma Payroll with the API key and Tenant ID, and shows whether the connection was established |
| **Dimension Mappings** | Opens the [dimension mappings](./dimension-mapping.md) |
| **Sync Queue** | Opens the [sync queue](../usage/sync-queue.md) |

## Getting Started

1. Enter **API Base URL**, **API Key** and **Tenant ID**
2. Click **Test Connection** and check that the connection is established. If it fails, check the three fields and try again, or contact Leap IT
3. Set up the [dimension mappings](./dimension-mapping.md)
4. Turn on **Enabled**
5. Set up the [job queue entry](../automation.md) that sends the queue to Visma Payroll

:::tip
Set up the dimension mappings before you turn on **Enabled**, so data is sent to the right cost unit types in Visma Payroll from the start.
:::
