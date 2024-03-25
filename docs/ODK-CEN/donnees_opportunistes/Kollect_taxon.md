---
id: Kollect Taxon
title: Kollect Taxon
tags:
  - Kollect
  - opportuniste
  - inventaire simple
  - faune
  - flore
  - fonge
---
# Kollect taxon

## Description
### Auteur(s)
Thomas GACHET (CEN Nouvelle-Aquitaine)


### Objectif

Ce formulaire alimente le [portail web Kollect](https://nouvelle-aquitaine.kollect.fr) développé et administré par le CEN Nouvelle-Aquitaine et permet de saisir des observations naturalistes fortuites ou liées à des inventaires et suivi simples (ne nécéssitant pas de mobiliser des champs spécifiques supplémentaires).

Il respecte le standard SINP.

## Présentation détaillée

:::info Prérequis
L'utilisateur doit être inscrit sur le portail web Kollect et avoir reçu son **QRCode ODK personnel**.
:::

### Logique de collecte


- **Formulaire nominatif** : grâce à son QRCode ODK nominatif lié au serveur d'ODK Central, un observateur est directement identifié pour chaque formulaire et aura accès à ses référentiels liés (organismes, études, etc.)

- **2 boucles imbriquées** : la première pour créer une session d'observation selon le type de localisation (dynamique ou stationnel) et la seconde pour ajouter des observations à cette session


### Captures d'écrans de démonstration et déroulé de la saisie

#### 1 : Contexte

#### 1bis : Co-observateur

#### Boucle 1

#### 2 : Informations sur le session d'observations

#### 2.1 : Stationnel - Création d'une station

#### 2.2 : Stationnel - Rattachement à une station existante

#### 2.3 : Stationnel - Simple relevé (pas de création de station)

#### Boucle 2

#### 3 : Ajout d'une observation - localisation et photo

#### 4 : Ajout d'une observation - choix du taxon et du déterminateur

#### 5 : Ajout d'une observation - choix de l'état biologique et stade

#### 6 : Ajout d'une observation - détails sur le taxon


## Principales améliorations apportées pour la saison 2024

- utilisation du concept d'**entités** via l'API d'ODK Central. 

Le formulaire utilise les référentiels issus de la base de données de Kollect. Afin de garantir une parfaite adéquation entre les informations en base et sur les terminaux mobiles, une tâche est lancée toutes les heures et qui ajoute dans les listes d'entités les éléments manquants. Cela concerne les membres, les observateurs, les organismes liés aux observateurs, les études liées aux organismes et les stations.

Cette nouveauté apporte également une meilleure expérience pour les utilisateurs : il n'y a plus besoins de télécharger à chaque mise à jour des référentiels une nouvelle version du formulaire.

- sélection des stations sur la carte

Lors du rattachement d'une session d'observations à une station déjà existante dans Kollect, l'utilisateur peut désormais la sélectionner sur la carte. Grâce à l'améioration précédente, il a accès aux donées à jour.

## Traitement des données

Toutes les données sont manipulées avec l'ETL FME (FME Form pour la partie Desktop et FME Flow pour la partie serveur) :

**1. Récupération des formulaires au format csv**

Toutes les heures, une **tâche cron** récupère les formulaires (avec les photos éventuellement attachées) nouvellement reçus par ODK Central via l'API d'ODK Central au format csv.

**2. Intégration en base de données**

Sur FME Flow, l'**exécution d'un workbench plannifié** toute les heures traite les données des différents csv récupérés précédemment pour les intégrer dans la base de données PostgreSQL de Kollect.

Ce workbench compare en même temps le nombre d'observations intégrées dans Kollect par rapport au nombre d'observations du formulaire. Si le nombre est identique, le statut du formulaire est passé à "Approuvé" dans ODK Central via l'API, ce qui permet de ne pas télécharger ce formulaire à nouveau lors de la prochaine intégration.

**3. Envoi des photos**

Toujours sur FME Flow, un processus automatique (**Automation**) est lancé une fois l'éxécution du workbench d'intégration précédent terminée avec succès. Il envoie par SFTP les photos liées aux observations sur le serveur de Kollect.

**4. Mise à jour des entités**

Encore sur FME Flow, l'**exécution d'un workbench plannifié** toute les heures compare toutes les entités par rapport aux données de la base de données de Kollect et ajoute ou supprime les entitités si nécessaire.

Que ce soit depuis le portail web, directement en base de données ou via le workbench FME, les données intégrées sont ainsi disponible en quasi temps réel sur les téléphones.


## Perspectives

## Utiliser ce formulaire
### Licence
[![CC-BY](../fichiers/by.png)](https://creativecommons.org/licenses/by/2.0/fr/)
### XLSform
Accès au xlsform