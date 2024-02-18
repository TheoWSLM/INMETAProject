<template>
  <CardList :content="data" />
</template>
<script>
import CardList from '@/components/sectionItems/CardList.vue'

export default {
  components: {
    CardList
  },
  data() {
    return {
      data: [
        {
          title: 'Suas cartas',
          description: 'Descrição do conteúdo.',
          descriptionButton: 'Saiba mais',
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
