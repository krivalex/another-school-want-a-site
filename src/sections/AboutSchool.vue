<template>
  <p-timeline :value="events" align="alternate" class="customized-timeline">
    <template #marker="slotProps">
      <div class="customized-marker" :style="{ backgroundColor: slotProps.item.color }">
        <i :class="slotProps.item.icon"></i>
      </div>
    </template>

    <template #content="slotProps">
      <p-card class="card-of-info">
        <template #title>
          {{ slotProps.item.header }}
        </template>
        <template #subtitle>
          {{ slotProps.item.date }}
        </template>
        <template #content>
          <img
            v-if="slotProps.item.image"
            :src="`/images/product/${slotProps.item.image}`"
            :alt="slotProps.item.name"
            width="200"
            class="shadow-1"
          />
          <p>{{ slotProps.item.description }}}</p>
        </template>
      </p-card>
    </template>
  </p-timeline>
</template>

<script setup lang="ts">
import PTimeline from 'primevue/timeline'
import PCard from 'primevue/card'

const events = [
  {
    header: 'ШКОЛА ПОЛНОГО ДНЯ',
    description: 'Ваш ребенок находится в школе в течение полного учебного дня, с 08:00 до 18:00.',
    icon: 'pi pi-shopping-cart',
    color: '#9C27B0'
  },
  {
    header: 'ПИТАНИЕ',
    description: 'Вашему ребенку предоставляется сбалансированное 4-разовое питание.',
    icon: 'pi pi-credit-card',
    color: '#673AB7'
  },
  {
    header: 'ВЫПОЛНЕНИЕ ДОМАШНИХ ЗАДАНИЙ',
    description: 'Ваш ребенок выполняет домашние задания в школе вместе с учителем',
    icon: 'pi pi-send',
    color: '#FF9800'
  },
  {
    header: 'БЕЗОПАСНОСТЬ + КОМФОРТ',
    description: 'Ваш ребенок находится в безопасной и комфортной среде.',
    icon: 'pi pi-check',
    color: '#4CAF50'
  },
  {
    header: 'НАСЫЩЕННАЯ ЖИЗНЬ',
    description: 'У вашего ребенка интересная и насыщенная школьная жизнь.',
    icon: 'pi pi-android',
    color: '#00BCD4'
  },
  {
    header: 'ФЛАГМАН',
    description:
      'это не просто школа, это место, где ваш ребенок будет наслаждаться каждым моментом своего детства. Мы стремимся сделать учебу увлекательной и веселой, чтобы дети с радостью ходили в школу и сохраняли самые яркие воспоминания о своем детстве.',
    icon: 'pi pi-times',
    color: '#F44336'
  }
]
</script>

<style scoped>
.customized-timeline {
  margin: 50px auto;
  max-width: 1000px;
}

.customized-marker {
  border-radius: 50%;
}

.customized-marker i {
  font-size: 1.5rem;
  color: #fff;
  padding: 10px;
}

.card-of-info {
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 10px;
}
</style>
