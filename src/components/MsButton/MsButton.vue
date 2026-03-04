<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  variant?: 'primary' | 'secondary' | 'cta'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    :class="['ms-btn', `ms-btn--${variant}`, `ms-btn--${size}`]"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.ms-btn {
  font-family: var(--ms-font-body);
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: var(--ms-radius-md);
  transition: opacity 0.2s, transform 0.1s;
}
.ms-btn:active   { transform: scale(0.98); }
.ms-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.ms-btn--sm { padding: var(--ms-space-xs) var(--ms-space-sm);  font-size: 13px; }
.ms-btn--md { padding: var(--ms-space-sm) var(--ms-space-md);  font-size: 15px; }
.ms-btn--lg { padding: var(--ms-space-md) var(--ms-space-lg);  font-size: 17px; }

.ms-btn--primary   { background: var(--ms-color-navy);   color: var(--ms-color-white); }
.ms-btn--secondary { background: transparent; color: var(--ms-color-navy); border: 2px solid var(--ms-color-navy); }
.ms-btn--cta       { background: var(--ms-color-orange); color: var(--ms-color-white); }
</style>