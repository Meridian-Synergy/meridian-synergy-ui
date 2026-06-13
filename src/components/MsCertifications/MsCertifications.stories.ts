import type { Meta, StoryObj } from '@storybook/vue3'
import MsCertifications from './MsCertifications.vue'

const labels = {
  a1_a3:   'A1/A3 — Open subcategory',
  a2_cofc: 'A2 CofC — Certificate of competency',
  cats:    'CATS — Certified category',
  sts_01:  'STS-01 — Standard scenario VLOS',
  sts_02:  'STS-02 — Standard scenario BVLOS',
}

const additionalLabels = {
  certibiocide: 'Certibiocide',
  certiphyto:   'Certiphyto',
}

const dateLabels = {
  obtained:  'Obtained on',
  expiresOn: 'Expires on {date}',
  valid:     'Valid',
  soon:      'Expires soon',
  expired:   'Expired',
}

const meta: Meta<typeof MsCertifications> = {
  title: 'Components/MsCertifications',
  component: MsCertifications,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof MsCertifications>

export const Default: Story = {
  args: {
    title: 'Certifications',
    labels,
    additionalTitle: 'Additional certifications',
    additionalLabels,
    modelValue: { a1_a3: true, a2_cofc: false, certiphyto: true },
  },
}

export const WithDates: Story = {
  args: {
    title: 'Certifications',
    labels,
    withDates: true,
    validityYears: 5,
    dateLabels,
    modelValue: {
      a1_a3:   { held: true, obtained: '2022-03-15' },
      a2_cofc: { held: true, obtained: '2021-01-10' }, // expired
      cats:    { held: true, obtained: null },          // held, no date yet
      sts_01:  false,
    },
  },
}

export const Dark: Story = {
  args: { ...WithDates.args },
  parameters: { backgrounds: { default: 'dark' } },
}
