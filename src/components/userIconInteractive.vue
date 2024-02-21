<template>
  <div class="flex items-center gap-4">
    <img v-if="userInfo"
      id="avatarButton"
      type="button"
      data-dropdown-toggle="userDropdown"
      data-dropdown-placement="bottom-start"
      class="w-16 h-16 rounded-full hover:animate-pulse cursor-pointer"
      src="../assets/IconLogged.png"
      alt="User dropdown"
    />
    <img v-if="!userInfo"
      id="avatarButton"
      type="button"
      data-dropdown-toggle="userDropdown"
      data-dropdown-placement="bottom-start"
      class="w-16 h-16 rounded-full hover:animate-pulse cursor-pointer"
      src="../assets/IconUnlogged.png"
      alt="User dropdown"
    />


    <div v-if="userInfo" class="hidden md:block font-medium dark:text-white">
      <div >{{ userInfo.user.name }}   </div>
      <div  class="text-sm text-gray-500 dark:text-gray-400">{{ userInfo.user.email }}</div>
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
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Minhas informações</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Cartas e trocas</a
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
    
<ul
      v-if="!userInfo || !userInfo.user.id"
      class="py-2 text-sm text-gray-800 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <a
          data-modal-target="authentication"
         data-modal-toggle="authentication"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Login</a
        >
      </li>
    </ul>
    <div v-if="!userInfo || !userInfo.user.id" class="py-1">
      <RouterLink
              to="/register"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Registre-se</RouterLink
            >
    </div>
  </div>

  <LoginModal/>
</template>

<script>
import { mapState } from 'vuex'
import LoginModal from './LoginModal.vue'
import { RouterLink } from 'vue-router'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  components:{
    LoginModal,
    RouterLink
  },
  methods:{
    logOff(){
        this.$store.dispatch('logoutUser')
    }
  },
}
</script>
