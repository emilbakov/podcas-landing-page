export default defineNuxtConfig({
 compatibilityDate: '2024-11-01',
 devtools: { enabled: false },
 css: ['~/assets/css/app.css'],
 app: { head: { htmlAttrs: { lang: 'bg' }, meta: [{name:'theme-color',content:'#243e31'}], link: [{rel:'icon',type:'image/png',href:'/images/logo-gorski.png'}] } },
})
