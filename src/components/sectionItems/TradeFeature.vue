<template>
   <div>
    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-4">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <img :src="trade.tradeCards && trade.tradeCards[0].card.imageUrl" alt="Banner" class="w-5/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-125">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 m-auto">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
      <img :src="trade.tradeCards && trade.tradeCards[1].card.imageUrl" alt="Banner" class="w-5/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-125">
    </div>
    <p class="text-sm font-bold text-justify text-gray-500 dark:text-white mb-4">
      Receber <p class="font-normal">{{ trade.tradeCards && trade.tradeCards[0].card.name }}</p>
      <br>Trocar por <p class="font-normal">{{ trade.tradeCards && trade.tradeCards[1].card.name }}</p>
    </p>

    <button @click="showModal = true" class="relative w-full md:w-12/12 justify-center mx-auto inline-flex items-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300">
      <span class="relative w-full px-32 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Detalhes
      </span>
    </button>
    <button v-if="myTrade" @click="deleteTrade()" class="relative w-full md:w-12/12 justify-center mx-auto inline-flex items-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-amber-600 to-purple-900 group-hover:from-orange-400 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300">
      <span class="relative w-full px-32 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Excluir
      </span>
    </button>
  </div>

    <TradeDetailsModal  v-if="showModal" :trade="trade" :showModal="showModal" @close="showModal = false"   />
  </div>
  </template>
  
  <script>
  import TradeDetailsModal from './TradeDetailsModal.vue'
  import { mapState } from 'vuex'
  import apiService from '@/services/apiService'
  import  {getTokenFromUser} from '@/services/authService' 
  import alertService from '@/services/alertService' 
  
  export default {
    props: {
      trade: {
        type: Object,
        required: true
      },
      myTrade:{
        type: Boolean,
        required: false,
        default:false
      }
    },
    components: {
      TradeDetailsModal
    },
    computed: {
    ...mapState(['userInfo'])
  },
    data() {
      return {
        showModal: false,
        requestBody: null
      }
    },
    methods:{
      async deleteTrade() {
    try {
      
      const token = await getTokenFromUser(this.userInfo)

const config = {
  headers: {
    Authorization: token
  }
}
      console.log(this.trade.id);
      alertService.deleteTrade();
      const response = await apiService.removeTrade(this.trade.id, config);
      console.log(response);
      this.$emit('delete-trade');
    } catch (error) {
      console.error('Error deleting trade:', error);
    }
  }
    },
    
  }
  </script>