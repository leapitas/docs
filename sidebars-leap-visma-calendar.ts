import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapVismaCalendarSidebar: [
    'intro',
    'installation',
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        'setup/visma-calendar-setup',
        'setup/work-type-mapping',
        'setup/dimension-mapping',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/import-hours',
        'usage/time-transactions',
      ],
    },
  ],
};

export default sidebars;
