<template>
  <div>
    <div
      class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-4 flex flex-col"
    >
      <img
        :src="cardInfo.imageUrl"
        :alt="cardInfo.name"
        class="w-9/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-125"
      />
      <p class="text-lg font-bold text-center text-gray-500 dark:text-white mb-4">
        {{ cardInfo.name }}
      </p>

      <div class="flex justify-center mx-auto mt-auto gap-4">
        <button
          v-if="!tradeCard"
          @click="buttonFunction()"
          type="button"
          class="relative inline-flex items-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            {{ buttonLabel }}
          </span>
        </button>

        <button
          @click="showModal = true"
          class="relative inline-flex items-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Detalhes
          </span>
        </button>
      </div>
    </div>
    <CardDetailModal
      v-if="showModal"
      :card="cardInfo"
      :showModal="showModal"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import CardDetailModal from '../sectionItems/CardDetailModal.vue'
import apiService from '@/services/apiService'
import { mapState } from 'vuex'
import { getTokenFromUser } from '@/services/authService'
import alertService from '@/services/alertService'

export default {
  components: { CardDetailModal },
  computed: {
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
    tradeCard: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    async buttonFunction() {
      if (this.buttonLabel === 'Adicionar') {
        await this.addCard()
      } else if (this.buttonLabel === 'Selecionar') {
        this.$emit('selectCard', this.cardInfo.id)
      } else {
        this.createNewTrade()
      }
    },

    async createNewTrade() {
      const userResponse = await alertService.showAlertWhithConfirmation(
        `Trocar "${this.cardInfo.name}"?`,
        `Você tem certeza que deseja abrir solicitação de troca para a carta: "${this.cardInfo.name}"?`,
        'warning',
        'Sim',
        'Cancelar'
      )
      if (!userResponse) {
        return
      } else {
        this.$router.push({ name: 'newTradeCard', params: { id: this.cardInfo.id } })
      }
    },

    async addCard() {
      const result = await alertService.addCard()
      if (!result) {
        return
      }
      try {
        const token = await getTokenFromUser(this.userInfo)
        const cardId = { cardIds: [this.cardInfo.id] }
        const config = {
          headers: {
            Authorization: token
          }
        }
        if (!this.userInfo) {
          alertService.showMessage(
            'error',
            'Usuario não logado',
            'É preciso estar logado no sistema para poder adicionar cartas!'
          )
          return
        }
        const response = await apiService.addCard(cardId, config)
        alertService.showMessage('success', 'Sucesso', 'Carta adicionada com sucesso!')
        this.data = response.data.list
      } catch (error) {
        alertService.showMessage(
          'error',
          'Ocorreu um erro',
          'Se certifique de estar logado e verifique sua conexão com a internet'
        )
      }
    }
  }
}
</script>
