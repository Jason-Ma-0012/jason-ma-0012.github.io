import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const style_header_bg = {
  backgroundImage: 'url(img/HomeHeaderBG.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

const style_title = {
  color: 'var(--ifm-color-secondary-lightest)',
  textShadow: '0px 0px 15px var(--ifm-color-primary-lighter)',
}

const style_button_text = {
  color: 'var(--ifm-color-secondary-lightest)',
  textShadow: '0px 0px 20px var(--ifm-color-secondary)',
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={style_header_bg}
    >
      <div className="container"
      >
        <h1 className="hero__title" style={style_title}> {siteConfig.title} </h1>
        <p className="hero__subtitle" style={style_title}>
          <Translate
            id='homepage.subtitle'>
            UE5影视级卡通渲染的终极解决方案
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            style={style_button_text}
            to="/docs/GettingStarted">
            <Translate
              id='homepage.gettingStarted'>
              开始使用
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={
        translate({
          id: 'homepage.homepage',
          message: '首页'
        })}
      description="The Ultimate Solution for Cinematic Toon Rendering in UE5">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
