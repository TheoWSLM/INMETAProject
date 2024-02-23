<template>

<div class="sm:mt-4 mt-16">
  <div class="flex flex-col md:flex-row md:items-center ">
  <TitleAndDescription
    :title="'Suas cartas'"
    :description="'Aqui estão todas as suas cartas registradas!'"
  />
  </div>
</div>

  <SearchFilter
    :searchTerm="searchTerm"
    :afterFilterCards="afterFilterCards"
    :filterCards="filterCards"
    @update:searchTerm="handleSearchTermUpdate"
  />
  <div class="grid md:grid-cols-4 gap-16">
    <CardList
      v-for="(myCard, cardIndex) in afterFilterCards"
      :key="cardIndex"
      :cardInfo="myCard"
      :buttonLabel="'Trocar'"
    />
  </div>
</template>

<script>
import TitleAndDescription from '../sectionItems/TitleAndDescription.vue'
import CardList from './CardListSection.vue'
import SearchFilter from '@/components/sectionItems/SearchFilter.vue'

export default {
  components: {
    TitleAndDescription,
    CardList,
    SearchFilter
  },
  props: {
    myCards: {
      type: Object
    }
  },
  data() {
    return {
      searchTerm: '',
      afterFilterCards: []
    }
  },
  beforeUpdate() {
    this.filterCards()
  },
  methods: {
    filterCards() {
      if (!this.searchTerm) {
        this.afterFilterCards = this.myCards
      } else {
        this.afterFilterCards = this.myCards.filter((card) =>
          card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      }
    },
    handleSearchTermUpdate(newSearchTerm) {
      this.searchTerm = newSearchTerm
      this.filterCards()
    }
  }
}
</script>
