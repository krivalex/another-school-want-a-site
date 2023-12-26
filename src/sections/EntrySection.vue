<template>
  <section class="header-about">
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
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          width="540"
          height="460"
          viewBox="0 0 507 527"
          fill="none"
        >
          <path
            d="M378.239 94.1057H259.382C257.172 94.1057 255.382 92.3148 255.382 90.1057V68.9841C255.382 66.7749 253.591 64.9841 251.382 64.9841H5C2.79086 64.9841 1 66.7749 1 68.9841L1.00014 482C1.00014 484.209 2.791 486 5.00014 486H224.33C226.539 486 228.33 487.791 228.33 490V512C228.33 514.209 230.121 516 232.33 516H492C494.209 516 496 514.209 496 512L496 5C496 2.79086 494.209 1 492 1H386.239C384.029 1 382.239 2.79086 382.239 5V90.1057C382.239 92.3148 380.448 94.1057 378.239 94.1057Z"
            stroke="#4ade80"
            stroke-width="5"
          ></path>
        </svg> -->
        <img
          src="https://storage.yandexcloud.net/sf-wallaper-bucket/images/NY2024/rectangle-sale.png"
          class="absolute-price"
        />
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%234ade80' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 50px;
  color: black;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 400px) {
  .container {
    padding: 5px;
  }
}

.sales-empathy {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.sales-empathy h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.sales-empathy ul {
  list-style: none;
  margin-bottom: 20px;
}

.sales-empathy li {
  font-size: 21px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 10px;
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
</style>
