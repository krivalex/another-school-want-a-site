<template>
  <div class="course-card" @click="goToCoursePage(item.id)">
    <p-card>
      <template #header>
        <img :src="item.image" alt="Картинка курса" class="course-preview" />
      </template>
      <template #title>
        <h1>{{ item.title }}</h1>
      </template>
      <template #subtitle>
        <h2>{{ item.duration }} дней</h2>
        <div v-html="item.shortDescription"></div>
      </template>
      <template #footer>
        <span class="date-info">
          {{ dateFormmatter(item.created) }}
        </span>
      </template>
    </p-card>
  </div>
</template>

<script setup lang="ts">
import PCard from 'primevue/card'
import PButton from 'primevue/button'
import { dateFormmatter } from '@/utils'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCoursePage(id: string) {
  router.push(`/course/${id}`)
}

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.course-card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.date-info {
  font-size: 0.8rem;
  color: #999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  padding-right: 1rem;
}

.course-preview {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>
