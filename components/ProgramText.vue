<script setup>
const props = defineProps({ program: { type: Object, required: true } })

// Explicit structure for every program; all wording comes from the original body.
const layouts = {
  1: { intro:[0,1], sections:[
    { heading:2, features:[3,4,5,6,7] },
    { heading:8, paragraphs:[9,10] },
    { heading:11, paragraphs:[12,13,14] },
    { heading:15, paragraphs:[16] }
  ], closing:{heading:17,paragraphs:[18]} },
  2: { intro:[0,1,2,3], sections:[
    { heading:4, experiences:[
      { heading:5, strapline:6, paragraphs:[7,8] },
      { heading:9, strapline:10, paragraphs:[11,12] },
      { heading:13, strapline:14, paragraphs:[15,16] }
    ] },
    { heading:17, bullets:[18,19,20,21,22,23], paragraphs:[24] }
  ], closing:{heading:25,paragraphs:[26]} },
  4: { intro:[0,1], sections:[
    { heading:2, features:[3,4,5,6], paragraphs:[7,8] }
  ], closing:{heading:9,paragraphs:[10]} },
  3: { intro:[0,1,2], sections:[
    { heading:3, features:[4,5,6,7,8] },
    { heading:9, paragraphs:[10,11] }
  ], closing:{heading:12,paragraphs:[13]} },
  6: { intro:[0,1,2,3], sections:[
    { heading:4, features:[5,6,7,8,9] },
    { heading:10, paragraphs:[11], subheading:12, after:[13] },
    { heading:14, paragraphs:[15] }
  ], closing:{heading:16,paragraphs:[]} },
  5: { intro:[0,1,2,3], sections:[
    { heading:4, before:[5], features:[6,7,8,9], subheading:10, after:[11,12] },
    { heading:13, paragraphs:[14,15,16] }
  ], closing:{heading:17,paragraphs:[]} }
}
const layout = computed(() => layouts[props.program.id])
const text = index => props.program.body[index]
function feature(index) {
  const original = text(index)
  // Prefer the em dash separating a full activity title from its description.
  const separator = original.includes(' — ') ? ' — ' : ' – '
  const position = original.indexOf(separator)
  return { title: original.slice(0,position), description: original.slice(position+separator.length) }
}
</script>

<template>
  <article class="program-text" aria-label="За програмата">
    <div class="text-intro">
      <p v-for="(index,i) in layout.intro" :key="index" :class="{'intro-lead':i===0}">{{ text(index) }}</p>
    </div>

    <section v-for="(section,position) in layout.sections" :key="section.heading"
      class="copy-section" :aria-labelledby="'copy-section-'+section.heading">
      <div class="copy-heading">
        <span class="copy-number" aria-hidden="true">{{ String(position+1).padStart(2,'0') }}</span>
        <h2 :id="'copy-section-'+section.heading">{{ text(section.heading) }}</h2>
      </div>
      <p v-for="index in section.before" :key="index">{{ text(index) }}</p>

      <ul v-if="section.features" class="activity-list">
        <li v-for="index in section.features" :key="index" class="activity-item">
          <span class="activity-mark" aria-hidden="true">✳</span>
          <div><h3>{{ feature(index).title }}</h3><p>{{ feature(index).description }}</p></div>
        </li>
      </ul>

      <div v-if="section.experiences" class="experience-list">
        <section v-for="(experience,i) in section.experiences" :key="experience.heading" class="experience-item">
          <span class="experience-label" aria-hidden="true">0{{ i+1 }}</span>
          <h3>{{ text(experience.heading) }}</h3>
          <p class="experience-strapline">{{ text(experience.strapline) }}</p>
          <p v-for="index in experience.paragraphs" :key="index">{{ text(index) }}</p>
        </section>
      </div>

      <ul v-if="section.bullets" class="benefit-list"><li v-for="index in section.bullets" :key="index">{{ text(index) }}</li></ul>
      <p v-for="index in section.paragraphs" :key="index">{{ text(index) }}</p>
      <h3 v-if="section.subheading!==undefined" class="copy-subheading">{{ text(section.subheading) }}</h3>
      <p v-for="index in section.after" :key="index">{{ text(index) }}</p>
    </section>

    <section class="copy-closing" :aria-labelledby="'copy-closing-'+program.id">
      <h2 :id="'copy-closing-'+program.id">{{ text(layout.closing.heading) }}</h2>
      <p v-for="index in layout.closing.paragraphs" :key="index">{{ text(index) }}</p>
    </section>
  </article>
</template>

