---
id: oiseaux_eau
title: Oiseaux d'eau
tags:
  - oiseaux
  - zones humides
  - suivi à long terme
---
# Suivis Amphibiens "OOiseaux d'eau"
## Description
### Auteur(s)
Formulaire développé par Nathalie Hiessler (Cen Occitanie) 
### Objectif
`
l’herpétofaune française à partir de l’estimation de l’occurrence des communautés
d’amphibiens dans les sites aquatiques.
```
#### Protocole mis en œuvre
* [Protocole](../fichiers/POPAmhibienCommunaute/Protocole_POPAmphibien_Communaute_2022.pdf)
## Présentation détaillée
### Logique de collecte
```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'mainBranchName': 'Submissions','rotateCommitLabel': true}} }%%
gitGraph
	commit id: "username"
    commit id: "Projet"
    commit id: "Conditions météo"
	commit id: "date et heure de début"
	commit id: "Secteur/site de suivi" type: HIGHLIGHT tag: "Boucle secteur"
	branch places
	checkout places
	commit id: "Saisie espèces" type: HIGHLIGHT tag: "Boucle observation"
	branch obs
	checkout obs
	commit id: "Espèce"
	commit id: "Type de contact"
    commit id: "Type d'effectif"
    commit id: "Effectif"
	checkout places
	merge obs
	checkout Submissions
	merge places
	commit id: "Heure de fin"
	commit id: "Remarque"
```
#### 1- Information générales
* **Utilisateur:** courriel et nom de l'observateur, automatisable dans les paramètres d'ODK Collect sur le téléphone
* **Identifiant du projet :** code interne à la structure

#### 2- Conditions de prospection
* **Météo:** conditions de température, vent et nébulosité
* **Heure de début** du relevé

#### 3- Boucles de saisie des effectifs par secteur, espèce, type de contact
* **Boucle 1:** saisie de l'identifiant du secteur de suivi
    * **Boucle 2:** Saisie des espèces et effectifs
        * Espèce
        * Type de contact
        * Type d'effectif
        * une question "effectif" par type d'effectif
    ***Fin de la boucle saisie des espèces***
***Fin de la boucle de renseignement des secteurs***

#### Fin du formulaire
* **Heure de fin** du relevé
* Remarques

## Captures d'écrans

### Utiliser ce formulaire
#### XLSform
* [xlsform](../fichiers/oiseaux_eau/oiseaux_eau.xlsx)
#### Données externes et médias associés
-> liens vers les ressources