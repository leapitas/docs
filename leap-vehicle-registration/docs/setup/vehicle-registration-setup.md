---
sidebar_position: 1
---

# Vehicle Registration Setup

The **Vehicle Registration Setup** page holds the connection to Statens vegvesen. Open it by searching for **Vehicle Registration Setup** in Business Central.

## General

| Field | Description |
|-------|-------------|
| **VAT Registration No.** | The organisation number of the company that submits the preregistrations |
| **Environment Type** | Whether the preregistrations are sent to the **Test** or the **Production** environment |
| **API Key** | The API key provided by Leap IT |

## Environment Type

| Value | Description |
|-------|-------------|
| **Test** | Preregistrations are sent to the test environment. Use this while you get familiar with the solution |
| **Production** | Preregistrations are sent to Statens vegvesen for real |

When a production environment is copied to a sandbox, **Environment Type** is set to **Test** in the sandbox, so that no preregistrations are sent to production from the sandbox.

## Getting Started

1. Enter **VAT Registration No.** and **API Key**
2. Set **Environment Type** to **Test**, and try to preregister a vehicle. See [Preregister Vehicles](../usage/preregister-vehicles.md)
3. Set **Environment Type** to **Production** when you are ready to preregister vehicles for real

If the API key is wrong, the preregistration fails with the message *Unable to connect. The API key may be incorrect.* in the [log](../usage/logs.md) on the vehicle.
