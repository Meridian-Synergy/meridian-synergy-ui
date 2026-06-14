<script setup lang="ts">
import { computed } from 'vue'

const DGAC_KEYS = ['a1_a3', 'a2_cofc', 'cats', 'sts_01', 'sts_02'] as const
const ADDITIONAL_KEYS = ['certibiocide', 'certiphyto'] as const

type DgacKey       = typeof DGAC_KEYS[number]
type AdditionalKey = typeof ADDITIONAL_KEYS[number]

export type CertKey = DgacKey | AdditionalKey

// A cert is either a plain held flag (legacy) or held + obtention date + issuing
// country. Object keeps room for a future repeatable (multi-country) model.
export type CertEntry = boolean | { held: boolean; obtained?: string | null; country?: string | null }

export interface MsCertificationsValue {
  a1_a3?:        CertEntry
  a2_cofc?:      CertEntry
  sts_01?:       CertEntry
  sts_02?:       CertEntry
  cats?:         CertEntry
  certibiocide?: CertEntry
  certiphyto?:   CertEntry
}

export interface MsCertificationsDateLabels {
  obtained:  string
  expiresOn: string   // template containing "{date}"
  valid:     string
  soon:      string
  expired:   string
}

export interface MsCertCountryOption { value: string; label: string }

const props = withDefaults(defineProps<{
  modelValue:        MsCertificationsValue
  labels:            Record<DgacKey, string>
  title?:            string
  hint?:             string
  additionalTitle?:  string
  additionalLabels?: Partial<Record<AdditionalKey, string>>
  /** Show obtention date + computed expiry/status under each held cert. */
  withDates?:        boolean
  /** Validity period in years (EU drone competency certs = 5). */
  validityYears?:    number
  /** Translated strings for the date UI (required when withDates is true). */
  dateLabels?:       MsCertificationsDateLabels
  /** Show an issuing-country selector for each held cert. */
  withCountry?:      boolean
  /** Country choices for the selector. */
  countryOptions?:   MsCertCountryOption[]
  /** Field label for the country selector. */
  countryLabel?:     string
  /** Country pre-selected when a cert is first marked as held. */
  defaultCountry?:   string | null
}>(), {
  title:            undefined,
  hint:             undefined,
  additionalTitle:  undefined,
  additionalLabels: undefined,
  withDates:        false,
  validityYears:    5,
  dateLabels:       undefined,
  withCountry:      false,
  countryOptions:   () => [],
  countryLabel:     undefined,
  defaultCountry:   null,
})

const emit = defineEmits<{ 'update:modelValue': [value: MsCertificationsValue] }>()

// Rich (object) value mode whenever dates or country are tracked.
const richMode = computed(() => props.withDates || props.withCountry)

function isHeld(v: CertEntry | undefined): boolean {
  return typeof v === 'boolean' ? v : !!v?.held
}
function obtainedOf(v: CertEntry | undefined): string | null {
  return typeof v === 'object' && v ? (v.obtained ?? null) : null
}
function countryOf(v: CertEntry | undefined): string | null {
  return typeof v === 'object' && v ? (v.country ?? null) : null
}

function emitEntry(key: CertKey, held: boolean, obtained: string | null, country: string | null) {
  const entry: CertEntry = richMode.value ? { held, obtained, country } : held
  emit('update:modelValue', { ...props.modelValue, [key]: entry })
}
function toggle(key: CertKey) {
  const nextHeld = !isHeld(props.modelValue[key])
  // Default the country to the user's own when a cert is first marked held.
  const country = nextHeld ? (countryOf(props.modelValue[key]) ?? props.defaultCountry ?? null) : countryOf(props.modelValue[key])
  emitEntry(key, nextHeld, obtainedOf(props.modelValue[key]), country)
}
function setDate(key: CertKey, e: Event) {
  emitEntry(key, isHeld(props.modelValue[key]), (e.target as HTMLInputElement).value || null, countryOf(props.modelValue[key]))
}
function setCountry(key: CertKey, e: Event) {
  emitEntry(key, isHeld(props.modelValue[key]), obtainedOf(props.modelValue[key]), (e.target as HTMLSelectElement).value || null)
}

function expiry(key: CertKey): Date | null {
  const obtained = obtainedOf(props.modelValue[key])
  if (!obtained) return null
  const d = new Date(obtained)
  d.setFullYear(d.getFullYear() + props.validityYears)
  return d
}
function fmtDate(d: Date): string {
  return d.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' })
}
function status(key: CertKey): 'valid' | 'soon' | 'expired' | 'unset' {
  const exp = expiry(key)
  if (!exp) return 'unset'
  const days = Math.floor((exp.getTime() - Date.now()) / 86400000)
  if (days < 0) return 'expired'
  if (days <= 60) return 'soon'
  return 'valid'
}
function expiresText(key: CertKey): string {
  const exp = expiry(key)
  return exp && props.dateLabels ? props.dateLabels.expiresOn.replace('{date}', fmtDate(exp)) : ''
}
function statusText(key: CertKey): string {
  const s = status(key)
  return props.dateLabels && s !== 'unset' ? props.dateLabels[s] : ''
}

const hasAdditional = computed(() =>
  !!props.additionalLabels && Object.keys(props.additionalLabels).length > 0
)

const RENDER_KEYS = computed<CertKey[]>(() => [...DGAC_KEYS])
</script>

