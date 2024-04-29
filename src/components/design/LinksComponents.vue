<template>
  <div class="container">
    <ul class="social">
      <li class="social-item whatsapp" @click="redirectToWhatsapp">
        <i class="pi pi-whatsapp"></i>
      </li>
      <li class="social-item phone" @click="redirectToPhone">
        <i class="pi pi-phone"></i>
      </li>
      <li class="social-item map" @click="redirectToMap">
        <i class="pi pi-map"></i>
      </li>
      <li class="social-item instagram" @click="redirectToInstagram">
        <i class="pi pi-instagram"></i>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RedirectsFunctions } from '@/logics'

const { redirectToWhatsapp, redirectToPhone, redirectToMap, redirectToInstagram } =
  RedirectsFunctions
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 20px;

  .social {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    color: white;
    width: 300px;

    .social-item {
      width: 40px;
      height: 40px;
      border: 3px solid white;
      border-radius: 50%;
      text-align: center;
      line-height: 36px;
      font-size: 16px;
      transition: all 0.4s;
      cursor: pointer;
    }

    .whatsapp:hover {
      border-color: #76ff03;
      box-shadow: 0px 0px 20px #76ff03;
      color: #76ff03;
      transform: scale(1.2);
    }
    .whatsapp:hover .pi-whatsapp {
      transform: scale(1.2);
    }

    .phone:hover {
      border-color: #00b0ff;
      box-shadow: 0px 0px 20px #00b0ff;
      color: #00b0ff;
      transform: scale(1.2);
    }
    .phone:hover .pi-phone {
      transform: scale(1.2);
    }

    .instagram:hover {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      border-color: white;
      box-shadow: 0px 0px 20px #ff80ab;
      color: white;
      transform: scale(1.2);
    }

    .instagram:hover .pi-instagram {
      transform: scale(1.2);
    }

    .map:hover {
      border-color: #fab781;
      box-shadow: 0px 0px 20px #fab781;
      color: #fab781;
      transform: scale(1.2);
    }
    .map:hover .pi-map {
      transform: scale(1.2);
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 5px;

    .social {
      width: 100vw;
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-block-start: 0.2rem;
      margin-block-end: 0.6rem;

      .social-item {
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
      }
    }
  }
}
</style>
