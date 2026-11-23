---
id: SuiviMailles
title: Inventaire exhaustif de taxons de flore par maille carrée
tags:
  - inventaire exhaustif
  - maillage
  - flore
---
# Suivi mailles bota
-> Inventaire exhaustif par maille carrée

## Description
Parcours exhaustif d'un site (mailles carrées) et suivi de l'abondance des espèces cibles sur chacune d'entre elles.
### Auteur(s)
Formulaire développé par Mathieu Bossaert (CEN Occitanie)
### Objectif
Suivre de manière exhaustive (spatialement) l'abondance (A, B, C, D et E) d'une liste d'espèces végétale d'un site donné.
#### Protocole mis en œuvre
[version 2022](../fichiers/suivis_mailles_bota/Protocole_MAILLE_2022.pdf)
## Présentation détaillée
### Logique de collecte
### Captures d'écrans et/ou vidéo de démonstration

La taille de la maille carrée ainsi que la liste d'espèces sont définies en amont.

#### Paramétrage
##### Premier lancement d'ODK
-> Scanner le QRCode du projet en cliquant sur le bouton "_Configurer par QRCode_"

![01_premier_lancement](../fichiers/suivis_mailles_bota/ecrans/01_premier_lancement.png)

##### Accueil du projet
Voici la page d'accueil qui aparait une fois le QRCode scanné

![02_accueil_projet](../fichiers/suivis_mailles_bota/ecrans/02_accueil_projet.png)

##### Paramétrage des propriétés du projet (identité de l'utilisateur et fond de carte)
Cliquer sur le rond de couleur apparaissant en haut à droite de l'écran d'ODK pour voir apparaître cette fenêtre.

![03_detail_projet](../fichiers/suivis_mailles_bota/ecrans/03_detail_projet.png)

Cliquer ensuite sur "_Paramètres_"

![04_parametres_projet](../fichiers/suivis_mailles_bota/ecrans/04_parametres_projet.png)

##### Renseignement des informations sur l'utilisateur
Compléter ces information permettra de ne pas avoir à les saisir lors de l’utilisation des formulaires.
Sur l'écran précédent, cliquer sur "_Identité de l'utilisateur et de l'appareil_" pour afficher l'écran ci-dessous.

![05_identite_metadonnes](../fichiers/suivis_mailles_bota/ecrans/05_identite_metadonnes.png)

Aprés avoir chois "Métadonnées de formulaire", compléter soigneusement :
* Votre nom d'utilisateur (Prénom Nom)
* Votre adresse email professionnelle. Cette information est nécessaire pour vous attribuer correctement les données collectée.

![06_mail_et_username](../fichiers/suivis_mailles_bota/ecrans/06_mail_et_username.png)

##### Choix de l'interface cartographique
Sur l'écran des paramètres de projet, cliquer sur le bouton "_Cartes_"
Choisissez le dossier de calques contenant le fond de carte de votre site.

![07_parametres_carto_du_projet](../fichiers/suivis_mailles_bota/ecrans/07_parametres_carto_du_projet.png)

#### Utilisation du formulaire
##### Choix du formulaire "Suivi_maille_bota"

![09_liste_formualires](../fichiers/suivis_mailles_bota/ecrans/09_liste_formualires.png)

##### Renseignement de l'identité de l'utilisateur
Si vous avez correctement configuré les métadonnées du projet (cf plus haut) ces champs sont pré-rempli et vous pouvez passer au suivant.

![10_identite_agent_et_date](../fichiers/suivis_mailles_bota/ecrans/10_identite_agent_et_date.png)

##### Choisir le site suivi au cours de cette session

![11_choix_du_site](../fichiers/suivis_mailles_bota/ecrans/11_choix_du_site.png)

##### Choisir le protocole

![12_choix_du_protocole](../fichiers/suivis_mailles_bota/ecrans/12_choix_du_protocole.png)

##### Choix de la méthode de cartographie
Soit vous utilisez un fond statiques (les mailles sont dessinées sur le fond de carte en amont) et vous créez alors des points au dessus de ce fonds de carte,
soit vous utilisez un référentiel de mailles cliquables.

![13_localisation](../fichiers/suivis_mailles_bota/ecrans/choix_methode.png)

##### Démarrer la localisation

