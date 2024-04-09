<template>
  <div class="molbert">
    <div class="wood counter right-down" />
    <div class="wood counter left-down" />
    <div class="wood counter bottom-center" />

    <div class="paper">
      <slot name="paper-content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.molbert {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  .counter {
    background-position: center;
    background-size: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    position: absolute;
  }

  .bottom-center {
    width: 120%;
    bottom: -3%;
    left: -10%;
    height: 50px;
    z-index: 20;
  }

  .right-down {
    width: 50px;
    height: 140%;
    bottom: -30%;
    left: 10%;
    transform: rotate(10deg);
    z-index: -1;
  }

  .left-down {
    width: 50px;
    height: 140%;
    bottom: -30%;
    right: 10%;
    transform: rotate(-10deg);
    z-index: 1;
  }

  .wood {
    background: url('@/components/design/design-assets/wood.jpg');
    filter: contrast(1.2);
  }

  .paper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: #fdf7c0;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
}
</style>
