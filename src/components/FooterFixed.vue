<template>
  <footer class="w-full rounded-lg shadow">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <RouterLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="./icons/YuGiCards.png" class="h-14" alt="YuGiCards Logo" />
        </RouterLink>
        <ul
          class="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <RouterLink to="/how-it-works" class="hover:underline me-4 md:me-6"
              >Como funciona?</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/about" class="hover:underline me-4 md:me-6">Sobre</RouterLink>
          </li>
          <li>
            <RouterLink to="/contacts" class="hover:underline">Contatos</RouterLink>
          </li>
        </ul>
      </div>
      <hr class="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >2024, feito por Theo Weber</span
      >
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>
