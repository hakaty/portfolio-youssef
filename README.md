# Portfolio — Hakati Youssef

Portfolio personnel de **Hakati Youssef**, Data Analyst & Data Scientist, étudiant ingénieur en IA à l'EMSI Casablanca. Application React (Vite) à page unique, thème sombre « laboratoire computationnel » (fond de graphe neuronal animé, accents cyan/violet).

## Étapes pour lancer le projet

1. Installer Node.js (version 18 ou supérieure) depuis https://nodejs.org
2. Ouvrir un terminal dans le dossier `portfolio-youssef`
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
5. Ouvrir l'adresse affichée (généralement http://localhost:5173)

Pour générer la version de production (site optimisé dans le dossier `dist/`) :
```bash
npm run build
npm run preview
```

## Structure du projet

```
portfolio-youssef/
├── public/
│   └── photo-profil.jpg      Photo de profil (affichée dans le hero)
├── src/
│   ├── Portfolio.jsx         Composant principal (tout le contenu et le style)
│   ├── App.jsx               Racine de l'application
│   └── main.jsx              Point d'entrée React
├── index.html                Polices Google Fonts, SEO, racine HTML
├── package.json              Dépendances et scripts
├── vite.config.js            Configuration de Vite
└── README.md
```

## Contenu des sections

Le site est une page unique divisée en sections reliées par la navigation :

- **Navigation** — logo, liens vers les sections, bouton CV, fixe en haut avec effet de flou.
- **Hero** — nom, titre, accroche, boutons d'action, et photo hexagonale animée avec badge « Ouvert aux opportunités ».
- **01 · À propos** — présentation, langues et certifications.
- **02 · Compétences** — quatre catégories : Développement Web, Programmation & IA, Bases de données, Outils & Méthodes.
- **03 · Projets** — filtrables par catégorie. Trois projets à la une : Assistant Sémantique RAG (PFA), Système multi-agents de diagnostic médical, Deep Learning (MLP/CNN/RNN). Plus les deux stages IWACO et Artiflow.
- **04 · Parcours** — timeline des expériences puis de la formation.
- **05 · Contact** — coordonnées, liens sociaux et formulaire fonctionnel avec validation.

## Personnalisation

Toutes les données modifiables se trouvent en haut de `src/Portfolio.jsx`, dans les constantes :

- `PROFILE` — nom, titre, email, téléphone, liens GitHub / LinkedIn, chemin du CV et de la photo.
- `SKILLS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `CERTIFICATIONS`, `LANGUAGES`.

### À compléter

- Renseigner les vrais liens **GitHub** et **LinkedIn** dans `PROFILE`.
- Ajouter votre **CV PDF** dans `public/` et pointer `PROFILE.cvUrl` vers `/mon-cv.pdf`.
- Ajouter les liens **démo** et **code** de chaque projet.

Le formulaire de contact ouvre par défaut l'application mail (`mailto:`). Pour un envoi automatique sans client mail, brancher un service comme Formspree ou EmailJS à l'endroit indiqué dans la fonction `handleSubmit`.

## Déploiement

Le projet se déploie gratuitement sur Vercel, Netlify ou GitHub Pages. Après `npm run build`, il suffit de publier le dossier `dist/`.
