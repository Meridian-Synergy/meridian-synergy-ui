import type { Meta, StoryObj } from '@storybook/vue3'
import MsContactBanner from './MsContactBanner.vue'

const meta: Meta<typeof MsContactBanner> = {
  title: 'Components/MsContactBanner',
  component: MsContactBanner,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof MsContactBanner>

export const Default: Story = {
  args: {
    title: 'Parlons de votre projet',
    desc:  'Réponse rapide, devis gratuit. Disponibles en Bourgogne et Nièvre.',
    actions: [
      { type: 'whatsapp', href: 'https://wa.me/33766974874', label: 'WhatsApp' },
      { type: 'email',    href: 'mailto:contact@meridian-synergy.com', label: 'Email' },
    ],
  },
}

export const EmailOnly: Story = {
  args: {
    title: 'Une question ?',
    desc:  'Contactez-nous par email, nous répondons sous 24h.',
    actions: [
      { type: 'email', href: 'mailto:contact@meridian-synergy.com', label: 'Envoyer un email' },
    ],
  },
}
