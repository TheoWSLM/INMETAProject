<template>
  <TitleAndDescription
    class="mt-10"
    :title="'Solicitações de troca em aberto'"
    :description="'Troque e atualize seu deck!'"
  />
  <TradeListSection :content="data" />
  <div class="my-10">
    <PaginationButtons
      :currentPage="currentPage"
      @next-page="nextPage"
      @prev-page="prevPage"
      :nextPageExist="nextPageExist"
    />
  </div>
</template>

<script>
import TradeListSection from '@/components/sections/TradeListSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import PaginationButtons from '@/components/sectionItems/PaginationButtons.vue'

export default {
  components: {
    TradeListSection,
    TitleAndDescription,
    PaginationButtons
  },
  data() {
    return {
      data: {
        trades: []
      },
      currentPage: 1,
      nextPageExist: true
    }
  },
  created() {
    this.getAllTrades()
  },

  methods: {
    async getAllTrades(page = 1) {
      try {
        const response = await this.allTrades(9, page)
        this.nextPageExist = response.data.more
        console.log(this.nextPageExist)
        this.data = response.data.list
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async allTrades(rpp, page) {
      return await apiService.allTrades(rpp, page)
    },
    async nextPage() {
      this.currentPage++
      console.log(this.currentPage)
      await this.getAllTrades(this.currentPage)
    },
    async prevPage() {
      this.currentPage--
      await this.getAllTrades(this.currentPage)
    }
  }
}
</script>
