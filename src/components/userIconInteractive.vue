<template>
  <div class="flex items-center gap-4">
    <img
      id="avatarButton"
      type="button"
      data-dropdown-toggle="userDropdown"
      data-dropdown-placement="bottom-start"
      class="w-16 h-16 rounded-full hover:animate-pulse cursor-pointer"
      :src="userInfo ? loggedIcon : unloggedIcon"
      alt="User dropdown"
    />

    <div v-if="userInfo" class="hidden md:block font-medium dark:text-white">
      <div>{{ userInfo.user.name }}</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">{{ userInfo.user.email }}</div>
    </div>
  </div>

  <!-- Dropdown menu -->
  <div
    id="userDropdown"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-600"
  >
    <!-- User logado -->
    <ul
      v-if="userInfo && userInfo.user.id"
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <div v-if="userInfo" class="px-4 py-3 text-sm text-gray-900 dark:text-white md:hidden">
        <div>{{ userInfo.user.name }}</div>
        <div class="font-medium truncate">{{ userInfo.user.email }}</div>
      </div>
      <li>
        <RouterLink
          to="/"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >Página inicial</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/user"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >Cartas e trocas</RouterLink
        >
      </li>
    </ul>
    <div v-if="userInfo && userInfo.user.id" class="py-1">
      <a
        @click="logOff"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >Sair</a
      >
    </div>

    <!-- user desconectado -->
    <div v-if="!userInfo || !userInfo.user.id">
      <button
        data-modal-toggle="authentication"
        class="block w-full text-start px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        Login
      </button>
      <div class="py-1">
        <RouterLink
          to="/register"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >Registre-se</RouterLink
        >
      </div>
    </div>
  </div>

  <LoginModal />
</template>

<script>
import { mapState } from 'vuex'
import LoginModal from './LoginModal.vue'
import { RouterLink } from 'vue-router'
import IconLogged from '@/assets/IconLogged.png'
import IconUnlogged from '@/assets/IconUnlogged.png'
import alertService from '@/services/alertService'

export default {
  data() {
    return {
      loggedIcon: IconLogged,
      unloggedIcon: IconUnlogged
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    LoginModal,
    RouterLink
  },
  methods: {
    logOff() {
      this.$store
        .dispatch('logoutUser')
        .then(() => {
          alertService.showMessage('success', 'Sair', 'Usuário deslogado com sucesso')
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
        .catch(() => {
          alertService.showMessage(
            'error',
            'Sair',
            'Usuario não pode ser deslogado, verifique sua conexão e tente novamente'
          )
        })
    }
  }
}
</script>
