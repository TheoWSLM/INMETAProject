<template>
  <div>
    <TitleAndDescription
      :title="'Cartas disponíveis'"
      :description="'Aqui estão todas as cartas registradas!'"
    />
    <SearchFilter
      :searchTerm="searchTerm"
      :afterFilterCards="afterFilterCards"
      :filterCards="filterCards"
      @update:searchTerm="handleSearchTermUpdate"
    />

    <div class="grid md:grid-cols-4 gap-16">
      <CardList v-for="(card, cardIndex) in afterFilterCards" :key="cardIndex" :cardInfo="card" />
    </div>
  </div>
</template>

<script>
import CardList from '@/components/sections/CardListSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import SearchFilter from '@/components/sectionItems/SearchFilter.vue'

export default {
  components: {
    CardList,
    TitleAndDescription,
    SearchFilter
  },
  data() {
    return {
      data: {
        cards: []
      },
      searchTerm: '',
      afterFilterCards: []
    }
  },
  created() {
    this.getAllCards()
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
