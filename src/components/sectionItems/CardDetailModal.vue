<template>
 
    <div  v-if="showModal" id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative p-4 w-full max-w-2xl max-h-full">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <div class="modal-header flex justify-between items-center">
  <div class="modal-subtitle flex items-center space-x-2">
      <span class="text-sm font-bold text-gray-900 dark:text-white">Detalhes da carta</span>
  </div>
</div>

        <button type="button" @click="$emit('close')" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <div class="flex mt-4 justify-center">
      <img :src="card && card.imageUrl" alt="Banner" class="w-3/12 h-auto mb-4 transition-transform duration-300 transform hover:scale-125">
    </div>
      <p class="text-sm font-bold text-justify text-gray-500 dark:text-white mb-4 mx-4">
        {{card && card.name }}
        <p class="font-normal mt-2">{{card && card.description }}</p>
      </p>
      <div class="flex mx-auto justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button @click="$emit('close')" class="mb-8 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800" type="button">Ok</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>

export default {
props: {
    
  card: {
    type: Object,
    required: true
  },
  showModal: {
    type: Boolean,
    required: true,
    default: false
  }
},

}
</script>
