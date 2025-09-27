# Mapping of dimensions and dimension values
If there are differences or gaps in dimensions between Business Central and Visma Payroll, this can be mapped in a separate setup.

## When do you need dimension mapping?

Dimension mapping is necessary when:
- **Dimension codes** are different between the systems
- **Want to override** automatic mapping

## Open dimension mapping

### Via the setup
1. **Search for** and open **"Setup for Visma Payroll import"**
2. **Click on** **"Dimension mapping"** to open the screen for dimension mappings
3. **Enter mappings** you want between Business Central and Visma Payroll.

## Indication of missing mappings

### In the payroll transaction list
If a dimension from Visma is not mapped, this will be indicated in the list of payroll transactions by showing **[Missing]** over the dimension values in the list. Based on what you have specified in Handling when dimension missing in the setup, this will give an error message or be ignored when importing to general journal.

## Handling of dimension values

### Interactive editing
You can always **click on a dimension value** to create or change a value directly from the payroll transaction list.

### Color indication based on setup

Depending on what you have selected in the setup for handling missing dimension values, dimension values will be displayed in different colors:

#### Give error message
- **Blue color**: Dimension values that exist in the system
- **Red color**: Dimension values that are missing
- **Click** on the dimension value to create/change it

#### Skip
- **Blue color**: Dimension values that exist
- **Gray color**: Dimension values that do not exist

#### Create
- **Blue color**: All dimension values are displayed in blue
- **Not highlighted**: Missing values are indicated by not being highlighted
- **Automatic creation** of all missing dimension values when transferring to general journal