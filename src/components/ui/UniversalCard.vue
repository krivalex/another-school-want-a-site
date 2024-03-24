<template>
  <div
    class="card"
    :style="`top: ${card.position.top}; left: ${card.position.left}; background-color: ${card.color}`"
  >
    <div class="card-header">
      <h3>{{ card.header }}</h3>
      <div class="card-image">
        <img :src="card.imageLink" :alt="card.header" />
      </div>
      <span class="card-buy">{{ card.description }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardDescription } from '@/interfaces'

defineProps<{
  card: CardDescription
}>()
</script>

<style scoped lang="scss">
.card {
  position: absolute;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
  .card-header {
    h3 {
      font-size: 24px;
      margin: 0;
    }

    .card-image {
      margin-top: 20px;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
      }
    }

    .card-buy {
      margin-top: 20px;
      font-size: 18px;
    }
  }
}
</style>
