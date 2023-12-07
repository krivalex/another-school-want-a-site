<script setup lang="ts">
import { RouterView } from 'vue-router'
import AdminPanel from '@/components/AdminPanel.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <AdminPanel />
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
