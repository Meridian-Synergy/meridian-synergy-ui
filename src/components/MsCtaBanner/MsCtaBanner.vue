<script setup lang="ts">
import MsButton from '../MsButton/MsButton.vue'

defineProps<{
  title: string
  desc:  string
  label: string
  href:  string
}>()
</script>

<template>
  <section class="ms-cta-banner">
    <div class="ms-cta-banner__inner">
      <div class="ms-cta-banner__text">
        <h2 class="ms-cta-banner__title">{{ title }}</h2>
        <p class="ms-cta-banner__desc">{{ desc }}</p>
      </div>
      <a :href="href" class="ms-cta-banner__action">
        <MsButton :label="label" variant="cta" size="lg" tag="span" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.ms-cta-banner {
  background: var(--ms-color-navy);
  padding: 64px 0;
}

.ms-cta-banner__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.ms-cta-banner__text {
  flex: 1;
  min-width: 260px;
}

.ms-cta-banner__title {
  font-family: var(--ms-font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--ms-color-white);
  letter-spacing: -0.02em;
  margin: 0 0 10px;
}

.ms-cta-banner__desc {
  font-size: 1rem;
  color: var(--ms-color-muted);
  margin: 0;
  opacity: 0.8;
}

.ms-cta-banner__action {
  text-decoration: none;
  flex-shrink: 0;
}
</style>