<style scoped>
.program-text{--copy-pine:#1c3b2c;--copy-leaf:#426d50;--copy-gold:#e9a743;--copy-muted:#586454;max-width:780px;min-width:0}
.program-text p{font-size:16px;line-height:1.9;color:var(--copy-muted);margin:0 0 18px;white-space:normal;overflow-wrap:anywhere}
.text-intro{padding:0 0 34px;border-bottom:1px solid #d7ddce;margin-bottom:42px}
.text-intro .intro-lead{font-size:23px;line-height:1.55;color:var(--copy-pine);font-weight:500;letter-spacing:-.02em;margin-bottom:22px}
.text-intro p:last-child{margin-bottom:0}
.copy-section{margin:0 0 44px}
.copy-heading{display:flex;align-items:flex-start;gap:16px;margin-bottom:24px}
.copy-number{flex-shrink:0;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:#e8ecde;color:var(--copy-leaf);font-size:11px;font-weight:800;letter-spacing:.03em;margin-top:2px}
.program-text .copy-heading h2{font:700 31px/1.2 Georgia,'Times New Roman',serif;color:var(--copy-pine);letter-spacing:-.025em;margin:0;overflow-wrap:anywhere}
.activity-list{list-style:none;margin:0 0 24px;padding:0;display:grid;gap:12px}
.activity-item{display:flex;gap:16px;padding:24px;background:#fffaf1;border:1px solid #e0d8c6;border-radius:15px}
.activity-mark{font-size:24px;line-height:1.3;color:var(--copy-leaf);flex-shrink:0}
.program-text h3{font-size:18px;line-height:1.45;letter-spacing:-.02em;color:var(--copy-pine);font-weight:700;margin:0 0 8px}
.activity-item p{font-size:15px;line-height:1.85;margin:0}
.experience-list{display:grid;gap:18px;margin-bottom:24px}
.experience-item{position:relative;padding:28px;border:1px solid #e0d8c6;border-radius:17px;background:#fffaf1;overflow:hidden}
.experience-label{font:40px/1 Georgia,serif;color:#b4c3a9;position:absolute;right:24px;top:24px;pointer-events:none}
.experience-item h3{font-size:14px;letter-spacing:.1em;padding-right:55px;margin-bottom:16px}
.experience-item .experience-strapline{font:700 25px/1.25 Georgia,serif;color:var(--copy-pine);letter-spacing:-.02em;max-width:90%;margin-bottom:18px}
.experience-item p:last-child{margin-bottom:0}
.benefit-list{list-style:none;margin:0 0 28px;padding:22px 26px;border-radius:15px;background:#e8ecde;display:grid;gap:14px}
.benefit-list li{position:relative;padding-left:26px;font-size:15px;line-height:1.7;color:var(--copy-pine)}
.benefit-list li:before{content:'✓';position:absolute;left:0;font-weight:800;color:var(--copy-leaf)}
.program-text .copy-subheading{font:700 24px/1.3 Georgia,serif;color:var(--copy-pine);margin:27px 0 14px}
.copy-closing{padding:32px;background:var(--copy-pine);border-radius:18px;margin-top:12px}
.program-text .copy-closing h2{font:700 30px/1.25 Georgia,serif;color:#f5efe3;letter-spacing:-.02em;margin:0}
.copy-closing h2:before{content:'';display:block;width:38px;height:3px;border-radius:3px;background:var(--copy-gold);margin-bottom:20px}
.copy-closing p{color:#dbe3d1;font-size:16px;line-height:1.8;margin:17px 0 0}
@media(max-width:700px){.text-intro{padding-bottom:28px;margin-bottom:32px}.text-intro .intro-lead{font-size:21px;line-height:1.6}.program-text p{font-size:15px;line-height:1.85}.copy-section{margin-bottom:34px}.copy-heading{gap:12px;margin-bottom:21px}.copy-number{width:32px;height:32px;font-size:10px}.program-text .copy-heading h2{font-size:27px}.activity-item{padding:20px 17px;gap:12px}.activity-mark{font-size:20px}.program-text h3{font-size:17px}.activity-item p{font-size:14px}.experience-item{padding:23px 20px}.experience-label{right:20px;top:20px;font-size:34px}.experience-item h3{font-size:12px}.experience-item .experience-strapline{font-size:23px;max-width:100%}.benefit-list{padding:20px}.benefit-list li{font-size:14px}.program-text .copy-subheading{font-size:22px}.copy-closing{padding:26px 22px}.program-text .copy-closing h2{font-size:26px}.copy-closing p{font-size:15px}}
</style>
