<template>
    <div class="flex flex-col items-end w-full lg:ml-80">
        <h2 class="flex text-xl font-bold text-gray-700 dark:text-white">
            {{ title }}
        </h2>
        <ul class="pt-6 space-y-3 text-right">
            <li v-for="link in links" :key="link.text">
                <NuxtLink :to="link.href" class="transition text-gray-600 dark:text-gray-300 hover:!text-primary">
                    {{ link.text }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

const { title, links } = defineProps<{
    title: string,
    links: { text: string, href: string }[]
}>()
</script>