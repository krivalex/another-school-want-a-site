<template>
  <p-dialog v-model:visible="visibleAddTeacherModal" header="Добавить преподавателя" :modal="true">
    <div class="p-fluid">
      <div class="p-field">
        <label for="name">Имя</label>
        <p-input-text id="name" type="text" v-model="newTeacher.name" />
      </div>
      <div class="p-field">
        <label for="surname">Фамилия</label>
        <p-input-text id="surname" type="text" v-model="newTeacher.surname" />
      </div>
      <div class="p-field">
        <label for="phone">Номер телефона</label>
        <p-input-mask id="phone" v-model="newTeacher.phone" mask="+7 (999) 999-99-99" />
      </div>
      <div class="p-field">
        <label for="position">Уровень</label>
        <p-dropdown
          id="position"
          v-model="newTeacher.level"
          :options="levelVariants"
          optionLabel="label"
          optionValue="value"
        />
      </div>
      <div class="p-field">
        <label for="experience">Дата рождения</label>
        <p-calendar id="experience" v-model="newTeacher.dateBorning" />
      </div>

      <div class="p-field">
        <label for="course">Курс</label>
        <p-multi-select
          v-model="newTeacher.courses"
          id="course"
          :options="courseList"
          optionLabel="title"
          optionValue="title"
        />
      </div>
      <div class="p-field">
        <label for="course">Время работы</label>
        <p-input-mask
          v-model="newTeacher.timeToWork"
          id="course"
          mask="99:99-99:99"
          @update:model-value="changerTimeToWork"
        />
      </div>
    </div>
    <div class="buttons-container">
      <p-button class="p-button p-button-danger" @click="closeDialog" label="Отмена"></p-button>
      <p-button class="p-button p-button-success" @click="addNewTeacher" label="Создать"></p-button>
    </div>
  </p-dialog>
</template>

<script setup lang="ts">
import PDialog from 'primevue/dialog'
import PButton from 'primevue/button'
import PInputText from 'primevue/inputtext'
import PDropdown from 'primevue/dropdown'
import PCalendar from 'primevue/calendar'
import PMultiSelect from 'primevue/multiselect'
import PInputMask from 'primevue/inputmask'

import { useTeacher } from '@/composables/useTeacher'
import { useCourse } from '@/composables/useCourse'

const { courseList } = useCourse()
const {
  teacher,
  teacherList,
  newTeacher,
  visibleAddTeacherModal,
  loading,
  getAllTeacher,
  getTeacherById,
  addTeacher,
  clearTeacher,
  toggleVisibleAddTeacher
} = useTeacher()

function closeDialog() {
  toggleVisibleAddTeacher()
  clearTeacher()
}

async function addNewTeacher() {
  await addTeacher()
  closeDialog()
}

function changerTimeToWork() {
  if (newTeacher.value?.timeToWork) {
    const [start, end] = newTeacher.value.timeToWork.split('-')
    const [startHour, startMinute] = start.split(':')
    const [endHour, endMinute] = end.split(':')

    if (Number(startHour) >= 24) {
      const newStartHour = 23
      newTeacher.value.timeToWork = `${newStartHour}:${startMinute}-${end}`
    }

    if (Number(endHour) >= 24) {
      const newEndHour = 23
      newTeacher.value.timeToWork = `${start}-${newEndHour}:${endMinute}`
    }

    if (Number(startMinute) >= 59) {
      const newStartMinute = 59
      newTeacher.value.timeToWork = `${startHour}:${newStartMinute}-${end}`
    }

    if (Number(endMinute) >= 59) {
      const newEndMinute = 59
      newTeacher.value.timeToWork = `${start}-${endHour}:${newEndMinute}`
    }
  }
}

const levelVariants = [
  { label: 'Junior', value: 'Junior' },
  { label: 'Middle', value: 'Middle' },
  { label: 'Senior', value: 'Senior' }
]
</script>

<style scoped lang="scss"></style>
