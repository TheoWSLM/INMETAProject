<template>
  <TitleAndDescription
    :title="`Trocar carta: ${cardToTrade.name}`"
    :description="'Selecione qual carta quer receber em troca'"
  />
  <div class="items-center mt-4 mb-10 justify-center mx-auto w-3/12">
    <CardListSection :cardInfo="cardToTrade" :tradeCard="true" />
  </div>

  <SearchFilter
    :searchTerm="searchTerm"
    :afterFilterCards="afterFilterCards"
    :filterCards="filterCards"
    @update:searchTerm="handleSearchTermUpdate"
  />
  <div class="grid md:grid-cols-4 gap-16">
    <CardListSection
      v-for="(card, cardIndex) in afterFilterCards"
      :key="cardIndex"
      :cardInfo="card"
      :buttonLabel="'Selecionar'"
      @selectCard="cardSelected"
    />
  </div>
  <!-- <TradeDetailsModal v-if="showModal" :trade="trade" :showModal="showModal" @close="showModal = false"  /> -->
</template>

<script>
import SearchFilter from '@/components/sectionItems/SearchFilter.vue'
import CardListSection from '@/components/sections/CardListSection.vue'
import apiService from '@/services/apiService.js'
import { getTokenFromUser } from '@/services/authService.js'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import { mapState } from 'vuex'
// import TradeDetailsModal from '@/components/sectionItems/TradeDetailsModal.vue';

export default {
  props: {
    cardId: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      localCardId: '',
      data: {
        cards: []
      },
      searchTerm: '',
      afterFilterCards: [],
      cardToTrade: [],
      showModal: false,
      requestBody: null
    }
  },
  async created() {
    this.localCardId = this.$route.params.id
    await this.getAllCards()
    this.findUserCard()
  },
  methods: {
    async getAllCards() {
      try {
        const response = await this.allCards()
        console.log(response.data.list)
        this.data = response.data.list
        this.afterFilterCards = this.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async allCards() {
      return await apiService.allCards()
    },
    filterCards() {
      // Filtrar as cartas com base no searchTerm
      if (!this.searchTerm) {
        this.afterFilterCards = this.data
      } else {
        this.afterFilterCards = this.data.filter((card) =>
          card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      }
    },
    handleSearchTermUpdate(newSearchTerm) {
      this.searchTerm = newSearchTerm
      this.filterCards()
    },
    findUserCard() {
      let foundCard = null
      for (let key in this.data) {
        const card = this.data[key]
        if (card.id === this.localCardId) {
          this.cardToTrade = card
          break
        }
      }
      if (foundCard) {
        console.log('Cartão encontrado:', foundCard)
      } else {
        console.log('Nenhum cartão encontrado com o ID:', this.localCardId)
      }
    },
    async cardSelected(cardId) {
      this.buildRequestBody(this.localCardId, cardId)
      console.log('Carta selecionada:', cardId) //parei aqui
      const token = await getTokenFromUser(this.userInfo)
      const config = {
        headers: {
          Authorization: token
        }
      }
      const response = await apiService.criateTrade(this.requestBody, config)
      console.log(response)
    },
    buildRequestBody(cardIdOfert, CardIdReceive) {
      this.requestBody = {
        cards: [
          {
            cardId: cardIdOfert,
            type: 'OFFERING'
          },
          {
            cardId: CardIdReceive,
            type: 'RECEIVING'
          }
        ]
      }
    }
  },
  computed: {
    filteredCards() {
      return this.data.filter((card) =>
        card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    },
    ...mapState(['userInfo'])
  },
  components: {
    CardListSection,
    SearchFilter,
    TitleAndDescription
  }
}
</script>
