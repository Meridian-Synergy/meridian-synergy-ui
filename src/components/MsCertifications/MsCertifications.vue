<script setup lang="ts">
import { computed } from 'vue'

const DGAC_KEYS = ['a1_a3', 'a2_cofc', 'sts_01', 'sts_02'] as const
const ADDITIONAL_KEYS = ['certibiocide', 'certiphyto'] as const

type DgacKey       = typeof DGAC_KEYS[number]
type AdditionalKey = typeof ADDITIONAL_KEYS[number]

export type CertKey = DgacKey | AdditionalKey

export interface MsCertificationsValue {
  a1_a3?:        boolean
  a2_cofc?:      boolean
  sts_01?:       boolean
  sts_02?:       boolean
  certibiocide?: boolean
  certiphyto?:   boolean
}

const props = withDefaults(defineProps<{
  modelValue:       MsCertificationsValue
  labels:           Record<DgacKey, string>
  title?:           string
  hint?:            string
  additionalTitle?: string
  additionalLabels?: Partial<Record<AdditionalKey, string>>
}>(), {
  title:            undefined,
  hint:             undefined,
  additionalTitle:  undefined,
  additionalLabels: undefined,
})

const emit = defineEmits<{ 'update:modelValue': [value: MsCertificationsValue] }>()

function toggle(key: CertKey) {
  emit('update:modelValue', { ...props.modelValue, [key]: !props.modelValue[key] })
}

const hasAdditional = computed(() =>
  !!props.additionalLabels && Object.keys(props.additionalLabels).length > 0
)
</script>

<template>
  <div class="ms-certs">
    <p v-if="title" class="ms-certs__title">{{ title }}</p>
    <div class="ms-certs__grid">
      <label v-for="key in DGAC_KEYS" :key="key" class="ms-certs__item">
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

    <template v-if="hasAdditional">
      <div class="ms-certs__divider" />
      <p v-if="additionalTitle" class="ms-certs__title">{{ additionalTitle }}</p>
      <div class="ms-certs__grid">
        <label
          v-for="key in ADDITIONAL_KEYS"
          v-show="additionalLabels![key] !== undefined"
          :key="key"
          class="ms-certs__item"
        >
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
          <span class="ms-certs__label">{{ additionalLabels![key] }}</span>
        </label>
      </div>
    </template>

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

.ms-certs__divider {
  margin: 16px 0;
  border-top: 1px solid var(--ms-border);
  opacity: 0.4;
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
