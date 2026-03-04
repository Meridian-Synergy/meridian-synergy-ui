import '../src/tokens/tokens.css'

// Import Google Fonts (Storybook only)
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=DM+Sans:wght@400;500&family=Space+Mono&display=swap'
document.head.appendChild(link)

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FFFFFF' },
      { name: 'dark',  value: '#10192C' },
      { name: 'navy',  value: '#1B2B56' },
    ],
  },
}