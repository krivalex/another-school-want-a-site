<template>
  <template v-if="user?.status === 'admin'">
    <p-toolbar>
      <template #start>
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
</template>

<script setup lang="ts">
import PToolbar from 'primevue/toolbar'
import PButton from 'primevue/button'
import AddCourseModal from '@/components/modals/AddCourseModal.vue'
import { useCourse } from '@/composables/useCourse'
import { useUser } from '@/composables/useUser'
import { useRouter } from 'vue-router'

const { user } = useUser()

const { toggleVisibleAddCourse } = useCourse()
const router = useRouter()

const redirectToRequest = () => {
  router.push('/requests')
}
</script>

<style scoped>
.p-toolbar {
  background-color: #f5f5f5;
  color: black;
  text-align: center;
  padding: 0 1rem;
}
.adds-button {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.adds-button .p-button {
  padding: 0.4rem 0.5rem;
  background-color: black;
  color: white;
  font-size: 1rem;
  border-radius: 0.5rem;
}
</style>
