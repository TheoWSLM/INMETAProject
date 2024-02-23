<template>
  <div>
    <div class="sm:mt-4 mt-16">
    <TitleAndDescription
      :title="'Cartas disponíveis'"
      :description="'Aqui estão todas as cartas registradas!'"
    />
  </div>
    <SearchFilter
      :searchTerm="searchTerm"
      :afterFilterCards="afterFilterCards"
      :filterCards="filterCards"
      @update:searchTerm="handleSearchTermUpdate"
    />
    <div class="grid md:grid-cols-4 gap-16">
      <CardList v-for="(card, cardIndex) in afterFilterCards" :key="cardIndex" :cardInfo="card" />
    </div>
    <div class="my-10">
      <PaginationButtons
        :currentPage="currentPage"
        @next-page="nextPage"
        @prev-page="prevPage"
        :nextPageExist="nextPageExist"
      />
    </div>
  </div>
</template>

<script>
import CardList from '@/components/sections/CardListSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import SearchFilter from '@/components/sectionItems/SearchFilter.vue'
import PaginationButtons from '@/components/sectionItems/PaginationButtons.vue'

export default {
  components: {
    CardList,
    TitleAndDescription,
    SearchFilter,
    PaginationButtons
  },
  data() {
    return {
      data: {
        cards: []
      },
      searchTerm: '',
      afterFilterCards: [],
      currentPage: 1,
      nextPageExist: true
    }
  },
  created() {
    this.getAllCards()
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
    async nextPage() {
      this.currentPage++
      await this.getAllCards(this.currentPage)
    },
    async prevPage() {
      this.currentPage--
      await this.getAllCards(this.currentPage)
    }
  },
  computed: {
    filteredCards() {
      return this.data.filter((card) =>
        card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  }
}
</script>
