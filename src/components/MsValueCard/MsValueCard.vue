<script setup lang="ts">
defineProps<{
  title: string
  desc:  string
  icon:  string  // inner SVG content (viewBox 0 0 24 24)
}>()
</script>

<template>
  <div class="ms-value-card">
    <div class="ms-value-card__icon" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" v-html="icon" />
    </div>
    <h3 class="ms-value-card__title">{{ title }}</h3>
    <p class="ms-value-card__desc">{{ desc }}</p>
  </div>
</template>

<style scoped>
.ms-value-card {
  background: var(--ms-color-white);
  border: 1px solid var(--ms-color-border);
  border-radius: var(--ms-radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ms-value-card__icon {
  width: 40px;
  height: 40px;
  background: rgba(0, 170, 239, 0.08);
  border-radius: var(--ms-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ms-color-sky);
}

.ms-value-card__title {
  font-family: var(--ms-font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ms-color-navy);
  margin: 0;
}

.ms-value-card__desc {
  font-size: 0.875rem;
  color: var(--ms-color-muted);
  line-height: 1.65;
  margin: 0;
}
</style>
