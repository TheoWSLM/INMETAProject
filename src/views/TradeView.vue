<template>
  <TitleAndDescription
    :title="'Solicitações de troca em aberto'"
    :description="'Troque e atualize seu deck!'"
  />
  <TradeListSection :content="data" />
</template>

<script>
import TradeListSection from '@/components/sections/TradeListSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'

export default {
  components: {
    TradeListSection,
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
        this.data = response.data.list
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
