import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapSignSidebar: [
    'intro',
    'setup-provider',
    {
      type: 'category',
      label: 'Electronic Signature Providers',
      collapsed: false,
      items: [        
        'visma-sign',
      ],
    },
    'signing-document-overview',
    'create-signing-document',
    'sign-sales-documents',
  ],
};

export default sidebars;