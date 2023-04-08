import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
          NyaBot 开箱即用，只需运行可执行文件并修改配置文件即可使用，无需安装任何环境和依赖。
      </>
    ),
  },
  {
    title: '可扩展',
    Svg: require('@site/static/img/plugin.svg').default,
    description: (
      <>
          NyaBot 支持基于 <code>Lua</code>，<code>JavaScript</code>，<code>gRPC</code> 的动态扩展组件，可根据开发习惯自行挑选使用。
      </>
    ),
  },
  {
    title: '轻量快速',
    Svg: require('@site/static/img/golang.svg').default,
    description: (
      <>
          NyaBot 使用 <code>Golang</code> 开发，性能优异，内存占用低，可在几乎任意配置的服务器上运行。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <br/>
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
