<template>
  <div
    :id="card.header"
    :ref="el"
    class="card"
    :style="`top: ${card.position.top}; left: ${card.position.left}; background-color: ${card.color}; transform: rotate(${card.position.rotate});`"
  >
    <img class="pin" src="@/assets/pin.png" alt="" />
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
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

defineProps<{
  card: CardDescription
}>()

const el = ref<HTMLElement | null>(null)
const { x, y } = useDraggable(el)
</script>

<style scoped lang="scss">
.card {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  .pin {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
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
