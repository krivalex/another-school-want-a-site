<template>
  <div class="all-courses">
    <!-- <template v-for="courseItem in courseList" :key="courseItem.id">
      <course-item :item="courseItem" />
    </template> -->

    <p-carousel
      :value="courseList"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="10000"
    >
      <template #item="slotProps">
        <course-item :item="slotProps.data" />
      </template>
    </p-carousel>
  </div>
</template>

<script setup lang="ts">
import { useCourse } from '@/composables/useCourse'
import { onMounted, ref } from 'vue'
import CourseItem from '@/components/CourseItem.vue'
import PCarousel from 'primevue/carousel'

const { courseList, getAllContent } = useCourse()

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])

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

:deep(.p-carousel-indicator) {
  margin-right: 15px;
}

:deep(.p-carousel-items-content) {
  width: 100vw;
}
</style>
