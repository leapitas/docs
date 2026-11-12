import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  leapVehicleRegistrationSidebar: [
    'intro',
    'installation',
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        'setup/vehicle-registration-setup',
        'setup/vehicle-templates',
        'setup/vehicle-fuels',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/create-vehicles',
        'usage/create-vehicles-on-receipt',
        'usage/preregister-vehicles',
        'usage/logs',
      ],
    },
  ],
};

export default sidebars;
