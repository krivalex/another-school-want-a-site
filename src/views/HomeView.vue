<template>
  <main>
    <EntrySection />
    <DividerComponent />
    <AboutSchool />
    <CourseList />
  </main>
</template>

<script setup lang="ts">
import CourseList from '@/sections/CourseList.vue'
import AboutSchool from '@/sections/AboutSchool.vue'
import EntrySection from '@/sections/EntrySection.vue'
import DividerComponent from '@/components/ui/DividerComponent.vue'
</script>
