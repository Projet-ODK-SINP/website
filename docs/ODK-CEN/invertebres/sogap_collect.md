---
id: SOGAP Collect
title: SOGAP (Suivi des Odonates Gomphidés et Anisoptères Prioritaires)
tags:
  - Libellules
  - Suivi
  - SOGAP
---

# SOGAP Collect

**ID formulaire :** odonates_prtc_sogap  
**Version :** 14  
**Plateforme :** Webforms  
**Créé le :** 11/04/2025  
**Dernière mise à jour le :** 18/11/2026

---

## Table des matières

- [📁 Présentation](#section-1)
- [📁 Données générales](#section-2)
- [📁 Contexte](#section-3)
- [🔁 Espèces](#section-4)
- [🔁 Effectifs](#section-5)

---


## 📁 Présentation

 📝 **Note :** Le SOGAP (Suivi des Odonates Gomphidés et Anisoptères Prioritaires) est un programme national piloté par l’Opie en partenariat avec l’ANEPE CAUDALIS et inscrit dans les protocoles socles du Schéma directeur de la surveillance de la biodiversité terrestre (version consolidée au 21 décembre).

 📝 **Lien :** [https://libellules.pnaopie.fr/sogap/](https://libellules.pnaopie.fr/sogap/)

 📝 **Crédits formulaire :** Maxime Olivo (CEN Occitanie)
 
&nbsp;
## 📁 Données générales

**`nom_observateur`** — Observateur principal
- **Type :** `text`
- **Aide :** Prénom NOM
- **Obligatoire :** oui
- **Contrainte :** `contains(.,' ')`

**`mail_observateur`** — Email
- **Type :** `text`
- **Aide :** (exemple@test.fr)
- **Obligatoire :** oui
- **Contrainte :** `regex(., '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$')`

**`nombre_observateur`** — Nombre d'observateur(s) sur une même section
- **Type :** `integer`
- **Obligatoire :** oui

**`date_saisie`** — Date du passage
- **Type :** `date`
- **Obligatoire :** oui
- **Apparence :** `no-calendar`
- **Valeur par défaut :** `once(now())`

**`departement`** — Département
- **Type :** `select_one liste_dept`
- **Obligatoire:** oui  
- **liste_dept (valeurs en base → valeurs affichées à la saisie) :**
  - `09` → Ariège
  - `11` → Aude
  - `12` → Aveyron
  - `30` → Gard
  - `31` → Haute-Garonne
  - `32` → Gers
  - `34` → Hérault
  - `46` → Lot
  - `48` → Lozère
  - `65` → Hautes-Pyrénées
  - `66` → Pyrénées-Orientales
  - `81` → Tarn
  - `82` → Tarn-et-Garonne  

**`code_cours_eau`** — Cours d'eau
- **Type :** `select_one_from_file cours_eau.csv`
- **Obligatoire :** oui
- **Apparence :** `autocomplete`

**`cours_eau_autre`** — Autre cours d'eau absent du CSV
- **Type :** `text`
- **Obligatoire :** non
- **Condition d'affichage :** `${lb_cours_eau}=’Autre’`

**`cd_projet`** — Code du projet 
- **Type :** `select_one codes_etude`
- **Obligatoire :** oui

**`maille_loca`** — Maille à prospecter
- **Type :** `select_one_from_file mailles.geojson`
- **Obligatoire :** oui
- **Apparence :** `map`
- **Condition d'affichage :** `${cd_projet}!=’’`
- **Condition du filtre :** `code_projet=${cd_projet}`

**`section`** — Numéro de la section 
- **Type :** `text`
- **Obligatoire :** oui

**`rive`** — Rive
- **Type :** `select_one liste_rives`
- **Obligatoire:** oui  
- **liste_rives :**
  - `droite` → Droite
  - `gauche` → Gauche

**`heure_debut`** — Heure de début 
- **Type :** `time`
- **Obligatoire :** oui

**`heure_fin`** — Heure de fin 
- **Type :** `time`
- **Obligatoire :** oui

**`passage`** — Numéro de passage 
- **Type :** `integer`
- **Obligatoire :** oui

**`type_prospection`** — Type de prospection
- **Type :** `select_one liste_type_prospection`
- **Obligatoire:** oui  
- **liste_type_prospection :**
  - `a_pied` → À pied
  - `canoe` → En canoë

**`maille_incomplete`** — Maille incomplète (prospection impossible) 
- **Type :** `select_one yes_no`
- **Obligatoire :** non
- **yes_no :**
  - `oui` → Oui
  - `non` → Non

**`longueur_section`** — Longueur prospectée de la section (en mètre) 
- **Type :** `integer`
- **Obligatoire :** non

&nbsp;
## 📁 Contexte

**`pluie`** — Pluie
- **Type :** `select_one liste_pluie`
- **Obligatoire :** oui
- **liste_pluie :**
  - `nulle` → Nulle
  - `faible_averses` → Faible (averses)
  - `faible_continue` → Faible (continue)
  - `forte` → Forte
  
**`temperature`** — Température de l'air
- **Type :** `integer`
- **Aide :** en degrés Celsius
- **Obligatoire :** oui

**`couvert_nuageux`** — Couverture nuageuse
- **Type :** `integer`
- **Aide :** en %
- **Obligatoire :** oui

**`vitesse_vent`** — Vitesse du vent
- **Type :** `select_one liste_beaufort`
- **Aide :** selon l'échelle de Beaufort
- **Obligatoire :** oui
- **liste_beaufort :**
  - `0` → 0 - Calme
  - `1` → 1 - Très légère brise
  - `2` → 2 - Légère brise
  - `3` → 3 - Petite brise
  - `4` → 4 - Jolie brise
  - `5` → 5 - Bonne brise
  - `6` → 6 - Vent frais
  - `7` → 7 - Grand frais
  - `8` → 8 - Coup de vent
  - `9` → 9 - Fort coup de vent
  - `10` → 10 - Tempête
  - `11` → 11 - Violente tempête
  - `12` → 12 - Ouragan

**`morphologie_berge`** — Morphologie de la berge
- **Type :** `select_one liste_morphologie_berge`
- **Obligatoire :** oui
- **liste_morphologie_berge :**
  - `inf_10_degres` → Inférieur à 10° (plat)
  - `10_a_45_degres` → 10 à 45° (pente faible)
  - `45_a_75_degres` → 45 à 75° (pente forte)
  - `75_a_90_degres` → 75 à 90° (≈verticale)

**`habitats_rivulaires`** — Habitats rivulaires
- **Type :** `select_multiple liste_habitats_rivulaires`
- **Obligatoire :** oui
- **liste_habitats_rivulaires :**
  - `hydrophytes` → Hydrophytes
  - `helophytes` → Hélophytes
  - `ripisylves` → Ripisylves
  - `berges_nues` → Berges nues
  
**`vitesse_courant`** — Vitesse du courant
- **Type :** `select_one liste_vitesse_courant`
- **Obligatoire :** oui
- **liste_vitesse_courant :**
  - `inf_5cm_sec` → < à 5 cm /sec
  - `5_a_20cm_sec` → 5 à 20 cm /sec
  - `20cm_a_1m_sec` → 20 cm à 1 m /sec
  - `sup_a_1m_sec` → > à 1m/sec
  
**`texture_sediments`** — Texture sédimentaire de la berge
- **Type :** `select_multiple liste_sediments`
- **Obligatoire :** oui
- **liste_sediments :**
  - `argile_limons_fins` → Argile/limons fins
  - `limons_grossiers_sables_fins` → Limons grossiers/sables fins
  - `sables_grossiers_cailloutis` → Sables grossiers/cailloutis
  - `galets_blocs` → Galets/blocs
  - `roche` → Roche
  - `inconnu` → Inconnu
  
**`substrat_aplomb`** — Substrat du lit courant à l’aplomb de la berge
- **Type :** `select_one liste_sediments`
- **Obligatoire :** oui
  
**`chevelu_racinaire`** — Chevelu racinaire
- **Type :** `select_one liste_chevelu`
- **Obligatoire :** oui
- **liste_chevelu :**
  - `aucun` → Aucun
  - `peu_abondant` → Peu abondant
  - `abondant` → Abondant
  
**`continuite`** — Continuité de la ripisylve
- **Type :** `select_one yes_no`
- **Obligatoire :** oui

&nbsp;
## 🔁 Espèces *(répétition 1)*

**`espece_vue`** — Avez-vous vu une ou plusieurs espèce(s) ?
- **Type :** `select_one yes_no`
- **Obligatoire :** oui

**`espece`** — Espèce
- **Type :** `select_one especes`
- **Obligatoire :** oui
- **Apparence :** `autocomplete`
- **Condition d'affichage :** `${espece_vue} = 'oui'`
- **especes :**
  - `stylurus_flavipes!65234` → Stylurus flavipes
  - `gomphus_graslinii!65231` → Gomphus graslinii
  - `somatochlora_metallica!65393` → Somatochlora metallica
  - `oxygastra_curtisii!65381` → Oxygastra curtisii
  - `macromia_splendens!65384` → Macromia splendens
  - `onychogomphus_forcipatus!65249` → Onychogomphus forcipatus
  - `boyeria_irene!65412` → Boyeria irene
  - `calopteryx_virgo_meridionalis!65085` → Calopteryx virgo meridionalis
  - `calopteryx_xanthostoma!65095` → Calopteryx xanthostoma
  - `calopteryx_splendens!653281` → Calopteryx splendens
  - `platycnemis_acutipennis!65179` → Platycnemis acutipennis
  - `platycnemis_pennipes!65184` → Platycnemis pennipes
  - `platycnemis_latipes!65182` → Platycnemis latipes
  - `erythromma_lindenii!645873` → Erythromma lindenii
  - `gomphus_vulgatissimus!65225` → Gomphus vulgatissimus
  - `gomphus_simillimus!653291` → Gomphus simillimus
  - `onychogomphus_uncatus!65254` → Onychogomphus uncatus
  - `autre` → Autre
  
**`espece_autre`** — Espèce (autre)
- **Type :** `text`
- **Obligatoire :** non
- **Condition d'affichage :** `selected(${espece},'autre')`

**`id_espece`** — Identifiant permanent de l'espèce saisie
- **Type :** `calculate`
- **Obligatoire :** non
- **Valeur par défaut :** `once(uuid())`

&nbsp;
## 🔁 Effectifs *(répétition 2, pour chaque espèce saisie)*
> **Condition d'affichage:** `${espece_vue} = 'oui'`

**`type_effectif`** — Type d'effectif
- **Type :** `select_one type_eff`
- **Obligatoire :** oui
- **type_eff :**
  - `exuvies` → Exuvies
  - `imago` → Imagos
  
**`eff_exuvie_1m`** — Effectif d'exuvies (<= à 1m)
- **Type :** `integer`
- **Aide :** Nombre d'exuvies présentes à 1m ou moins de l’eau
- **Obligatoire :** non
- **Condition d'affichage:** `selected(${type_effectif},'exuvies')`

**`eff_exuvie_2m`** — Effectif d'exuvies (> à 1m)
- **Type :** `integer`
- **Aide :** Nombre d'exuvies présentes à plus de 1m de l’eau
- **Obligatoire :** non
- **Condition d'affichage:** `selected(${type_effectif},'exuvies')`

**`eff_imago`** — Effectif d'imagos
- **Type :** `integer`
- **Aide :** Nombre d'imagos présents
- **Obligatoire :** non
- **Condition d'affichage:** `selected(${type_effectif},'imagos')`

**`id_denombrement`** — Identifiant permanent du comptage d'effectif par espèce
- **Type :** `calculate`
- **Obligatoire :** non
- **Valeur par défaut :** `once(uuid())`

---
**`commentaires`** — Remarques générales
- **Type :** `text`
- **Obligatoire :** non
