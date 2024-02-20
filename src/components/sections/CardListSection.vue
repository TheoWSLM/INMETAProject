<template>
  <div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <TitleAndDescription :title="'Cartas disponíveis'" :description="'Aqui estão todas as cartas registradas!'"/>

      <div class="grid md:grid-cols-4 gap-16">
        <div
          v-for="(card, cardIndex) in content"
          :key="cardIndex"
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-4"
        >
        <img
        :src="card.imageUrl"
        :alt="card.name"
        class="w-9/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-125"
      />
      <p class="text-lg font-bold text-center text-gray-500 dark:text-white mb-4">
        {{ card.name }}
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
import TitleAndDescription from '../sectionItems/TitleAndDescription.vue';

export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    components: { TitleAndDescription }
}
</script>
