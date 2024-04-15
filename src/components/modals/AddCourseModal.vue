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
      <div class="p-field">
        <label for="description">Возраст учеников</label>
        <div class="two-at-one">
          <p-input-number id="description" type="text" v-model="newCourse.age.start" />
          <p-input-number id="description" type="text" v-model="newCourse.age.end" />
        </div>
      </div>
      <div class="p-field">
        <label for="teachers">Список учителей</label>
        <p-multi-select
          v-model="newCourse.teachers"
          id="teachers"
          :options="(teacherList as []) || []"
          filter
          display="chip"
          :filter-fields="['name', 'surname']"
        >
          <template #option="{ option }">
            <div class="teacher-option">
              <TeacherAvatar :teacher="option" />
              <span class="label">{{ option.name }} {{ option.surname }}</span>
            </div>
          </template>
          <template #chip="{ value }">
            <div class="teacher-chips">
              <span class="label">{{ value.name }} {{ value.surname }}</span>
            </div>
          </template>
        </p-multi-select>
      </div>
      <div class="p-field short-description">
        <label for="shortDescription">Короткое описание курса</label>
        <p-editor id="shortDescription" v-model="newCourse.shortDescription" />
      </div>
      <div class="p-field long-description">
        <label for="longDescription">Длинное описание курса</label>
        <p-editor id="longDescription" v-model="newCourse.longDescription" />
      </div>

      <div class="p-field">
        <form class="input__wrapper" enctype="multipart/form-data">
          <input
            id="inputfile"
            class="input inputfile"
            name="images"
            type="file"
            accept=".jpg, .png"
            @input="onUpload($event)"
          />
          <label for="inputfile" class="inputfile-button">
            <span class="input__file-icon-wrapper">
              <img
                class="input__file-icon"
                src="@/assets/upload-image.png"
                alt="Выбрать файл"
                width="25"
              />
            </span>
            <span class="input__file-button-text"> Загрузи картинку</span>
          </label>
        </form>
      </div>
    </div>
    <template #footer>
      <div class="buttons-container">
        <p-button class="p-button p-button-danger" @click="closeDialog" label="Отмена"></p-button>
        <p-button
          class="p-button p-button-success"
          @click="addNewCourse"
          label="Создать"
        ></p-button>
      </div>
    </template>
  </p-dialog>
</template>

<script setup lang="ts">
import PDialog from 'primevue/dialog'
import PEditor from 'primevue/editor'
import PButton from 'primevue/button'
import PInputText from 'primevue/inputtext'
import PInputNumber from 'primevue/inputnumber'
import PMultiSelect from 'primevue/multiselect'

import TeacherAvatar from '@/components/ui/TeacherAvatar.vue'

import { useCourse } from '@/composables/useCourse'
import { useTeacher } from '@/composables/useTeacher'

const { teacherList } = useTeacher()

const {
  addContent,
  visibleAddModal,
  newCourse,
  clearContent,
  uploadImage,
  toggleVisibleAddCourse
} = useCourse()

async function onUpload(e: any) {
  const image = e.target.files[0]
  await uploadImage(image)
}

async function addNewCourse() {
  await addContent()
  clearContent()
  toggleVisibleAddCourse()
}

function closeDialog() {
  clearContent()
  toggleVisibleAddCourse()
}
</script>

<style scoped lang="scss">
.two-at-one {
  display: flex;
  justify-content: space-between;
}
.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}
.inputfile {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

:deep(.p-dialog) {
  width: 80vw;
  height: 80vh;
}
.short-description .p-editor-container {
  height: 300px;
  margin-bottom: 30px;
}

.long-description .p-editor-container {
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

.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 0.1rem;

  .p-button {
    width: 150px;
    margin: 10px 10px;
  }
}

.teacher-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .label {
    font-size: 1.2rem;
    font-weight: 500;
  }
}

.teacher-chips {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
