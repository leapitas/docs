import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapVismaExpenseSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Installasjon',
      collapsed: false,
      items: [
        'install-business-central',
        'install-visma-app-store',
      ],
    },
    {
      type: 'category',
      label: 'Oppsett',
      collapsed: false,
      items: [
        'setup-expense-import',
      ],
    },
    {
      type: 'category',
      label: 'Bruk',
      collapsed: false,
      items: [
        'import-expense-transactions',
        'rebilling-travel-costs',
        're-read-imported-transactions',
        'configure-automatic-import',
      ],
    },
  ],
};

export default sidebars;