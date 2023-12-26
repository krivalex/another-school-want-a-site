<template>
  <section class="course-view">
    <div class="block">
      <div class="course-info">
        <div class="course-header">
          <img :src="course?.image" :alt="course?.title" />
          <div class="course-title">
            <h1>{{ course?.title }}</h1>
          </div>
        </div>
        <div class="course-body-absolute">
          <h2>{{ course?.duration }} дней</h2>
          <div class="course-age">
            <p>{{ course?.age.start }}</p>
            <span>-</span>
            <p>{{ course?.age.end }}</p>
            <span>лет</span>
          </div>
        </div>

        <div class="html-description" v-html="course?.longDescription"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCourse } from '@/composables/useCourse'
import { onMounted } from 'vue'

const route = useRoute()
const { getContentById, course } = useCourse()

onMounted(async () => {
  await getContentById(route.params.id as string)
})
</script>

<style>
.course-view {
  height: 100%;
  position: relative;
  min-height: 85vh;
  overflow-x: hidden;
}

.course-header {
  position: relative;
}

.course-header img {
  height: 400px;
  width: 100vw;
  background-color: #f0f0f0;
  overflow: hidden;
  object-fit: cover;
}

.course-body-absolute {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: black;
}

.course-body-absolute h2 {
  font-size: 2rem;
  margin-block-start: 0;
  margin-block-end: 0;
}

.course-body-absolute course-age p {
  margin-block-start: 0.3rem;
  margin-block-end: 0;
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
}

.course-age {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

.html-description {
  min-height: 100%;
  font-size: larger;
  padding: 0 20px;
}

.html-description img {
  max-width: 100%;
  height: auto;
}
</style>
