# VAT Number Mapping

If there are differences between VAT numbers in Business Central and Visma Payroll, this can be mapped in a separate setup to ensure proper VAT handling during import.

## When do you need VAT number mapping?

VAT number mapping is necessary when **VAT numbers** are different between the systems

## Prerequisites

Before setting up VAT number mapping:
- **Import VAT Numbers** must be enabled in the Visma Payroll Setup
- Additional scope `payrollno:transactions:read` must be accepted by the customer
- VAT numbers must be properly configured in both Business Central and Visma Payroll

## Open VAT number mapping

### Via the setup
1. **Search for** and open **"Setup for Visma Payroll import"**
2. **Click on** **"VAT Number mapping"** to open the screen for VAT number mappings
3. **Enter mappings** you want for VAT numbers

## How to set up mapping

| Field | Description |
|-------|-------------|
| **Visma VAT Number** | The VAT Number from Visma Payroll that should be mapped |
| **VAT Number** | The corresponding VAT Number in Business Central that should be used instead |