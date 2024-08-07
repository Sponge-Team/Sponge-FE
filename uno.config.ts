import { defineConfig, presetUno } from 'unocss'


export default defineConfig({
  rules: [],
  theme: {},
  presets: [presetUno()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // Include Storybook stories
        'src/**/*.stories.{js,ts}',
        'stories/**/*',
      ],
    },
  },
})