<template>
  <div class="sm:mt-4 mt-16">
    <div class="flex flex-col md:flex-row md:items-center">
      <TitleAndDescription
        :title="`Trocar carta: ${cardToTrade.name}`"
        :description="'Selecione qual carta quer receber em troca'"
      />
    </div>
  </div>

  <div class="grid grid-cols-1 md:w-3/12 mx-auto mb-24">
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
  <LoadingModal v-if="!data.length" />
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
      userCards:{
        cards: []
      },
      cardToTrade: [],
      showModal: false,
      requestBody: null,
      currentPage: 1,
      nextPageExist: true
    }
  },
  async created() {
    if (!this.userInfo) {
      alertService.authError()
    }
    this.localCardId = this.$route.params.id
    await this.getAllCards()
    await this.findUserCard()
    this.beforeFilterCards = this.allCards(150,1)

  },
  methods: {
    async getAllCards(page = 1) {
      try {
        const response = await this.allCards(300, page)
        this.data = response.data.list
        this.afterFilterCards = this.data.slice(0, 12);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async allCards(rpp, page) {
      return await apiService.allCards(rpp, page)
    },
    filterCards() {
      if (!this.searchTerm) {
        this.afterFilterCards = this.data.slice((this.currentPage-1)*12, this.currentPage*12);
      } else {

      this.afterFilterCards = this.data.filter((card) =>
        card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      }
    },
    handleSearchTermUpdate(newSearchTerm) {
      this.searchTerm = newSearchTerm
      this.filterCards()
    },
    async findUserCard() {
      let notFound = true
      await this.getMyCards()
      for (let key in this.userCards) {
        const card = this.userCards[key]
        if (card.id === this.localCardId) {
          this.cardToTrade = card
          notFound = false
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
        const userResponse = await alertService.showAlertWhithConfirmation(
          `Criar solicitação de troca`,
          `Você deseja abrir a solicitação de troca para receber a carta selecionada?`,
          'warning',
          'Sim',
          'Cancelar'
        )
        if (!userResponse) {
          return
        }

        this.buildRequestBody(this.localCardId, cardId)
      } else {
        alertService.sameCardsError()
        return
      }
      const token = await getTokenFromUser(this.userInfo)
      const config = {
        headers: {
          Authorization: token
        }
      }
      await apiService.criateTrade(this.requestBody, config)
      alertService.showMessage('success', 'Troca', 'Solicitação de troca criada com sucesso!')
      this.$router.push('/user')
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
    async updatePage() {
    if (this.currentPage >= 1 && this.currentPage <= Math.ceil(this.data.length / 12)) {
        const start = (this.currentPage - 1) * 12;
        const end = this.currentPage * 12;
        this.afterFilterCards = this.data.slice(start, end);
        this.nextPageExist = this.data.length > end;
    } else {
        this.nextPageExist = false;
    }
},

async nextPage() {
    this.currentPage++;
    await this.updatePage();
},

async prevPage() {
    this.currentPage--;
    await this.updatePage();
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
        this.userCards = response.data
      } catch (error) {
        alertService.authError()
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
  }
}
</script>
