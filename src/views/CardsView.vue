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
            title: 'Cartas Disponíveis',
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
  