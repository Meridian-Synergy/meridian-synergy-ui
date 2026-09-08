<script setup lang="ts">
withDefaults(defineProps<{
  label:    string
  variant?: 'active' | 'inactive' | 'pending' | 'alert' | 'warning' | 'navy' | 'sky' | 'orange'
  dot?:     boolean
}>(), {
  variant: 'active',
  dot:     true,
})
</script>

<template>
  <span :class="['ms-badge', `ms-badge--${variant}`]">
    <span v-if="dot && isStatusVariant" class="ms-badge__dot"></span>
    <slot>{{ label }}</slot>
  </span>
</template>

<script lang="ts">
const STATUS_VARIANTS = ['active', 'inactive', 'pending', 'alert', 'warning']
</script>

<style scoped>
.ms-badge {
  display:         inline-flex;
  align-items:     center;
  gap:             5px;
  font-family:     var(--ms-font-condensed);
  font-weight:     600;
  font-size:       11px;
  letter-spacing:  0.06em;
  text-transform:  uppercase;
  padding:         3px 10px;
  border-radius:   var(--ms-radius-sm);
  border:          1px solid transparent;
  white-space:     nowrap;
}

.ms-badge__dot {
  width:         6px;
  height:        6px;
  border-radius: 50%;
  background:    currentColor;
  opacity:       0.7;
  flex-shrink:   0;
}

/* Status variants — light mode */
.ms-badge--active   { background: #dcfce7; color: #15803d; border-color: #bbf7d0; }
/* Contrastes calculés sur la paire réelle, pas estimés. Cinq des huit variantes
   passaient sous le seuil AA de 4,5 ; les valeurs corrigées restent dans la même
   teinte, l'écart est imperceptible à l'œil et décisif à la mesure.
   Ratios après correction, dans l'ordre : 4,54 · 4,54 · 4,58 · 4,58. */
.ms-badge--inactive { background: #f3f4f6; color: #69707e; border-color: #e5e7eb; }
.ms-badge--pending  { background: #e6f6fd; color: #0077a9; border-color: #bae8fb; }
.ms-badge--alert    { background: #fde9e4; color: #bc431e; border-color: #fcd3c8; }
.ms-badge--warning  { background: #fef9c3; color: #a16207; border-color: #fde68a; }

/* Aplats pleins. ⚠️ `--ms-color-sky` et `--ms-color-orange` sont des couleurs
   d'APLAT DÉCORATIF : sous du texte blanc elles donnent 2,63:1 et 3,39:1. Les
   variantes de texte existent pour cela, et c'est le constat 6.1 de notre propre
   audit du 2026-09-08. Ratios : navy 13,76 · sky 5,17 · orange 4,98. */
.ms-badge--navy   { background: var(--ms-color-navy);      color: var(--ms-color-white); }
.ms-badge--sky    { background: var(--ms-color-sky-dark);  color: var(--ms-color-white); }
.ms-badge--orange { background: #C6431A;                   color: var(--ms-color-white); }
</style>
