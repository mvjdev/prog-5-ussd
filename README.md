---
---

## 🚀 Objectif

Mettre en place un système de menus USSD avec les **bonnes pratiques de développement**:

- Conventions de nommage cohérentes
- Utilisation d'un linter (ESLint)
- Intégration continue avec GitHub Actions (lint à chaque push)

---

## 🧠 Fonctionnalités

- Menu principal avec plusieurs sous-menus
- Navigation logique (suivant, précédent, retour parent)
- Système extensible de définition de menus
- Entrées utilisateur via la ligne de commande (`readline`)

---

## 🏗️ Structure du projet

```

prog-5-ussd/
├── .github/workflows/        # Workflows GitHub Actions (CI)
├── node\_modules/             # Dépendances Node.js
├── src/                      # Code source
│   └── menu.ts               # Système de menus USSD
├── .gitignore
├── eslint.config.js          # Configuration ESLint
├── package.json
├── tsconfig.json             # Configuration TypeScript
└── README.md

```

---

## 🧭 Convention de nommage

| Élément            | Convention   | Exemple               |
| ------------------ | ------------ | --------------------- |
| Variables          | `camelCase`  | `currentPage`         |
| Fonctions          | `camelCase`  | `showMenu()`          |
| Constantes         | `UPPER_CASE` | `MENUS`               |
| Types / Interfaces | `PascalCase` | `MenuOptions`, `Menu` |
| Classes            | `PascalCase` | `UssdSessionManager`  |
| Fichiers           | `kebab-case` | `menu.ts`             |

---

## 🔧 Installation

1. **Cloner le projet**

   ```bash
   git clone https://github.com/votre-utilisateur/prog-5-ussd.git
   cd prog-5-ussd
   ```

2. **Installer les dépendances**

   ```
   npm install
   ```

---

## 🧪 Lancement du projet

```
npx tsc menu.ts
```

> Assurez-vous que `ts-node` est installé globalement ou dans votre projet.

```
node menu.cjs
```

---

## 🧹 Linter

### Lancer manuellement ESLint :

```bash
npx eslint src --ext .ts
```

> Le linter est configuré dans `eslint.config.js`.

---

## 🔁 Intégration continue (CI)

Une action GitHub est configurée pour :

- Exécuter le linter à chaque `push`
- Échouer le build en cas d'erreurs

Fichier : `.github/workflows/lint.yml`

---
