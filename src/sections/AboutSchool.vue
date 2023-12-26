<template>
  <div class="customized-timeline">
    <div class="container">
      <p-timeline :value="events" align="alternate">
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
              <p>{{ slotProps.item.description }}</p>
            </template>
          </p-card>
        </template>
      </p-timeline>
    </div>
  </div>
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
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23de4abd' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.customized-marker {
  border-radius: 50%;
  transform: scale(1.5);
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

:deep(.p-card) {
  background: #ffffff;
  color: rgb(0 0 0 / 87%);
}

:deep(.card-of-info) {
  max-width: 600px;
  padding: 0 !important;
}

:deep(.p-card-content) {
  padding: 0 !important;
}

:deep(.p-card-title) {
  text-align: center;
}

.container {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
