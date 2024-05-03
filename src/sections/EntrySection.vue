<template>
  <section class="header-about">
    <div class="header">
      <span class="sales-text">
        Детский центр Flagman School — мы научим вашего ребенка полезным навыкам
      </span>
      <p-button
        label="Записаться на пробный урок"
        class="go-to-trial-button"
        @click="scrollToTrialSection()"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCourse } from '@/composables/useCourse'
import PButton from 'primevue/button'
import { useRouter } from 'vue-router'

function scrollToTrialSection() {
  const trialSection = document.getElementById('trial-lesson')
  trialSection?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
.header-about {
  height: 40vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding-top: 10rem;
    padding-bottom: 3rem;

    .go-to-trial-button {
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-radius: 10px;
      background-color: #000;
      color: white;
    }

    .sales-text {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      font-optical-sizing: auto;
      font-weight: 200;
      line-height: 52px;
      font-style: normal;
      font-size: 3rem;
      max-width: 1200px;
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .header-about {
    height: 40vh;

    .header {
      margin-top: 3rem;
      padding-top: 10rem;
      padding-bottom: 3rem;
      margin-bottom: 4rem;

      .sales-text {
        font-size: 1.8rem;
        line-height: 40px;
        padding: 0 1rem;
      }
    }
  }

  .container {
    padding: 5px;
  }
}

@media screen and (max-width: 400px) {
  .header-about {
    height: 60vh;

    .header {
      margin-top: 3rem;
      padding-top: 10rem;
      padding-bottom: 3rem;
      margin-bottom: 4rem;

      .sales-text {
        font-size: 1.8rem;
        line-height: 40px;
        padding: 0 1rem;
      }
    }
  }

  .container {
    padding: 5px;
  }
}
</style>
