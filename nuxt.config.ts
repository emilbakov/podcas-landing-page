// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2024-11-01',

    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/image',
    ],
    css:[
        '~/assets/css/app.css'
    ],
    colorMode:{
        preference: 'system', // default value of $colorMode.preference
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    postcss:{
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
})
