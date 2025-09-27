# Claude Documentation Assistant Guide

This file contains important context and commands for Claude to effectively work with the Leap IT documentation site.

## Project Overview

This is a Docusaurus v3 documentation website for Leap IT AS, replacing their previous Confluence-based documentation. The site includes comprehensive documentation for all Leap IT products that integrate with Microsoft Dynamics 365 Business Central.

## Site Structure

### Products Documented
- **Leap Sign**: Digital signature solution for Business Central
- **Leap Visma Employees Import**: Employee data synchronization between Visma HRM and Business Central
- **Leap Visma Payroll Import**: Payroll transaction import from Visma Payroll to Business Central
- **Legal Documents**: Privacy Policy, EULA, and other legal content

### Language Support
- **English** (default locale: `en`)
- **Norwegian** (secondary locale: `no`)
- Full i18n implementation with language switcher in navbar
- URLs: `/` for English, `/no/` for Norwegian

## Technical Configuration

### Docusaurus Setup
- **Version**: Docusaurus v3 with TypeScript
- **Deployment**: GitHub Pages with custom domain `docs.leapit.com`
- **Multi-instance docs**: Each product uses separate plugin instances
- **Theme**: Classic theme with custom CSS

### Key Files
- `docusaurus.config.ts`: Main configuration
- `sidebars-*.ts`: Navigation configuration for each product
- `i18n/*/`: Language-specific translations and content
- `.github/workflows/deploy.yml`: GitHub Actions deployment

### Build Commands
- `npm run build`: Build for production
- `npm run serve`: Serve built site locally
- `npm start`: Development server (port 3000)

## Content Structure

### English Content Locations
- `docs/`: Main getting started docs
- `leap-sign/docs/`: Leap Sign documentation
- `leap-visma-employees/docs/`: Employee import docs
- `leap-visma-payroll/docs/`: Payroll import docs
- `legal/docs/`: Legal documents

### Norwegian Content Locations
- `i18n/no/docusaurus-plugin-content-docs/current/`: Main docs
- `i18n/no/docusaurus-plugin-content-docs-leap-sign/current/`: Leap Sign (Norwegian)
- `i18n/no/docusaurus-plugin-content-docs-leap-visma-employees/current/`: Employee import (Norwegian)
- `i18n/no/docusaurus-plugin-content-docs-leap-visma-payroll/current/`: Payroll import (Norwegian)
- `i18n/no/docusaurus-plugin-content-docs-legal/current/`: Legal docs (Norwegian)

## Important Configuration Details

### Navigation Structure
- Legal section removed from top navbar (accessible via footer only)
- Language switcher automatically appears when multiple locales configured
- Sidebar configurations in separate files for each product

### Content Guidelines
- **No emojis** in documentation (removed per user preference)
- **No author bylines** or reading time indicators
- **No edit page links** (editUrl configuration removed)
- Professional, clean presentation style

### Sidebar Configuration
Each product uses its own sidebar file:
- `sidebars.ts`: Main docs
- `sidebars-leap-sign.ts`: Leap Sign
- `sidebars-leap-visma-employees.ts`: Employee import
- `sidebars-leap-visma-payroll.ts`: Payroll import
- `sidebars-legal.ts`: Legal documents

## Common Tasks

### Adding New Documentation
1. Create markdown files in appropriate product directory
2. Update corresponding sidebar configuration
3. Add translations to Norwegian if needed
4. Test build with `npm run build`

### Multilingual Content Updates
1. Update English content in main directories
2. Update Norwegian content in `i18n/no/` directories
3. Update translation files (`current.json`) if adding new categories
4. Ensure sidebar configurations match between languages

### Troubleshooting Build Issues
- Check for trailing commas in JSON translation files
- Verify sidebar configurations reference existing documents
- Ensure all image references point to existing files
- Validate markdown frontmatter syntax

## Deployment

### GitHub Pages Setup
- **Repository**: Should be configured for GitHub Pages
- **Custom Domain**: `docs.leapit.com` (configure in repository settings)
- **Workflow**: `.github/workflows/deploy.yml` handles automatic deployment
- **Base URL**: `/leapit-docs/` (adjust if repository name changes)

### Manual Deployment Steps
1. `npm run build` - Build static files
2. Commit and push changes to main branch
3. GitHub Actions automatically deploys to GitHub Pages
4. Site available at configured custom domain

## Content Migration Notes

All content was migrated from Confluence with these transformations:
- Confluence markup converted to Markdown
- Norwegian content properly categorized in i18n structure
- Images and attachments would need separate handling (none present currently)
- All author attributions and reading times removed per user request

## Support Information

### Contact Details
- **Website**: [Leap IT](https://leapit.no)
- **Email**: contact@leapit.no
- All products integrate with Microsoft Dynamics 365 Business Central

### Product Integration
- **Leap Sign**: Uses Visma Sign as signature provider
- **Visma Imports**: Connect to Visma HRM/Payroll systems via API
- **Legal Compliance**: Norwegian law jurisdiction, GDPR compliant

## Future Maintenance

### Regular Tasks
- Update product documentation as features change
- Maintain Norwegian translations alongside English updates
- Monitor build status and fix any issues
- Update legal documents as needed

### Potential Enhancements
- Add search functionality (Algolia configuration commented out)
- Additional language support if needed
- Custom themes or styling updates
- Additional product documentation as Leap IT expands

---

*This file serves as a reference for Claude when working on the Leap IT documentation site. Keep it updated as the project evolves.*