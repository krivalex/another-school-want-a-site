<template>
  <p-sidebar v-model:visible="visibleAddRequestModal" position="right" style="width: 30rem">
    <template #header>
      <h1>Записаться на пробный урок</h1>
    </template>
    <div class="p-fluid">
      <div class="p-field">
        <label for="parentName">Имя родителя</label>
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
    <div class="buttons-container">
      <p-button class="p-button p-button-danger" @click="closeDialog" label="Отмена"></p-button>
      <p-button class="p-button p-button-success" @click="addNewRequest" label="Создать"></p-button>
    </div>
  </p-sidebar>
</template>

<script setup lang="ts">
import PInputText from 'primevue/inputtext'
import PButton from 'primevue/button'
import PDropdown from 'primevue/dropdown'
import PSidebar from 'primevue/sidebar'
import PInputMask from 'primevue/inputmask'
import PInputNumber from 'primevue/inputnumber'
import { classes } from '@/logics'

import { useRequest } from '@/composables/useRequest'
import { useCourse } from '@/composables/useCourse'

const { visibleAddRequestModal, newRequest, addRequest, clearRequest, toggleVisibleAddRequest } =
  useRequest()

const { courseList } = useCourse()

function closeDialog() {
  toggleVisibleAddRequest()
  clearRequest()
}

async function addNewRequest() {
  await addRequest()
  closeDialog()
}
</script>

<style lang="scss" scoped>
.buttons-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  :deep(.p-button) {
    width: 100%;
  }
}
</style>
