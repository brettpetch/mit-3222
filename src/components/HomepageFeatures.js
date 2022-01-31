import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Next Due Date:',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
            Intro Theory Assignment: Oct. 18, 2021
            <br/>
            Mid-term: Oct. 25, 2021
            <br/>
            Research Paper: Nov. 29, 2021
      </>
    ),
  },
  {
    title: 'About',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This course addresses a variety of issues pertaining to the reconstruction and reorganization of digital consumers' unwaged labour, which has traditionally been exploited to produce revenue within "Big Tech" capitalism. The course follows the emerging trend of audiences seeking and achieving autonomy in online content production and consumption within the world of digital media in the years following the "Big Tech" economic boom of the early 2000's. The complexities of the relationship between digital communicative capitalsim and the audiences of which it attempts to exploit are central focus of this course.
      </>
    ),
  },
  {
    title: 'For Next Class:',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Convergence and Media Theory: Readings.
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
