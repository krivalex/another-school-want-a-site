<!-- eslint-disable vue/valid-v-model -->
*Информация о пробном уроке:* Стоимость: 1000 тенге. Продолжительность: 30 минут. Запись: Записаться
на пробный урок можно по телефону или в WhatsApp. Контактная информация: Адрес: г. Талгар, мкр.
Коктем, ул. Абая, 146/1 Телефон: +7 775 252 52 52 WhatsApp: +7 775 252 52 52 Instagram:
https://www.instagram.com/flagman.talgar?igsh=NGdndHByc3IxZDRw

<template>
  <section class="trial-lesson" id="trial-lesson">
    <MolbertDesign>
      <template #paper-content>
        <template v-if="!message">
          <span class="header">Оставить заявку на пробный урок</span>
          <span class="text">Заполните форму и мы свяжемся с вами в ближайшее время</span>

          <div class="p-fluid">
            <div class="p-field">
              <p-input-text
                id="parentName"
                type="text"
                v-model="newRequest.parentName"
                placeholder="Ваше имя"
              />
            </div>
            <div class="p-field">
              <p-input-text
                id="childrenName"
                type="text"
                v-model="newRequest.childrenName"
                placeholder="Имя ребенка"
              />
            </div>
            <div class="p-field">
              <p-input-mask
                id="phone"
                v-model="newRequest.phone"
                mask="+7 (999) 999-99-99"
                placeholder="Номер телефона"
              />
            </div>
            <div class="p-field">
              <p-dropdown
                id="course"
                v-model="newRequest.course"
                :options="courseList"
                optionLabel="title"
                optionValue="title"
                placeholder="Выберите курс"
              />
            </div>
            <div class="p-field">
              <p-input-number
                id="age"
                v-model="newRequest.age"
                :max="25"
                :min="5"
                placeholder="Возраст ребенка"
              />
            </div>
            <div class="p-field">
              <p-dropdown
                id="class"
                v-model="newRequest.class"
                :options="classes"
                optionLabel="label"
                optionValue="value"
                placeholder="В каком классе ребенок?"
              />
            </div>
          </div>

          <div class="save-container" @click="toggleAddRequest">
            <div class="spooky"></div>
            <div class="border"></div>
            <button class="button save-button">
              Записаться
              <i class="pi pi-plus" />
            </button>
          </div>
        </template>
        <template v-else>
          <span class="success-message">{{ message }}</span>
        </template>
      </template>
    </MolbertDesign>
  </section>
</template>

<script setup lang="ts">
import PDropdown from 'primevue/dropdown'
import PInputText from 'primevue/inputtext'
import PInputMask from 'primevue/inputmask'
import PInputNumber from 'primevue/inputnumber'
import { useRequest } from '@/composables/useRequest'
import { useCourse } from '@/composables/useCourse'
import MolbertDesign from '@/components/design/MolbertDesign.vue'
import { classes } from '@/logics'
import { ref } from 'vue'
import type { Nullable } from 'primevue/ts-helpers'

const message = ref('')

const { newRequest, addRequest, clearRequest } = useRequest()
const { courseList } = useCourse()

async function toggleAddRequest() {
  await addRequest()
  clearRequest()
  message.value = 'Мы записали вашу заявку, скоро с вами свяжемся'
}
</script>

<style lang="scss" scoped>
.trial-lesson {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 105vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url('');

  .paper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;

    .header {
      font-family: 'Oswald', sans-serif;
      font-size: 36px;
    }

    .text {
      font-family: 'Oswald', sans-serif;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }

    .p-fluid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;

      .p-field {
        font-family: 'Times New Roman', Times, serif;
        width: 100%;
      }
    }

    .save-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin-top: 3%;

      .border {
        width: 10%;
        background-color: #ffe993;
        height: 30px;
        border: 2px solid black;
        border-right: none;
      }

      .spooky {
        position: relative;
        width: 15%;
        height: 38px;
        background-color: black;
        border-radius: 50%;
        border-top-left-radius: 120%;
        border-bottom-left-radius: 120%;
        margin-right: -10px;
      }

      .save-button {
        font-size: calc(10px + 0.625vw);
        font-family:
          Franklin Gothic Medium,
          Arial Narrow,
          Arial,
          sans-serif;
        text-align: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75%;
        background-color: #fcaa51;
        border-top-right-radius: 45%;
        border-bottom-right-radius: 45%;
        height: 30px;

        .pi-plus {
          font-size: calc(8.33333px + 0.52083vw);
          text-align: center;
          cursor: pointer;
          width: -moz-fit-content;
          width: fit-content;
          margin-top: 3px;
          margin-left: 5px;
        }
      }
    }

    :deep(.p-inputtext) {
      background: transparent;
      border: none;
      border-bottom: 1px solid black;
      border-radius: 0px;
      width: 100%;

      :focus {
        border: none;
        outline: none;
      }
    }

    :deep(.p-dropdown) {
      background: transparent;
      border: none;
      border-bottom: 1px solid black;
      border-radius: 0px;
      width: 100%;
    }

    :deep(.p-dropdown .p-inputtext) {
      border: none;
    }
  }
}

:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item) {
  background-color: bisque !important;
}

.success-message {
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  text-align: center;
  margin-top: 20px;
  color: #fcaa51;
}
</style>
