<template>
  <p-sidebar v-model:visible="visibleAddRequestModal">
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
        <p-input-text id="phone" type="text" v-model="newRequest.phone" />
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
        <p-input-text id="age" type="text" v-model="newRequest.age" />
      </div>
      <div class="p-field">
        <label for="class">В каком классе ребенок?</label>
        <p-input-text id="class" type="text" v-model="newRequest.class" />
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
import PDialog from 'primevue/dialog'
import PButton from 'primevue/button'
import PDropdown from 'primevue/dropdown'
import PSidebar from 'primevue/sidebar'

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
