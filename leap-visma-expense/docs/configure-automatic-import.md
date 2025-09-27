# Configure Automatic Import of Travel Transactions

To set up automatic import of travel transactions, do the following:

1. In the search menu, search for Job Queue Entries.
2. Click New to create a new entry.
3. Specify Object Type to be run as Codeunit.
4. Specify Object ID to be run as 86840.
5. If desired, give the entry a description. This can for example be Automatic import of travel transactions from Visma Expense.
6. Under Recurrence, enter which days the automatic import should run. If you want all days, check the days one by one.
7. Specify Number of minutes between runs to configure how often the import should run.

At the current time, transactions are imported one week back in time. Already imported transactions will not be imported again. The transactions are placed ready for posting in journal, but the user must review the journal and post it themselves. It is recommended to go through any error messages that may have occurred before posting the journal to make sure all transactions have been transferred correctly. Any error messages are shown under Imported travel expense reports. See procedure under "Re-reading imported transactions" for how to bring up the list of Imported travel transactions.