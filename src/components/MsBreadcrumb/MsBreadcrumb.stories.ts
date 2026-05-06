import type { Meta, StoryObj } from '@storybook/vue3'
import MsBreadcrumb from './MsBreadcrumb.vue'

const meta: Meta<typeof MsBreadcrumb> = {
  title: 'Components/MsBreadcrumb',
  component: MsBreadcrumb,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof MsBreadcrumb>

export const TwoLevels: Story = {
  args: {
    crumbs: [
      { label: 'Accueil', href: '/' },
      { label: 'Services' },
    ],
  },
}

export const ThreeLevels: Story = {
  args: {
    crumbs: [
      { label: 'Accueil',  href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Audit thermique' },
    ],
  },
}
