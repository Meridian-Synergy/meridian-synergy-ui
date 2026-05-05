<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'info' | 'success' | 'warning' | 'error' | 'navy'
  title?:   string
  action?:  string
}>(), {
  variant: 'info',
})

const emit = defineEmits<{ action: [] }>()

const icons: Record<string, string> = {
  info:    'ℹ',
  success: '✓',
  warning: '⚠',
  error:   '✕',
  navy:    '★',
}
</script>

<template>
  <div :class="['ms-alert', `ms-alert--${variant}`]">
    <span class="ms-alert__icon">{{ icons[variant] }}</span>
    <div class="ms-alert__content">
      <div v-if="title" class="ms-alert__title">{{ title }}</div>
      <div v-if="$slots.default" class="ms-alert__body">
        <slot></slot>
      </div>
    </div>
    <span v-if="action" class="ms-alert__action" @click="emit('action')">{{ action }}</span>
  </div>
</template>

<style scoped>
.ms-alert {
  display:     flex;
  align-items: flex-start;
  gap:         var(--ms-space-sm);
  padding:     var(--ms-space-sm) var(--ms-space-md);
  border-radius: var(--ms-radius-md);
  border:      1px solid transparent;
  font-family: var(--ms-font-body);
  font-size:   13px;
  line-height: 1.5;
}
.ms-alert__icon    { font-size: 15px; flex-shrink: 0; margin-top: 1px; }
.ms-alert__content { flex: 1; }
.ms-alert__title   { font-weight: 600; font-size: 13px; margin-bottom: 2px; }
.ms-alert__body    { font-size: 12px; opacity: 0.85; }
.ms-alert__action  {
  font-weight: 600; font-size: 12px; text-decoration: underline;
  cursor: pointer; margin-left: auto; padding-left: var(--ms-space-sm);
  flex-shrink: 0; align-self: center; opacity: 0.85;
}

.ms-alert--info    { background: #e6f6fd; border-color: #bae8fb; color: #0369a1; }
.ms-alert--success { background: #dcfce7; border-color: #bbf7d0; color: #166534; }
.ms-alert--warning { background: #fef9c3; border-color: #fde68a; color: #854d0e; }
.ms-alert--error   { background: #fde9e4; border-color: #fcd3c8; color: #991b1b; }
.ms-alert--navy    { background: var(--ms-color-navy); border-color: transparent; color: var(--ms-color-white); }
.ms-alert--navy .ms-alert__icon   { color: var(--ms-color-gold); }
.ms-alert--navy .ms-alert__action { color: var(--ms-color-gold); }
</style>
