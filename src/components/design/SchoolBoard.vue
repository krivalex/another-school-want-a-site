<template>
  <div class="brace">
    <div class="wood opora top" />
    <div class="wood opora left" />
    <div class="wood opora right" />
    <div class="wood opora bottom" />

    <div class="panel">
      <slot name="board-content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brace {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  position: relative;
  margin: 0 auto;

  .wood {
    background: url('@/components/design/design-assets/wood.jpg');
    filter: contrast(1.2);
  }

  .opora {
    width: 50px;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-position: center;
    background-size: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    position: absolute;
  }

  .top {
    width: 105%;
    top: -3.5%;
    left: -2.5%;
    height: 50px;
    z-index: 1;
  }

  .left {
    left: -2.5%;
    top: 0.5%;
  }

  .right {
    right: -2.5%;
    top: 0.5%;
  }

  .bottom {
    width: 105%;
    bottom: -3.5%;
    left: -2.5%;
    height: 50px;
    z-index: 1;
  }

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: inherit;
    background-color: #365722;
  }
}
</style>
