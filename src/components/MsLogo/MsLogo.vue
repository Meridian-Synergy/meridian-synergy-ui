<script setup lang="ts">
import { computed, useId } from 'vue'

const props = withDefaults(defineProps<{
  /** Layout variant */
  variant?: 'horizontal' | 'vertical' | 'icon'
  /** Color scheme — use 'navy' on light backgrounds, 'white' on dark */
  color?:   'navy' | 'white'
  /** Explicit pixel width. Defaults: horizontal=300, vertical=175, icon=40 */
  width?:   number
}>(), {
  variant: 'horizontal',
  color:   'navy',
})

const clip = `ms-logo-clip-${useId()}`

const main = computed(() => props.color === 'white' ? '#FFFFFF' : '#1B2A4A')
const gold = '#C9A84C'

const defaults = { horizontal: 300, vertical: 175, icon: 40 }
const w = computed(() => props.width ?? defaults[props.variant])
</script>

<template>
  <!-- ── Horizontal (icon left + "MERIDIAN / SYNERGY" right) ── -->
  <svg
    v-if="variant === 'horizontal'"
    :width="w"
    viewBox="0 0 310 82"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Meridian Synergy"
    role="img"
  >
    <defs>
      <clipPath :id="clip"><circle cx="41" cy="41" r="36.5"/></clipPath>
    </defs>
    <g :clip-path="`url(#${clip})`">
      <ellipse cx="41" cy="41" rx="14" ry="36.5" fill="none" :stroke="main" stroke-width="2.0" transform="rotate(0,41,41)"/>
      <ellipse cx="41" cy="41" rx="14" ry="36.5" fill="none" :stroke="main" stroke-width="2.0" transform="rotate(60,41,41)"/>
      <ellipse cx="41" cy="41" rx="14" ry="36.5" fill="none" :stroke="main" stroke-width="2.0" transform="rotate(120,41,41)"/>
      <ellipse cx="41" cy="41" rx="36.5" ry="7"   fill="none" :stroke="main" stroke-width="2.0"/>
      <line x1="41" y1="4.5" x2="41" y2="77.5" :stroke="gold" stroke-width="2.8"/>
    </g>
    <circle cx="41" cy="41" r="36.5" fill="none" :stroke="main" stroke-width="2.7"/>
    <text x="97" y="34"  font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="20.5" :fill="main" letter-spacing="2.8">MERIDIAN</text>
    <text x="97" y="59"  font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="20.5" :fill="main" letter-spacing="3.6">SYNERGY</text>
  </svg>

  <!-- ── Vertical (icon top + "MERIDIAN / SYNERGY" below) ── -->
  <svg
    v-else-if="variant === 'vertical'"
    :width="w"
    viewBox="0 0 200 220"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Meridian Synergy"
    role="img"
  >
    <defs>
      <clipPath :id="clip"><circle cx="100" cy="82" r="70"/></clipPath>
    </defs>
    <g :clip-path="`url(#${clip})`">
      <ellipse cx="100" cy="82" rx="27" ry="70" fill="none" :stroke="main" stroke-width="2.3" transform="rotate(0,100,82)"/>
      <ellipse cx="100" cy="82" rx="27" ry="70" fill="none" :stroke="main" stroke-width="2.3" transform="rotate(60,100,82)"/>
      <ellipse cx="100" cy="82" rx="27" ry="70" fill="none" :stroke="main" stroke-width="2.3" transform="rotate(120,100,82)"/>
      <ellipse cx="100" cy="82" rx="70" ry="13.5" fill="none" :stroke="main" stroke-width="2.3"/>
      <line x1="100" y1="12" x2="100" y2="152" :stroke="gold" stroke-width="3.5"/>
    </g>
    <circle cx="100" cy="82" r="70" fill="none" :stroke="main" stroke-width="3.2"/>
    <text x="100" y="181" text-anchor="middle" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="21" :fill="main" letter-spacing="3">MERIDIAN</text>
    <text x="100" y="206" text-anchor="middle" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="21" :fill="main" letter-spacing="4">SYNERGY</text>
  </svg>

  <!-- ── Icon only (for header / favicon-like use) ── -->
  <svg
    v-else
    :width="w"
    viewBox="0 0 82 82"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <clipPath :id="clip"><circle cx="41" cy="41" r="36.5"/></clipPath>
    </defs>
    <g :clip-path="`url(#${clip})`">
      <ellipse cx="41" cy="41" rx="14" ry="36.5" fill="none" :stroke="main" stroke-width="2.0" transform="rotate(0,41,41)"/>
      <ellipse cx="41" cy="41" rx="14" ry="36.5" fill="none" :stroke="main" stroke-width="2.0" transform="rotate(60,41,41)"/>
      <ellipse cx="41" cy="41" rx="14" ry="36.5" fill="none" :stroke="main" stroke-width="2.0" transform="rotate(120,41,41)"/>
      <ellipse cx="41" cy="41" rx="36.5" ry="7"   fill="none" :stroke="main" stroke-width="2.0"/>
      <line x1="41" y1="4.5" x2="41" y2="77.5" :stroke="gold" stroke-width="2.8"/>
    </g>
    <circle cx="41" cy="41" r="36.5" fill="none" :stroke="main" stroke-width="2.7"/>
  </svg>
</template>
