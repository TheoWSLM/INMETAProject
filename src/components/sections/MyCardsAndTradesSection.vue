<template>
    <div class="flex w-full mt-24 justify-start mx-autotext-sm font-medium gap-5 text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <button href="#" class="inline-flex items-center px-4 py-3 text-white bg-purple-700 rounded-lg dark:bg-purple-700" aria-current="page">
            <svg class="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
                Minhas Cartas
        </button>
        <button href="#" class="inline-flex items-center px-4 py-3 text-white bg-gray-700 rounded-lg dark:bg-gray-700" aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
                Minhas Trocas
        </button>
    </div>

    <CardList :content="dataCards" />
    <TradeList :content="dataTrades"/>
    </template>
<script>
import CardList from '@/components/sections/CardListSection.vue'
import TradeList from './TradeListSection.vue';

export default {
  components: {
    CardList,
    TradeList
},
  data() {
    return {
      dataCards: [
        {
          title: 'Minhas cartas',
          description: 'Descrição do conteúdo.',
          cards: [
            {
              title: 'Título do Card 1',
              description: 'Nome do Card 1'
            },
            {
              title: 'Título do Card 2',
              description: 'Nome do Card 2'
            },
            {
              title: 'Título do Card 3',
              description: 'Nome do Card 3'
            },
            {
              title: 'Título do Card 4',
              description: 'Nome do Card 4'
            }
          ]
        }
      ],
      dataTrades: [
        {
          title: 'Minhas solicitações de troca',
          description: '',
          descriptionButton: '',
          trades: [
            {
              title1: 'A Shattered, Colorless Realm1',
              description1:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK.",
              title2: 'A Shattered, Colorless Realm1',
              description2:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK."
            },
            {
              title1: 'A Shattered, Colorless Realm1',
              description1:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK.",
              title2: 'A Shattered, Colorless Realm1',
              description2:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK."
            },
            {
              title1: 'A Shattered, Colorless Realm1',
              description1:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK.",
              title2: 'A Shattered, Colorless Realm1',
              description2:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK."
            },
            {
              title1: 'A Shattered, Colorless Realm1',
              description1:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK.",
              title2: 'A Shattered, Colorless Realm1',
              description2:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK."
            },
            {
              title1: 'A Shattered, Colorless Realm1',
              description1:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK.",
              title2: 'A Shattered, Colorless Realm1',
              description2:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK."
            },
            {
              title1: 'A Shattered, Colorless Realm1',
              description1:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK.",
              title2: 'A Shattered, Colorless Realm1',
              description2:
                "If Vicious Astraloud is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was Vicious Astraloud, you can Special Summon 1 of your banished Visas Starfrost, or if it was not, you can make 1 Vicious Astraloud you control gain 1500 ATK."
            },
          ]
        }
      ]
    }
  }
}
</script>