![13_localisation](../fichiers/suivis_mailles_bota/ecrans/13_localisation.png)

-> ODK vous place à l'endroit du GPS

![14_localisation_automatique](../fichiers/suivis_mailles_bota/ecrans/14_localisation_automatique.png)

> /!\ Depuis 2025, il est possible de choisir la maille dans laquelle on se trouve en choisissant la méthode "mailles cliquables".
Les mailles sont à créer en amont dans le fichier [mailles_4326.geojson](../fichiers/suivis_mailles_bota/mailles_4326.geojson.zip).
Le fichier xlsform présenté plus bas propose cette fonctionnalité.

##### Méthode de pointage sur image de fond présentant les grilles

-> Afficher votre fond de carte (en lieu et place de celui par défaut)

1. Cliquer sur l’icône représentant les couches
2. Choisissez votre fond de carte

![15_choix_du_fond_de_carte_personalise](../fichiers/suivis_mailles_bota/ecrans/15_choix_du_fond_de_carte_personalise.png)

3. Créez votre point

![16_creation_du_point](../fichiers/suivis_mailles_bota/ecrans/16_creation_du_point.png)

4. Valider la localité

![17_detail_point_cree](../fichiers/suivis_mailles_bota/ecrans/17_detail_point_cree.png)

##### Méthode de pointage sur grille cliquable
-> Selectionnez la maille dans laquelle vous place le GPS
![choix_maille](../fichiers/suivis_mailles_bota/ecrans/sel_maille.png)

![choix_maille](../fichiers/suivis_mailles_bota/ecrans/choix_maille.png)


##### Renseignement de l'abondance de la ou des espèces (selon les sites)

![renseignement_effectifs_especes_1](../fichiers/suivis_mailles_bota/ecrans/liste_sp1.png)

![renseignement_effectifs_especes_2](../fichiers/suivis_mailles_bota/ecrans/liste_sp2.png)


##### Ajouter une nouvelle maille / localité ou terminer le formulaire

![19_nouvelle_maille_ou_fin_de_session](../fichiers/suivis_mailles_bota/ecrans/19_nouvelle_maille_ou_fin_de_session.png)

![progression](../fichiers/suivis_mailles_bota/ecrans/progression.png)

![20_fin_de_session](../fichiers/suivis_mailles_bota/ecrans/20_fin_de_session.png)

### Perspectives
* Disposer d'un formulaire plus générique ne générant pas autant de questions que d'espèces suivies, pour la forme en base de données.

