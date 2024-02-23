<template>
  <div class="sm:mt-4 mt-16">
    <div class="flex flex-col md:flex-row md:items-center">
      <TitleAndDescription
        class="mb-0 sm:mb-8"
        :title="'Solicitações de troca em aberto'"
        :description="'Troque e atualize seu deck!'"
      />
    </div>
  </div>

  <div class="py-0 sm:py-8 px-4 mx-auto max-w-screen-xl lg:py-2 flex justify-center">
    <div class="grid md:grid-cols-3 sm:grid-cols-auto gap-8">
      <TradeFeature
        v-for="(trade, tradeIndex) in data"
        :myTrade="false"
        :key="tradeIndex"
        :trade="trade"
        @delete-trade="getAllTrades"
        class="mt-0 sm:mt-0"
      />
    </div>
  </div>

  <div class="my-10">
    <PaginationButtons
      :currentPage="currentPage"
      @next-page="nextPage"
      @prev-page="prevPage"
      :nextPageExist="nextPageExist"
    />
  </div>
  <LoadingModal v-if="!data.length" />
</template>

<script>
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import PaginationButtons from '@/components/sectionItems/PaginationButtons.vue'
import alertService from '@/services/alertService'
import TradeFeature from '../components/sectionItems/TradeFeature.vue'
import LoadingModal from '@/components/sectionItems/loadingModal.vue'

export default {
  components: {
    TradeFeature,
    TitleAndDescription,
    PaginationButtons,
    LoadingModal
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
        this.data = response.data.list
      } catch (error) {
        alertService.conectionError()
      }
    },
    async allTrades(rpp, page) {
      return await apiService.allTrades(rpp, page)
    },
    async nextPage() {
      this.currentPage++

      await this.getAllTrades(this.currentPage)
    },
    async prevPage() {
      this.currentPage--
      await this.getAllTrades(this.currentPage)
    }
  }
}
</script>
