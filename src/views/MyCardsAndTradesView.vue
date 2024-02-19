<template>
<MyCardsAndTradesSection />
</template>

<script>
import MyCardsAndTradesSection from '@/components/sections/MyCardsAndTradesSection.vue';

export default {
  components: {
    MyCardsAndTradesSection,
},
  data() {
    return {
      data: [
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
            }
            // Adicione mais cards conforme necessário
          ]
        }
      ]
    }
  }
}
</script>
