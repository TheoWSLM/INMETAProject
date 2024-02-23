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

  <div class="py-0 sm:py-8 px-4 mx-auto max-w-screen-xl lg:py-2 flex justify-center">
    <div class="grid md:grid-cols-3 sm:grid-cols-auto gap-8">
  <TradeFeature
          v-for="(trade, tradeIndex) in dataTrades.trades"
          :myTrade="true"
          :key="tradeIndex"
          :trade="trade"
          @delete-trade="getMyTrades"
        />
      </div>
    </div>

</template>

<script>
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import MyCards from '@/components/sections/MyCards.vue'
import TradeFeature from '@/components/sectionItems/TradeFeature.vue'
import apiService from '@/services/apiService'
import { getTokenFromUser } from '@/services/authService'
import { mapState } from 'vuex'
import alertService from '@/services/alertService'

export default {
  components: {
    MyCards,
    TitleAndDescription,
    TradeFeature
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
      }
    }
  },
  created(){

    if (!this.userVerify()) {
    alertService.showMessage("warning", "Erro de Autenticação", "Usuário não autenticado. Redirecionando para a página de login.")
    this.$router.push('/')
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
        alertService.authError();
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
        alertService.conectionError();
      }
    },
    async fetchTrades(rpp, page) {
      const response = await apiService.allTrades(rpp, page)
      return response
    },
    userVerify(){
      return this.userInfo && this.userInfo.token
    }

  }
}
</script>
