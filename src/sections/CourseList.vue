<template>
  <section class="all-courses">
    <template v-if="loading.courseList">
      <LoadingSpinner />
    </template>
    <template v-else>
      <p-carousel
        :value="courseList"
        circular
        :autoplayInterval="10000"
        :showNavigators="false"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <course-item :item="slotProps.data" />
        </template>
      </p-carousel>
    </template>
  </section>
</template>

<script setup lang="ts">
import { useCourse } from '@/composables/useCourse'
import { ref } from 'vue'
import CourseItem from '@/components/CourseItem.vue'
import PCarousel from 'primevue/carousel'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'

const { courseList, loading } = useCourse()

const responsiveOptions = ref([
  {
    breakpoint: '2000px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1752px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1200px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>

<style scoped lang="scss">
.all-courses {
  display: flex;
  justify-content: center;
  gap: 1rem;
  background-color: #ffffff;
  max-width: 90vw;
  margin: 0 auto;
  align-items: center;
  min-height: 400px;
  position: relative;

  .desc-text {
    font-family: 'Oswald', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 8rem;
  }
}

:deep(.p-carousel-indicator) {
  margin-right: 15px;
}

:deep(.p-carousel) {
  width: 100%;
  margin: 0 auto;
  padding: 0 0.3rem;
  margin-top: 40px;
}

:deep(.p-carousel-next) svg,
:deep(.p-carousel-prev) svg {
  visibility: hidden;
  display: none;
}

:deep(.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button) {
  background-color: #000;
}

:deep(.p-carousel-item) {
  margin: 0 auto;
  justify-content: center;
  display: flex;
}
</style>
