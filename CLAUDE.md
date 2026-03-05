# CLAUDE.md — meridian-synergy-ui
## Design System partagé — @meridian-synergy/ui

Ce fichier est lu automatiquement par Claude Code à chaque session.
Il contient tout le contexte nécessaire pour contribuer au Design System de Meridian Synergy.

---

## Projet

**Meridian Synergy** — Plateforme SaaS dans le domaine du drone professionnel.
Ce repo (`meridian-synergy-ui`) est le **Design System partagé** entre :
- Le site vitrine statique (`meridian-synergy-web` → meridian-synergy.com)
- Le portail SaaS télépilote (`meridian-synergy-app` → app.meridian-synergy.com)

---

## Ce repo EST la source de vérité des composants

**RÈGLE ABSOLUE : tous les composants UI visuels sont créés ICI et uniquement ici.**
Les repos `meridian-synergy-web` et `meridian-synergy-app` n'ont JAMAIS de composants UI locaux — ils importent uniquement depuis `@meridian-synergy/ui`.

### Chaîne de dépendance

```
meridian-synergy-ui  ──→  meridian-synergy-web  (site vitrine)
@meridian-synergy/ui ──→  meridian-synergy-app  (portail SaaS)
```

### Workflow quand un composant manque dans web ou app

1. Créer le composant ici dans `src/components/`
2. Ajouter sa story Storybook (light + dark)
3. Exporter dans `src/index.ts`
4. Publier une nouvelle version (`npm version patch` + push tag)
5. Mettre à jour dans web/app : `pnpm update @meridian-synergy/ui`

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework composants | Vue 3 (Composition API + `<script setup>`) |
| Bundler | Vite 7 |
| Documentation | Storybook 10 |
| Langage | TypeScript strict |
| Package manager | pnpm 10 |
| Tests | Vitest |
| CI/CD | GitHub Actions |
| Déploiement Storybook | GitHub Pages (branche `gh-pages`) |
| Publication package | GitHub Packages (`@meridian-synergy/ui`) |

---

## Design System — Tokens

Les tokens sont définis dans `src/tokens/tokens.css` et importés globalement.
Ne jamais utiliser de couleurs ou espacements en dur — toujours utiliser les variables CSS.

### Couleurs

```css
--ms-color-navy:    #1B2B56   /* Primaire — fond navbar, titres, boutons primary */
--ms-color-silver:  #7A7D8A   /* Secondaire — textes secondaires, bordures */
--ms-color-sky:     #00AAEF   /* Accent énergie — liens, highlights, icônes actives */
--ms-color-orange:  #F05A28   /* CTA critiques — boutons d'action principale */
--ms-color-white:   #FFFFFF   /* Fond light mode */
--ms-color-dark-bg: #10192C   /* Fond dark mode (portail SaaS) */
```

### Typographie

```css
--ms-font-display:  'Exo 2', sans-serif      /* Titres, headings, logo */
--ms-font-body:     'DM Sans', sans-serif    /* Corps de texte, labels, boutons */
--ms-font-data:     'Space Mono', monospace  /* Données, codes, coordonnées GPS */
```

### Espacement

```css
--ms-space-xs: 4px
--ms-space-sm: 8px
--ms-space-md: 16px
--ms-space-lg: 24px
--ms-space-xl: 40px
```

### Border radius

```css
--ms-radius-sm: 4px
--ms-radius-md: 8px
--ms-radius-lg: 16px
```

---

## Structure du repo

```
meridian-synergy-ui/
├── .github/
│   └── workflows/
│       └── storybook.yml        ← CI/CD deploy Storybook sur gh-pages
├── .storybook/
│   ├── main.ts                  ← config Storybook (stories: src/**)
│   └── preview.ts               ← import tokens globaux + backgrounds
├── src/
│   ├── tokens/
│   │   └── tokens.css           ← design tokens CSS custom properties
│   ├── components/
│   │   └── [NomComposant]/
│   │       ├── [Nom].vue        ← composant Vue 3
│   │       ├── [Nom].stories.ts ← stories Storybook
│   │       └── index.ts         ← export du composant
│   ├── vite-env.d.ts            ← déclarations types .vue
│   └── index.ts                 ← point d'entrée du package (exports)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── CLAUDE.md
```

