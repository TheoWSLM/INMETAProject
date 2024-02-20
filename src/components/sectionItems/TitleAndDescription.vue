<template>
  <div class="py-8 max-w-screen-xl lg:py-16">
    <h1
      class="mb-4 text-4xl text-start font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white"
    >
      {{ title }}
    </h1>
    <p
      class="mb-8 text-lg font-normal text-justify text-gray-500 lg:text-regular dark:text-gray-400"
    >
      {{ description }}
    </p>
    <button
      v-if="buttonText"
      class="relative inline-flex items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        {{ buttonText }}
      </span>
    </button>
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
    }
  }
}
</script>
