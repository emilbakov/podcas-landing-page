<script setup>
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>
<template>
 <a class="skip-link" href="#main">Към съдържанието</a>
 <header class="site-header"><NuxtLink to="/" class="brand" aria-label="Горски пътеки — начало"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 3 10 23h8L7 36h14v9h6v-9h14L30 23h8Z" fill="currentColor"/><path d="m24 17-4 26" stroke="#f5f2e9" stroke-width="2"/></svg><span>ГОРСКИ <b>ПЪТЕКИ</b><small>ПРЕЖИВЯВАНИЯ СРЕД ПРИРОДАТА</small></span></NuxtLink>
 <button class="menu-toggle" @click="open=!open" :aria-expanded="open" aria-controls="main-nav">{{ open ? 'Затвори ×' : 'Меню ☰' }}</button>
 <nav id="main-nav" :class="{open}"><NuxtLink to="/#programs" @click="open=false">Пътеките</NuxtLink><NuxtLink to="/#about" @click="open=false">Нашият водач</NuxtLink><NuxtLink to="/#moments" @click="open=false">Моменти от гората</NuxtLink><NuxtLink class="nav-contact" to="/#contact" @click="open=false">Да се срещнем <span>↗</span></NuxtLink></nav></header>
</template>