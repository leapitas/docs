import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapVismaPayrollSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Installasjon',
      collapsed: false,
      items: [
        'install-business-central',
        'install-visma-payroll',
      ],
    },
    {
      type: 'category',
      label: 'Oppsett',
      collapsed: false,
      items: [
        'setup-payroll-import',
        'account-mapping',
        'dimension-mapping',
      ],
    },
    {
      type: 'category',
      label: 'Bruk',
      collapsed: false,
      items: [
        'import-payroll-transactions',
      ],
    },
  ],
};

export default sidebars;