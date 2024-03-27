<template>
  <div class="sticker-panel">
    <template v-for="event in cardsEvents" :key="event.header">
      <UniversalCard :card="event" />
    </template>
  </div>
</template>

<script setup lang="ts">
import UniversalCard from '@/components/ui/UniversalCard.vue'
import { cardsEvents } from '@/logics'
</script>

<style scoped lang="scss">
.sticker-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100vh;
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
