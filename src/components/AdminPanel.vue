<template>
  <p-toolbar>
    <template #start>
      <h3>Панель администратора</h3>
      <AddCourseModal />
    </template>
    <template #end>
      <div class="adds-button">
        <p-button
          label="Создать курс"
          icon="pi pi-plus"
          @click="toggleVisibleAddCourse"
          class="p-button-sm"
        />
        <p-button label="Добавить преподавателя" icon="pi pi-user-plus" class="p-button-sm" />
        <p-button
          label="Посмотреть заявки"
          icon="pi pi-eye"
          class="p-button-sm"
          @click="redirectToRequest"
        />
      </div>
    </template>
  </p-toolbar>
</template>

<script setup lang="ts">
import PToolbar from 'primevue/toolbar'
import PButton from 'primevue/button'
import AddCourseModal from '@/components/modals/AddCourseModal.vue'
import { useCourse } from '@/composables/useCourse'
import { useRouter } from 'vue-router'

const { toggleVisibleAddCourse } = useCourse()
const router = useRouter()

const redirectToRequest = () => {
  router.push('/requests')
}
</script>

<style scoped>
.adds-button {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.adds-button .p-button {
  padding: 0.2rem 0.5rem;
}
</style>
