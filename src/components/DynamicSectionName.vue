<template>
  <div class="dynamic-name">
    <LinksComponents />
    <span class="position-text">{{ currentSection }}</span>
    <AddRequestButton />
  </div>
</template>

<script setup lang="ts">
import AddRequestButton from '@/components/AddRequestButton.vue'
import LinksComponents from '@/components/design/LinksComponents.vue'
import { sectionsPrettify } from '@/logics'
import { ref } from 'vue'

const currentSection = ref('О нас')

addEventListener('scroll', () => {
  const visibleSections = getVisibleSection()

  currentSection.value =
    sectionsPrettify[visibleSections[0]?.className] ||
    visibleSections[0]?.id ||
    currentSection.value
})

function getVisibleSection() {
  const sections = document.querySelectorAll('section')

  if (sections.length === 1) return sections

  const visibleSections = Array.from(sections).filter((section) => {
    const rect = section.getBoundingClientRect()
    return rect.top >= -200 && rect.bottom <= window.innerHeight + 100
  })

  return visibleSections
}
</script>

<style lang="scss" scoped>
.dynamic-name {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  text-align: center;
  z-index: 1000;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .position-text {
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    padding: 0.1rem;
  }
}

@media screen and (max-width: 768px) {
  .dynamic-name {
    flex-direction: column-reverse;
    height: 100px;
  }
}
</style>
