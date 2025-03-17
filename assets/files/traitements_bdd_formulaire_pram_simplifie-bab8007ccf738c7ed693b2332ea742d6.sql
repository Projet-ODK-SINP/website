--Actualiser les tables du formulaire
SELECT odk_central.odk_central_to_pg
('mail', 'password', 'monserveurcentral.org', 5,
'formulaire_pram_simplifie',
'odk_central',
'geopoint_widget_placementmap') ;


--Actualiser la table pram.observateurs
INSERT INTO pram.observateurs(nom, prenom, organisme, nom_source, created_at)
WITH donnees_form AS
(SELECT DISTINCT 
coalesce(trim(user_name), trim(username)) AS identite, 
coalesce(trim(email_utilisateur), trim(user_mail)) AS mail,
s.lb_nom_structure AS struct
FROM odk_central.form_formulaire_pram_simplifie_submissions_data s
	LEFT JOIN pram.observateurs o ON coalesce(trim(user_name), trim(' ' FROM username)) = COALESCE(concat_ws(' ', prenom, nom), concat_ws(' ', nom, prenom))
	WHERE o.nom IS NULL)
SELECT split_part(identite, ' ', 2) AS nom,
	split_part(identite, ' ', 1) AS prenom,
	s."label",
	mail,
	current_timestamp AS created_at
FROM donnees_form d
	JOIN pram.structures s ON s."label" = d.struct;


--Insérer les nouvelles mares dans la table pram.mares
INSERT INTO pram.mares(geom, x_l93, y_l93, lng, lat, organisme_origine, id_origine, date_observation_origine, departement_code, intercommunalite_siren, commune_insee, utilisateur_id, type_propriete_id, caracterisation_id, commentaire, valide, created_at, statut_id, observateur_id, "uuid")
WITH geom_mare AS (
	SELECT "__Submissions-id", data_id, foncier,
	coalesce(
		st_transform(st_setsrid(st_makepoint(longitude::numeric,latitude::numeric),4326),2154), 
		st_transform(st_setsrid(st_makepoint( 
			split_part(split_part(coordinates,'[',2),',',1)::float, 
			split_part(split_part(coordinates,'[',2),',',2)::float),4326),2154),
		st_transform(st_geomfromgeojson(replace(polygone, '\', '')),2154)
			) as geom
	FROM odk_central.form_formulaire_pram_simplifie_emplacements_data
)
SELECT 
	geom_mare.geom,
	st_x(st_transform(st_centroid(geom_mare.geom),2154)) as x_l93,
	st_y(st_transform(st_centroid(geom_mare.geom),2154)) as y_l93,
	st_x(st_centroid(geom_mare.geom)) as lng,	
	st_y(st_centroid(geom_mare.geom)) as lat,
	s."label" AS organisme_origine,
	geom_mare.data_id as id_origine,
	"date" as date_observation_origine,
	departements.code_insee as departement_code,
	intercommunalites.siren as intercommunalite_siren,
	communes.insee as commune_insee,
	obs.utilisateur_id,
	type_proprietes.id as type_propriete_id,
	(SELECT id FROM pram.caracterisations WHERE id = 2) AS caracterisation_id,
	form_formulaire_pram_simplifie_emplacements_data.commentaire,
	TRUE AS valide,
	current_timestamp AS created,
	(SELECT id FROM pram.statuts WHERE id = 2) AS statut_id,
	obs.id AS observateur_id,
	uuid_generate_v4() as uuid
FROM geom_mare
	JOIN odk_central.form_formulaire_pram_simplifie_emplacements_data USING (data_id)
	JOIN odk_central.form_formulaire_pram_simplifie_submissions_data ON odk_central.form_formulaire_pram_simplifie_emplacements_data."__Submissions-id"  = odk_central.form_formulaire_pram_simplifie_submissions_data.data_id	
	JOIN pram.departements ON st_within(geom_mare.geom, departements.geom)
	JOIN pram.intercommunalites ON st_within(geom_mare.geom, intercommunalites.geom)
	JOIN pram.communes ON st_within(geom_mare.geom, communes.geom)
	LEFT JOIN pram.type_proprietes ON form_formulaire_pram_simplifie_emplacements_data.foncier ilike '%' || type_proprietes.nom || '%'
	LEFT JOIN pram.structures s ON s."name" = form_formulaire_pram_simplifie_submissions_data.lb_nom_structure
	LEFT JOIN pram.observateurs obs ON (trim(user_name) = concat_ws(' ', prenom, obs.nom) OR trim(username) = concat_ws(' ', obs.nom, prenom))
	LEFT JOIN pram.mares m ON form_formulaire_pram_simplifie_emplacements_data.data_id = id_origine
	WHERE id_origine IS NULL;