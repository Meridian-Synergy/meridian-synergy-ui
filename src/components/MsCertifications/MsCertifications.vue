<script setup lang="ts">
const KEYS = ['a1_a3', 'a2_cofc', 'sts_01', 'sts_02'] as const
type CertKey = typeof KEYS[number]

export interface MsCertificationsValue {
  a1_a3?:   boolean
  a2_cofc?: boolean
  sts_01?:  boolean
  sts_02?:  boolean
}

const props = defineProps<{
  modelValue: MsCertificationsValue
  labels:    Record<CertKey, string>
  title?:    string
  hint?:     string
}>()

const emit = defineEmits<{ 'update:modelValue': [value: MsCertificationsValue] }>()

function toggle(key: CertKey) {
  emit('update:modelValue', { ...props.modelValue, [key]: !props.modelValue[key] })
}
</script>

<template>
  <div class="ms-certs">
    <p v-if="title" class="ms-certs__title">{{ title }}</p>
    <div class="ms-certs__grid">
      <label v-for="key in KEYS" :key="key" class="ms-certs__item">
        <input
          type="checkbox"
          :checked="!!modelValue[key]"
          class="ms-certs__native"
          @change="toggle(key)"
        />
        <span class="ms-certs__check" :class="{ 'ms-certs__check--on': modelValue[key] }">
          <svg v-if="modelValue[key]" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="ms-certs__label">{{ labels[key] }}</span>
      </label>
    </div>
    <p v-if="hint" class="ms-certs__hint">{{ hint }}</p>
  </div>
</template>

<style scoped>
.ms-certs__title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ms-text-sub);
  margin-bottom: 12px;
}

.ms-certs__grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ms-certs__item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.ms-certs__native { display: none; }

.ms-certs__check {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 1.5px solid var(--ms-border);
  border-radius: 4px;
  background: var(--ms-input-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--ms-transition), border-color var(--ms-transition);
}
.ms-certs__check--on {
  background: var(--ms-sky);
  border-color: var(--ms-sky);
  color: #fff;
}
.ms-certs__item:hover .ms-certs__check:not(.ms-certs__check--on) {
  border-color: var(--ms-sky);
}

.ms-certs__label {
  font-size: 13px;
  color: var(--ms-text);
  line-height: 1.4;
}

.ms-certs__hint {
  margin-top: 10px;
  font-size: 11px;
  color: var(--ms-text-sub);
  opacity: 0.7;
}
</style>
