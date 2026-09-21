# La Scène Efreinée — Vue.js

Application Vue.js inspirée du prototype Figma créé pour les professeurs de l'association La Scène Efreinée. Les articles sont les exercices proposés par l'application et le panier est la séance contenant les exercices sélectionnés par l'utilisateur.

## Fonctionnalités

- Liste d'exercices avec recherche et tags
- Détail d'un exercice en cliquant dessus
- Random exercise qui sélectionne un exercice au hasard
- Barre dépliable
- Ajout d'un exercice à travers un formulaire
- Ma séance (panier)
- Connexion fictive
- Administration protégée par Vue Router
- Suppression avec confirmation
- Recherche et pagination
- Données stockées dans un tableau local
- Props et events entre composants

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir :

```text
http://localhost:5173
```

## Architecture

- `src/App.vue` : données locales et gestion globale
- `src/components/` : composants réutilisables
- `src/views/` : pages demandées dans le sujet
- `src/router/` : Vue Router
- `src/assets/style.css` : design mobile inspiré du prototype

## Routes

- `/` : Home
- `/articles` : tous les exercices
- `/article/:id` : détail d'un exercice
- `/ajouter` : ajouter un exercice
- `/panier` : ma séance
- `/login` : connexion
- `/admin` : administration

## Connexion

La connexion est volontairement fictive pour respecter le sujet.
N'importe quel identifiant et mot de passe non vide permettent d'accéder à `/admin`.

Les données des exercices restent en mémoire et sont réinitialisées au rechargement.
