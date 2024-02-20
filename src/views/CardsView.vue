<template>
  <CardList :content="data" />
</template>
<script>
import CardList from '@/components/sections/CardListSection.vue'
import apiService from '@/services/apiService'

export default {
  components: {
    CardList
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
