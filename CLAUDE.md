# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language rule — ABSOLUTE

**All code must be written in English, no exception:**
- Comments (`//`, `/* */`) in JS, TS, and Vue `<script>` blocks
- CSS/SCSS comments and class names
- Variable names, function names, method names
- TypeScript interfaces, types, enums and their properties
- HTML `id`, `data-*` attributes and any developer-facing identifiers

The only content allowed in French (or other languages):
- User-facing text inside i18n files (`fr.json`, `en.json`, …)
- String literals displayed to end users
- Existing production database column/table names (do not rename)

---

## Working method — ABSOLUTE

Before any non-trivial implementation, always:
1. **Present the plan**: list the files to be changed, the approach, and any trade-offs worth noting
2. **Ask for confirmation**: explicitly wait for a go-ahead before writing any code
3. **Only then implement**: start coding only after the user confirms

This applies to all features, refactors, and multi-file changes — regardless of complexity.

---

## Projet

**Meridian Synergy** — Plateforme SaaS dans le domaine du drone professionnel.
Ce repo (`meridian-synergy-ui`) est le **Design System partagé** entre :
- Le site vitrine statique (`meridian-synergy-web` → meridian-synergy.com)
- Le portail SaaS télépilote (`meridian-synergy-app` → app.meridian-synergy.com)

---

## Git workflow — ABSOLUTE

**Never push directly to `main`.** Every change goes through a branch → PR → merge cycle:

**Branch types:**
- `feat/[topic]` — new feature
- `fix/[topic]` — one or more small fixes grouped together
- `hotfix/[topic]` — single urgent fix, branched from `main` (prod), merged back immediately
- `quickfix/[topic]` — tiny isolated fix (typo, one-line correction) — still requires branch + PR + Go merge, no exceptions

1. Create a branch: `git checkout -b feat/[topic]`, `fix/[topic]`, `hotfix/[topic]`, or `quickfix/[topic]`
2. Work and accumulate commits on that branch (multiple corrections on the same branch are fine)
3. **Before committing**: present a summary of files changed and why, then wait for explicit **"Go commit"**
4. After push: user reviews the diff on the GitHub PR
5. Wait for explicit **"Go merge"** before merging to `main` — merging triggers the production deploy
6. After merge: pull local main — `git checkout main && git pull origin main` on affected repos

---

## Component contract — Backward compatibility — ABSOLUTE

This package is consumed by multiple apps (`waypoint360-app`, `waypoint360-web`, `meridian-synergy-web`). A breaking change forces simultaneous updates in every consumer — which is not always possible.

**Rules for every component change:**
- **Never remove a prop or event** — mark it `@deprecated` in JSDoc, keep it functional
- **Never rename a prop or emitted event** — add the new name alongside, remove the old in a major version
- **Never restrict a prop's type** (e.g. `string | number` → `string` is breaking)
- **All new props must have a default value** so existing usage without the prop keeps working
- **Additive-first**: add optional props with defaults — never add required props to an existing component

**When a breaking change is truly unavoidable:**
1. Bump the major version: `npm version major`
2. Document the migration in `CHANGELOG.md`
3. Coordinate updates in all consumer repos before publishing the new version

---

## Règle absolue : source de vérité des composants

Tous les composants UI visuels sont créés **ici uniquement**.
Les repos `meridian-synergy-web` et `meridian-synergy-app` n'ont jamais de composants UI locaux — ils importent uniquement depuis `@meridian-synergy/ui`.

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
| Tests | Vitest + `@storybook/addon-vitest` (Playwright/Chromium) |
| CI/CD | GitHub Actions → GitHub Pages (`gh-pages`) |
| Publication package | GitHub Packages (`@meridian-synergy/ui`) |

---

## Services & outils tiers

| Outil | Rôle |
|---|---|
| **Atlassian Jira** | Tickets et suivi des composants à créer/améliorer |
| **Atlassian Confluence** | Spécifications design system et guidelines d'utilisation |

---

## Commandes

```bash
pnpm storybook          # Dev → localhost:6006
pnpm build-storybook    # Build statique
pnpm build              # Build package pour distribution
pnpm vitest             # Tests (stories via addon-vitest + Playwright headless)
```

Les tests tournent en mode browser (Chromium headless) via `vitest.config.ts` qui charge `@storybook/addon-vitest`. Il n'y a pas de commande `pnpm test` fonctionnelle — utiliser `pnpm vitest`.

---

## Design System — Tokens

Les tokens sont définis dans `src/tokens/tokens.css` et importés globalement via `.storybook/preview.ts`.
**Ne jamais utiliser de valeurs en dur** — toujours utiliser les variables CSS.

### Couleurs principales

```css
--ms-color-navy:    #1B2B56   /* Primaire — navbar, titres, boutons primary */
--ms-color-sky:     #00AAEF   /* Accent énergie — liens, états actifs */
--ms-color-gold:    #C9A84C   /* CTA — conversion, invitation à agir */
--ms-color-orange:  #F05A28   /* Actions critiques — destructif, danger, suppression */
--ms-color-silver:  #7A7D8A   /* Secondaire — textes, bordures, placeholders */
--ms-color-white:   #FFFFFF   /* Surfaces light mode */
```

