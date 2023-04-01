---
id: SuiviHerbiers
title: Suivi des herbiers lagunaires
tags:
  - lagunes
  - herbiers
---
# Suivi des herbiers lagunaires (Etang de Vic)
Suivi de l'herbier de l'Etang de Vic (Hérault)
## Description
Cartographie et description de l'herbier de l'Etang de Vic (Hérault)
### Auteur(s)
formulaire développé par Mathieu Bossaert au CEN Occitanie
### Objectif
#### Protocole mis en œuvre

## Présentation détaillée
### Logique de collecte
L'étang est découpé en mailles carrées de 100m (1787 subdivisions des mailles INPN) -> Pour chaque maille sont notés :

* le recouvrement et la densité de l'herbier
* la nature du substrat majoritaire sous l'herbier (si présent)
* la nature du substrat en général si l'herbier est absent
* la présence de 3 espèces ( *Ruppia cirrhosa (Petagna) Grande, 1918* ; *Zostera noltei Hornem., 1832* ; *Zostera marina L., 1753*) et d'algues
### Captures d'écrans et/ou vidéo de démonstration
[voir la démo](../fichiers/suivi_herbiers_lagunaires/ecrans/demo_formulaire_herbiers_etangs.webm)

## Utiliser ce formulaire
### Licence
[![CC-BY](../fichiers/by.png)](https://creativecommons.org/licenses/by/2.0/fr/)
### XLSform
[xlsform](../fichiers/suivi_herbiers_lagunaires/inventaire_herbiers_etangs.xlsx)
### Données externes et médias associés
[fichier geojson associé](../fichiers/suivi_herbiers_lagunaires/mailles_100m_etang.geojson)

## Fonctionnalités de XLSForm mises en oeuvre
Le formulaire utilise le widget [select-one-from-map-widget](https://docs.getodk.org/form-question-types/#select-one-from-map-widget) pour la sélection de la maille (son centroïde actuellement). Cela permet à l'utilisateur de voir sa progression car les mailles visitées sont cachées lors de la sélection.

### Discussion en ligne sur le forum d'ODK

## Traitement des données
### Scripts SQL
### Scripts R
### Autres


