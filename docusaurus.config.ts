import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Leap IT Documentation',
  tagline: 'Comprehensive documentation for all Leap IT products',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.leapit.no',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'leapitas', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nb-NO'],
    localeConfigs: {
      'en-US': {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      'nb-NO': {
        label: 'Norsk',
        direction: 'ltr',
        htmlLang: 'nb-NO',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false, // Disable blog for documentation site
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leap-sign',
        path: 'leap-sign/docs',
        routeBasePath: 'leap-sign',
        sidebarPath: './sidebars-leap-sign.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leap-visma-employees',
        path: 'leap-visma-employees/docs',
        routeBasePath: 'leap-visma-employees',
        sidebarPath: './sidebars-leap-visma-employees.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leap-visma-payroll',
        path: 'leap-visma-payroll/docs',
        routeBasePath: 'leap-visma-payroll',
        sidebarPath: './sidebars-leap-visma-payroll.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leap-visma-expense',
        path: 'leap-visma-expense/docs',
        routeBasePath: 'leap-visma-expense',
        sidebarPath: './sidebars-leap-visma-expense.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'enkel-ehf',
        path: 'enkel-ehf/docs',
        routeBasePath: 'enkel-ehf',
        sidebarPath: './sidebars-enkel-ehf.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leap-freja',
        path: 'leap-freja/docs',
        routeBasePath: 'leap-freja',
        sidebarPath: './sidebars-leap-freja.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'legal',
        path: 'legal/docs',
        routeBasePath: 'legal',
        sidebarPath: './sidebars-legal.ts',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Search will be enabled later when Algolia is configured
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'leapit-docs',
    //   contextualSearch: true,
    //   searchParameters: {},
    //   searchPagePath: 'search',
    // },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Leap IT Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'leapSignSidebar',
          docsPluginId: 'leap-sign',
          position: 'left',
          label: 'Leap Sign',
        },
        {
          type: 'docSidebar',
          sidebarId: 'leapVismaEmployeesSidebar',
          docsPluginId: 'leap-visma-employees',
          position: 'left',
          label: 'Visma Employees Import',
        },
        {
          type: 'docSidebar',
          sidebarId: 'leapVismaPayrollSidebar',
          docsPluginId: 'leap-visma-payroll',
          position: 'left',
          label: 'Visma Payroll Import',
        },
        {
          type: 'docSidebar',
          sidebarId: 'leapVismaExpenseSidebar',
          docsPluginId: 'leap-visma-expense',
          position: 'left',
          label: 'Visma Expense Import',
        },
        {
          type: 'docSidebar',
          sidebarId: 'enkelEhfSidebar',
          docsPluginId: 'enkel-ehf',
          position: 'left',
          label: 'Enkel EHF',
        },
        {
          type: 'docSidebar',
          sidebarId: 'leapFrejaSidebar',
          docsPluginId: 'leap-freja',
          position: 'left',
          label: 'Leap Freja',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Leap Sign',
              to: '/leap-sign/intro',
            },
            {
              label: 'Visma Employees Import',
              to: '/leap-visma-employees/intro',
            },
            {
              label: 'Visma Payroll Import',
              to: '/leap-visma-payroll/intro',
            },
            {
              label: 'Visma Expense Import',
              to: '/leap-visma-expense/intro',
            },
            {
              label: 'Enkel EHF',
              to: '/enkel-ehf/intro',
            },
            {
              label: 'Leap Freja',
              to: '/leap-freja/intro',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/legal/privacy-policy',
            },
            {
              label: 'EULA',
              to: '/legal/eula',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leap IT AS`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
