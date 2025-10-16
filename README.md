# Leap IT Documentation

This repository contains the comprehensive documentation website for all Leap IT products and services, built with [Docusaurus](https://docusaurus.io/).

## Products Covered

- **Leap Sign**: Digital signature solution
- **Leap EHF**: Electronic invoicing solution for PEPPOL network
- **Leap Visma Employees Import**: Employee data synchronization with Visma
- **Leap Visma Payroll Import**: Payroll data integration with Visma
- **Legal Documents**: Privacy policy, EULA, terms of service

## Development

### Prerequisites

- Node.js 18 or higher
- npm

### Local Development

```bash
npm install
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Custom Domain Setup

The site is configured to use the custom domain `docs.leapit.com`. To set this up:

1. Add a CNAME record in your DNS settings pointing `docs.leapit.com` to `your-username.github.io`
2. Update the `organizationName` and `projectName` in `docusaurus.config.ts`
3. Update the `url` field in `docusaurus.config.ts` to match your domain

## Project Structure

```
company-docs/
├── docs/                           # Main documentation (getting started)
├── leap-sign/docs/                 # Leap Sign documentation
├── leap-ehf/docs/                  # Leap EHF documentation
├── leap-visma-employees/docs/      # Visma Employees Import documentation
├── leap-visma-payroll/docs/        # Visma Payroll Import documentation
├── legal/docs/                     # Legal documents
├── static/                         # Static assets
├── .github/workflows/              # GitHub Actions for deployment
└── docusaurus.config.ts           # Docusaurus configuration
```

## Contributing

1. Create a new branch for your changes
2. Add or update documentation in the appropriate product directory
3. Test locally with `npm start`
4. Build and verify with `npm run build`
5. Create a pull request

## Support

For questions about the documentation or to report issues:
- Create an issue in this repository
- Contact the development team
