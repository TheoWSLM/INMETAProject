<template>
  <div class="py-4 max-w-screen-xl lg:py-8">
    <h1
      :class="[
        textSize,
        'mb-2 text-3xl text-start font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white'
      ]"
    >
      {{ title }}
    </h1>
    <p
      class="mb-4 text-lg font-normal text-justify text-gray-500 lg:text-regular dark:text-gray-400"
    >
      {{ description }}
    </p>
    <div class="p-0.5 mb-16 me-2">
      <button
        v-if="buttonText"
        @click="buttonClick"
        class="absolute inline-flex items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          {{ buttonText }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: ''
    },
    textSize: {
      type: String,
      default: ''
    }
  },
  methods: {
    buttonClick() {
      if (this.buttonText === 'Saber mais') {
        this.$router.push('/how-it-works')
      } else if (this.buttonText === 'Ver todas') {
        this.$router.push('/trades')
      } else if (this.buttonText === 'Portfólio') {
        window.location.href = 'https://theodev.tech'
      } else if (this.buttonText === 'Ver cartas') {
        this.$router.push('/cards')
      }
    }
  }
}
</script>
