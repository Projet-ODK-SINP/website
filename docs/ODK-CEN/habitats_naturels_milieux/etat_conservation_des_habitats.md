---
title: Suivi de l état de conservation des habitats naturels
tags:
    - habitats naturels
    - état de conservation
    - indicateurs
---
# Suivi de l'état de conservation des habitats
## Description
### Auteur(s)

Formulaire co-développé par Nathalie Hiessler et Mathieu Bossaert au CEN Occitanie

### Objectif
#### Protocole mis en œuvre

Mise en œuvre de la méthode d'évaluation de l'état de conservation des habitats naturels (Klesczewski et al. 2010)

*Mario Klesczewski, Jérémie Barret, Clément Baudot, Joseph Fleury. Evaluer l’état de conservation des habitats naturels à l’échelle du terrain : approches dans le Languedoc-Roussillon. Revue forestière française, AgroParisTech, 2010, 62 (3-4), pp.417-427. 10.4267/2042/38955.* [hal-03449686](https://hal.archives-ouvertes.fr/hal-03449686/document)
 et [ici](../fichiers/etat_conservation_habitats/417_427_HD_N.pdf)
## Présentation détaillée
### Logique de collecte

* Pour chaque polygone cartographié:
  * Saisie des informations concernant l'observateur
  * Renseignement des informations sur le projet
    * Choix de la méthode de géoréférencement pour jointure spatiale ultérieure lorsque les identifiants de polygone ne sont pas uniques.
    * Le ou les habitats Corine avec leur pourcentages de recouvrement
    * Lorsqu'un habitat d'intérêt communautaire est présent :
      * Les différents indicateurs des critères de structure, de composition et de dégragation de l'habitat sont proposés à l'observateur
      * Possibilité de lister les espèces exotique et rudérales

Ce sont les valeurs brutes qui sont renseignées, et non les résultats (bon / moyen / défavorable ) de manière à pouvoir comparer les données dans le temps, si les seuils étaient amenés à changer. Les résultats (notes) sont calculés ultérieurement dans la BDD.

### Captures d'écrans et/ou vidéo de démonstration
à venir !

## Utiliser ce formulaire
### Licence

[![CC-BY](../fichiers/by.png)](https://creativecommons.org/licenses/by/2.0/fr/)

### XLSform

[xlsform](../fichiers/etat_conservation_habitats/etats_conservation_hbt_n2k_v2023.xlsx)

### Données externes et médias associés

* [liste espèces plantes](../fichiers/etat_conservation_habitats/especes_plantes.csv)
* [liste habitats CORINE](../fichiers/etat_conservation_habitats/taxref_sicen_habitat.csv)
* [centroïdes de polygones pour select_one sur carte](../fichiers/etat_conservation_habitats/centroides_polygones_habitats.csv)

## Fonctionnalités de XLSForm mises en œuvre

à compléter

### Discussion en ligne sur le forum d'ODK
non concerné

## Traitement des données
### Scripts SQL
#### [Calcul des états de conservation](../fichiers/etat_conservation_habitats/calculs_notes_ec.sql)

