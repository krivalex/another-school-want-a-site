<template>
  <div @click="goToCoursePage(item.id)">
    <p-card class="course-card">
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
        <div class="info">
          <span class="date-info">{{ dateFormmatter(item.created) }}</span>
          <span class="duration">{{ item.duration }} дней</span>
          <span class="age">{{ item.age.start }} - {{ item.age.end }} лет</span>
        </div>
        <p-button
          label="Подробнее"
          icon="pi pi-chevron-right"
          @click.stop="goToCoursePage(item.id)"
        />
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
  padding: 20px;
}

.date-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.course-preview {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

:deep(.p-card-body img) {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
