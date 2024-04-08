*Информация о пробном уроке:* Стоимость: 1000 тенге. Продолжительность: 30 минут. Запись: Записаться
на пробный урок можно по телефону или в WhatsApp. Контактная информация: Адрес: г. Талгар, мкр.
Коктем, ул. Абая, 146/1 Телефон: +7 775 252 52 52 WhatsApp: +7 775 252 52 52 Instagram:
https://www.instagram.com/flagman.talgar?igsh=NGdndHByc3IxZDRw

<template>
  <section class="trial-lesson">
    <div class="molbert">
      <div class="wood right-down"></div>
      <div class="wood left-down"></div>
      <div class="wood bottom-center"></div>
      <div class="wood top-center"></div>

      <div class="paper">
        <span class="header">Оставить заявку на пробный урок</span>
        <span class="text">Заполните форму и мы свяжемся с вами в ближайшее время</span>

        <div class="p-fluid">
          <div class="p-field">
            <label for="parentName">Ваше имя</label>
            <p-input-text id="parentName" type="text" v-model="newRequest.parentName" />
          </div>
          <div class="p-field">
            <label for="childrenName">Имя ребенка</label>
            <p-input-text id="childrenName" type="text" v-model="newRequest.childrenName" />
          </div>
          <div class="p-field">
            <label for="phone">Номер телефона</label>
            <p-input-mask id="phone" v-model="newRequest.phone" mask="+7 (999) 999-99-99" />
          </div>
          <div class="p-field">
            <label for="course">Курс</label>
            <p-dropdown
              id="course"
              v-model="newRequest.course"
              :options="courseList"
              optionLabel="title"
              optionValue="title"
            />
          </div>
          <div class="p-field">
            <label for="age">Возраст ребенка</label>
            <p-input-number
              id="age"
              v-model="newRequest.age"
              showButtons
              buttonLayout="horizontal"
              :max="25"
              :min="5"
            />
          </div>
          <div class="p-field">
            <label for="class">В каком классе ребенок?</label>
            <p-dropdown
              id="class"
              v-model="newRequest.class"
              :options="classes"
              optionLabel="label"
              optionValue="value"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PDropdown from 'primevue/dropdown'
import PInputText from 'primevue/inputtext'
import PInputMask from 'primevue/inputmask'
import PInputNumber from 'primevue/inputnumber'
import { useRequest } from '@/composables/useRequest'
import { useCourse } from '@/composables/useCourse'

import { classes } from '@/logics'

const { newRequest } = useRequest()
const { courseList } = useCourse()
</script>

<style lang="scss" scoped>
.trial-lesson {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .molbert {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 600px;
    padding: 0 20px;
    margin: 0 auto;
    background-color: #fdf7c0;
    position: relative;

    .bottom-center {
      position: absolute;
      width: 120%;
      bottom: -3%;
      left: -10%;
      height: 50px;
      background-position: center;
      background-size: cover;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }

    .right-down {
      position: absolute;
      width: 50px;
      height: 140%;
      bottom: -30%;
      left: 10%;
      transform: rotate(10deg);
      background-position: center;
      background-size: cover;
      z-index: -1;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }

    .left-down {
      position: absolute;
      width: 50px;
      height: 140%;
      bottom: -30%;
      right: 10%;
      transform: rotate(-10deg);
      background-position: center;
      background-size: cover;
      z-index: -1;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }

    .wood {
      background: url('@/assets/wood.jpg');
      filter: contrast(1.2);
    }

    .paper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .header {
        font-family: 'Oswald', sans-serif;
        font-size: 24px;
      }

      .text {
        font-family: 'Oswald', sans-serif;
        font-size: 16px;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
