<template>
  <div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div class="grid md:grid-cols-3 gap-16">
        <TradeFeature v-for="(trade, tradeIndex) in content" :myTrade="myTrade" :key="tradeIndex" :trade="trade" />
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
    myTrade:{
        type: Boolean,
        required: false,
        default:false
      }
  }
}
</script>
