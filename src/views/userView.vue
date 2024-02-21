<template>
  <MyCards :myCards="data"  />

</template>

<script>
import MyCards from '@/components/sections/MyCards.vue'
import apiService from '@/services/apiService'
import { mapState } from 'vuex'

export default {
  components: {
    MyCards
  },
  computed:{
    ...mapState(['userInfo'])
  },
  data() {
    return {
      data: {
        cards: [],
      }
    }
  },
  mounted() {

    this.getMyCards();
  },
  methods: {
    async getMyCards() {
      try {

        const token = this.userInfo.token

        if (!token) {
          console.error('Token não encontrado')
          return
        }

   
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }


        const response = await apiService.myCards(config)
       
        this.data = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async myCards() {
      return await apiService.myCards()
    },
  }
}
</script>
