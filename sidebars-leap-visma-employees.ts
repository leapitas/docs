import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapVismaEmployeesSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Installasjon',
      collapsed: false,
      items: [
        'install-business-central',
        'install-visma-app-store',
        'activate-app-store',
      ],
    },
    {
      type: 'category',
      label: 'Oppsett',
      collapsed: false,
      items: [
        'setup-import',
        'dimension-mapping',
        'employee-mapping',
      ],
    },
    {
      type: 'category',
      label: 'Bruk',
      collapsed: false,
      items: [
        'import-employees',
        'import-job-codes',
      ],
    },
  ],
};

export default sidebars;