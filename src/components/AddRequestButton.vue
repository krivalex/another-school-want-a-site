<template>
  <div class="container">
    <p-button
      class="p-button p-button-success p-button-rounded p-button-outlined p-button-bg"
      @click="scrollToTrialSection"
      label="Записаться на пробный урок"
      icon="pi pi-plus"
    />
  </div>
  <AddRequestModal />
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import AddRequestModal from './modals/AddRequestModal.vue'

function scrollToTrialSection() {
  const trialSection = document.getElementById('trial-lesson')
  trialSection?.scrollIntoView({ behavior: 'smooth' })
}
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

@media screen and (max-width: 768px) {
  .container {
    display: none;
  }
}
</style>
