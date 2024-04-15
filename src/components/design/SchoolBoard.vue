<template>
  <div class="brace">
    <div class="wood opora top" />
    <div class="wood opora left" />
    <div class="wood opora right" />
    <div class="wood opora bottom" />

    <div class="shelf" />
    <div class="brash">
      <div class="contur" />
    </div>

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

  .shelf {
    width: 25%;
    height: 35px;
    background: #ffffff;
    position: absolute;
    bottom: 37px;
    z-index: 10;
    left: 100px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  .brash {
    width: 20%;
    height: 120px;
    background: white;
    position: absolute;
    bottom: 40%;
    z-index: 10;
    left: 40%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    transform: rotate(30deg);
    border-radius: 30px;
    background-image: url('https://st2.depositphotos.com/1502315/9929/i/450/depositphotos_99297280-stock-photo-couscous-as-background-texture.jpg');
  }

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
    z-index: 10;
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
    width: 110%;
    bottom: -5%;
    left: -5%;
    height: 80px;
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
    padding-top: 60px;
  }
}
</style>
