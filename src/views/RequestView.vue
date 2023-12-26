<template>
  <template v-if="user?.status === 'admin'">
    <section class="access">
      <p-datatable :value="requestComputed as (keyof any)[]">
        <p-column
          v-for="column in columns"
          :key="column.field"
          :field="column.field"
          :header="column.header"
        />
      </p-datatable>
    </section>
  </template>
  <template v-else>
    <section class="no-access">
      <h1>У вас нет доступа к этой странице</h1>
      <router-link class="link-to-home" to="/">На главную</router-link>
    </section>
  </template>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/useUser'
import PDatatable from 'primevue/datatable'
import PColumn from 'primevue/column'
import { useRequest } from '@/composables/useRequest'
import { onMounted, ref } from 'vue'
import type { Request, DataTableField } from '@/interfaces'

const { user } = useUser()
const { requestList, getAllRequest, requestComputed } = useRequest()

const columns = ref<DataTableField[]>([
  {
    header: 'Дата',
    field: 'date'
  },
  {
    header: 'Имя родителя',
    field: 'parentName'
  },
  {
    header: 'Имя ребенка',
    field: 'childrenName'
  },
  {
    header: 'Телефон',
    field: 'phone'
  },
  {
    header: 'Возраст',
    field: 'age'
  },
  {
    header: 'Класс',
    field: 'class'
  }
])

onMounted(async () => {
  await getAllRequest()
})
</script>

<style scoped>
:deep(.p-datatable) {
  width: 100%;
  height: 100%;
  min-height: 85vh;
}

.no-access,
.access {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 85vh;
}
.link-to-home {
  display: block;
  margin-top: 1rem;
  text-decoration: none;
  color: black;
  background-color: #818cf8;
  padding: 0.5rem 1rem;
}
</style>