## Utiliser ce formulaire
### Licence
[![CC-BY](../fichiers/by.png)](https://creativecommons.org/licenses/by/2.0/fr/)
### XLSform
* [xlsform](../fichiers/suivis_mailles_bota/suivi_maille_bota.xlsx)
### Données externes et médias associés
-> liens vers les ressources

## Fonctionnalités de XLSForm mises en œuvre
### Discussion en ligne sur le forum d'ODK

## Traitement des données
### Scripts SQL
```sql
 WITH mailles_espece_possibles AS (
         SELECT DISTINCT mailles.gid,
            taxref.nom_valide,
            taxref.cd_ref,
            mailles.geometrie AS geom
           FROM inpn.mailles_20m mailles
             JOIN inpn.taxref ON true
             JOIN inpn.perimetre_etude_pour_creation_grille site ON st_intersects(site.geometrie, mailles.geometrie)
          WHERE (site.id_perim = ANY (ARRAY[88, 260])) AND (taxref.cd_ref = ANY (ARRAY['110207'::text]))
        ), obs_ref AS (
         SELECT mailles.gid,
            taxref.cd_ref,
            COALESCE(date_part('year'::text, saisie_observation.date_obs)::text, "right"(saisie_observation.date_text::text, 4))::integer AS annee_obs,
            upper(COALESCE(
                CASE
                    WHEN saisie_observation.effectif < 11 THEN 'A'::text
                    WHEN saisie_observation.effectif < 51 THEN 'B1'::text
                    WHEN saisie_observation.effectif < 101 THEN 'B2'::text
                    WHEN saisie_observation.effectif < 1001 THEN 'C'::text
                    WHEN saisie_observation.effectif > 1000 THEN 'D'::text
                    ELSE NULL::text
                END,
                CASE
                    WHEN saisie_observation.type_eff ~~* 'pr%'::text THEN 'A'::text
                    WHEN saisie_observation.eff_text ~~* 'pr%'::text THEN 'A'::text
                    ELSE split_part(saisie_observation.eff_text, ';'::text, 1)
                END, 'A'::text)) AS effectif_textuel,
            saisie_observation.protocole,
            saisie_observation.remarque
           FROM export.tous_point_espece_format_esri saisie_observation
             JOIN inpn.taxref ON saisie_observation.cd_ref::text = taxref.cd_nom
             JOIN inpn.perimetre_etude_pour_creation_grille site ON st_intersects(site.geometrie, saisie_observation.geometrie)
             JOIN inpn.mailles_20m mailles ON st_intersects(mailles.geometrie, saisie_observation.geometrie)
          WHERE (site.id_perim = ANY (ARRAY[88, 260])) AND (taxref.cd_ref = ANY (ARRAY['110207'::text])) AND saisie_observation.protocole ~~* '%maille%'::text
          ORDER BY (COALESCE(date_part('year'::text, saisie_observation.date_obs)::text, "right"(saisie_observation.date_text::text, 4))::integer)
        )
 SELECT row_number() OVER () AS gid,
    EXTRACT(year FROM now()) AS annee_ref,
    mailles_espece_possibles.nom_valide,
    mailles_espece_possibles.cd_ref,
    st_x(st_transform(st_centroid(mailles_espece_possibles.geom), 4326)) AS lon,
    st_y(st_transform(st_centroid(mailles_espece_possibles.geom), 4326)) AS lat,
    st_centroid(mailles_espece_possibles.geom) AS centroid,
    mailles_espece_possibles.geom AS geometrie,
    COALESCE(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision < EXTRACT(year FROM now())::double precision), 'absence'::text) AS "avant année de référence",
        CASE COALESCE(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision < EXTRACT(year FROM now())::double precision), 'absence'::text)
            WHEN 'A'::text THEN 1
            WHEN 'B'::text THEN 11
            WHEN 'B1'::text THEN 11
            WHEN 'B2'::text THEN 51
            WHEN 'C'::text THEN 101
            WHEN 'D'::text THEN 1001
            ELSE 0
        END AS "effectif avant année de référence",
    COALESCE(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision = EXTRACT(year FROM now())::double precision), 'absence'::text) AS "durant année de référence",
        CASE COALESCE(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision >= EXTRACT(year FROM now())::double precision), 'absence'::text)
            WHEN 'A'::text THEN 1
            WHEN 'B'::text THEN 11
            WHEN 'B1'::text THEN 11
            WHEN 'B2'::text THEN 51
            WHEN 'C'::text THEN 101
            WHEN 'D'::text THEN 1001
            ELSE 0
        END AS "effectif à partir de extract(YEAR FROM now())",
        CASE
            WHEN upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision < EXTRACT(year FROM now())::double precision)) IS NULL AND upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision >= EXTRACT(year FROM now())::double precision)) IS NOT NULL THEN 'apparition'::text
            WHEN upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision < EXTRACT(year FROM now())::double precision)) IS NOT NULL AND upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision >= EXTRACT(year FROM now())::double precision)) IS NULL THEN 'disparition'::text
            WHEN upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision < EXTRACT(year FROM now())::double precision)) IS NULL AND upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision >= EXTRACT(year FROM now())::double precision)) IS NULL THEN 'absence répétée'::text
            WHEN COALESCE(upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision < EXTRACT(year FROM now())::double precision)), '0'::text) > COALESCE(upper(max(obs_ref.effectif_textuel) FILTER (WHERE obs_ref.annee_obs::double precision >= EXTRACT(year FROM now())::double precision)), '0'::text) THEN 'maintien/diminution'::text
            ELSE 'maintien/augmentation'::text
        END AS evolution
   FROM mailles_espece_possibles
     JOIN obs_ref USING (gid, cd_ref)
  GROUP BY mailles_espece_possibles.gid, mailles_espece_possibles.nom_valide, mailles_espece_possibles.cd_ref, mailles_espece_possibles.geom
```

### Scripts R
### Autres

Une carte de restitution :

![carte_de_restitution_ononis_mitissima_salines](../fichiers/suivis_mailles_bota/ecrans/carte_ononis_salines_2026.png)
