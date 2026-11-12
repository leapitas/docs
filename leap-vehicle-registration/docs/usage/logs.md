---
sidebar_position: 4
---

# Logs

Every time an IVI document is sent, or a preregistration is cancelled, a log entry is created on the vehicle. The log entries are shown under **Logs** on the vehicle card.

## Log Entries

| Field | Description |
|-------|-------------|
| **Date/Time** | When the log entry was created |
| **Status** | **Success**, **Warning** or **Error** |
| **Message** | A short message about the result |
| **HTTP Status Code** | The HTTP status code of the response |

| Status | Description |
|--------|-------------|
| **Success** | The request was accepted |
| **Warning** | The request was accepted, but Statens vegvesen returned a warning. The warning is shown in **Details Message** |
| **Error** | The request failed. **Has Error** is turned on for the vehicle |

## Log Entry Details

Select a log entry and click **View Details** to see the full log entry.

| Section | Description |
|---------|-------------|
| **General** | **Entry No.**, **VIN Number**, **Date/Time**, **Status**, **Message** and **HTTP Status Code** |
| **Details** | **Details Message**, with the message from Statens vegvesen. For errors, it includes the message code and the fields with errors |
| **Request XML** | The request that was sent |
| **Response XML** | The response that was received |

## Troubleshooting

| Message | Solution |
|---------|----------|
| *Unable to connect. The API key may be incorrect.* | Check **API Key** in [Vehicle Registration Setup](../setup/vehicle-registration-setup.md) |
| *Failed to send IVI* or *Failed to cancel preregistration*, with **Request failed** in the details | Statens vegvesen could not be reached. Try again later, or contact Leap IT |
| Other errors | Check **Details Message** for the fields with errors. Correct the vehicle, click **Generate IVI Document**, and send it again |
