<template>
  <section class="trial-lesson" id="trial-lesson">
    <MolbertDesign>
      <template #paper-content>
        <template v-if="!message">
          <span class="header">Оставить заявку на пробный урок</span>
          <span class="text">Заполните форму и мы свяжемся с вами в ближайшее время</span>

          <div class="p-fluid">
            <template v-for="field in Object.keys(types)" :key="field">
              <div class="p-field">
                <v-field v-slot="{ handleChange, value, errorMessage }" :name="field">
                  <template v-if="types[field] === 'input'">
                    <p-input-text
                      :model-value="value"
                      :id="values[schema[field]]"
                      type="text"
                      :placeholder="localizition[field]"
                      :class="[errorMessage ? 'p-invalid' : '']"
                      @update:model-value="handleChange"
                    />
                  </template>
                  <template v-else-if="types[field] === 'mask'">
                    <p-input-mask
                      :model-value="value"
                      :id="values[schema[field]]"
                      mask="+7 (999) 999-99-99"
                      :placeholder="localizition[field]"
                      :class="[errorMessage ? 'p-invalid' : '']"
                      @update:model-value="handleChange"
                    />
                  </template>
                  <template v-else-if="types[field] === 'dropdown'">
                    <p-dropdown
                      :model-value="value"
                      :id="values[schema[field]]"
                      :options="field === 'course' ? courseList : classes"
                      :optionLabel="field === 'course' ? 'title' : 'label'"
                      :optionValue="field === 'course' ? 'title' : 'value'"
                      :show-clear="true"
                      :placeholder="localizition[field]"
                      :class="[errorMessage ? 'p-invalid' : '']"
                      @update:model-value="handleChange"
                    />
                  </template>
                  <template v-else-if="types[field] === 'number'">
                    <p-input-number
                      :model-value="value"
                      :id="values[schema[field]]"
                      :max="25"
                      :min="5"
                      :placeholder="localizition[field]"
                      :class="[errorMessage ? 'p-invalid' : '']"
                      @update:model-value="handleChange"
                    />
                  </template>
                  <small class="error-message">{{ errorMessage }}</small>
                </v-field>
              </div>
            </template>
          </div>

          <div class="save-container" @click="toggleAddRequest">
            <div class="spooky"></div>
            <div class="border"></div>
            <button class="button save-button">
              Записаться
              <i class="pi pi-plus" />
            </button>
          </div>
        </template>
        <template v-else>
          <span class="success-message">{{ message }}</span>
        </template>
      </template>
    </MolbertDesign>
  </section>
</template>

<script setup lang="ts">
import PDropdown from 'primevue/dropdown'
import PInputText from 'primevue/inputtext'
import PInputMask from 'primevue/inputmask'
import PInputNumber from 'primevue/inputnumber'
import { useRequest } from '@/composables/useRequest'
import { useCourse } from '@/composables/useCourse'
import MolbertDesign from '@/components/design/MolbertDesign.vue'
import { classes, localizition, schema, types } from '@/logics'
import { ref } from 'vue'
import type { Request } from '@/interfaces'
import { Field as VField, useForm } from 'vee-validate'

const isDisabeld = ref(true)

const { validate, values } = useForm({
  validationSchema: schema
})

const handleValidation = async () => {
  const valid = await validate()
  isDisabeld.value = !valid.valid
  return isDisabeld.value
}

const message = ref('')
const { newRequest, addRequest, clearRequest } = useRequest()
const { courseList } = useCourse()

async function toggleAddRequest() {
  if (await handleValidation()) return

  newRequest.value = values.value
  await addRequest()
  clearRequest()
  message.value = 'Мы записали вашу заявку, скоро с вами свяжемся'
}
</script>

<style lang="scss" scoped>
.trial-lesson {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 105vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url('');

  .paper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;

    .header {
      font-family: 'Oswald', sans-serif;
      font-size: 36px;
    }

    .text {
      font-family: 'Oswald', sans-serif;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }

    .p-fluid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;

      .p-field {
        font-family: 'Times New Roman', Times, serif;
        width: 100%;
      }
    }

    .save-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin-top: 3%;

      .border {
        width: 10%;
        background-color: #ffe993;
        height: 30px;
        border: 2px solid black;
        border-right: none;
      }

      .spooky {
        position: relative;
        width: 15%;
        height: 38px;
        background-color: black;
        border-radius: 50%;
        border-top-left-radius: 120%;
        border-bottom-left-radius: 120%;
        margin-right: -10px;
      }

      .save-button {
        font-size: calc(10px + 0.625vw);
        font-family:
          Franklin Gothic Medium,
          Arial Narrow,
          Arial,
          sans-serif;
        text-align: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75%;
        background-color: #fcaa51;
        border-top-right-radius: 45%;
        border-bottom-right-radius: 45%;
        height: 30px;

        .pi-plus {
          font-size: calc(8.33333px + 0.52083vw);
          text-align: center;
          cursor: pointer;
          width: -moz-fit-content;
          width: fit-content;
          margin-top: 3px;
          margin-left: 5px;
        }
      }
    }

    :deep(.p-inputtext) {
      background: transparent;
      border: none;
      border-bottom: 1px solid black;
      border-radius: 0px;
      width: 100%;

      :focus {
        border: none;
        outline: none;
      }
    }

    :deep(.p-dropdown) {
      background: transparent;
      border: none;
      border-bottom: 1px solid black;
      border-radius: 0px;
      width: 100%;
    }

    :deep(.p-dropdown .p-inputtext) {
      border: none;
    }
  }
}

:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item) {
  background-color: bisque !important;
}

.success-message {
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  text-align: center;
  margin-top: 20px;
  color: #fcaa51;
}

@media (max-width: 768px) {
  .trial-lesson {
    height: 110vh;

    .paper {
      .header {
        text-align: center;
        font-size: 36px;
        line-height: 1.2;
      }

      .text {
        font-size: 16px;
      }

      .p-fluid {
        .p-field {
          font-size: 16px;
        }
      }
    }
  }

  .save-button {
    font-size: 20px !important;
  }
}

@media (max-width: 400px) {
  .trial-lesson {
    height: 120vh;

    .paper {
      .header {
        text-align: center;
        font-size: 28px;
        line-height: 1.2;
      }

      .text {
        font-size: 12px;
      }

      .p-fluid {
        .p-field {
          font-size: 12px;

          :deep(.p-inputtext) {
            font-size: 12px;
          }
        }
      }
    }
  }

  .save-button {
    font-size: 20px !important;
  }
}

.error-message {
  width: 100%;
  margin: 0 auto;
  color: black;
  font-weight: 600;
  text-align: center;
}
</style>
