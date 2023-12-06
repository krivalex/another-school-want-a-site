<template>
  <div class="not-found">
    <h1>Страница не найдена</h1>
    <p>Вернитесь на главную страницу</p>
    <p-button label="На главную" @click="goToHomePage" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHomePage() {
  router.push('/')
}
</script>
