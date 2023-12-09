<template>
  <p-dialog v-model:visible="visibleAddRequestModal">
    <template #header>
      <h1>Создать заявку</h1>
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
        <label for="age">Возраст ребенка</label>
        <p-input-text id="age" type="text" v-model="newRequest.age" />
      </div>
      <div class="p-field">
        <label for="class">В каком классе ребенок?</label>
        <p-input-text id="class" type="text" v-model="newRequest.class" />
      </div>
    </div>
    <template #footer>
      <div class="buttons-container">
        <p-button class="p-button p-button-danger" @click="closeDialog" label="Отмена"></p-button>
        <p-button
          class="p-button p-button-success"
          @click="addNewRequest"
          label="Создать"
        ></p-button>
      </div>
    </template>
  </p-dialog>
</template>

<script setup lang="ts">
import { useRequest } from '@/composables/useRequest'
import PInputText from 'primevue/inputtext'
import PDialog from 'primevue/dialog'
import PButton from 'primevue/button'

const { visibleAddRequestModal, newRequest, addRequest, clearRequest, toggleVisibleAddRequest } =
  useRequest()

function closeDialog() {
  toggleVisibleAddRequest()
  clearRequest()
}

function addNewRequest() {
  addRequest()
  closeDialog()
}
</script>
