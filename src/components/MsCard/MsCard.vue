<script setup lang="ts">
withDefaults(defineProps<{
  title?:  string
  dark?:   boolean
}>(), {
  dark: false,
})
</script>

<template>
  <div :class="['ms-card', { 'ms-card--dark': dark }]">
    <div v-if="title || $slots.badge" class="ms-card__header">
      <span v-if="title" class="ms-card__title">{{ title }}</span>
      <slot name="badge"></slot>
    </div>
    <div class="ms-card__body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="ms-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.ms-card {
  background:    var(--ms-color-white);
  border:        1px solid var(--ms-color-border);
  border-radius: var(--ms-radius-lg);
  box-shadow:    var(--ms-shadow-sm);
  overflow:      hidden;
  display:       flex;
  flex-direction: column;
}
.ms-card--dark {
  background:  var(--ms-color-dark-bg);
  border-color: rgba(255, 255, 255, 0.08);
}

.ms-card__header {
  padding:       var(--ms-space-sm) var(--ms-space-md);
  border-bottom: 1px solid var(--ms-color-border);
  display:       flex;
  align-items:   center;
  justify-content: space-between;
  gap:           var(--ms-space-sm);
}
.ms-card--dark .ms-card__header { border-color: rgba(255, 255, 255, 0.08); }

.ms-card__title {
  font-family: var(--ms-font-display);
  font-size:   14px;
  font-weight: 600;
  color:       var(--ms-color-navy);
}
.ms-card--dark .ms-card__title { color: var(--ms-color-white); }

.ms-card__body { padding: var(--ms-space-md); flex: 1; }

.ms-card__footer {
  padding:      var(--ms-space-sm) var(--ms-space-md);
  border-top:   1px solid var(--ms-color-border);
  display:      flex;
  justify-content: flex-end;
  gap:          var(--ms-space-sm);
}
.ms-card--dark .ms-card__footer { border-color: rgba(255, 255, 255, 0.08); }
</style>
