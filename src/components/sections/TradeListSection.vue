<template>
  <div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-2">
      <div class="grid md:grid-cols-3 gap-8">
        <TradeFeature
          v-for="(trade, tradeIndex) in content"
          :myTrade="myTrade"
          :key="tradeIndex"
          :trade="trade"
          @delete-trade="updateTrades"
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
      type: Object,
      required: true
    },
    myTrade: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    updateTrades() {
      this.$emit('delete-trade')
    }
  }
}
</script>
