<template>
  <div class="container">
    <p-button
      class="p-button p-button-success p-button-rounded p-button-outlined p-button-bg"
      @click="toggleVisibleAddRequest"
      label="Записаться на пробный урок"
      icon="pi pi-plus"
    />
  </div>
  <AddRequestModal />
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useRequest } from '@/composables/useRequest'
import AddRequestModal from './modals/AddRequestModal.vue'

const { toggleVisibleAddRequest } = useRequest()
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20px;

  .p-button {
    background-color: #000000;
    color: white;
    border: none;
    box-shadow: inset 0 0 0 3px;
    font-size: 0.9rem;
  }
}
</style>
