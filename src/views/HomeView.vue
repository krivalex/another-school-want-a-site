<template>
  <main>
    <EntrySection />
    <CourseList />
    <AboutSchool />
    <EducationProcess />
    <TrialLesson />
  </main>
</template>

<script setup lang="ts">
import CourseList from '@/sections/CourseList.vue'
import AboutSchool from '@/sections/AboutSchool.vue'
import EntrySection from '@/sections/EntrySection.vue'
import EducationProcess from '@/sections/EducationProcess.vue'
import TrialLesson from '@/sections/TrialLesson.vue'
</script>

<style lang="scss" scoped></style>
