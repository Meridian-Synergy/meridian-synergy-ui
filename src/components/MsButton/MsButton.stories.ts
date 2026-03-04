import type { Meta, StoryObj } from '@storybook/vue3'
import MsButton from './MsButton.vue'

const meta: Meta<typeof MsButton> = {
  title: 'Components/MsButton',
  component: MsButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'cta'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}
export default meta

type Story = StoryObj<typeof MsButton>

export const Primary: Story   = { args: { label: 'Démarrer', variant: 'primary' } }
export const Secondary: Story = { args: { label: 'En savoir plus', variant: 'secondary' } }
export const CTA: Story       = { args: { label: 'Créer un compte', variant: 'cta' } }
export const Disabled: Story  = { args: { label: 'Indisponible', disabled: true } }