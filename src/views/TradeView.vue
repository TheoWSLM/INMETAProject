<template>
  <TradeListSection :content="data" />
</template>
<script>
import TradeListSection from '@/components/sections/TradeListSection.vue'
import apiService from '@/services/apiService'

export default {
  components: {
    TradeListSection
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
