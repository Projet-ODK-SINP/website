# ODK - Open Data Kit

## Évolution technique d’ODK

Avant de commencer, un (tout petit) peu de contexte technique.  
ODK a remplacé le serveur Aggregate par un serveur plus moderne appelé Central. Cela est transparent pour vous mais entraîne quelques changements dans l’usage que vous faites de Collect. La mise à jour des formulaires sur votre téléphone est désormais automatique, tout comme l’envoi des données finalisées au serveur.

Pour ce qui concerne les géomaticiens, Central nous permet de gérer des groupes d’utilisateurs qui accèdent à différents formulaires (Bénévoles, prestataires, partenaires…).

Enfin, un des gros avantages de Central réside dans le fait que les formulaires réalisés pour vos téléphones sont aussi diffusés sous la forme de formulaires web (à ouvrir dans un navigateur), utilisables eux aussi en mode déconnecté. Nathalie reviendra bientôt vers nous avec un formulaire téléphone et web.

Nous pouvons donc désormais utiliser ODK pour lancer des enquêtes web participatives, ou des sondages relatifs à un évènement particulier, en remplacement des framaforms et autres limesurvey.

# Revenons à Sicen.

## Installation et configuration d’ODK Collect

### Installation

Depuis le « playstore » d’Android ou depuis le fichier .apk mis à disposition sur le site du projet : [Release ODK Collect v2022.2.1 · getodk/collect · GitHub 8](https://github.com/getodk/collect/releases/latest)

Un fois téléchargé sur le téléphone (n’importe où), vous cliquez sur le fichier apk pour lancer l’installation. Android mettra tout au bon endroit. Vous pourrez ensuite supprimer le fichier .apk.

![Capture d’écran du 2021-03-18 16-50-05](./fichiers/SicenODK/ecrans/83740995f47b0f1b5f5a167a9ab1891588257388.png) 8](https://github.com/getodk/collect/releases/latest)

### Configuration de l’application

\*\*Important : \*\*  
pour éviter des conflits avec les formulaires vierges déjà enregistrés sur le téléphone et des soucis d’envoi de données.  
Commencez par supprimer les formulaires vierges existants d’ODK avant de le configurer

#### Cliquer sur « supprimer formulaire enregistré »

![Screenshot_2021-03-31-19-46-55](./fichiers/SicenODK/ecrans/44016f45a86768d16ab186245f100e5c1bc4a926_2_281x500.png)

#### Dans l’onglet « Formulaires vierges » , Sélectionnez tout et supprimez

![Screenshot_2021-03-31-19-47-02](./fichiers/SicenODK/ecrans/8646096ad129d96a0f9aa7eb30c9020c20935775_2_281x500.png)

Tout d’abord, la connexion au serveur de formulaires (nommé Central) se fait par le scan d’un QRcode.  
Vous avez deux possibilités (et deux QRCode au choix):

- soit ODK Collect gère automatiquement
  - le téléchargement des nouvelles formulaires disponibles (tous)
  - de leurs nouvelles versions
  - l’envoi des données des formulaires finalisés au serveur
- soit vous faites cela à la demande
  - télécharger les formulaires qui vous intéressent
  - télécharger les nouvelles versions
  - envoi des données au serveur

#### Paramètres

![Screenshot_2021-03-11-15-28-03-576x1024](./fichiers/SicenODK/ecrans/25a1726c56451e86add3da7457de93a574756ed4_2_281x500.png)

#### Configurer par QRCode

![Screenshot_2021-03-11-12-16-39-576x1024](./fichiers/SicenODK/ecrans/6570e49d139731d8718f67f9aaace6b5d6759fbe_2_281x500.png)

Une fois le code scanné, votre application est configurée et interroge le serveur pour savoir quels formulaires sont disponibles, et les télécharge.

#### Identité de l’utilisateur

Il nous faut maintenant renseigner les données d’identification qui permettront de vous faire connaître une fois pour toutes dans les différents formulaires et de vous attribuer correctement vos données.

→ Veillez à renseigner l’adresse mail (_**!!! votre adresse professionnelle en minuscules !!!**_).

![identite_utilisateur-576x1024](./fichiers/SicenODK/ecrans/2c6b6484f465edafa797c37ab51dbf229d89b6ae_2_281x500.png)
![metadonnees_de_formualire-576x1024](./fichiers/SicenODK/ecrans/d48fad63dbd77895fb21af0fccdb519f096a4892_2_281x500.png)
![Screenshot_2021-03-11-12-17-54-576x1024](./fichiers/SicenODK/ecrans/2d267abdce7d8312dbc6430a5fc2d361d9aca632_2_281x500.png)

#### Cartes → Choisir Mapbox

![Screenshot_2021-03-18-15-42-00](./fichiers/SicenODK/ecrans/2567e0a9272a95474efdb3de22e7d28c56d17e94_2_281x500.png)

#### Autres paramètres utiles

De retour sur l’écran des paramètres, vous pourrez modifier :

- la taille de la police qui sera utilisée dans les formulaires
- la manière de naviguer d’un écran à l’autre
  - en faisant glisser le doigt sur l’écran de gauche à droite pour avancer et de droite à gauche pour reculer
  - en affichant des boutons en bas de l’écran
  - en utilisant les deux méthodes

Vous êtes maintenant prêts à saisir votre premier formulaire.  
ODKCollect est configuré pour proposer systématiquement les dernières versions des formulaires disponibles sur le serveur.