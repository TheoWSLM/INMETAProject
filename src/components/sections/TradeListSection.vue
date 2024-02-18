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
        <button class="relative inline-flex items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-amber-500 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {{ content[0].descriptionButton }}
      </span>
      </button>
      </div>

      <div class="grid md:grid-cols-3 gap-16">
        <TradeFeature
          v-for="(trade, tradeIndex) in content[0].trades"
          :key="tradeIndex"
          :trade="trade"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TradeFeature from '../sectionItems/TradeFeature.vue'

export default {
  components: {
    TradeFeature
  },
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
