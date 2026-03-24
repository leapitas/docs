import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapFrejaSidebar: [
    'intro',
    'installation',
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        'setup/freja-setup',
        'setup/location-mapping',
        'setup/item-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/item-master-export',
        'usage/pick-assignments',
        'usage/receipt-assignments',
        'usage/transfer-orders',
      ],
    },
    'automation',
  ],
};

export default sidebars;
