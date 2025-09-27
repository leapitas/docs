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
          message: 'Comprehensive digital signature solution with legally binding electronic signatures, workflow automation, and seamless API integration for your business applications.',
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

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
