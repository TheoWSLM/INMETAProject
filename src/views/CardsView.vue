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
  <LoadingModal v-if="!data.length" />
</template>

<script>
import CardList from '@/components/sections/CardListSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'
import SearchFilter from '@/components/sectionItems/SearchFilter.vue'
import PaginationButtons from '@/components/sectionItems/PaginationButtons.vue'
import LoadingModal from '@/components/sectionItems/loadingModal.vue'

export default {
  components: {
    CardList,
    TitleAndDescription,
    SearchFilter,
    PaginationButtons,
    LoadingModal
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
