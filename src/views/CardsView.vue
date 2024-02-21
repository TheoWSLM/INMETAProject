<template>
   <TitleAndDescription
        :title="'Cartas disponíveis'"
        :description="'Aqui estão todas as cartas registradas!'"
      />
      <div class="grid md:grid-cols-4 gap-16">
  <CardList  v-for="(card, cardIndex) in data"  :key="cardIndex" :cardInfo="card" />
</div>
</template>
<script>
import CardList from '@/components/sections/CardListSection.vue'
import apiService from '@/services/apiService'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'

export default {
  components: {
    CardList,
    TitleAndDescription
    
  },
  data() {
    return {
      data: {
        cards: []
      }
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
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async allCards() {
      return await apiService.allCards()
    }
  }
}
</script>
