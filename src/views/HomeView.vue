<template>
  <BannerSection />
  <TitleAndDescription
    class="mt-8"
    :title="'Solicitações de troca em aberto'"
    :description="'Troque e atualize seu deck!'"
    :buttonText="'Saiba mais'"
  />
  <TradeList :content="data" />
  <AdvantagesCallToAction />
</template>

<script>
import TradeList from '@/components/sections/TradeListSection.vue'
import AdvantagesCallToAction from '@/components/sections/AdvantagesCallToActionSection.vue'
import BannerSection from '@/components/sections/BannerSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'

export default {
  components: {
    AdvantagesCallToAction,
    TradeList,
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
  created() {
    this.getAllTrades()
  },

  methods: {
    async getAllTrades() {
      try {
        const response = await this.allTrades()

        this.data = response.data.list.slice(0, 6)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async allTrades() {
      return await apiService.allTrades()
    }
  }
}
</script>
