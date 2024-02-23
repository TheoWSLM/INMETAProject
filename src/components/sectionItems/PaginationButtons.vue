<template>
  <div class="flex items-center justify-between">
    <button
      :disabled="currentPage === 1"
      :class="{ 'opacity-20': currentPage === 1 }"
      @click="prevPage"
      class="relative items-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br bg-purple-900 hover:bg-purple-1000 hover:text-white dark:text-white"
    >
      <span
        class="flex items-center px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        <svg
          class="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Anterior
      </span>
    </button>
    <div>
      <h1 class="text-pretty items-center px-2.5 py-2.5 hidden sm:inline">Página</h1>
      <h1 :class="['text-pretty', 'flex', 'items-center', 'px-2.5', 'py-2.5', 'sm:inline']">
        {{ currentPage }}
      </h1>
    </div>
    <button
      :disabled="!nextPageExist || buttonDisabled"
      :class="{ 'opacity-20': !nextPageExist || buttonDisabled }"
      @click="nextPage"
      class="relative items-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br bg-purple-900 hover:bg-purple-1000 hover:text-white dark:text-white"
    >
      <span
        class="flex items-center px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        Próxima
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    nextPageExist: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      buttonDisabled: false
    }
  },
  methods: {
    nextPage() {
      this.buttonDisabled = true
      this.$emit('next-page')
      setTimeout(() => {
        this.buttonDisabled = false
      }, 1000)
    },
    prevPage() {
      this.$emit('prev-page')
    }
  }
}
</script>
