<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  dark?: boolean
  maxWidth?: string
}>(), {
  dark:     false,
  maxWidth: '440px',
})

const emit = defineEmits<{ close: [] }>()

const onOverlayClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div class="ms-modal-overlay" @click="onOverlayClick">
      <div :class="['ms-modal', { 'ms-modal--dark': dark }]" :style="{ maxWidth }">
        <div class="ms-modal__header">
          <span class="ms-modal__title">{{ title }}</span>
          <button class="ms-modal__close" @click="emit('close')">✕</button>
        </div>
        <div class="ms-modal__body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="ms-modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.ms-modal-overlay {
  position:        fixed;
  inset:           0;
  background:      rgba(16, 25, 44, 0.6);
  display:         flex;
  align-items:     center;
  justify-content: center;
  z-index:         200;
  padding:         var(--ms-space-lg);
  animation:       ms-fade-in 0.15s ease;
}
@keyframes ms-fade-in { from { opacity: 0; } to { opacity: 1; } }

.ms-modal {
  background:    var(--ms-color-white);
  border-radius: var(--ms-radius-lg);
  box-shadow:    var(--ms-shadow-lg);
  width:         100%;
  overflow:      hidden;
  animation:     ms-slide-up 0.2s ease;
}
@keyframes ms-slide-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.ms-modal--dark { background: var(--ms-color-dark-bg); }

.ms-modal__header {
  padding:       var(--ms-space-md) var(--ms-space-lg);
  border-bottom: 1px solid var(--ms-color-border);
  display:       flex;
  align-items:   center;
  justify-content: space-between;
}
.ms-modal--dark .ms-modal__header { border-color: rgba(255, 255, 255, 0.08); }

.ms-modal__title {
  font-family: var(--ms-font-display);
  font-size:   16px;
  font-weight: 600;
  color:       var(--ms-color-navy);
}
.ms-modal--dark .ms-modal__title { color: var(--ms-color-white); }

.ms-modal__close {
  width:         26px;
  height:        26px;
  border-radius: var(--ms-radius-sm);
  border:        none;
  background:    var(--ms-color-bg);
  color:         var(--ms-color-muted);
  cursor:        pointer;
  font-size:     13px;
  display:       flex;
  align-items:   center;
  justify-content: center;
  transition:    background var(--ms-transition-fast);
}
.ms-modal__close:hover { background: var(--ms-color-border); }
.ms-modal--dark .ms-modal__close { background: rgba(255,255,255,0.08); color: #a8b0c4; }

.ms-modal__body {
  padding:     var(--ms-space-md) var(--ms-space-lg);
  font-family: var(--ms-font-body);
  font-size:   13.5px;
  color:       var(--ms-color-silver);
  line-height: 1.6;
}
.ms-modal--dark .ms-modal__body { color: #a8b0c4; }

.ms-modal__footer {
  padding:         var(--ms-space-sm) var(--ms-space-lg);
  border-top:      1px solid var(--ms-color-border);
  display:         flex;
  justify-content: flex-end;
  gap:             var(--ms-space-sm);
}
.ms-modal--dark .ms-modal__footer { border-color: rgba(255, 255, 255, 0.08); }
</style>
