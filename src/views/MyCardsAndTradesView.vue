<template>
  <MyCardsAndTradesSection  />

  <button @click="getMyCards">ddddddddddddd</button>
</template>

<script>
import MyCardsAndTradesSection from '@/components/sections/MyCardsAndTradesSection.vue'
import apiService from '@/services/apiService'
import { mapState } from 'vuex'

export default {
  components: {
    MyCardsAndTradesSection
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
  methods: {
    async getMyCards() {
      try {
        // Obtenha o token do localStorage, supondo que você o tenha armazenado lá após o login
        const token = this.userInfo.token
        // Verifique se o token existe
        if (!token) {
          console.error('Token not found')
          return
        }

        // Defina o cabeçalho Authorization com o token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

        // Faça a solicitação usando o token no cabeçalho
        const response = await apiService.myCards(config)
        console.log(response.data.list)
        this.data = response.data.list
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async myCards() {
      return await apiService.myCards()
    },
    obj(){
      console.log(this.userInfo);
    }
  }
}
</script>
