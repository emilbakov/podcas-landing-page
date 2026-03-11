// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: {
    transpile: ['vue3-carousel'],
  },
    compatibilityDate: '2024-11-01',

    modules: [
      '@nuxtjs/color-mode',
      '@nuxt/image',
      'vue3-carousel-nuxt',
    ],
    css:[
        '~/assets/css/app.css'
    ],
   
    postcss:{
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
})