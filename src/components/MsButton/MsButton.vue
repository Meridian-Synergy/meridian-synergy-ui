<script setup lang="ts">
withDefaults(defineProps<{
  label:    string
  variant?: 'primary' | 'secondary' | 'cta' | 'critical'
  size?:    'sm' | 'md' | 'lg'
  disabled?: boolean
}>(), {
  variant:  'primary',
  size:     'md',
  disabled: false,
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    :class="['ms-btn', `ms-btn--${variant}`, `ms-btn--${size}`]"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.ms-btn {
  font-family:    var(--ms-font-body);
  font-weight:    600;
  border:         none;
  cursor:         pointer;
  border-radius:  var(--ms-radius-md);
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  gap:            6px;
  white-space:    nowrap;
  line-height:    1;
  transition:     opacity var(--ms-transition-base), transform var(--ms-transition-fast);
}
.ms-btn:hover:not(:disabled) { opacity: 0.88; }
.ms-btn:active:not(:disabled) { transform: scale(0.98); }
.ms-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Sizes */
.ms-btn--sm { padding: var(--ms-space-xs) var(--ms-space-sm);  font-size: 13px; }
.ms-btn--md { padding: var(--ms-space-sm) var(--ms-space-md);  font-size: 15px; }
.ms-btn--lg { padding: var(--ms-space-md) var(--ms-space-lg);  font-size: 17px; }

/* Variants */
.ms-btn--primary   { background: var(--ms-color-navy);   color: var(--ms-color-white); }
.ms-btn--secondary { background: transparent;            color: var(--ms-color-navy);  border: 2px solid var(--ms-color-navy); }
.ms-btn--cta       { background: var(--ms-color-gold);   color: var(--ms-color-navy); }
.ms-btn--critical  { background: var(--ms-color-orange); color: var(--ms-color-white); }
</style>
