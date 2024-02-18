<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterFixed from './components/FooterFixed.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
  <footer>
    <FooterFixed />
  </footer>
</template>
