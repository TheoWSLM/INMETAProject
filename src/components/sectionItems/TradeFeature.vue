<template>
    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-4">
      <div class="flex">
        <img src="@/assets/cardtest.jpeg" alt="Banner" class="w-5/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-150">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 m-auto">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
        <img src="@/assets/cardtest.jpeg" alt="Banner" class="w-5/12 h-auto mb-4 mx-auto transition-transform duration-300 transform hover:scale-150">
      </div>
      <p class="text-sm font-bold text-justify text-gray-500 dark:text-white mb-4">
        Receber <p class="font-normal">{{ trade.title1 }}</p>
        <br>Trocar por <p class="font-normal">{{ trade.title2 }}</p>
      </p>
      <button class="relative inline-flex items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Trocar
      </span>
      </button> <button class="relative inline-flex items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Detalhes
      </span>
      </button>
    </div>


    
<div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    titulo
                </h3>
                <h3 class="text-xl font-medium mx-2 text-gray-900 dark:text-white">
                    subtitulo
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="flex mt-4 justify-center">
        <img src="@/assets/cardtest.jpeg" alt="Banner" class="w-3/12 h-auto mb-4 transition-transform duration-300 transform hover:scale-125">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-4 my-auto">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
        <img src="@/assets/cardtest.jpeg" alt="Banner" class="w-3/12 h-auto mb-4  transition-transform duration-300 transform hover:scale-125">
      </div>
      <p class="text-sm font-bold text-justify text-gray-500 dark:text-white mb-4 mx-4">
        {{ trade.title1 }} <p class="font-normal mt-2">{{ trade.description1 }}</p>
        <br>{{ trade.title2 }}<p class="font-normal mt-2">{{ trade.description2 }}</p>
      </p>
      <div class="flex mx-auto justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button data-modal-target="static-modal" data-modal-toggle="static-modal" data-modal-hide="static-modal" class="mb-8 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800" type="button">
  Ok
</button>

      </div>
        </div>
    </div>
</div>

  </template>
  
  <script>
  export default {
    props: {
      trade: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  