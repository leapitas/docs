---
sidebar_position: 5
---

# Profile Update Based on Peppol

To make it easier to determine if customers should receive EHF, you can do an automatic check against the Peppol Directory. If the customer has registered as a recipient of EHF, they should appear in the directory.

## Peppol Directory Setup

1. Search for "**Peppol Directory Setup**" in the search menu and click on the corresponding link
2. In the "**Document Sending Profile - Registered in Peppol**" field enter the profile you created for sending EHF
3. In the "**Document Sending Profile - Not Registered in Peppol**" field enter the desired profile, e.g. a profile for sending documents via email
4. Check the "**Active**" field
5. Optionally, configure "**Update Before Posting**" to automatically check and update a customer's PEPPOL registration status when a sales document is posted:
   - **No** (default) – no check is performed on posting.
   - **Yes** – the PEPPOL directory is checked silently; if the customer's registration status has changed, their document sending profile is updated automatically.
   - **Yes - Ask** – the PEPPOL directory is checked; if the status has changed, the user is prompted before updating the profile.
   - Both Document Sending Profiles must be configured for this feature to be active.

When you now add new customers and have filled in both the organization number and country/region code, the system will check against the Peppol Directory and automatically set the document sending profile depending on whether the customer is registered or not.

## Bulk Update of Customers

It is also possible to run the lookup as a bulk update of customers:

1. Search for "**Peppol Directory Update**" in the search menu and click on the corresponding link
2. Enter desired filters if you only want to update specific customers
3. If you want to run for all customers, click OK
