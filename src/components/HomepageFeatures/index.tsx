import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.leap-sign.title',
      message: 'Leap Sign',
      description: 'Title for Leap Sign feature',
    }),
    image: 'img/leapsign-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.leap-sign.description',
          message: 'Comprehensive digital signature solution with legally binding electronic signatures, workflow automation, and API integration for your business applications.',
          description: 'Description for Leap Sign feature',
        })}
      </>
    ),
    link: '/leap-sign/intro',
  },
  {
    title: translate({
      id: 'homepage.features.visma-employees.title',
      message: 'Visma Employees Import',
      description: 'Title for Visma Employees Import feature',
    }),
    image: 'img/employees-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.visma-employees.description',
          message: 'Automated employee data synchronization between Visma HRM systems and Business Central. Eliminate manual data entry and maintain consistent employee records across platforms.',
          description: 'Description for Visma Employees Import feature',
        })}
      </>
    ),
    link: '/leap-visma-employees/intro',
  },
  {
    title: translate({
      id: 'homepage.features.visma-payroll.title',
      message: 'Visma Payroll Import',
      description: 'Title for Visma Payroll Import feature',
    }),
    image: 'img/payroll-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.visma-payroll.description',
          message: 'Complete payroll integration solution that automatically imports payroll transactions from Visma Payroll into Business Central with full financial posting and account mapping.',
          description: 'Description for Visma Payroll Import feature',
        })}
      </>
    ),
    link: '/leap-visma-payroll/intro',
  },
  {
    title: translate({
      id: 'homepage.features.visma-expense.title',
      message: 'Visma Expense Import',
      description: 'Title for Visma Expense Import feature',
    }),
    image: 'img/expense-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.visma-expense.description',
          message: 'Expense management that automatically imports approved travel expenses and disbursements from Visma Expense for project and financial posting in Business Central.',
          description: 'Description for Visma Expense Import feature',
        })}
      </>
    ),
    link: '/leap-visma-expense/intro',
  },
  {
    title: translate({
      id: 'homepage.features.visma-calendar.title',
      message: 'Visma Calendar Import',
      description: 'Title for Visma Calendar Import feature',
    }),
    image: 'img/calendar-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.visma-calendar.description',
          message: 'Imports hours registered in Visma Calendar to the project journal in Business Central, with project, project task, work type and dimensions.',
          description: 'Description for Visma Calendar Import feature',
        })}
      </>
    ),
    link: '/leap-visma-calendar/intro',
  },
  {
    title: translate({
      id: 'homepage.features.visma-dimension.title',
      message: 'Visma Dimension Integration',
      description: 'Title for Visma Dimension Integration feature',
    }),
    image: 'img/dimension-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.visma-dimension.description',
          message: 'Keeps the cost units in Visma Payroll up to date from Business Central. Dimension values, projects and project tasks are sent to Visma Payroll automatically when they are created, changed or deleted.',
          description: 'Description for Visma Dimension Integration feature',
        })}
      </>
    ),
    link: '/leap-visma-dimension/intro',
  },
  {
    title: translate({
      id: 'homepage.features.leap-ehf.title',
      message: 'Enkel EHF',
      description: 'Title for Enkel EHF feature',
    }),
    image: 'img/enkelehf-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.leap-ehf.description',
          message: 'Complete electronic invoicing solution for Business Central via the PEPPOL network. Full PEPPOL 3.0 compliance with multi-channel distribution, PDF attachments, and automated PEPPOL directory lookup.',
          description: 'Description for Enkel EHF feature',
        })}
      </>
    ),
    link: '/enkel-ehf/intro',
  },
  {
    title: translate({
      id: 'homepage.features.leap-freja.title',
      message: 'Freja Integration',
      description: 'Title for Freja Integration feature',
    }),
    image: 'img/freja-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.leap-freja.description',
          message: 'Integration between Business Central and Freja Third Party Logistics (3PL). Automate pick and receipt assignments, item master synchronization, and SFTP file exchange for complete warehouse outsourcing.',
          description: 'Description for Freja Integration feature',
        })}
      </>
    ),
    link: '/freja-integration/intro',
  },
  {
    title: translate({
      id: 'homepage.features.sparebank1-factoring.title',
      message: 'Sparebank1 Factoring',
      description: 'Title for Sparebank1 Factoring feature',
    }),
    image: 'img/factoring-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.sparebank1-factoring.description',
          message: 'Factoring of sales invoices and credit memos through SpareBank 1 Factoring. Export posted documents with PDF copies, and import the returned transactions to the general journal.',
          description: 'Description for Sparebank1 Factoring feature',
        })}
      </>
    ),
    link: '/sparebank1-factoring/intro',
  },
  {
    title: translate({
      id: 'homepage.features.vehicle-registration.title',
      message: 'Vehicle Registration',
      description: 'Title for Vehicle Registration feature',
    }),
    image: 'img/vehicle-registration-logo-final.png',
    description: (
      <>
        {translate({
          id: 'homepage.features.vehicle-registration.description',
          message: 'Preregister imported vehicles with Statens vegvesen directly from Business Central, using vehicle templates and IVI documents.',
          description: 'Description for Vehicle Registration feature',
        })}
      </>
    ),
    link: '/leap-vehicle-registration/intro',
  },
];

function Feature({title, image, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <img src={image} className={styles.featureSvg} role="img" alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

type FeatureGroup = {
  title: string;
  links: string[];
};

const FeatureGroups: FeatureGroup[] = [
  {
    title: translate({
      id: 'homepage.groups.visma',
      message: 'Visma',
      description: 'Heading for the Visma product group',
    }),
    links: [
      '/leap-visma-employees/intro',
      '/leap-visma-payroll/intro',
      '/leap-visma-expense/intro',
      '/leap-visma-calendar/intro',
      '/leap-visma-dimension/intro',
    ],
  },
  {
    title: translate({
      id: 'homepage.groups.finance-documents',
      message: 'Finance & Documents',
      description: 'Heading for the Finance & Documents product group',
    }),
    links: [
      '/enkel-ehf/intro',
      '/sparebank1-factoring/intro',
      '/leap-sign/intro',
    ],
  },
  {
    title: translate({
      id: 'homepage.groups.logistics',
      message: 'Logistics',
      description: 'Heading for the Logistics product group',
    }),
    links: [
      '/freja-integration/intro',
      '/leap-vehicle-registration/intro',
    ],
  },
];

function toRows(features: FeatureItem[]): FeatureItem[][] {
  const rows: FeatureItem[][] = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3));
  }
  return rows;
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureGroups.map((group) => {
          const features = group.links
            .map((link) => FeatureList.find((feature) => feature.link === link))
            .filter((feature): feature is FeatureItem => feature !== undefined);
          return (
            <div key={group.title} className={styles.group}>
              <Heading as="h2" className={clsx('text--center', styles.groupTitle)}>
                {group.title}
              </Heading>
              {toRows(features).map((row, rowIdx) => (
                <div key={rowIdx} className="row" style={{justifyContent: 'center'}}>
                  {row.map((props) => (
                    <Feature key={props.link} {...props} />
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