<template>
  <div class="ms-certs">
    <p v-if="title" class="ms-certs__title">{{ title }}</p>
    <div class="ms-certs__grid">
      <div v-for="key in RENDER_KEYS" :key="key" class="ms-certs__row">
        <label class="ms-certs__item">
          <input type="checkbox" :checked="isHeld(modelValue[key])" class="ms-certs__native" @change="toggle(key)" />
          <span class="ms-certs__check" :class="{ 'ms-certs__check--on': isHeld(modelValue[key]) }">
            <svg v-if="isHeld(modelValue[key])" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ms-certs__label">{{ labels[key as DgacKey] }}</span>
        </label>
        <div v-if="richMode && isHeld(modelValue[key])" class="ms-certs__meta">
          <template v-if="withCountry">
            <label class="ms-certs__meta-label">{{ countryLabel }}</label>
            <select class="ms-certs__select" :value="countryOf(modelValue[key]) ?? defaultCountry ?? ''" @change="setCountry(key, $event)">
              <option value="">—</option>
              <option v-for="c in countryOptions" :key="c.value" :value="c.value">{{ c.label }}</option>
            </select>
          </template>
          <template v-if="withDates && dateLabels">
            <label class="ms-certs__meta-label">{{ dateLabels.obtained }}</label>
            <input type="date" class="ms-certs__date-input" :value="obtainedOf(modelValue[key]) ?? ''" @change="setDate(key, $event)" />
            <template v-if="expiry(key)">
              <span class="ms-certs__expiry">{{ expiresText(key) }}</span>
              <span class="ms-certs__status" :class="`ms-certs__status--${status(key)}`">{{ statusText(key) }}</span>
            </template>
          </template>
        </div>
      </div>
    </div>

    <template v-if="hasAdditional">
      <div class="ms-certs__divider" />
      <p v-if="additionalTitle" class="ms-certs__title">{{ additionalTitle }}</p>
      <div class="ms-certs__grid">
        <div v-for="key in ADDITIONAL_KEYS" v-show="additionalLabels![key] !== undefined" :key="key" class="ms-certs__row">
          <label class="ms-certs__item">
            <input type="checkbox" :checked="isHeld(modelValue[key])" class="ms-certs__native" @change="toggle(key)" />
            <span class="ms-certs__check" :class="{ 'ms-certs__check--on': isHeld(modelValue[key]) }">
              <svg v-if="isHeld(modelValue[key])" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="ms-certs__label">{{ additionalLabels![key] }}</span>
          </label>
          <div v-if="richMode && isHeld(modelValue[key])" class="ms-certs__meta">
            <template v-if="withCountry">
              <label class="ms-certs__meta-label">{{ countryLabel }}</label>
              <select class="ms-certs__select" :value="countryOf(modelValue[key]) ?? defaultCountry ?? ''" @change="setCountry(key, $event)">
                <option value="">—</option>
                <option v-for="c in countryOptions" :key="c.value" :value="c.value">{{ c.label }}</option>
              </select>
            </template>
            <template v-if="withDates && dateLabels">
              <label class="ms-certs__meta-label">{{ dateLabels.obtained }}</label>
              <input type="date" class="ms-certs__date-input" :value="obtainedOf(modelValue[key]) ?? ''" @change="setDate(key, $event)" />
              <template v-if="expiry(key)">
                <span class="ms-certs__expiry">{{ expiresText(key) }}</span>
                <span class="ms-certs__status" :class="`ms-certs__status--${status(key)}`">{{ statusText(key) }}</span>
              </template>
            </template>
          </div>
        </div>
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
  color: var(--ms-color-text-sub);
  margin-bottom: 12px;
}

.ms-certs__grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Cert and its date/country sit on one line, wrapping on narrow screens. */
.ms-certs__row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
}

.ms-certs__divider {
  margin: 16px 0;
  border-top: 1px solid var(--ms-color-border);
  opacity: 0.4;
}

.ms-certs__item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  min-width: 220px;
}

.ms-certs__native { display: none; }

.ms-certs__check {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 1.5px solid var(--ms-color-border);
  border-radius: 4px;
  background: var(--ms-color-input-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--ms-transition), border-color var(--ms-transition);
}
.ms-certs__check--on {
  background: var(--ms-color-sky);
  border-color: var(--ms-color-sky);
  color: #fff;
}
.ms-certs__item:hover .ms-certs__check:not(.ms-certs__check--on) {
  border-color: var(--ms-color-sky);
}

.ms-certs__label {
  font-size: 13px;
  color: var(--ms-color-text);
  line-height: 1.4;
}

.ms-certs__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.ms-certs__meta-label {
  font-size: 12px;
  color: var(--ms-color-text-sub);
  white-space: nowrap;
}
.ms-certs__date-input,
.ms-certs__select {
  font-size: 13px;
  padding: 5px 8px;
  border: 1px solid var(--ms-color-border);
  border-radius: var(--ms-radius);
  background: var(--ms-color-input-bg);
  color: var(--ms-color-input-text, var(--ms-color-text));
}
.ms-certs__expiry {
  font-size: 12px;
  color: var(--ms-color-text-sub);
  white-space: nowrap;
}
.ms-certs__status {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.ms-certs__status--valid   { color: #16a34a; }
.ms-certs__status--soon    { color: #eab308; }
.ms-certs__status--expired { color: #ef4444; }

.ms-certs__hint {
  margin-top: 10px;
  font-size: 11px;
  color: var(--ms-color-text-sub);
  opacity: 0.7;
}
</style>
