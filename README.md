# oc-p4-gameon
Créez une landing page avec Javascript

## Questions
- Validation par html ? API Validation ?

## Apprentissage

## Contexte
- GameOn, PME, spécialisée dans les conférences et les concours de jeux.

## Équipe
- Erika, développeur principal
- Moi, dev Front-End junior (shadowing d'Erika)
- Jason

## Mission
- Terminer le formulaire d'inscription aux concours 
- Verion actuelle : Jason a fait le HTML et CSS et le début de JS
- Mission : formulaire fonctionnel avec le JS manquant (voir issues) ? API Validation ?
- Repo fork
- Fichiers séparés html, css, js
- Comments : décrire chaque fonction et chaque classe, ainsi que les parties du code qui nécessitent plus de détails
- tester manuellement les fonctionnalités, les entrées de formulaire et l'affichage responsive

## Issues / TODO
- [x] #1 - Bouton Fermer modal
- [ ] #2 - Entrées du formulaire : 
	- [x] (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
	- (2) Utiliser du JavaScript pur pour terminer le formulaire :
		- [ ] Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
		- Les données doivent être saisies correctement :
		- [x] (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
		- [x] (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
		- [x] (3) L'adresse électronique est valide.
		- [x] (4) Pour le nombre de concours, une valeur numérique est saisie.
		- [x] (5) Un bouton radio est sélectionné.
		- [ ] (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
		- [ ] Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
- #3 - Ajouter validation ou messages d'erreur. Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :
	- "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    - "Vous devez choisir une option."
    - "Vous devez vérifier que vous acceptez les termes et conditions."
    - "Vous devez entrer votre date de naissance."
- #4 - Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")
- #5 - Test manuels.
	- Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
	- Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)


## Livrable
Projet4_abel_jerome.zip :
- Abel_Jerome_1_code_102022.txt : https://github.com/jeromeabel/oc-p4-gameon

## Ressources
- Email d'Erika
- Maquettes Figma : https://www.figma.com/file/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?
- Code Repo : https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/
- Issues : https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues
- Web :
    - https://compute-it.toxicode.fr/
    - https://app.livestorm.co/openclassrooms-1/utilisez-javascript-pour-realiser-un-site-dynamique?type=detailed
    - https://regex101.com/
    - https://programmingwithswift.com/how-to-compare-dates-with-typescript/
    - https://openclassrooms.com/fr/courses/7159296-deboguez-l-interface-de-votre-site-internet
    - https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript
    - https://openclassrooms.com/fr/courses/7697016-creez-des-pages-web-dynamiques-avec-javascript

