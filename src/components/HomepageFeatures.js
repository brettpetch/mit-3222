import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Next Due Date:',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
            Short Assignment Task #2 (5%) due this week by Friday, Feb.4th
            <br/>
            Short Assignment Task #3 (5%) due this week by Friday, Feb. 18th
            <br/>
            Midterm: Feb.28
      </>
    ),
  },
  {
    title: 'About',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This course traces the historical development of the idea of “entertainment” in radio and television and situates the institutions of broadcast entertainment within wider debates around leisure, popular taste and culture. Theoretical and historical approaches to these media will be introduced.
      </>
    ),
  },
  {
    title: 'For Next Class:',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Radio &amp; Television as Entertainment Media.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
