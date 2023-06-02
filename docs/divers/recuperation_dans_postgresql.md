---
title: Récupération des données dans PostgreSQL
sidebar_position: 4
---
![logo postgresql|50%](../ODK-CEN/fichiers/logos/logo_postgresql.png)
# Comment récupérer ses données dans une base de données préexistante
## Avec un ETL
Ce se des outils d'extraction, de transformation et de chargement de données (Extract Transform and Load)
 * Kettle
https://forum.getodk.org/t/automating-data-delivery-using-the-odata-endpoint-in-odk-central/22010
 *  FME
## Depuis PostgreSQL
En utilisant des bibliothèques de fonctions dédiées.
### pl-pyODK
C'est une évolution de central2pg présenté ci-dessous.
pl-pyODK utilise des fonctions [pyODK](https://github.com/getodk/pyodk) dans des fonctions pl/pgsql et permet de filter les données récupérées depuis le serveur d'ODK

Voir ici le post d eprésentation sur le forum d'ODK :
https://forum.getodk.org/t/pl-pyodk-use-of-pyodk-with-pl-python-postgresql-functions-to-pull-data-from-central-into-your-own-database


et ici la page d'accueil du projet sur Github :
https://github.com/mathieubossaert/pl-pyodk/blob/main/README.md

### central2pg
-> remplacé par pl-python
* la présentation du travail est ici : 
https://forum.getodk.org/t/postgresql-set-of-functions-to-get-data-from-central/33350

* les fonctions à télécharger là : 
https://github.com/mathieubossaert/central2pg

* et la démo succinte mais fonctionnelle :
<iframe width="800" height="600" src="https://www.youtube.com/embed/Z4rY1ejNlW0" title="Démonstration de ODK Central et de la récupération des données dans PostgreSQL avec Central2PG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
