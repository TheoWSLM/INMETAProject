<template>

    
        <div
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-4"
        >
          <img
            :src="cardInfo.imageUrl"
            :alt="cardInfo.name"
            class="w-9/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-125"
          />
          <p class="text-lg font-bold text-center text-gray-500 dark:text-white mb-4">
            {{ cardInfo.name }}
          </p>

            <div class="flex justify-center mx-auto gap-4">
              <button
              @click="buttonFunction()"
        type="button"
        class="relative inline-flex items-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300"
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {{ buttonLabel }}
        </span>
      </button>

    <button @click="showModal = true" class="relative inline-flex items-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Detalhes
        </span>
    </button>
</div>


        </div>
  <CardDetailModal v-if="showModal" :card="cardInfo" :showModal="showModal" @close="showModal = false"  />

</template>

<script>
import CardDetailModal from '../sectionItems/CardDetailModal.vue';
import apiService from '@/services/apiService'
import { mapState } from 'vuex';



export default {
  components: { CardDetailModal },
  computed:{
    ...mapState(['userInfo'])
  },
  props: {
    cardInfo: {
      type: Object,
      required: true
    },
    buttonLabel: {
      type: String,
      default: 'Adicionar'
    },
  },
    data() {
      return {
        showModal: false
      }
    },
  methods: {
   async buttonFunction(){
   if(this.buttonLabel === 'Adicionar'){
    this.addCard();
   } else {
    this.addCard();
   }
    },

    async createNewTrade(){

    },

   async addCard(){
      console.log('ID do cartão:', this.cardInfo.id);
    if(!this.userInfo){
console.log("Usuario não logado");
   return;
    }
    const token = this.userInfo.token

        if (!token) {
          console.error('Token não encontrado')
          return
        }

        const cardId = { cardIds: [this.cardInfo.id] };
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        try {
    const response = await apiService.addCard(cardId, config);
    console.log(response);
    this.data = response.data.list;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }

    }
  },
  
}
</script>
