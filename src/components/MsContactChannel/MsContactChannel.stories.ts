import type { Meta, StoryObj } from '@storybook/vue3'
import MsContactChannel from './MsContactChannel.vue'

const meta: Meta<typeof MsContactChannel> = {
  title: 'Components/MsContactChannel',
  component: MsContactChannel,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['whatsapp', 'email'] },
  },
}
export default meta

type Story = StoryObj<typeof MsContactChannel>

export const WhatsApp: Story = {
  args: {
    type:  'whatsapp',
    href:  'https://wa.me/33766974874',
    label: 'WhatsApp',
    value: '07 66 97 48 74',
    desc:  'Réponse rapide, disponible en journée.',
    cta:   'Envoyer un message',
  },
}

export const Email: Story = {
  args: {
    type:  'email',
    href:  'mailto:contact@meridian-synergy.com',
    label: 'Email',
    value: 'contact@meridian-synergy.com',
    desc:  'Réponse sous 24h.',
    cta:   'Envoyer un email',
  },
}
