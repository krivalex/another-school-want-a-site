<template>
  <div
    :id="card.header"
    class="card"
    :style="`top: ${card.position.top}; left: ${card.position.left}; background-color: ${card.color}; transform: rotate(${card.position.rotate});`"
  >
    <img class="pin" src="@/components/design/design-assets/pin.png" alt="" />
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
  height: 330px;
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
      font-size: 20px;
      margin: 0;
    }

    .card-image {
      margin-top: 10px;
      margin-bottom: 10px;

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 10px;
      }
    }

    .card-buy {
      font-size: 18px;
      padding-top: 0.5rem;
    }
  }
}

@media (max-width: 768px) {
  .card {
    width: 250px;
    height: 280px;
    position: static;
    margin: 20px 0;

    .card-header {
      h3 {
        font-size: 18px;
      }

      .card-image {
        img {
          height: 120px;
        }
      }

      .card-buy {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 1550px) {
  .card {
    width: 260px;
    height: 270px;

    .card-header {
      h3 {
        font-size: 16px;
      }

      .card-image {
        img {
          height: 100px;
        }
      }

      .card-buy {
        font-size: 14px;
      }
    }
  }
}
</style>
