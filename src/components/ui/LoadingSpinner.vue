<template>
  <div class="loading-container">
    <i class="pi pi-spin pi-spinner" />
  </div>
</template>

<style lang="scss" scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 1000;

  .pi-spinner {
    font-size: 3rem;
  }
}
</style>
