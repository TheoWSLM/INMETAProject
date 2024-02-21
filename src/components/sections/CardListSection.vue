<template>

    
        <div
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-4"
        >
          <img
            :src="cardInfo.imageUrl"
            :alt="cardInfo.name"
            class="w-9/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-125"
          />
          <p class="text-lg font-bold text-center text-gray-500 dark:text-white mb-4">
            {{ cardInfo.name }}
          </p>

            <div class="flex mx-auto gap-4 items-end">
    <button
        type="button"
        class="relative inline-flex items-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300"
    >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Adicionar
        </span>
    </button>

    <button @click="showModal = true" class="relative inline-flex items-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Detalhes
        </span>
    </button>
</div>


        </div>
  <CardDetailModal v-if="showModal" :card="cardInfo" :showModal="showModal" @close="showModal = false"  />
</template>

<script>
import CardDetailModal from '../sectionItems/CardDetailModal.vue';

export default {
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  },
    data() {
      return {
        showModal: false
      }
    },
  components: { CardDetailModal }
}
</script>
