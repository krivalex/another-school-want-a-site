<template>
  <section class="about-school">
    <span class="desc-text">Карта школы</span>
    <div class="sticker-panel">
      <template v-for="event in cardsEvents" :key="event.header">
        <UniversalCard :card="event" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import UniversalCard from '@/components/ui/UniversalCard.vue'
import { cardsEvents } from '@/logics'
</script>

<style scoped lang="scss">
.desc-text {
  font-family: 'Oswald', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 8rem;
  text-align: center;
  width: 100%;
  display: block;
}

.sticker-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 95vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  flex-direction: column;
  background-image: url('@/assets/board.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
