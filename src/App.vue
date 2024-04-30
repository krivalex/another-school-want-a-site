<script setup lang="ts">
import { RouterView } from 'vue-router'
import AdminPanel from '@/components/AdminPanel.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import DynamicSectionName from '@/components/DynamicSectionName.vue'

import { onMounted } from 'vue'
import { useCourse } from '@/composables/useCourse'
import { useUser } from '@/composables/useUser'
import { useTeacher } from '@/composables/useTeacher'

const { getAllContent } = useCourse()
const { getAllUsers, getUserFromLocalStorage } = useUser()
const { getAllTeacher } = useTeacher()

onMounted(async () => {
  await getAllContent()
  await getAllUsers()
  await getAllTeacher()
  getUserFromLocalStorage()
})
</script>

<template>
  <AdminPanel />
  <NavbarComponent />
  <RouterView />
  <DynamicSectionName />
</template>

<style scoped></style>
