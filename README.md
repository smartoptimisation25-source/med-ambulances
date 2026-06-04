# Med Ambulances

Site vitrine mono-page pour Med Ambulances, construit avec Next.js 14, TypeScript, Tailwind CSS, Framer Motion et lucide-react.

## Installation

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Configuration

Définir l'URL publique avant déploiement :

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
```

Les données métier centralisées se trouvent dans `lib/site-data.ts`. Les champs non fournis dans le brief initial, comme l'adresse complète, le SIRET et les coordonnées GPS, sont volontairement laissés vides pour éviter toute donnée inventée.

## Déploiement Vercel

1. Importer le dépôt dans Vercel.
2. Ajouter `NEXT_PUBLIC_SITE_URL` dans les variables d'environnement.
3. Lancer un déploiement avec la commande de build par défaut `next build`.
