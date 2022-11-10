# Générer des fonds de carte pour utilisation hors-ligne dans ODK

Voici la traduction d'un tutoriel de Florian Mayer sur le forum ODK, qui présente comment générer vos fond de cartes avec toute l'info que vous voudrez y superposer, pour aller sur le terrain avec ODK ou Oruxmaps (navigation seule)

[Article original de Florian Mayer](https://forum.getodk.org/t/generate-offline-background-imagery-for-odk-collect-mbtiles/31200/6)

La documentation sur l'utilisation de fonds de carte hors ligne dans ODK est [ici](https://docs.getodk.org/collect-offline-maps/)

Cet article est une mise en partique rapide de l'étape n°1 du [quickstart](https://docs.getodk.org/collect-offline-maps/#offline-maps-quick-start).

Les données de base sont des sources de données raster et vectorielles librement disponibles*, ainsi que des données de référence propres. (*Rappel : respectez les droits d'auteur et les conditions d'utilisation des sources de données utilisées).

Le processus aboutira à la création d'un ou plusieurs fichiers MapBox Tiles (.mbtiles) placés dans le dossier dédié d'ODK Collect `/Android/data/org.odk.collect.android/files/layers`.

## Logiciel

Quantum GIS v3.14 ou supérieur (à télécharger [ici](https://qgis.org/en/site/forusers/download.html))

## Charger les fonds de cartes et les données de référence

Au cours de cette étape, nous allons créer dans QGIS, tlle que nous aimerions l'utiliser sur le terrain dans ODK Collect. Nous allons donc :

* Charger un fond de carte "de secours" comme OpenStreetMap qui s'affichera si les couches supérieures ne sont pas dispon,ibles au niveau de zoom demandé.
* Charger des images aériennes d'une résolution suffisante (les ortho-images de l'IGN)

### Fond de carte : tuiles OpenStreetMap

* Calque > Ajouter un calque > Ajouter un calque XYZ
* Si OpenStreetMap n'est pas disponible : Créer une nouvelle source de donénes XYZ
  * avec l'url [https://tile.openstreetmap.org/{z}/{x}/{y}.png 1](https://tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png)
  * Nommez là, par exemple OpenStreetMap

### Couche intermédiaire : photos aériennes

* Couche > Ajouter une couche > Ajouter une couche WMS/WMTS
* Nouveau
* URL : https://wxs.ign.fr/essentiels/geoportail/wmts?SERVICE=WMTS&REQUEST=GetCapabilities
* Nommez-la comme vous le souhaitez, par exemple IGN ORTHOPHOTOS.
* PLacez la couche au dessu d'OSM
* L'échelle visible la plus basse de l'Orthophoto est d'environ 1:850
* Propriétés de la couche > Rendu > Cocher "Visibilité dépendante de l'échelle" > Maximum (inclusif) > 1:850 (échelle la plus basse visible dans votre zone d'intérêt)
* La définition de l'échelle de rendu maximale garantit que cette couche sera masquée lors d'un zoom plus important, révélant la couche OpenStreetMap située en dessous, au lieu de la recouvrir de tuiles grises "Aucune imagerie disponible à ce niveau de zoom" (ne se présente pas avec l'IGN)

### Couches supérieures : données vecteurs de référence

* Ajoutez vos propres couches vectorielles avec un style approprié.
* Pensez à la transparence des couches, aux étiquettes avec ombre portée, aux tampons et à la visibilité en fonction de l'échelle.
* L'exemple de projet ci-joint contient une couche GeoJSON contenant un exemple de localisation et de style.

## Génération des MBTiles

Dans cette étape, nous allons générer le fichier MBTiles à partir des couches raster et vectorielles affichées dans QGIS pour les zones que nous souhaitons embarquer dans ODK pour un travail hors connexion.

QGIS peut générer nativement des MBTiles, voir la documentation QGIS sur [Generate XYZ Tiles 3](https://docs.qgis.org/3.16/en/docs/user_manual/processing_algs/qgis/rastertools.html#generate-xyz-tiles-mbtiles).

* Ouvrez la boîte à outils de "Traitement" > Boite à Outils > Outils rasters > Générer des tuiles XYZ (MBTiles).
* Zoomer le canevas sur chaque zone d'intérêt.
* Extent : Vous pouvez soit choisir l'étendue actuelle de la carte, soit l'étendue d'une couche, soit dessiner la zone que vous voulez générer (Dessiner sur le canevas)
* Zoom min 5, max 20 ou selon votre goût (18 pour l'IGN). Chaque niveau de zoom "élevé" supplémentaire augmente la taille du fichier .mbtiles produit de manière exponentielle.
* Format des tuiles : PNG est de meilleure qualité, mais environ 20 fois plus lourd que le JPG à 75% de qualité.
* Enregistrez dans un fichier de sortie (.mbtiles)
* Testez les .mbtiles résultants en les ouvrant dans QGIS (glisser-déposer sur le panneau des couches). Tous les niveaux de zoom fonctionnent-ils ? La résolution est-elle suffisante ? Faites des essais selon vos goûts. Enregistrez les "bons" paramètres sous forme de travail par lot 'petite disquette dans la berre d'outils.

Les MBTiles les fonds de cartes et les données (qui sont fusionnés dans les tuiles) à n'importe quel niveau de zoom, exactement comme elles apparaissent dans QGIS. L'inclusion de couches de référence, telles que "mes sites d'étude" ou "mes emplacements connus" est utile comme contexte pour la saisie de données.

### Transfert et test

Transférez les .mbtiles sur vos appareils comme indiqué dans la documentation

* copiez-les dans `/Android/data/org.odk.collect.android/files/layers`. Testez et examinez les niveaux de zoom, la résolution dedu fonds de carte et l'étendue.

## Autres considérations

### Optimiser l'étendue de l'imagerie

Il existe des outils permettant de réduire davantage la taille des .mbtiles. Une approche intéressante consiste à exclure les tuiles inutiles ; par exemple, si la zone d'intérêt est longue, étroite et diagonale (on pense aux plages de nidification des tortues), le carré .mbtiles contiendra deux triangles remplis d'images dont vous n'aurez jamais besoin.
### Limites de stockage

Certains systèmes d'exploitation limitent la taille des fichiers que vous pouvez facilement transférer. Les téléphones ont un stockage limité.