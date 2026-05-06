<script setup lang="ts">
import MsBadge from '../MsBadge/MsBadge.vue'
import MsBreadcrumb from '../MsBreadcrumb/MsBreadcrumb.vue'
import type { BreadcrumbItem } from '../MsBreadcrumb/MsBreadcrumb.vue'

withDefaults(defineProps<{
  title:         string
  desc?:         string
  badge?:        string
  badgeVariant?: 'sky' | 'navy' | 'orange'
  crumbs?:       BreadcrumbItem[]
  size?:         'lg' | 'md'
}>(), {
  badgeVariant: 'sky',
  size:         'lg',
})
</script>

<template>
  <section class="ms-page-hero">
    <div class="ms-page-hero__container">
      <MsBreadcrumb v-if="crumbs?.length" :crumbs="crumbs" />
      <MsBadge v-if="badge" :label="badge" :variant="badgeVariant" />
      <h1 :class="['ms-page-hero__title', `ms-page-hero__title--${size}`]">{{ title }}</h1>
      <p v-if="desc" class="ms-page-hero__desc">{{ desc }}</p>
    </div>
  </section>
</template>

<style scoped>
.ms-page-hero {
  background: var(--ms-color-bg);
  padding: 56px 0;
  border-bottom: 1px solid var(--ms-color-border);
}

.ms-page-hero__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.ms-page-hero__title {
  font-family: var(--ms-font-display);
  font-weight: 800;
  color: var(--ms-color-navy);
  letter-spacing: -0.03em;
  margin: 16px 0 0;
}
.ms-page-hero__title--lg { font-size: clamp(2rem,   4vw,   3rem); }
.ms-page-hero__title--md { font-size: clamp(1.75rem, 3.5vw, 2.75rem); }

.ms-page-hero__desc {
  font-size: 1.0625rem;
  color: var(--ms-color-muted);
  max-width: 560px;
  line-height: 1.7;
  margin: 16px 0 0;
}
</style>
