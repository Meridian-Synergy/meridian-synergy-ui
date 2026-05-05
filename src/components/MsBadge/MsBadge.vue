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
.ms-badge--inactive { background: #f3f4f6; color: #6b7280; border-color: #e5e7eb; }
.ms-badge--pending  { background: #e6f6fd; color: #0086be; border-color: #bae8fb; }
.ms-badge--alert    { background: #fde9e4; color: #c94820; border-color: #fcd3c8; }
.ms-badge--warning  { background: #fef9c3; color: #a16207; border-color: #fde68a; }

/* Solid variants */
.ms-badge--navy   { background: var(--ms-color-navy);   color: var(--ms-color-white); }
.ms-badge--sky    { background: var(--ms-color-sky);    color: var(--ms-color-white); }
.ms-badge--orange { background: var(--ms-color-orange); color: var(--ms-color-white); }
</style>
