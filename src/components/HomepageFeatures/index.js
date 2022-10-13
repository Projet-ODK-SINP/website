import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Générique',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Les formulaires sont décrits dans des feuilles de calculs dans le formalimsme XLSForm.
        Il est trés facile d&apos;adapter des formulaires existants à ses propres besoins.
      </>
    ),
  },
  {
    title: 'Intéropérable',
    Svg: require('@site/static/img/odata.svg').default,
    description: (
      <>
        L&apos;API ODATA proposée par ODK Central permet de facilement intégrer les données collectées à son système d&apos;information.
        Avec Python (pyODK),  R (ruODK), PostgreSQL (central2pg), avec un ETL comme fme, ou kettle, QGIS...
      </>
    ),
  },
  {
    title: 'OpenSource / mu par ODK',
    Svg: require('@site/static/img/odk.svg').default,
    description: (
      <>
        ODK (Open Data Kit) est un
        outil opensource de génération de
        formulaires de collecte de donénes pour téléphones Android.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
