<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <h1 class="logo">FLAGMAN SCHOOL</h1>
      </router-link>
      <div class="navigation-buttons">
        <p-button class="button about-us" label="О нас"></p-button>
        <p-button
          v-if="!user"
          class="button enter"
          @click="googleRegister"
          label="Войти"
        ></p-button>
        <p-button v-else class="button enter" @click="googleLogout" label="Выйти"></p-button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useUser } from '@/composables/useUser'

const { user, googleLogout, googleRegister } = useUser()
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 60px;
  color: black;
  text-align: center;
  background-color: white;
  margin: 0 auto;

  .navigation-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    .enter {
      background-color: #000;
      color: white;
    }

    .about-us {
      background-color: #ececec;
      color: black;
    }

    .button {
      font-size: 1rem;
      padding: 0.45rem 1rem;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: inherit;
    max-width: 1550px;
    margin: 0 auto;
  }

  .navbar-brand {
    display: inline-block;
    font-size: 18px;
    white-space: nowrap;
    text-decoration: none;
    color: #333;
    font-family: Rubik Doodle Shadow;
  }

  .navbar-brand img {
    height: 50px;
    margin: auto auto;
  }

  .navbar-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-size: 18px;
    line-height: 60px;
    white-space: nowrap;
    text-decoration: none;
    color: #333;
  }

  .navbar-item {
    display: inline-block;
    padding: 0 15px;
    font-size: 18px;
    line-height: 60px;
    white-space: nowrap;
    text-decoration: none;
    color: #333;
  }

  .navbar-item:hover {
    color: #000;
  }
}

@media (max-width: 768px) {
  .navbar {
    height: 50px;

    .container {
      padding: 0.2rem 0.7rem;
      justify-content: space-around;
    }

    .navbar-brand {
      h1 {
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: 1550px) {
  .navbar {
    height: 50px;

    .container {
      padding: 0.2rem 3rem;
      justify-content: space-between;
    }

    .navbar-brand {
      h1 {
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: 568px) {
  .navbar {
    height: 50px;

    .container {
      padding: 0.2rem 0.7rem;
      justify-content: space-around;
    }

    .navbar-brand {
      h1 {
        font-size: 1rem;
      }
    }
  }
}
</style>
