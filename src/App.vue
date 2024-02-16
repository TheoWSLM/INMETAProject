<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterFixed from './components/FooterFixed.vue';
</script>

<template>
  <header>
      <NavBar/>
    </header>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
<footer>
  <FooterFixed/>
</footer>

  <RouterView />
</template>


