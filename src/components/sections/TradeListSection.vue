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
        <a
          href="#"
          class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          {{ content[0].descriptionButton }}
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
        </a>
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
