<template>
  <section class="header-about">
    <div class="sales-text">
      <span class="small">Детский центр "Flagman School"</span>
      <span class="big">Учим полезным навыкам</span>
    </div>
    <div class="container">
      <div class="sales-empathy">
        <h1>Научим вашего ребенка полезным навыкам</h1>
        <ul>
          <li>Развитие мелкой моторики</li>
          <li>Развитие воображения</li>
          <li>Развитие творческого мышления</li>
          <li>Развитие мелкой моторики</li>
        </ul>
        <div class="direction-list">
          <div v-for="direction in courseList" :key="direction.id">
            <p-button
              :label="direction.title"
              @click="goToCoursePage(direction.id)"
              icon="pi pi-forward"
            />
          </div>
        </div>
      </div>
      <div class="photo-empathy">
        <img class="main-image" src="@/assets/teens.webp" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCourse } from '@/composables/useCourse'
import PButton from 'primevue/button'
import { useRouter } from 'vue-router'

const { courseList } = useCourse()

const router = useRouter()

function goToCoursePage(id: string) {
  router.push(`/course/${id}`)
}
</script>

<style scoped>
.header-about {
  height: 92vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex-direction: column;
  background-image: url('https://img-fotki.yandex.ru/get/68556/16969765.26f/0_a1f67_c39951cf_orig.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .sales-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .small {
      position: relative;
      font-family: 'Oswald', sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      font-size: 3rem;
      color: gray;
      top: 50px;
    }

    .big {
      font-family: 'Oswald', sans-serif;
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: normal;
      font-size: 9rem;
    }
  }

  .container {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 40px;
    color: black;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

    .sales-empathy {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1.5rem;

      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0px;
      }

      ul {
        list-style: none;
        padding-inline-start: 20px;

        li {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }
      }
    }

    .direction-list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
    }

    .photo-empathy {
      width: 50%;
      position: relative;
    }

    .photo-empathy .main-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .photo-empathy svg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .absolute-price {
      position: absolute;
      top: 200px;
      left: 120px;
      width: 240px;
      z-index: 100;
      transform: rotate(-15deg);
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    padding: 5px;
  }
}
</style>
