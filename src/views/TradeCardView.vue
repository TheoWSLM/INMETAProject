<template>
   <div class="sm:mt-4 mt-16">
  <div class="flex flex-col md:flex-row md:items-center ">
  <TitleAndDescription
    :title="`Trocar carta: ${cardToTrade.name}`"
    :description="'Selecione qual carta quer receber em troca'"
  />
  </div>
   </div>

   <div class="grid grid-cols-1 md:w-3/12 mx-auto mb-24 ">
    <CardListSection :cardInfo="cardToTrade" :tradeCard="true" />
    </div>


  <SearchFilter
    :searchTerm="searchTerm"
    :afterFilterCards="afterFilterCards"
    :filterCards="filterCards"
    @update:searchTerm="handleSearchTermUpdate"
  />
  <div class="mb-10">
    <PaginationButtons
      :currentPage="currentPage"
      @next-page="nextPage"
      @prev-page="prevPage"
      :nextPageExist="nextPageExist"
    />
  </div>
  <div class="grid md:grid-cols-4 gap-16">
    <CardListSection
      v-for="(card, cardIndex) in afterFilterCards"
      :key="cardIndex"
      :cardInfo="card"
      :buttonLabel="'Selecionar'"
      @selectCard="cardSelected"
    />
  </div>
  <LoadingModal v-if=" !afterFilterCards.length" />
</template>

<script>
import SearchFilter from '@/components/sectionItems/SearchFilter.vue'
import CardListSection from '@/components/sections/CardListSection.vue'
import apiService from '@/services/apiService.js'
import { getTokenFromUser } from '@/services/authService.js'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import { mapState } from 'vuex'
import PaginationButtons from '@/components/sectionItems/PaginationButtons.vue'
import alertService from '@/services/alertService'
import LoadingModal from '@/components/sectionItems/loadingModal.vue'

export default {
  components: {
    CardListSection,
    SearchFilter,
    TitleAndDescription,
    PaginationButtons,
    LoadingModal
  },
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
      requestBody: null,
      currentPage: 1,
      nextPageExist: true
    }
  },
  async created() {
    if(!this.userInfo){
      alertService.authError();
    }
    this.localCardId = this.$route.params.id
    await this.getAllCards()
    this.findUserCard()
  },
  methods: {
    async getAllCards(page = 1) {
      try {
        const response = await this.allCards(12, page)
        this.nextPageExist = response.data.more
        this.data = response.data.list
        this.afterFilterCards = this.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async allCards(rpp, page) {
      return await apiService.allCards(rpp, page)
    },
    filterCards() {
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
    async findUserCard() {
      let notFound = true;
      await this.getMyCards();
      for (let key in this.data) {
        const card = this.data[key]
        console.log(card.id)
        console.log(this.localCardId)
        if (card.id === this.localCardId) {
          this.cardToTrade = card
          notFound = false;
          break
        } 

      }
        if (notFound) {
        alertService.cardNotFound()
        this.$router.push('/user')
      }
    },
    async cardSelected(cardId) {

      if (cardId !== this.localCardId) {
    this.buildRequestBody(this.localCardId, cardId);
  } else {
    alertService.sameCardsError();
    return;
  }
      console.log('Carta selecionada:', cardId) 
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
    },
    async nextPage() {
      this.currentPage++
      await this.getAllCards(this.currentPage)
    },
    async prevPage() {
      this.currentPage--
      await this.getAllCards(this.currentPage)
    },
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

}
</script>