---

## Conventions de code

### Nommage composants
- Préfixe `Ms` obligatoire : `MsButton`, `MsInput`, `MsCard`, `MsNavBar`
- Un dossier par composant dans `src/components/`
- Fichier Vue en PascalCase : `MsButton.vue`

### Structure d'un composant Vue

```vue
<script setup lang="ts">
withDefaults(defineProps<{
  // props typées ici
}>(), {
  // valeurs par défaut ici
})

const emit = defineEmits<{ ... }>()
</script>

<template>
  <!-- Une seule racine -->
</template>

<style scoped>
/* Toujours scoped */
/* Toujours utiliser les variables CSS tokens — jamais de valeurs en dur */
/* Pattern classes : .ms-[composant]--[modifier] */
</style>
```

### Structure d'une story Storybook

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import MsXxx from './MsXxx.vue'

const meta: Meta<typeof MsXxx> = {
  title: 'Components/MsXxx',
  component: MsXxx,
  tags: ['autodocs'],
  argTypes: { /* controls */ },
}
export default meta

type Story = StoryObj<typeof MsXxx>

export const Default: Story = { args: { /* ... */ } }
// Toujours ajouter une story Light ET une story Dark
export const Dark: Story = {
  args: { /* ... */ },
  parameters: { backgrounds: { default: 'dark' } }
}
```

### Export dans `src/index.ts`

Chaque nouveau composant doit être ajouté :
```typescript
export { default as MsButton } from './components/MsButton/MsButton.vue'
export { default as MsInput }  from './components/MsInput/MsInput.vue'
// etc.
```

---

## Composants existants

| Composant | Statut | Variants |
|---|---|---|
| `MsButton` | ✅ Done | `primary`, `secondary`, `cta` / `sm`, `md`, `lg` |

---

## Composants à créer (backlog prioritaire)

| Priorité | Composant | Description |
|---|---|---|
| 1 | `MsInput` | Champ texte avec label, placeholder, état error/disabled |
| 2 | `MsCard` | Carte contenu avec slot header/body/footer |
| 3 | `MsBadge` | Étiquette statut (actif, inactif, en cours, alerte) |
| 4 | `MsNavBar` | Navigation principale, responsive, dark/light |
| 5 | `MsLogo` | Composant SVG logo — variants horizontal, icon-only, white |
| 6 | `MsModal` | Modale avec overlay et slot contenu |
| 7 | `MsAlert` | Bandeau notification (info, success, warning, error) |

---

## Storybook

Chaque composant doit être testé sur les deux backgrounds :
- `light` (#FFFFFF) — pour le site vitrine
- `dark` (#10192C) — pour le portail SaaS

URL Storybook public : https://meridian-synergy.github.io/meridian-synergy-ui

---

## Commandes utiles

```bash
pnpm storybook          # Dev → localhost:6006
pnpm build-storybook    # Build statique
pnpm build              # Build package pour distribution
```

---

## CI/CD

Push sur `main` → GitHub Actions → build Storybook → deploy GitHub Pages.

---

## Contexte métier

Le portail SaaS est destiné aux **télépilotes de drones professionnels**. Modules clés :
- **SORA** — analyse de risque réglementaire (agent IA + review humaine obligatoire)
- **MANEX** — génération Manuel d'Exploitation (agent IA + review humaine obligatoire)
- **Planning missions** — calendrier, zones de vol, checklist pré-vol
- **Suivi clients** — portefeuille clients et devis

---

## Variables d'environnement (ne jamais commiter)

```
ANTHROPIC_API_KEY=     ← Claude API (backend uniquement)
SUPABASE_URL=
SUPABASE_ANON_KEY=
```
