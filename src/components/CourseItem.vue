<template>
  <div class="course-card" @click="goToCoursePage(item.id)">
    <img :src="item.image" alt="Картинка курса" class="course-preview" />

    <div class="content">
      <span class="course-name">{{ item.title }}</span>
      <div class="short-desc" v-html="item.shortDescription"></div>
      <div class="course-info">
        <div class="info">
          <p-tag :value="dateFormmatter(item.created)" icon="pi pi-calendar" class="tag-element" />
          <p-tag :value="item.duration" icon="pi pi-clock" class="tag-element" />
          <p-tag
            :value="`${item.age.start} - ${item.age.end} лет`"
            icon="pi pi-user"
            class="tag-element"
          />
        </div>
        <p-button
          label="Подробнее"
          icon="pi pi-chevron-right"
          icon-pos="right"
          @click.stop="goToCoursePage(item.id)"
          class="p-button-sm about-button"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { dateFormmatter } from '@/utils'
import { useRouter } from 'vue-router'
import PTag from 'primevue/tag'

const router = useRouter()

function goToCoursePage(id: string) {
  router.push(`/course/${id}`)
}

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.course-card {
  width: 100%;
  max-width: 500px;
  min-width: 500px;
  max-height: 400px;
  min-height: 400px;
  margin: 0 auto;
  border-radius: 1rem;
  margin: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;

  .course-preview {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .content {
    position: relative;
    top: -20px;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 20px;
    background-color: white;

    .short-desc {
      min-height: 5rem;
    }

    .course-name {
      font-size: 3rem;
      font-weight: 700;
    }

    .course-duration {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .course-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .about-button {
        font-size: 1.1rem;
        height: 1.75rem;
        background-color: #000;
        color: white;
      }

      .tag-element {
        margin-right: 10px;
        border-radius: 1rem;
        padding: 0.3rem 0.6rem;
        background-color: #ececec;
        color: black;
      }

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .date-info {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .course-card {
    max-width: 330px;
    min-width: 330px;
    max-height: 450px;
    min-height: 450px;

    .content {
      padding: 10px;

      .course-name {
        font-size: 2rem;
      }

      .course-info {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 0.75rem;

        .info {
          gap: 0.5rem;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;

          :deep(.p-tag) {
            width: 40%;
          }
        }

        .p-button-sm {
          font-size: 1rem;
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .course-card {
    max-width: 300px;
    min-width: 300px;
    max-height: 370px;
    min-height: 370px;

    .course-preview {
      width: 100%;
      height: 150px;
      object-fit: cover;
      object-position: center;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    .content {
      padding: 10px;

      .course-name {
        font-size: 1.2rem;
      }

      .short-desc {
        font-size: 0.9rem;
      }

      .course-info {
        .info {
          gap: 0.5rem;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          font-size: 0.9rem;

          :deep(.p-tag) {
            width: 40%;
          }
        }

        .p-button-sm {
          font-size: 1rem;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) and (min-width: 850px) {
  .course-card {
    max-width: 650px;
    min-width: 650px;
    max-height: 400px;
    min-height: 400px;
  }
}

@media screen and (max-width: 1752px) and (min-width: 1512px) {
  .course-card {
    max-width: 650px;
    min-width: 650px;
    max-height: 400px;
    min-height: 400px;
  }
}
</style>
