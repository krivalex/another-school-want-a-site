<template>
  <div class="all-courses">
    <template v-for="courseItem in courseList" :key="courseItem.id">
      <course-item :item="courseItem" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCourse } from '@/composables/useCourse'
import { onMounted } from 'vue'
import CourseItem from '@/components/CourseItem.vue'

const { courseList, getAllContent } = useCourse()

onMounted(async () => {
  await getAllContent()
})
</script>

<style scoped>
.all-courses {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 100px;
}
</style>
