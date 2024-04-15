<template>
  <template v-if="teacher.image">
    <p-avatar :image="teacher.image" shape="circle" size="normal" />
  </template>
  <template v-else>
    <p-avatar :label="createTeacherLabel(teacher)" shape="circle" size="normal" />
  </template>
</template>

<script setup lang="ts">
import PAvatar from 'primevue/avatar'
import type { Teacher } from '@/interfaces'
import { createTeacherLabel } from '@/logics'

defineProps<{
  teacher: Teacher
}>()
</script>

<style scoped lang="scss"></style>
