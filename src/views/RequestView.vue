<template>
  <template v-if="user?.status === 'admin'">
    <section class="access">
      <p-datatable :value="requestComputed as (keyof any)[]" :loading="loading.allRequest">
        <p-column
          v-for="column in columns"
          :key="column.field"
          :field="column.field"
          :header="column.header"
          :sortable="true"
          :reorderableColumns="true"
        >
          <template #body="{ data, field }">
            <template v-if="field === 'status'">
              <p-dropdown
                v-model="data[field]"
                :options="statuses"
                :value="data[field]"
                option-label="label"
                option-value="value"
                @change="updateStatus(data)"
              />
            </template>
            <span v-else>{{ data[field] }}</span>
          </template>
        </p-column>
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
import PDropdown from 'primevue/dropdown'
import { useRequest } from '@/composables/useRequest'
import { onMounted, ref } from 'vue'
import type { Request, DataTableField } from '@/interfaces'

const { user } = useUser()
const { getAllRequest, requestComputed, requestList, updateRequest, loading } = useRequest()

const statuses = [
  { label: 'Новая', value: 'created' },
  { label: 'В работе', value: 'in-work' },
  { label: 'Отклонена', value: 'rejected' },
  { label: 'Отработана', value: 'completed' }
]

const updateStatus = async (data: Request) => {
  requestList.value.forEach(async (request: Request) => {
    if (request.id === data.id) {
      request.status = data.status
      await updateRequest(request)
    }
  })
}

const columns = ref<DataTableField<Request>[]>([
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
  },
  {
    header: 'Выбранный кружок',
    field: 'course'
  },
  {
    header: 'Статус',
    field: 'status'
  }
])

onMounted(async () => {
  await getAllRequest()
})
</script>

<style scoped lang="scss">
:deep(.p-datatable) {
  width: 100%;
  height: 100%;
  min-height: 85vh;
}

:deep(.p-datatable .p-dropdown) {
  width: 100%;
}

.no-access,
.access {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 85vh;
  font-family: 'PT Sans', sans-serif;
}
.link-to-home {
  display: block;
  margin-top: 1rem;
  text-decoration: none;
  color: black;
  background-color: #818cf8;
  padding: 0.5rem 1rem;
}

.status {
  display: flex;
  align-items: center;
  gap: 0.1rem;
}
</style>
