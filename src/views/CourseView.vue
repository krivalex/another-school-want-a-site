<template>
  <section class="course-view" :id="course?.title">
    <template v-if="!loading.course">
      <div class="block">
        <div class="course-info">
          <div class="course-header">
            <img :src="course?.image" :alt="course?.title" />
            <div class="course-title">
              <h1>{{ course?.title }}</h1>
            </div>
            <div class="course-body-absolute">
              <p-tag
                :value="dateFormmatter(course?.created)"
                icon="pi pi-calendar"
                class="tag-element"
              />
              <p-tag :value="course?.duration" icon="pi pi-clock" class="tag-element" />
              <p-tag
                :value="`${course?.age.start} - ${course?.age.end} лет`"
                icon="pi pi-user"
                class="tag-element"
              />
            </div>
          </div>
          <div class="content">
            <div class="html-description" v-html="course?.longDescription"></div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <LoadingSpinner />
    </template>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCourse } from '@/composables/useCourse'
import { onMounted } from 'vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import { dateFormmatter } from '@/utils'
import PTag from 'primevue/tag'

const route = useRoute()
const { getContentById, course, loading } = useCourse()

onMounted(async () => {
  await getContentById(route.params.id as string)
})
</script>

<style lang="scss" scoped>
.block {
  min-height: inherit;
}

.course-view {
  position: relative;
  min-height: 70vh;
  overflow-x: hidden;

  .course-info {
    position: relative;
    height: inherit;
    min-height: inherit;

    .course-header {
      position: relative;

      img {
        height: 500px;
        width: 100vw;
        background-color: #f0f0f0;
        overflow: hidden;
        object-fit: cover;
      }
    }

    .course-body-absolute {
      display: flex;
      gap: 0.5rem;
      position: absolute;
      bottom: 3rem;
      right: 0;
      padding: 10px;
      border-radius: 0 0 0 1rem;
      color: black;
      width: 100%;
      justify-content: center;

      .tag-element {
        margin-right: 10px;
        border-radius: 1rem;
        padding: 0.3rem 0.6rem;
        background-color: black;
        color: white;
        font-size: 1.5rem;
      }
    }

    .course-title {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      background-color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      color: black;
      text-align: center;
      font-size: 2rem;
    }
  }
}

.content {
  background-color: white;
  position: relative;
  top: -3rem;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 60vh;

  .html-description {
    min-height: 100%;
    font-size: larger;
    padding: 10px 20px;
  }

  .html-description img {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .course-title {
    font-size: 1.5rem !important;
  }

  .tag-element {
    font-size: 0.85rem !important;
  }
}
</style>
