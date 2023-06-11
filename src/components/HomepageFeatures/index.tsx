import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Note from '../CssAnimate/Note';
import MindFocus from '../CssAnimate/MindFocus';
import CodeLife from '../CssAnimate/CodeLife';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'div'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '音符间的失落',
    Svg: Note,
    description: (
      <>
        他曾是音符间的灵魂律动，悠扬旋律在他指尖绽放，然而，命运的调子却让他失落在舞台之外，仅留下一份专注的技艺，宛如一只孤独的鸟儿在广阔天空中寻觅归宿。
      </>
    ),
  },
  {
    title: '心灵的焦点',
    Svg: MindFocus,
    description: (
      <>
        不要让过去的阴影阻挡当下的阳光，也不要让未来的幻想遮蔽当下的真实，将心灵的焦点投射到此刻，感受当下的美好和生命的脉动。
      </>
    ),
  },
  {
    title: '代码人生',
    Svg: CodeLife,
    description: (
      <>
        生命如代码，没有完美的程序，只有不断优化的可能性，在代码的世界里，每一个 bug 都是一次成长的机会，每一次重构都是一个更好的自己。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureSvg)}>
        <Svg />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
