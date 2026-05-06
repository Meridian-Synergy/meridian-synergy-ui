<script setup lang="ts">
export interface BreadcrumbItem {
  label: string
  href?: string
}

defineProps<{
  crumbs: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="ms-breadcrumb" aria-label="Fil d'Ariane">
    <template v-for="(crumb, i) in crumbs" :key="i">
      <span v-if="i > 0" class="ms-bc-sep" aria-hidden="true">›</span>
      <a
        v-if="crumb.href"
        :href="crumb.href"
        class="ms-bc-link"
      >{{ crumb.label }}</a>
      <span
        v-else
        class="ms-bc-current"
        aria-current="page"
      >{{ crumb.label }}</span>
    </template>
  </nav>
</template>

<style scoped>
.ms-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.ms-bc-link {
  font-size: 13px;
  color: var(--ms-color-muted);
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--ms-transition-fast);
}
.ms-bc-link:hover { color: var(--ms-color-navy); }

.ms-bc-sep {
  color: var(--ms-color-border);
  font-size: 14px;
  line-height: 1;
}

.ms-bc-current {
  font-size: 13px;
  color: var(--ms-color-navy);
  font-weight: 500;
  white-space: nowrap;
}
</style>
