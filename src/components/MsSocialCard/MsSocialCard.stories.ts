import type { Meta, StoryObj } from '@storybook/vue3'
import MsSocialCard from './MsSocialCard.vue'

const meta: Meta<typeof MsSocialCard> = {
  title: 'Components/MsSocialCard',
  component: MsSocialCard,
  tags: ['autodocs'],
  argTypes: {
    network: { control: 'select', options: ['instagram', 'linkedin', 'tiktok', 'youtube', 'whatsapp', 'email'] },
  },
}
export default meta

type Story = StoryObj<typeof MsSocialCard>

export const Instagram: Story = {
  args: {
    network: 'instagram',
    href:    'https://www.instagram.com/meridian.synergy',
    label:   'Instagram',
    handle:  '@meridian.synergy',
  },
}

export const LinkedIn: Story = {
  args: {
    network: 'linkedin',
    href:    'https://www.linkedin.com/company/meridian-synergy/',
    label:   'LinkedIn',
    handle:  'meridian-synergy',
  },
}

export const TikTok: Story = {
  args: {
    network: 'tiktok',
    href:    'https://www.tiktok.com/@meridian.synergy',
    label:   'TikTok',
    handle:  '@meridian.synergy',
  },
}

export const YouTube: Story = {
  args: {
    network: 'youtube',
    href:    'https://www.youtube.com/@meridian.synergy',
    label:   'YouTube',
    handle:  '@meridian.synergy',
  },
}
