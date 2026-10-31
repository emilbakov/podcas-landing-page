<script setup>
const props = defineProps({
  photos: { type: Array, default: () => [] },
  title: { type: String, required: true }
})
const viewer = ref(null)
const active = ref(0)
const current = computed(() => props.photos[active.value])
function show(index) {
  active.value = index
  viewer.value?.showModal()
}
function close() { viewer.value?.close() }
function move(direction) {
  active.value = (active.value + direction + props.photos.length) % props.photos.length
}
</script>

<template>
  <section v-if="photos.length" class="program-gallery section" aria-labelledby="gallery-title">
    <div class="gallery-heading">
      <div>
        <p class="eyebrow">МАЛКИ ОТКРИТИЯ. ГОЛЕМИ СПОМЕНИ.</p>
        <h2 id="gallery-title">Моменти <em>от тази пътека.</em></h2>
      </div>
      <p>Изберете снимка, за да я разгледате отблизо.</p>
    </div>
    <div class="gallery-grid">
      <button v-for="(photo,index) in photos" :key="photo.src" class="gallery-thumb"
        :aria-label="'Отвори снимка '+(index+1)+' от '+photos.length+': '+title" @click="show(index)">
        <img :src="photo.src" :alt="photo.alt" loading="lazy" decoding="async">
        <span aria-hidden="true">↗</span>
      </button>
    </div>
    <dialog ref="viewer" class="photo-viewer" aria-label="Фотогалерия"
      @click="($event.target===viewer)&&close()"
      @keydown.left.prevent="move(-1)" @keydown.right.prevent="move(1)">
      <div class="viewer-bar">
        <span>{{ title }}</span>
        <button autofocus @click="close" aria-label="Затвори галерията">Затвори ×</button>
      </div>
      <figure v-if="current" class="viewer-figure">
        <img :src="current.src" :alt="current.alt">
        <figcaption aria-live="polite">{{ active+1 }} / {{ photos.length }}</figcaption>
      </figure>
      <div class="viewer-nav">
        <button @click="move(-1)" :disabled="photos.length<2" aria-label="Предишна снимка">← Предишна</button>
        <button @click="move(1)" :disabled="photos.length<2" aria-label="Следваща снимка">Следваща →</button>
      </div>
    </dialog>
  </section>
</template>
