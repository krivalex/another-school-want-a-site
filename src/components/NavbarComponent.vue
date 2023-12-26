<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <h1 class="logo">FLAGMAN SCHOOL</h1>
      </router-link>
      <p-button
        class="enter"
        v-if="!user"
        @click="googleRegister"
        label="Войти"
        icon="pi pi-sign"
      ></p-button>
      <p-button
        class="enter"
        v-if="user"
        @click="googleLogout"
        label="Выйти"
        icon="pi pi-sign-out"
      ></p-button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useUser } from '@/composables/useUser'

const { user, googleLogout, googleRegister } = useUser()
</script>

<style scoped>
.navbar {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  color: black;
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: inherit;
}

.navbar-brand {
  display: inline-block;
  padding: 0 25px;
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

.enter {
  background-color: #818cf8;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-right: 1rem;
}
</style>
