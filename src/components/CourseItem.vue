<template>
  <div @click="goToCoursePage(item.id)">
    <p-card class="course-card">
      <template #header>
        <img :src="item.image" alt="Картинка курса" class="course-preview" />
      </template>
      <template #title>
        <span class="course-name">{{ item.title }}</span>
      </template>
      <template #subtitle>
        <div v-html="item.shortDescription"></div>
      </template>
      <template #footer>
        <div class="course-info">
          <div class="info">
            <p-tag
              :value="dateFormmatter(item.created)"
              icon="pi pi-calendar"
              class="tag-element"
            />
            <p-tag :value="item.duration" icon="pi pi-clock" class="tag-element" />
            <p-tag
              :value="`${item.age.start} - ${item.age.end} лет`"
              icon="pi pi-user"
              class="tag-element"
            />
          </div>
          <p-button
            label="Подробнее"
            icon="pi pi-chevron-right"
            icon-pos="right"
            @click.stop="goToCoursePage(item.id)"
            class="p-button-sm about-button"
          />
        </div>
      </template>
    </p-card>
  </div>
</template>

<script setup lang="ts">
import PCard from 'primevue/card'
import PButton from 'primevue/button'
import { dateFormmatter } from '@/utils'
import { useRouter } from 'vue-router'
import PTag from 'primevue/tag'

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

<style scoped lang="scss">
.course-card {
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 20px;
  max-height: 500px;
  border-radius: 1rem;
  margin: 20px;
  background-color: rgb(248, 248, 248);

  .course-preview {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .course-name {
    font-size: 3rem;
    font-weight: 700;
  }

  .course-duration {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .course-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .about-button {
      background-color: rgb(0, 165, 0);
      font-size: 1.1rem;
    }

    .tag-element {
      margin-right: 10px;
      border-radius: 1rem;
      padding: 0.3rem 0.6rem;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .date-info {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}

:deep(.p-card) {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

:deep(.p-card-body img) {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
</style>
