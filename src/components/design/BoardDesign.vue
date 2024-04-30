<template>
  <div class="board">
    <div class="wood counter top" />
    <div class="wood counter right" />
    <div class="wood counter bottom" />
    <div class="wood counter left" />

    <div class="panel">
      <slot name="panel-content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 75vw;
  margin: 0 auto;
  background-image: url('https://img.freepik.com/premium-photo/cork-board-textured-background-blank-board-notes_136875-986.jpg?w=1380');
  position: relative;
  margin: 25px auto;

  .counter {
    background-position: center;
    background-size: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    position: absolute;
  }

  .wood {
    background: url('@/components/design/design-assets/wood.jpg');
    filter: contrast(1.2);
  }

  .bottom {
    width: 105%;
    bottom: -3.5%;
    left: -2.5%;
    height: 50px;
    z-index: 1;
  }

  .right {
    width: 50px;
    height: 105%;
    bottom: -3%;
    right: -2.5%;
  }

  .left {
    width: 50px;
    height: 105%;
    bottom: -3%;
    left: -2.5%;
  }

  .top {
    width: 105%;
    top: -3.5%;
    left: -2.5%;
    height: 50px;
    z-index: 4;
  }

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: inherit;
    height: inherit;
  }
}

@media (max-width: 768px) {
  .board {
    height: 100%;
    width: 92%;

    .bottom {
      height: 30px;
      bottom: -1.5%;
    }

    .right {
      width: 30px;
      top: -1.5%;
      height: 102.5%;
    }

    .left {
      width: 30px;
      top: -1.5%;
      height: 102.5%;
    }

    .top {
      height: 30px;
      top: -1.5%;
    }
  }
}
</style>
