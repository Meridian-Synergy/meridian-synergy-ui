<script setup lang="ts">
export interface MsSpecItem {
  label: string
  value: string
  icon:  string  // inner SVG content (paths, circles, rects — viewBox 0 0 24 24)
}

withDefaults(defineProps<{
  items:  MsSpecItem[]
  label?: string
}>(), {
  label: '',
})
</script>

<template>
  <section class="ms-spec-grid">
    <div class="ms-spec-grid__container">
      <p v-if="label" class="ms-spec-grid__label">{{ label }}</p>
      <div class="ms-spec-grid__grid">
        <div v-for="item in items" :key="item.label" class="ms-spec-grid__card">
          <svg
            class="ms-spec-grid__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            v-html="item.icon"
          />
          <span class="ms-spec-grid__key">{{ item.label }}</span>
          <span class="ms-spec-grid__val">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-spec-grid {
  background: var(--ms-color-navy);
  padding: 40px 0;
}

.ms-spec-grid__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.ms-spec-grid__label {
  font-family: var(--ms-font-condensed);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 20px;
}

.ms-spec-grid__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (min-width: 768px) {
  .ms-spec-grid__grid { grid-template-columns: repeat(4, 1fr); }
}

.ms-spec-grid__card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--ms-radius-md);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ms-spec-grid__icon {
  width: 20px;
  height: 20px;
  color: var(--ms-color-sky);
  flex-shrink: 0;
  stroke: currentColor;
  stroke-width: 1.75;
}

.ms-spec-grid__key {
  font-family: var(--ms-font-condensed);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}

.ms-spec-grid__val {
  font-size: 14px;
  font-weight: 600;
  color: var(--ms-color-white);
  line-height: 1.45;
}
</style>
