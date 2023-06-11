import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const getCharStyle = (idx: number): React.CSSProperties & { ['--char-idx']?: string } => ({
  ['--char-idx']: idx.toString(),
})

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <section className={styles.logoBox}>
          <div className={styles.logoAvaParent}>
            <div className={styles.logoAva}>
              <div></div>
            </div>
            <div className={styles.logo}>
              <img src="img/logo.png" alt="hyminghan" />
            </div>
          </div>
          <h1 className={clsx('hero__title', styles.anim1)}>
            {
              siteConfig.title.split('').map((char, idx) => (
                <span style={getCharStyle(idx)} className={styles.char} key={idx}>{char}</span>
              ))
            }
          </h1>
          <h1 className={clsx('hero__title', styles.anim2)}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/HTML">
              阅读文档→
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
