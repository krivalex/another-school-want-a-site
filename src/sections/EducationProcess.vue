<template>
  <section class="full-education-process-section">
    <SchoolBoard>
      <template #board-content>
        <div class="full-education-process">
          <div class="education-process">
            <div class="row">
              <div class="column">
                <div class="block standart">
                  <span class="header">{{ educationProcessEvents.plan.header }} </span>
                  <span v-html="educationProcessEvents.plan.desc" class="text" />
                </div>

                <div class="block standart">
                  <span class="header"> {{ educationProcessEvents.diagnostic.header }} </span>
                  <span v-html="educationProcessEvents.diagnostic.desc" class="text" />
                </div>
              </div>

              <div class="big-vertical-block standart">
                <span class="header"> {{ educationProcessEvents.progress.header }} </span>
                <span v-html="educationProcessEvents.progress.desc" class="text" />
              </div>

              <div class="column">
                <div class="block standart">
                  <span class="header"> {{ educationProcessEvents.control.header }} </span>
                  <span v-html="educationProcessEvents.control.desc" class="text" />
                </div>

                <div class="block standart">
                  <span class="header"> {{ educationProcessEvents.homework.header }} </span>
                  <span v-html="educationProcessEvents.homework.desc" class="text" />
                </div>
              </div>
            </div>

            <div class="row-halfer">
              <div class="big-horizontal-block standart">
                <span class="header"> {{ educationProcessEvents.feedback.header }}</span>
                <span v-html="educationProcessEvents.feedback.desc" class="text" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </SchoolBoard>
  </section>
</template>

<script setup lang="ts">
import { educationProcessEvents } from '@/logics/meta.constants'
import SchoolBoard from '@/components/design/SchoolBoard.vue'
</script>

<style scoped lang="scss">
.full-education-process-section {
  margin: 100px;
}
.full-education-process {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 105vh;
}

.education-process {
  width: 70vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 10px;
  position: relative;

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75%;
    gap: 10px;
  }

  .row-halfer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30%;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
}

.big-vertical-block {
  width: 50%;
  height: 100%;
}

.big-horizontal-block {
  width: 100%;
  height: 150%;
}

.block {
  width: 100%;
  height: 50%;
}

@media screen and (max-width: 768px) {
  .full-education-process-section {
    margin: 0;
    margin-top: 80px;
  }

  .full-education-process {
    height: 100%;

    .education-process {
      height: 100%;
      padding: 0px;
      padding-bottom: 45px;
    }
    .row {
      flex-direction: column;
      gap: 20px;
    }

    .column {
      width: 100%;
      gap: 20px;
    }

    .big-vertical-block {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1550px) and (min-width: 1000px) {
  .full-education-process {
    height: 116vh;
  }

  .education-process {
    padding: 0 10px;
    height: 90vh;
  }

  .text {
    font-size: 15px;
  }

  .big-horizontal-block {
    height: 150%;
  }
}
</style>
