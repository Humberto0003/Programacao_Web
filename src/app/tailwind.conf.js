import type { Config } from 'tailwindcss'
import theming from 'tailwindcss-theming'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  plugins: [theming()],
}

export default config
