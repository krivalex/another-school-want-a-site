<template>
  <section class="all-courses">
    <p-carousel
      :value="courseList"
      :numVisible="3"
      :numScroll="1"
      circular
      :autoplayInterval="10000"
      :showNavigators="false"
    >
      <template #item="slotProps">
        <course-item :item="slotProps.data" />
      </template>
    </p-carousel>
  </section>
</template>

<script setup lang="ts">
import { useCourse } from '@/composables/useCourse'
import { ref } from 'vue'
import CourseItem from '@/components/CourseItem.vue'
import PCarousel from 'primevue/carousel'

const { courseList } = useCourse()

// const responsiveOptions = ref([
//   {
//     breakpoint: '1400px',
//     numVisible: 4,
//     numScroll: 1
//   },
//   {
//     breakpoint: '1199px',
//     numVisible: 3,
//     numScroll: 1
//   },
//   {
//     breakpoint: '767px',
//     numVisible: 4,
//     numScroll: 1
//   },
//   {
//     breakpoint: '575px',
//     numVisible: 1,
//     numScroll: 1
//   }
// ])
</script>

<style scoped lang="scss">
.all-courses {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  background-color: #ffffff;
  max-width: 90vw;
  margin: 0 auto;

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
  padding: 0 1rem;
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
</style>
