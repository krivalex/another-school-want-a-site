<template>
  <p-dialog v-model:visible="visibleAddModal">
    <template #header>
      <h1>Создать новый курс</h1>
    </template>
    <div class="p-fluid">
      <div class="p-field">
        <label for="name">Название курса</label>
        <p-input-text id="name" type="text" v-model="newCourse.title" />
      </div>
      <div class="p-field">
        <label for="description">Длительность курса(дней)</label>
        <p-input-text id="description" type="text" v-model="newCourse.duration" />
      </div>
      <!-- <div class="p-field">
        <label for="description">Возраст учеников</label>
        <p-slider id="description" type="text" range v-model="newCourse.age" />
      </div> -->
      <div class="p-field">
        <label for="description">Описание курса</label>
        <p-editor id="description" v-model="newCourse.description" />
      </div>
      <div class="p-field">
        <label for="description">Список учителей</label>
        <p-dropdown
          id="description"
          v-model="newCourse.teachers"
          :options="[
            { label: 'Учитель 1', value: '1' },
            { label: 'Учитель 2', value: '2' },
            { label: 'Учитель 3', value: '3' }
          ]"
          multiple
        />
      </div>
    </div>
    <template #footer>
      <div class="p-d-flex p-jc-between">
        <p-button class="p-button p-button-danger" @click="clearContent" label="Отмена"></p-button>
        <p-button class="p-button p-button-success" @click="addContent" label="Создать"></p-button>
      </div>
    </template>
  </p-dialog>
</template>

<script setup lang="ts">
import { useCourse } from '@/composables/useCourse'
import PDialog from 'primevue/dialog'
import PEditor from 'primevue/editor'
import PButton from 'primevue/button'
import PInputText from 'primevue/inputtext'
import PSlider from 'primevue/slider'
import PDropdown from 'primevue/dropdown'

const { addContent, visibleAddModal, newCourse, clearContent } = useCourse()
</script>

<style scoped>
:deep(.p-dialog) {
  width: 80vw;
  height: 80vh;
}
.p-editor-container {
  height: 400px;
}

.p-fluid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.p-field {
  margin-bottom: 1rem;
}

.p-field label {
  font-size: 1.2rem;
}
</style>
