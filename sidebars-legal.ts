import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  legalSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Privacy & Data Protection',
      collapsed: false,
      items: [
        'privacy-policy',
      ],
    },
    {
      type: 'category',
      label: 'Terms & Agreements',
      collapsed: false,
      items: [
        'eula',
      ],
    },
  ],
};

export default sidebars;