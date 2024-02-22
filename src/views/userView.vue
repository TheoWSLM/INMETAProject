<template>
  <div class="mb-16">
    <MyCards :myCards="data" />
  </div>

  <div class="mb-0">
    <TitleAndDescription
      :title="'Suas solicitações de troca'"
      :description="'Gerencie suas solicitações'"
    />
  </div>
  <TradeListSection :myTrade="true" :content="dataTrades.trades" />
</template>

<script>
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import MyCards from '@/components/sections/MyCards.vue'
import TradeListSection from '@/components/sections/TradeListSection.vue'
import apiService from '@/services/apiService'
import { getTokenFromUser } from '@/services/authService'
import { mapState } from 'vuex'

export default {
  components: {
    MyCards,
    TitleAndDescription,
    TradeListSection
  },
  computed: {
    ...mapState(['userInfo'])
  },
  data() {
    return {
      data: {
        cards: []
      },
      dataTrades: {
        trades: []
      },
    }
  },
  async mounted() {
    await this.getMyCards()
    await this.getMyTrades()
  },
  methods: {
    async getMyCards() {
      try {
        const token = await getTokenFromUser(this.userInfo)

        const config = {
          headers: {
            Authorization: token
          }
        }

        const response = await apiService.myCards(config)

        this.data = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async myCards() {
      return await apiService.myCards()
    },
    async getMyTrades() {
      try {
        let currentPage = 1
        let hasMorePages = true
        this.dataTrades.trades = []

        while (hasMorePages) {
          const response = await this.fetchTrades(9, currentPage)
          response.data.list.forEach((trade) => {
            if (trade.userId === this.userInfo.user.id) {
              this.dataTrades.trades.push(trade)
            }
          })

          hasMorePages = response.data.more && response.data.list.length > 0
          currentPage++
        }

        console.log('Todos os trades do usuário:', this.dataTrades.trades)
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os trades:', error)
      }
    },
    async fetchTrades(rpp, page) {
      const response = await apiService.allTrades(rpp, page)
      return response
    }
  }
}
</script>
