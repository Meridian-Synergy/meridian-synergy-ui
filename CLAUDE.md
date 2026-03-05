# CLAUDE.md — Meridian Synergy UI

Ce fichier est lu automatiquement par Claude Code à chaque session.
Il contient tout le contexte nécessaire pour contribuer au Design System de Meridian Synergy.

---

## Projet

**Meridian Synergy** — Plateforme SaaS dans le domaine du drone professionnel.
Ce repo (`meridian-synergy-ui`) est le **Design System partagé** entre :
- Le site vitrine statique (Nuxt 3 SSG → GitHub Pages)
- Le portail SaaS télépilote (Nuxt 3 SPA → app.meridian-synergy.com)

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
| Déploiement Storybook | GitHub Pages (`gh-pages` branch) |
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
└── vite.config.ts
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
// 1. withDefaults + defineProps en premier
withDefaults(defineProps<{
  // props typées ici
}>(), {
  // valeurs par défaut ici
})

// 2. emits
const emit = defineEmits<{ ... }>()
</script>

<template>
  <!-- Une seule racine -->
</template>

<style scoped>
/* Toujours scoped */
/* Toujours utiliser les variables CSS tokens */
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
```

### Export dans `src/index.ts`

Chaque nouveau composant doit être ajouté à `src/index.ts` :
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
| 5 | `MsLogo` | Composant SVG logo avec variants (horizontal, icon, white) |
| 6 | `MsModal` | Modale avec overlay et slot contenu |
| 7 | `MsAlert` | Bandeau notification (info, success, warning, error) |

---

## Commandes utiles

```bash
pnpm storybook          # Lancer Storybook en dev → localhost:6006
pnpm build-storybook    # Build statique Storybook
pnpm build              # Build du package pour distribution
```

---

## CI/CD

Chaque `git push` sur `main` déclenche automatiquement :
1. Build Storybook (`pnpm build-storybook`)
2. Deploy sur GitHub Pages → https://meridian-synergy.github.io/meridian-synergy-ui

---

## Contexte métier (important pour les composants SaaS)

Le portail SaaS est destiné aux **télépilotes de drones professionnels**. Les modules clés :
- **SORA** — analyse de risque réglementaire (agent IA avec review humaine obligatoire)
- **MANEX** — génération Manuel d'Exploitation (agent IA avec review humaine obligatoire)
- **Planning missions** — calendrier, zones de vol, checklist pré-vol
- **Suivi clients** — gestion portefeuille clients et devis

Les composants UI doivent supporter le **dark mode** (portail SaaS) et le **light mode** (vitrine).
Toujours tester les deux backgrounds dans Storybook.

---

## Variables d'environnement (ne jamais commiter)

```
ANTHROPIC_API_KEY=     ← Claude API pour les agents IA (backend uniquement)
SUPABASE_URL=          ← Supabase project URL
SUPABASE_ANON_KEY=     ← Supabase anon key
```
