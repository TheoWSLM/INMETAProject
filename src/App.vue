<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterFixed from './components/FooterFixed.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
  <RouterView />
  </div>
  <footer>
    <FooterFixed />
  </footer>
</template>
