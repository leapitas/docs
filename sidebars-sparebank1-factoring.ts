import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sparebank1FactoringSidebar: [
    'intro',
    'installation',
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        'setup/factoring-setup',
        'setup/file-configuration',
        'setup/invoice-layouts',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/export-to-factoring',
        'usage/import-from-factoring',
      ],
    },
    'automation',
  ],
};

export default sidebars;
