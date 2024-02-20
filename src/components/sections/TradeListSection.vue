<template>
  <div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <TitleAndDescription
        :title="'Solicitações de troca em aberto'"
        :description="'Troque e atualize seu deck!'"
      />

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
import TitleAndDescription from '../sectionItems/TitleAndDescription.vue'
import TradeFeature from '../sectionItems/TradeFeature.vue'

export default {
  components: {
    TradeFeature,
    TitleAndDescription
  },
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
