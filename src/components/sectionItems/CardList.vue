<template>
  <div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div class="rounded-lg p-6 md:p-6">
        <h1 class="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2">
          {{ content[0].title }}
        </h1>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
          {{ content[0].description }}
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-16">
        <div
          v-for="(card, cardIndex) in content[0].cards"
          :key="cardIndex"
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-4"
        >
          <img
            src="@/assets/cardtest.jpeg"
            alt="Banner"
            class="w-9/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-150"
          />
          <p class="text-lg font-bold text-center text-gray-500 dark:text-white mb-4">
            {{ card.description }}
          </p>

          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div class="mx-4">
              <button
                type="button"
                class="text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Trocar
              </button>
            </div>
            <button
              type="button"
              class="text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
            >
              Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
