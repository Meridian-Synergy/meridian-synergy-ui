<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string
  label?:      string
  placeholder?: string
  hint?:       string
  error?:      string
  disabled?:   boolean
  type?:       string
}>(), {
  type:     'text',
  disabled: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div class="ms-field">
    <label v-if="label" class="ms-field__label">{{ label }}</label>
    <input
      :class="['ms-input', { 'ms-input--error': error }]"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" class="ms-field__error">{{ error }}</span>
    <span v-else-if="hint" class="ms-field__hint">{{ hint }}</span>
  </div>
</template>

<style scoped>
.ms-field { display: flex; flex-direction: column; gap: 5px; }

.ms-field__label {
  font-family:  var(--ms-font-body);
  font-size:    12px;
  font-weight:  600;
  color:        var(--ms-color-navy);
}

.ms-field__hint  { font-size: 11px; color: var(--ms-color-muted); }
.ms-field__error { font-size: 11px; color: var(--ms-color-error); }

.ms-input {
  font-family:   var(--ms-font-body);
  font-size:     14px;
  font-weight:   400;
  color:         var(--ms-color-navy);
  background:    var(--ms-color-white);
  border:        1.5px solid var(--ms-color-border);
  border-radius: var(--ms-radius-md);
  padding:       var(--ms-space-sm) var(--ms-space-md);
  outline:       none;
  width:         100%;
  transition:    border-color var(--ms-transition-base), box-shadow var(--ms-transition-base);
}
.ms-input::placeholder { color: var(--ms-color-muted); }
.ms-input:focus {
  border-color: var(--ms-color-sky);
  box-shadow:   0 0 0 3px rgba(0, 170, 239, 0.15);
}
.ms-input--error {
  border-color: var(--ms-color-error);
  box-shadow:   0 0 0 3px rgba(239, 68, 68, 0.12);
}
.ms-input:disabled {
  background: var(--ms-color-bg);
  color:      var(--ms-color-muted);
  cursor:     not-allowed;
}
</style>
