<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
  color: black;
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-brand {
  display: inline-block;
  padding: 0 15px;
  font-size: 18px;
  line-height: 60px;
  white-space: nowrap;
  text-decoration: none;
  color: #333;
}

.navbar-brand img {
  height: 60px;
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
</style>
