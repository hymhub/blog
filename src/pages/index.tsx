import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Piano from '../components/Piano/index';

declare global {
  interface Window {
    playPiano: () => void
  }
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [playPiano, setPlayPiano] = useState(false)
  const handlePlay = () => {
    setPlayPiano(true)
    window.playPiano()
  }
  const [pianoIsReady, setPianoIsReady] = useState(false)
  const [tipsShow, setTipsShow] = useState(false)
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <section className={styles.logoBox}>
          <div className={styles.logo}>
            {/* <img src="img/logo.png" alt="hyminghan" /> */}
            <Piano setPianoIsReady={setPianoIsReady} />
            {
              !tipsShow
                ? <section className={clsx({ hide: playPiano || !pianoIsReady }, styles.playBar)}>
                  <p>要来一曲吗?</p>
                  <div>
                    <button onClick={handlePlay}>给朕弹一个</button>
                    <button onClick={() => setTipsShow(true)}>我要自己弹</button>
                  </div>
                </section>
                : <section className={clsx(styles.playBarTip, styles.playBar)}>
                  <p>按键或者鼠标点击可弹奏哦～</p>
                </section>
            }
          </div>
          <h1 className={clsx('hero__title')}>
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
