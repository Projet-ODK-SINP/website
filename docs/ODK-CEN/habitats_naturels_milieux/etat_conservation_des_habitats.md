---
title: Suivi de l'état de conservation des habitats
sidebar_position: 2
---
# Suivi de l'état de conservation des habitats

## Description

### Auteur(s)

Formulaire co-développé par Nathalie Hiessler et Mathieu Bossaert au CEN Occitanie

### Objectif

#### Protocole mis en oeuvre

Mise en oeuvre de la méthode d'évaluation de l'état de conservation des habitats naturels (Klesczewski et al. 2010)

*Mario Klesczewski, Jérémie Barret, Clément Baudot, Joseph Fleury. Evaluer l’état de conservation des habitats naturels à l’échelle du terrain : approches dans le Languedoc-Roussillon. Revue forestière française, AgroParisTech, 2010, 62 (3-4), pp.417-427. 10.4267/2042/38955.* [hal-03449686](https://hal.archives-ouvertes.fr/hal-03449686/document)

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

[![CC-BY](../fichiers/by.png)]((https://creativecommons.org/licenses/by/2.0/fr/))

### XLSform

[xlsform](../fichiers/etat_conservation_habitats/etats_conservation_hbt_n2k_v2023.xlsx)

### Données externes et médias associés

* [liste espèces plantes](../fichiers/etat_conservation_habitats/especes_plantes.csv)
* [liste habitats CORINE](../fichiers/etat_conservation_habitats/taxref_sicen_habitat.csv)
* [centrides de polygon pour select_one sur carte](../fichiers/etat_conservation_habitats/centroides_polygones_habitats.csv)

## Fonctionnalités de XLSForm mises en oeuvre

à compléter

### Discussion en ligne sur le forum d'ODK

non concerné

## Traitement des données

### Scripts SQL

#### Calcul des états de conservation :

```
-- View: odk_central.evaluation_ec_habitats

DROP MATERIALIZED VIEW IF EXISTS odk_central.evaluation_ec_habitats;

CREATE MATERIALIZED VIEW IF NOT EXISTS odk_central.evaluation_ec_habitats
TABLESPACE pg_default
AS

WITH data AS (
         SELECT form_etats_conservation_hbt_n2k_structure_data.data_id,
            form_etats_conservation_hbt_n2k_structure_data.indic_strc AS indicateur,
            form_etats_conservation_hbt_n2k_structure_data.saisie_valeur_indi_strc AS valeur,
            NULL::text AS presence_absence,
            form_etats_conservation_hbt_n2k_structure_data."__Submissions-saisie_indics_hbts-id"
           FROM odk_central.form_etats_conservation_hbt_n2k_structure_data
        UNION
         SELECT form_etats_conservation_hbt_n2k_composition_data.data_id,
            form_etats_conservation_hbt_n2k_composition_data.indic_compo,
            form_etats_conservation_hbt_n2k_composition_data.saisie_valeur_indic_compo,
            NULL::text AS presence_absence,
            form_etats_conservation_hbt_n2k_composition_data."__Submissions-saisie_indics_hbts-id"
           FROM odk_central.form_etats_conservation_hbt_n2k_composition_data
        UNION
         SELECT form_etats_conservation_hbt_n2k_degradation_data.data_id,
            form_etats_conservation_hbt_n2k_degradation_data.indic_degradation,
            form_etats_conservation_hbt_n2k_degradation_data.saisie_valeur_indic_degradation,
            form_etats_conservation_hbt_n2k_degradation_data.presence_absence_indicateur,
            form_etats_conservation_hbt_n2k_degradation_data."__Submissions-saisie_indics_hbts-id"
           FROM odk_central.form_etats_conservation_hbt_n2k_degradation_data
        ), note AS (
         SELECT data."__Submissions-saisie_indics_hbts-id",
            data.data_id,
            split_part(referentiel_valeurs_seuil_indics_ec.list_name::text, '_'::text, 4) AS critere,
            data.indicateur,
            referentiel_valeurs_seuil_indics_ec.rang,
            COALESCE(data.valeur, data.presence_absence) AS valeur,
            referentiel_valeurs_seuil_indics_ec.critere_bon,
            referentiel_valeurs_seuil_indics_ec.critere_moyen,
            referentiel_valeurs_seuil_indics_ec.critere_defavorable,
                CASE
                    WHEN (referentiel_valeurs_seuil_indics_ec.critere_bon::text = 'Présence'::text AND data.presence_absence = '1'::text OR referentiel_valeurs_seuil_indics_ec.critere_bon::text = 'Absence'::text AND data.presence_absence = '0'::text) AND referentiel_valeurs_seuil_indics_ec.critere_moyen::text = '-'::text THEN 'bon'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_bon::text ~~* '>=%'::text AND NULLIF(data.valeur, ''::text)::numeric >= replace(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '>='::text, ''::text)::numeric THEN 'bon'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_bon::text ~~* '<=%'::text AND NULLIF(data.valeur, ''::text)::numeric <= replace(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '<='::text, ''::text)::numeric THEN 'bon'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_bon::text ~~* '>%'::text AND referentiel_valeurs_seuil_indics_ec.critere_bon::text !~~* '>=%'::text AND NULLIF(data.valeur, ''::text)::numeric > replace(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '>'::text, ''::text)::numeric THEN 'bon'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_bon::text ~~* '<%'::text AND referentiel_valeurs_seuil_indics_ec.critere_bon::text !~~* '<=%'::text AND NULLIF(data.valeur, ''::text)::numeric < replace(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '<'::text, ''::text)::numeric THEN 'bon'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_bon::text ~~* '=%'::text AND NULLIF(data.valeur, ''::text)::numeric = replace(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '='::text, ''::text)::numeric THEN 'bon'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_bon::text ~~* '%-%'::text AND ((NULLIF(data.valeur, ''::text)::numeric >= split_part(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '-'::text, 1)::numeric AND NULLIF(data.valeur, ''::text)::numeric <= split_part(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '-'::text, 2)::numeric) OR (NULLIF(data.valeur, ''::text)::numeric >= split_part(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '-'::text, 2)::numeric AND NULLIF(data.valeur, ''::text)::numeric <= split_part(referentiel_valeurs_seuil_indics_ec.critere_bon::text, '-'::text, 1)::numeric)) THEN 'bon'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_moyen::text = 'Présence'::text AND data.presence_absence = '1'::text OR referentiel_valeurs_seuil_indics_ec.critere_moyen::text = 'Absence'::text AND data.presence_absence = '0'::text THEN 'moyen'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_moyen::text ~~* '>=%'::text AND NULLIF(data.valeur, ''::text)::numeric >= replace(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '>='::text, ''::text)::numeric THEN 'moyen'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_moyen::text ~~* '<=%'::text AND NULLIF(data.valeur, ''::text)::numeric <= replace(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '<='::text, ''::text)::numeric THEN 'moyen'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_moyen::text ~~* '>%'::text AND referentiel_valeurs_seuil_indics_ec.critere_moyen::text !~~* '>=%'::text AND NULLIF(data.valeur, ''::text)::numeric > replace(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '>'::text, ''::text)::numeric THEN 'moyen'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_moyen::text ~~* '<%'::text AND referentiel_valeurs_seuil_indics_ec.critere_moyen::text !~~* '<=%'::text AND NULLIF(data.valeur, ''::text)::numeric < replace(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '<'::text, ''::text)::numeric THEN 'moyen'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_moyen::text ~~* '=%'::text AND NULLIF(data.valeur, ''::text)::numeric = replace(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '='::text, ''::text)::numeric THEN 'moyen'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_moyen::text ~~* '%-%'::text AND referentiel_valeurs_seuil_indics_ec.critere_moyen::text <> '-'::text AND ((NULLIF(data.valeur, ''::text)::numeric >= split_part(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '-'::text, 1)::numeric AND NULLIF(data.valeur, ''::text)::numeric <= split_part(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '-'::text, 2)::numeric) OR (NULLIF(data.valeur, ''::text)::numeric >= split_part(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '-'::text, 2)::numeric AND NULLIF(data.valeur, ''::text)::numeric <= split_part(referentiel_valeurs_seuil_indics_ec.critere_moyen::text, '-'::text, 1)::numeric)) THEN 'moyen'::text
                    WHEN (referentiel_valeurs_seuil_indics_ec.critere_defavorable::text = 'Présence'::text AND data.presence_absence = '1'::text OR referentiel_valeurs_seuil_indics_ec.critere_defavorable::text = 'Absence'::text AND data.presence_absence = '0'::text) AND referentiel_valeurs_seuil_indics_ec.critere_moyen::text = '-'::text THEN 'defavorable'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_defavorable::text ~~* '<=%'::text AND NULLIF(data.valeur, ''::text)::numeric <= replace(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '<='::text, ''::text)::numeric THEN 'defavorable'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_defavorable::text ~~* '>=%'::text AND NULLIF(data.valeur, ''::text)::numeric >= replace(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '>='::text, ''::text)::numeric THEN 'defavorable'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_defavorable::text ~~* '>%'::text AND referentiel_valeurs_seuil_indics_ec.critere_defavorable::text !~~* '>=%'::text AND NULLIF(data.valeur, ''::text)::numeric > replace(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '>'::text, ''::text)::numeric THEN 'defavorable'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_defavorable::text ~~* '<%'::text AND referentiel_valeurs_seuil_indics_ec.critere_defavorable::text !~~* '<=%'::text AND NULLIF(data.valeur, ''::text)::numeric < replace(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '<'::text, ''::text)::numeric THEN 'defavorable'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_defavorable::text ~~* '=%'::text AND NULLIF(data.valeur, ''::text)::numeric = replace(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '='::text, ''::text)::numeric THEN 'defavorable'::text
                    WHEN referentiel_valeurs_seuil_indics_ec.critere_defavorable::text ~~* '%-%'::text AND ((NULLIF(data.valeur, ''::text)::numeric >= split_part(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '-'::text, 1)::numeric AND NULLIF(data.valeur, ''::text)::numeric <= split_part(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '-'::text, 2)::numeric) OR (NULLIF(data.valeur, ''::text)::numeric >= split_part(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '-'::text, 2)::numeric AND NULLIF(data.valeur, ''::text)::numeric <= split_part(referentiel_valeurs_seuil_indics_ec.critere_defavorable::text, '-'::text, 1)::numeric)) THEN 'defavorable'::text
                    ELSE NULL::text
                END AS note
           FROM data
             JOIN outils.referentiel_valeurs_seuil_indics_ec ON referentiel_valeurs_seuil_indics_ec.name::text = data.indicateur
         
	  ), liste_sp_ruderales AS (
         SELECT string_agg(COALESCE(split_part(form_etats_conservation_hbt_n2k_liste_plantes_ruderales_data.lb_nom_espece_ruderale, '!'::text, 1), form_etats_conservation_hbt_n2k_liste_plantes_ruderales_data.recherche_espece_ruderale), ','::text) AS liste_sp_ruderales,
            string_agg(form_etats_conservation_hbt_n2k_liste_plantes_ruderales_data.cd_nom_espece_ruderale, ','::text) AS liste_cd_nom_sp_rud,
            form_etats_conservation_hbt_n2k_composition_data."__Submissions-saisie_indics_hbts-id"
           FROM odk_central.form_etats_conservation_hbt_n2k_liste_plantes_ruderales_data
             JOIN odk_central.form_etats_conservation_hbt_n2k_composition_data ON form_etats_conservation_hbt_n2k_composition_data.data_id = form_etats_conservation_hbt_n2k_liste_plantes_ruderales_data."__Submissions-saisie_indics_hbts-composition-id"
             JOIN odk_central.form_etats_conservation_hbt_n2k_saisie_indics_hbts_data ON form_etats_conservation_hbt_n2k_saisie_indics_hbts_data.data_id = form_etats_conservation_hbt_n2k_composition_data."__Submissions-saisie_indics_hbts-id"
          GROUP BY form_etats_conservation_hbt_n2k_composition_data."__Submissions-saisie_indics_hbts-id"
        ), liste_sp_exotiques AS (
         SELECT string_agg(COALESCE(split_part(form_etats_conservation_hbt_n2k_liste_plantes_exotiques_data.lb_nom_espece_exotique, '!'::text, 1), form_etats_conservation_hbt_n2k_liste_plantes_exotiques_data.recherche_espece_exotique), ','::text) AS liste_sp_exotiques,
            string_agg(form_etats_conservation_hbt_n2k_liste_plantes_exotiques_data.cd_nom_espece_exotique, ','::text) AS liste_cd_nom_sp_exo,
            form_etats_conservation_hbt_n2k_composition_data."__Submissions-saisie_indics_hbts-id"
           FROM odk_central.form_etats_conservation_hbt_n2k_liste_plantes_exotiques_data
             JOIN odk_central.form_etats_conservation_hbt_n2k_composition_data ON form_etats_conservation_hbt_n2k_composition_data.data_id = form_etats_conservation_hbt_n2k_liste_plantes_exotiques_data."__Submissions-saisie_indics_hbts-composition-id"
             JOIN odk_central.form_etats_conservation_hbt_n2k_saisie_indics_hbts_data ON form_etats_conservation_hbt_n2k_saisie_indics_hbts_data.data_id = form_etats_conservation_hbt_n2k_composition_data."__Submissions-saisie_indics_hbts-id"
          GROUP BY form_etats_conservation_hbt_n2k_composition_data."__Submissions-saisie_indics_hbts-id"
        )
 SELECT submissions.projet_site,
    saisie_indic.habitat_n2k,
    saisie_indic.id_polygone,
    note."__Submissions-saisie_indics_hbts-id",
    saisie_indic.polygones_habitats AS id_polygone_carte,
    COALESCE(submissions.email_utilisateur, submissions.mail_observateur) AS mail_observateur,
    COALESCE(submissions.nom_observateur, submissions.username) AS observateur,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'strc'::text AND note.note = 'bon'::text) AS strc_bon,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'strc'::text AND note.note = 'moyen'::text) AS strc_moyen,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'strc'::text AND note.note = 'defavorable'::text) AS strc_defavorable,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'compo'::text AND note.note = 'bon'::text) AS compo_bon,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'compo'::text AND note.note = 'moyen'::text) AS compo_moyen,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'compo'::text AND note.note = 'defavorable'::text) AS compo_defavorable,
    liste_sp_ruderales.liste_sp_ruderales,
    liste_sp_exotiques.liste_sp_exotiques,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'degradation'::text AND note.note = 'bon'::text) AS degradation_bon,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'degradation'::text AND note.note = 'moyen'::text) AS degradation_moyen,
    string_agg(concat(note.indicateur, ' -> ', note.valeur), ' ; '::text) FILTER (WHERE note.critere = 'degradation'::text AND note.note = 'defavorable'::text) AS degradation_defavorable,
        CASE max(length(note.note)) FILTER (WHERE note.critere = 'strc'::text)
            WHEN 3 THEN 'bon'::text
            WHEN 5 THEN 'moyen'::text
            WHEN 11 THEN 'defavorable'::text
            ELSE 'NE'::text
        END AS note_structure,
        CASE max(length(note.note)) FILTER (WHERE note.critere = 'compo'::text)
            WHEN 3 THEN 'bon'::text
            WHEN 5 THEN 'moyen'::text
            WHEN 11 THEN 'defavorable'::text
            ELSE 'NE'::text
        END AS note_composition,
        CASE max(length(note.note)) FILTER (WHERE note.critere = 'degradation'::text)
            WHEN 3 THEN 'bon'::text
            WHEN 5 THEN 'moyen'::text
            WHEN 11 THEN 'defavorable'::text
            ELSE 'NE'::text
        END AS note_degradation,
        CASE max(length(note.note))
            WHEN 3 THEN 'bon'::text
            WHEN 5 THEN 'moyen'::text
            WHEN 11 THEN 'defavorable'::text
            ELSE 'NE'::text
        END AS note_ec,
    saisie_indic.precision_ec,
    saisie_indic.recouvrement_total,
    st_transform(COALESCE(st_setsrid(st_makepoint(split_part(saisie_indic.geometrie, ' '::text, 2)::numeric::double precision, split_part(saisie_indic.geometrie, ' '::text, 1)::numeric::double precision), 4326), st_force2d(st_setsrid(st_geomfromgeojson(replace(saisie_indic.point_auto, '\'::text, ''::text)::json), 4326))::geometry(Point,4326)), 2154)::geometry(Point,2154) AS geom
   FROM note
     JOIN odk_central.form_etats_conservation_hbt_n2k_saisie_indics_hbts_data saisie_indic ON note."__Submissions-saisie_indics_hbts-id" = saisie_indic.data_id
     JOIN odk_central.form_etats_conservation_hbt_n2k_submissions_data submissions ON saisie_indic."__Submissions-id" = submissions.data_id
     LEFT JOIN liste_sp_ruderales ON liste_sp_ruderales."__Submissions-saisie_indics_hbts-id" = saisie_indic.data_id
     LEFT JOIN liste_sp_exotiques ON liste_sp_exotiques."__Submissions-saisie_indics_hbts-id" = saisie_indic.data_id
  GROUP BY submissions.projet_site, saisie_indic.id_polygone, saisie_indic.polygones_habitats, saisie_indic.habitat_n2k, liste_sp_ruderales.liste_sp_ruderales, liste_sp_exotiques.liste_sp_exotiques, note."__Submissions-saisie_indics_hbts-id", saisie_indic.precision_ec, saisie_indic.recouvrement_total, saisie_indic.geometrie, saisie_indic.point_auto, (COALESCE(submissions.email_utilisateur, submissions.mail_observateur)), (COALESCE(submissions.nom_observateur, submissions.username))
WITH DATA;

ALTER TABLE IF EXISTS odk_central.evaluation_ec_habitats
    OWNER TO dba;

GRANT ALL ON TABLE odk_central.evaluation_ec_habitats TO dba;
GRANT SELECT ON TABLE odk_central.evaluation_ec_habitats TO equipe_cen_occ;

CREATE INDEX geom_idx
    ON odk_central.evaluation_ec_habitats USING gist
    (geom)
    TABLESPACE pg_default;
CREATE INDEX unique_id_patch
    ON odk_central.evaluation_ec_habitats USING btree
    ("__Submissions-saisie_indics_hbts-id" COLLATE pg_catalog."default")
    TABLESPACE pg_default;
    ```
```