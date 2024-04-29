<template>
  <template v-if="user?.status === 'admin'">
    <p-toolbar>
      <template #start>
        <AddCourseModal />
        <AddTeacherModal />
      </template>
      <template #center>
        <div class="adds-button">
          <p-button
            label="Создать курс"
            icon="pi pi-plus"
            @click="toggleVisibleAddCourse"
            class="p-button-sm"
          />
          <p-button
            label="Добавить преподавателя"
            icon="pi pi-user-plus"
            class="p-button-sm"
            @click="toggleVisibleAddTeacher"
          />
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
import AddTeacherModal from '@/components/modals/AddTeacherModal.vue'
import { useCourse } from '@/composables/useCourse'
import { useUser } from '@/composables/useUser'
import { useRouter } from 'vue-router'
import { useTeacher } from '@/composables/useTeacher'

const { user } = useUser()
const { toggleVisibleAddCourse } = useCourse()
const { toggleVisibleAddTeacher } = useTeacher()

const router = useRouter()

const redirectToRequest = () => {
  router.push('/requests')
}
</script>

<style scoped>
.p-toolbar {
  background-color: white;
  color: black;
  text-align: center;
  padding: 0 1rem;
  margin-top: 60px;
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

@media screen and (max-width: 768px) {
  .adds-button {
    flex-direction: row;
    gap: 0.5rem;
  }

  .adds-button .p-button {
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
  }
}
</style>
