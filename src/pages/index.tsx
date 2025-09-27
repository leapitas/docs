import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {translate({
            id: 'homepage.title',
            message: 'Leap IT Documentation',
            description: 'The title of the homepage',
          })}
        </Heading>
        <p className="hero__subtitle">
          {translate({
            id: 'homepage.tagline',
            message: 'Comprehensive documentation for all Leap IT products',
            description: 'The tagline of the homepage',
          })}
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Leap IT Documentation',
        description: 'The title of the homepage',
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Comprehensive documentation for all Leap IT products including Leap Sign, Visma integrations, and legal resources.',
        description: 'The description of the homepage',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
