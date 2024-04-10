<template>
  <div class="dynamic-name">
    <span class="position-text">{{ currentSection }}</span>
  </div>
</template>

<script setup lang="ts">
import { sectionsPrettify } from '@/logics'
import { ref } from 'vue'

const currentSection = ref('')

addEventListener('scroll', () => {
  const visibleSections = getVisibleSection()
  currentSection.value =
    sectionsPrettify[visibleSections[0]?.className] || currentSection.value || 'О нас'
})

function getVisibleSection() {
  const sections = document.querySelectorAll('section')
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
  width: 500px;
  height: 50px;
  text-align: center;
  font-size: 2rem;
  z-index: 1000;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
