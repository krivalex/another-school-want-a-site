<template>
  <template v-if="teacher.image">
    <p-avatar :image="teacher.image" shape="circle" size="large" />
  </template>
  <template v-else>
    <p-avatar :label />
  </template>
</template>

<script setup lang="ts">
import PAvatar from 'primevue/avatar'
import type { Teacher } from '@/interfaces'

defineProps<{
  teacher: Teacher
}>()
</script>

<style scoped lang="scss"></style>
