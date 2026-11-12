import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapVismaDimensionSidebar: [
    'intro',
    'installation',
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        'setup/visma-dimension-setup',
        'setup/dimension-mapping',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/synchronisation',
        'usage/sync-queue',
      ],
    },
    'automation',
  ],
};

export default sidebars;
