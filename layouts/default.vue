<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div :class="{ 'home-page': route.path === '/' }">
    <AppHeader/>
    <slot/>
    <AppFooter/>
  </div>  
</template>
