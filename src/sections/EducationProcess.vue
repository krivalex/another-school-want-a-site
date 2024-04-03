<template>
  <section class="full-education-process">
    <span class="desc-text">Как мы учим?</span>
    <div class="education-process">
      <div class="row">
        <div class="column">
          <div class="block standart">
            <span class="header">{{ educationProcessEvents.plan.header }} </span>
            <span class="text">{{ educationProcessEvents.plan.desc }}</span>
          </div>

          <div class="block standart">
            <span class="header"> {{ educationProcessEvents.diagnostic.header }} </span>
            <span class="text">{{ educationProcessEvents.diagnostic.desc }}</span>
          </div>
        </div>

        <div class="big-vertical-block standart">
          <span class="header"> {{ educationProcessEvents.progress.header }} </span>
          <span class="text">{{ educationProcessEvents.progress.desc }}</span>
        </div>

        <div class="column">
          <div class="block standart">
            <span class="header"> {{ educationProcessEvents.control.header }} </span>
            <span class="text">{{ educationProcessEvents.control.desc }}</span>
          </div>

          <div class="block standart">
            <span class="header"> {{ educationProcessEvents.homework.header }} </span>
            <span class="text">{{ educationProcessEvents.homework.desc }}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="big-horizontal-block standart">
          <span class="header"> {{ educationProcessEvents.feedback.header }}</span>
          <span class="text">{{ educationProcessEvents.feedback.desc }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { educationProcessEvents } from '@/logics/meta.constants'
</script>

<style scoped lang="scss">
.full-education-process {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100%;
}

.education-process {
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    gap: 10px;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    gap: 10px;
  }
}

.desc-text {
  font-family: 'Oswald', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 6rem;
  text-align: center;
  width: 100%;
  display: block;
}

.standart {
  background-color: #ececec;
  color: black;
  padding: 25px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Oswald', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  width: 100%;
  display: block;
  line-height: 1.2;
}

.text {
  font-size: 18px;
}

.big-vertical-block {
  width: 50%;
  height: 100%;
}

.big-horizontal-block {
  width: 100%;
  height: 50%;
}

.block {
  width: 100%;
  height: 50%;
}
</style>
