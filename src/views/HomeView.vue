<template>
  <div class="sm:mt-4 mt-16">
    <BannerSection />
  </div>
  <TitleAndDescription
    class="mt-8"
    :title="'Solicitações de troca em aberto'"
    :description="'Troque e atualize seu deck!'"
    :buttonText="'Ver todas'"
  />
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-2 flex justify-center">
    <div class="grid md:grid-cols-3 sm:grid-cols-auto gap-8">
      <TradeFeature
        v-for="(trade, tradeIndex) in data"
        :myTrade="false"
        :key="tradeIndex"
        :trade="trade"
        @delete-trade="getAllTrades"
      />
    </div>
  </div>
  <div class="mt-16">
    <AdvantagesCallToAction />
  </div>
</template>

<script>
import TradeFeature from '@/components/sectionItems/TradeFeature.vue'
import AdvantagesCallToAction from '@/components/sections/AdvantagesCallToActionSection.vue'
import BannerSection from '@/components/sections/BannerSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import alertService from '@/services/alertService'

export default {
  components: {
    AdvantagesCallToAction,
    TradeFeature,
    BannerSection,
    TitleAndDescription
  },
  data() {
    return {
      data: {
        trades: []
      }
    }
  },
  mounted() {
    this.getAllTrades()
  },

  methods: {
    async getAllTrades() {
      try {
        const response = await this.allTrades()

        this.data = response.data.list.slice(0, 6)
      } catch {
        alertService.showMessage(
          'error',
          'Trocas',
          'não foi possível encontrar nenhuma solicitação de troca registrada no sistema, verifique sua conexão e tente novamnente'
        )
      }
    },
    async allTrades() {
      return await apiService.allTrades()
    }
  }
}
</script>
