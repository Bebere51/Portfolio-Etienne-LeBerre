# Portfolio — Étienne Le Berre

Site personnel construit avec [Astro](https://astro.build) et [UnoCSS](https://unocss.dev), basé sur le template [NAID](https://github.com/studiolumina/naid) de Studio Lumina (licence MIT).

Hébergé sur GitHub Pages : https://bebere51.github.io/Portfolio-Etienne-LeBerre/

## Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── content/projects/   ← une fiche .json par projet
│   ├── layouts/
│   └── pages/
│       ├── index.astro     ← page d'accueil
│       └── about.md        ← page "À propos"
└── astro.config.mjs
```

## Commandes

Toutes les commandes s'exécutent à la racine du projet, dans un terminal :

| Commande            | Action                                          |
| :------------------- | :----------------------------------------------- |
| `pnpm install`        | Installe les dépendances                         |
| `pnpm run dev`        | Lance le serveur local sur `localhost:4321`      |
| `pnpm run build`      | Génère la version de production dans `./dist/`   |
| `pnpm run preview`    | Prévisualise le build en local                   |

## Déploiement

Le site est automatiquement reconstruit et déployé sur GitHub Pages via GitHub Actions à chaque `push` sur `main` (voir `.github/workflows/deploy.yml`).

## À personnaliser

- `src/consts.ts` — nom et description du site
- `src/pages/index.astro` — accroche, section projets, section contact
- `src/pages/about.md` — présentation complète
- `src/content/projects/*.json` — tes projets réels