### Couleurs étendues

```css
--ms-color-dark-bg:  #10192C   /* Fond dark mode (portail SaaS) */
--ms-color-dark-bg2: #182236   /* Fond dark mode — couche secondaire */
--ms-color-bg:       #ECEEF3   /* Fond page light mode */
--ms-color-border:   #D5D9E4   /* Bordures standard */
--ms-color-muted:    #8C95AA   /* Labels désactivés, méta-texte */
--ms-color-success:  #22c55e
--ms-color-warning:  #f59e0b
--ms-color-error:    #ef4444
```

### Typographie

```css
--ms-font-display:   'Barlow', sans-serif;           /* Titres, headings, hero — 700/600 */
--ms-font-body:      'Barlow', sans-serif;           /* Corps, boutons, labels — 400/600 */
--ms-font-condensed: 'Barlow Condensed', sans-serif; /* Section labels, tags uppercase */
--ms-font-data:      'Space Mono', monospace;        /* Données, GPS, codes, nombres */
```

Les polices sont chargées depuis Google Fonts dans `.storybook/preview.ts` (Storybook uniquement). Les apps consommatrices doivent les charger elles-mêmes.

### Espacement

```css
--ms-space-xs: 4px  |  --ms-space-sm: 8px  |  --ms-space-md: 16px
--ms-space-lg: 24px |  --ms-space-xl: 40px |  --ms-space-2xl: 56px
```

### Border radius

```css
--ms-radius-sm: 4px  |  --ms-radius-md: 8px   |  --ms-radius-lg: 16px
--ms-radius-xl: 20px |  --ms-radius-full: 9999px
```

### Ombres & Transitions

```css
--ms-shadow-xs / sm / md / lg        /* Ombres navy avec opacité */
--ms-transition-fast: 0.1s ease      /* Micro-interactions */
--ms-transition-base: 0.2s ease      /* Transitions standard */
```

---

## Conventions de code

### Nommage composants
- Préfixe `Ms` obligatoire : `MsButton`, `MsInput`, `MsCard`, `MsNavBar`
- Un dossier par composant dans `src/components/`
- Fichier Vue en PascalCase : `MsButton.vue`
- Classes CSS : `.ms-[composant]--[modifier]`

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
/* Toujours scoped — toujours des variables CSS tokens */
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
// Toujours ajouter une story Dark avec background explicite
export const Dark: Story = {
  args: { /* ... */ },
  parameters: { backgrounds: { default: 'dark' } },
}
```

### Export dans `src/index.ts`

```typescript
export { default as MsButton } from './components/MsButton/MsButton.vue'
// etc.
```

---

## Composants existants

| Composant | Variants / Props notables | Stories |
|---|---|---|
| `MsButton` | `primary`, `secondary`, `cta`, `critical` / `sm`, `md`, `lg` | ✅ |
| `MsInput` | `modelValue`, `label`, `placeholder`, `hint`, `error`, `disabled`, `type` | ✅ |
| `MsBadge` | `active`, `inactive`, `pending`, `alert`, `warning`, `navy`, `sky`, `orange` / `dot` | ✅ |
| `MsAlert` | `info`, `success`, `warning`, `error`, `navy` / `title`, `action` | ❌ à créer |
| `MsCard` | slots header/body/footer | ❌ à créer |
| `MsModal` | slot contenu, overlay | ❌ à créer |

---

## Backlog prioritaire

| Priorité | Composant | Description |
|---|---|---|
| 1 | `MsNavBar` | Navigation principale, responsive, dark/light |
| 2 | `MsLogo` | SVG logo — variants horizontal, icon-only, white |
| 3 | Stories manquantes | MsAlert, MsCard, MsModal n'ont pas de stories |

---

## Storybook

Storybook ne scanne que `src/**/*.stories.@(ts|tsx)` (voir `.storybook/main.ts`).
Le dossier `stories-example/` contient les exemples par défaut de Storybook — ne pas s'en inspirer pour les composants du DS.

Backgrounds disponibles : `light` (#FFFFFF), `dark` (#10192C), `navy` (#1B2B56).

URL public : https://meridian-synergy.github.io/meridian-synergy-ui

---

## CI/CD

Push sur `main` → GitHub Actions (`storybook.yml`) → build Storybook → deploy GitHub Pages.

---

## Contexte métier

Le portail SaaS est destiné aux **télépilotes de drones professionnels**. Modules clés :
- **SORA** — analyse de risque réglementaire (agent IA + review humaine obligatoire)
- **MANEX** — génération Manuel d'Exploitation (agent IA + review humaine obligatoire)
- **Planning missions** — calendrier, zones de vol, checklist pré-vol
- **Suivi clients** — portefeuille clients et devis
