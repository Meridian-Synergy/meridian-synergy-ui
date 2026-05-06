import type { Meta, StoryObj } from '@storybook/vue3'
import MsCtaBanner from './MsCtaBanner.vue'

const meta: Meta<typeof MsCtaBanner> = {
  title: 'Components/MsCtaBanner',
  component: MsCtaBanner,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof MsCtaBanner>

export const Default: Story = {
  args: {
    title: 'Demandez un devis gratuit',
    desc:  'Réponse sous 24h. Déplacement dans toute la Bourgogne et la Nièvre.',
    label: 'Nous contacter',
    href:  '/contact',
  },
}
