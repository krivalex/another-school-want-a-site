<template>
  <p-button
    class="p-button p-button-success p-button-rounded p-button-outlined p-button-bg"
    @click="toggleVisibleAddRequest"
    label="Оставить заявку"
    icon="pi pi-plus"
  />
  <AddRequestModal />
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useRequest } from '@/composables/useRequest'
import AddRequestModal from './modals/AddRequestModal.vue'

const { toggleVisibleAddRequest } = useRequest()
</script>

<style scoped>
.p-button {
  position: fixed;
  bottom: 15px;
  right: 20px;
  z-index: 100;
  background-color: #000000;
}
</style>
