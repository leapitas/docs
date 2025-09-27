# Mapping of employees and resources
If there are already employees and resources in Business Central, you can map these against employees in Visma to avoid duplicates in Business Central.

:::warning Important timing
To avoid duplicates, this must be performed **before** importing employees from Visma for the first time.
:::

## Open the mapping function

### Via the setup
1. **Search for** and open **"Setup for Visma employee import"**
2. Click on **"Employee mapping"** to open the screen for mapping employees and resources

## Automatic mapping suggestions

### Create mapping suggestions
By clicking **"Create mapping suggestions"** the system will:
- **Compare employees and resources** in Business Central with employees from Visma
- **Comparison** is done on social security number or name
- **Valid matches** get automatically checked in **"Accept match"**
- **Matched data** is indicated with **green color**

### Automatic matching criteria
The system searches for matches based on:
1. **Social security number** (most reliable)
2. **Full name** (first name + last name)

## Manual mapping

### For data without automatic match
If there are employees or resources that did not get automatic mapping:

1. **Fill out manually** the fields for:
   - **Suggested employee no.** - Business Central employee number
   - **Suggested resource no.** - Business Central resource number

2. **Check** the field **"Accept match"**

:::info Requirements for acceptance
It is required that **either** "Suggested employee no." **or** "Suggested resource no." has a value before you can check "Accept match".
:::

### Accept mapping
When the suggestion is complete:
1. **Review** all mappings
2. **Click** on **"Accept mapping"**
3. **Data in Business Central** will then be linked to data in Visma
4. **Import of employees** can now be performed without duplicates