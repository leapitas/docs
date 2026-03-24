---
sidebar_position: 4
---

# Automation & Job Queues

Leap Freja supports automation of SFTP file transfers and assignment processing through Business Central's Job Queue system.

## Setting Up the Main Job Queue

The main integration job queue handles upload and download of all files automatically.

1. Open **Freja Setup** in Business Central
2. Navigate to the **Job Queue** section and configure:
   - **SFTP Job Queue Category Code**: Select or create a job queue category
   - **SFTP Job Queue Run Interval (Minutes)**: Set how often the job runs (e.g., 5 minutes)
3. Click **Create/Update Job Queue**

The system creates a job queue entry running the integration scheduler codeunit.

**What the job queue does:**
- Uploads outbound files (pick assignments, receipt assignments, item exports) to Freja via SFTP
- Downloads inbound response files from Freja via SFTP
- Imports downloaded response files and updates assignment statuses
- Applies confirmed quantities to source documents based on the update action setting in Freja Setup

**Running processes manually:**
- **Process Freja Integrations**: Manually trigger all integration steps immediately
- **Export to SFTP**: Upload outbound files only
- **Import from SFTP**: Download and process inbound files only
- **Delete Job Queue**: Remove the automated job queue entry
- **Test SFTP Connection**: Verify SFTP credentials and connectivity

## Role Center Activity Cues

The Freja Activities page is automatically added to the **Business Manager** and **Order Processor** role centers when the extension is installed. It provides an at-a-glance overview of:

- Pick and receipt assignments by status (Created, Queued, Sent, Handled, Completed)
- Assignments with errors
- Active job queue entries
