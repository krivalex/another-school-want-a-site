<script setup lang="ts">
import { RouterView } from 'vue-router'
import AdminPanel from '@/components/AdminPanel.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AddRequestButton from './components/AddRequestButton.vue'
import { onMounted } from 'vue'
import { useCourse } from './composables/useCourse'
import { useUser } from './composables/useUser'

const { getAllContent } = useCourse()
const { getAllUsers, getUserFromLocalStorage } = useUser()

onMounted(async () => {
  await getAllContent()
  await getAllUsers()
  getUserFromLocalStorage()
})
</script>

<template>
  <AdminPanel />
  <NavbarComponent />
  <RouterView />
  <AddRequestButton />
  <FooterComponent />
</template>

<style scoped></style>
