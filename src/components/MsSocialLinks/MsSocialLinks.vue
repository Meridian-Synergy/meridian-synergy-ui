<script setup lang="ts">
export type SocialNetwork = 'instagram' | 'linkedin' | 'tiktok' | 'youtube' | 'whatsapp' | 'email'

export interface SocialLinkItem {
  network: SocialNetwork
  href: string
  label?: string
}

withDefaults(defineProps<{
  links:    SocialLinkItem[]
  variant?: 'dark' | 'light'
  size?:    'sm' | 'md'
}>(), {
  variant: 'dark',
  size:    'md',
})
</script>

<template>
  <div
    :class="['ms-social-links', `ms-social-links--${variant}`, `ms-social-links--${size}`]"
    role="navigation"
    aria-label="Réseaux sociaux"
  >
    <a
      v-for="item in links"
      :key="item.network"
      :href="item.href"
      :aria-label="item.label ?? item.network"
      class="ms-social-link"
      :target="item.network !== 'email' ? '_blank' : undefined"
      :rel="item.network !== 'email' ? 'noopener noreferrer' : undefined"
    >
      <!-- Instagram -->
      <svg v-if="item.network === 'instagram'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" stroke-width="1.75"/>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.75"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>

      <!-- LinkedIn -->
      <svg v-else-if="item.network === 'linkedin'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.75"/>
        <path d="M7 10v7M7 7.5v.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M11 10v7" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      </svg>

      <!-- TikTok -->
      <svg v-else-if="item.network === 'tiktok'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <!-- YouTube -->
      <svg v-else-if="item.network === 'youtube'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" stroke-width="1.75"/>
        <path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor"/>
      </svg>

      <!-- WhatsApp -->
      <svg v-else-if="item.network === 'whatsapp'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.78-.24-.39A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.58-.48-.5-.67-.51H7.5c-.17 0-.45.06-.69.3C6.57 8.1 6 8.7 6 9.93c0 1.23.91 2.42 1.04 2.59.13.17 1.8 2.74 4.36 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.07-.1-.27-.17-.57-.32z" fill="currentColor"/>
      </svg>

      <!-- Email -->
      <svg v-else-if="item.network === 'email'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.75"/>
        <path d="M2 8l10 7 10-7" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</template>

<style scoped>
.ms-social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ms-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--ms-radius-md);
  border: 1px solid;
  text-decoration: none;
  flex-shrink: 0;
  transition:
    color var(--ms-transition-fast),
    border-color var(--ms-transition-fast),
    background-color var(--ms-transition-fast);
}

.ms-social-link svg {
  display: block;
}

/* Sizes */
.ms-social-links--sm .ms-social-link { width: 32px; height: 32px; }
.ms-social-links--sm .ms-social-link svg { width: 15px; height: 15px; }
.ms-social-links--md .ms-social-link { width: 36px; height: 36px; }
.ms-social-links--md .ms-social-link svg { width: 18px; height: 18px; }

/* Dark variant — for use on navy/dark backgrounds */
.ms-social-links--dark .ms-social-link {
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.5);
}
.ms-social-links--dark .ms-social-link:hover {
  color: var(--ms-color-white);
  border-color: rgba(255, 255, 255, 0.35);
  background-color: rgba(255, 255, 255, 0.06);
}

/* Light variant — for use on white/light backgrounds */
.ms-social-links--light .ms-social-link {
  border-color: var(--ms-color-border);
  color: var(--ms-color-muted);
}
.ms-social-links--light .ms-social-link:hover {
  color: var(--ms-color-navy);
  border-color: var(--ms-color-navy);
  background-color: var(--ms-color-bg);
}
</style>
