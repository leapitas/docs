import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapEhfSidebar: [
    'intro',
    'technical-installation',
    {
      type: 'category',
      label: 'Setup in Business Central',
      collapsed: false,
      items: [
        'setup/e-document-service',
        'setup/workflow',
        'setup/document-sending-profile',
        'setup/related-setup',
        'setup/peppol-profile-update',
        'setup/additional-attachments',
        'setup/multichannel',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/send-documents',
        'usage/follow-up',
        'usage/troubleshoot-failed',
        'usage/resend-document',
      ],
    },
    'common-errors',
  ],
};

export default sidebars;
