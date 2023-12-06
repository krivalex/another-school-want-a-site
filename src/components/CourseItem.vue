<template>
  <div class="course-card">
    <p-card>
      <template #title>
        <h1>{{ item.title }}</h1>
      </template>
      <template #subtitle>
        <h2>{{ item.duration }} дней</h2>
        <div v-html="item.description"></div>
      </template>
      <template #footer>
        <p-button label="Подробнее" />
      </template>
    </p-card>
  </div>
</template>

<script setup lang="ts">
import PCard from 'primevue/card'
import PButton from 'primevue/button'

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
}
</style>
