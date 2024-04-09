<template>
  <section class="about-school">
    <!-- <span class="desc-text">Карта школы</span> -->
    <BoardDesign>
      <template #panel-content>
        <div class="sticker-panel">
          <template v-for="event in cardsEvents" :key="event.header">
            <UniversalCard :card="event" />
          </template>
        </div>
      </template>
    </BoardDesign>
  </section>
</template>

<script setup lang="ts">
import UniversalCard from '@/components/ui/UniversalCard.vue'
import BoardDesign from '@/components/design/BoardDesign.vue'
import { cardsEvents } from '@/logics'
</script>

<style scoped lang="scss">
.desc-text {
  font-family: 'Oswald', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 6rem;
  text-align: center;
  width: 100%;
  display: block;
  z-index: 10;
  position: relative;
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
  flex-direction: column;
}
</style>
