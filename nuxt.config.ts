// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Welcome to Laravel UK',
          meta: [
            { name: 'description', content: 'Welcome to Laravel UK a community of Artisans mostly based in the UK' }
          ],
        }
      },
})
