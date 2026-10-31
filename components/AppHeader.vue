<script setup>
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>
<template>
 <a class="skip-link" href="#main">Към съдържанието</a>
 <header class="site-header"><NuxtLink to="/" class="brand" aria-label="Горски пътеки — начало"><img class="brand-logo" src="/images/logo-gorski.png" width="261" height="112" alt="Горски"><span class="brand-descriptor">ПЪТЕКИ СРЕД ПРИРОДАТА</span></NuxtLink>
 <button class="menu-toggle" @click="open=!open" :aria-expanded="open" aria-controls="main-nav">{{ open ? 'Затвори ×' : 'Меню ☰' }}</button>
 <nav id="main-nav" :class="{open}"><NuxtLink to="/#programs" @click="open=false">Пътеките</NuxtLink><NuxtLink to="/#about" @click="open=false">Нашият водач</NuxtLink><NuxtLink to="/#moments" @click="open=false">Моменти от гората</NuxtLink><NuxtLink class="nav-contact" to="/#contact" @click="open=false">Да се срещнем <span>↗</span></NuxtLink></nav></header>
</template>