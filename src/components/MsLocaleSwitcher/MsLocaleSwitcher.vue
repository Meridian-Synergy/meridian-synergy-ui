<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface LocaleOption {
  code: string
  name: string
  flag: string // ISO 3166-1 alpha-2 lowercase, used as fi-{flag} class from flag-icons CSS
}

const props = withDefaults(defineProps<{
  locales: LocaleOption[]
  currentLocale: string
  theme?: 'dark' | 'light'
}>(), { theme: 'dark' })

const emit = defineEmits<{ select: [code: string] }>()

const open = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const current = computed(() => props.locales.find(l => l.code === props.currentLocale))

function toggle() { open.value = !open.value }

function select(code: string) {
  open.value = false
  emit('select', code)
}

function onOutsideClick(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onOutsideClick, true))
onUnmounted(() => document.removeEventListener('click', onOutsideClick, true))
</script>

<template>
  <div ref="containerRef" class="ms-ls" :class="`ms-ls--${theme}`">
    <button
      class="ms-ls__trigger"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click.stop="toggle"
    >
      <span class="fi" :class="`fi-${current?.flag}`" role="img" :aria-label="current?.name" />
      <span class="ms-ls__name">{{ current?.name }}</span>
      <svg
        class="ms-ls__chevron"
        :class="{ 'ms-ls__chevron--open': open }"
        width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"
      >
        <path d="M6 8 L1 3 L11 3 Z" />
      </svg>
    </button>

    <ul v-if="open" class="ms-ls__dropdown" role="listbox" :aria-label="'Select language'">
      <li
        v-for="locale in locales"
        :key="locale.code"
        role="option"
        :aria-selected="locale.code === currentLocale"
        class="ms-ls__option"
        :class="{ 'ms-ls__option--active': locale.code === currentLocale }"
        @click="select(locale.code)"
      >
        <span class="fi" :class="`fi-${locale.flag}`" role="img" :aria-label="locale.name" />
        <span class="ms-ls__option-name">{{ locale.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* flag-icons CSS must be imported globally by the consumer app:
   import 'flag-icons/css/flag-icons.min.css'
   or via nuxt.config.ts css: ['flag-icons/css/flag-icons.min.css'] */

.ms-ls {
  position: relative;
  display: inline-block;
  font-family: var(--ms-font-body, sans-serif);
}

/* Trigger */
.ms-ls__trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: var(--ms-radius-md, 8px);
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  transition: background var(--ms-transition-fast, 0.1s ease), border-color var(--ms-transition-fast, 0.1s ease);
}

/* Chevron */
.ms-ls__chevron {
  transition: transform var(--ms-transition-base, 0.2s ease);
  flex-shrink: 0;
}
.ms-ls__chevron--open { transform: rotate(180deg); }

/* Dropdown */
.ms-ls__dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 200px;
  max-height: 340px;
  overflow-y: auto;
  border-radius: var(--ms-radius-md, 8px);
  border: 1px solid;
  list-style: none;
  margin: 0;
  padding: 6px 0;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Option */
.ms-ls__option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: background var(--ms-transition-fast, 0.1s ease);
}

/* flag-icons sizing */
.ms-ls .fi {
  width: 20px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 2px;
  overflow: hidden;
  background-size: cover;
}

/* ── Dark theme (SaaS app) ───────────────────────────────────── */
.ms-ls--dark .ms-ls__trigger {
  color: var(--ms-color-silver, #7A7D8A);
}
.ms-ls--dark .ms-ls__trigger:hover {
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.12);
  color: var(--ms-color-white, #fff);
}
.ms-ls--dark .ms-ls__dropdown {
  background: var(--ms-color-navy, #1B2B56);
  border-color: rgba(255,255,255,.1);
}
.ms-ls--dark .ms-ls__option {
  color: var(--ms-color-silver, #7A7D8A);
}
.ms-ls--dark .ms-ls__option:hover {
  background: rgba(255,255,255,.06);
  color: var(--ms-color-white, #fff);
}
.ms-ls--dark .ms-ls__option--active {
  color: var(--ms-color-sky, #00AAEF);
  font-weight: 700;
}

/* ── Light theme (marketing web) ────────────────────────────── */
.ms-ls--light .ms-ls__trigger {
  color: var(--ms-color-navy, #1B2B56);
}
.ms-ls--light .ms-ls__trigger:hover {
  background: rgba(27,43,86,.06);
  border-color: rgba(27,43,86,.15);
}
.ms-ls--light .ms-ls__dropdown {
  background: #fff;
  border-color: #e5e7eb;
}
.ms-ls--light .ms-ls__option {
  color: #444;
}
.ms-ls--light .ms-ls__option:hover {
  background: #f3f4f6;
  color: var(--ms-color-navy, #1B2B56);
}
.ms-ls--light .ms-ls__option--active {
  color: var(--ms-color-sky, #00AAEF);
  font-weight: 700;
}
</style>
