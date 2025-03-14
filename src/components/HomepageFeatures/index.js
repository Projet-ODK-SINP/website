import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Générique',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Les formulaires sont décrits en <a href="https://xlsform.org/en/">XLSForm</a> avec votre tableur préféré dans des feuilles de calculs <em>xlsx</em>.
        Il est trés facile d&apos;adapter des formulaires existants à ses propres besoins.
      </>
    ),
  },
  {
    title: 'OpenSource / mu par ODK',
    Svg: require('@site/static/img/odk.svg').default,
    description: (
      <>
        <a href="https://getodk.org">ODK</a> est une suite logicielle OpenSource pemettant la génération de formulaires pour téléphones Android. 
        ODK Collect est l'application Android diffusant les formulaires. ODK Central est le serveur web administrant les formulaires et les utilisateurs associés.
    
      </>
    ),
  },
  {
    title: 'Intéropérable',
    Svg: require('@site/static/img/odata.svg').default,
    description: (
      <>
        L&apos;API <a href="https://docs.getodk.org/central-api/">ODATA</a> proposée par ODK Central facilite l&apos;intégration des données collectées à son système d&apos;information.
        Avec Python (<a href="https://github.com/getodk/pyodk">pyODK</a>),  R (<a href="https://github.com/ropensci/ruODK">ruODK</a>), PostgreSQL (<a href="https://github.com/mathieubossaert/central2pg">central2pg</a>), avec un ETL comme FME 
        ou <a href="https://github.com/schemetrica/automating-data-delivery-odk-central">kettle</a>, <a href="https://plugins.qgis.org/search/?q=ODK">QGIS</a>...
      </>
    ),
  }
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
