<template>
   <TitleAndDescription
        :title="'Suas cartas'"
        :description="'Aqui estão todas as suas cartas registradas!'"
      />
      <div class="grid md:grid-cols-4 gap-16">
  <CardList  v-for="(myCard, cardIndex) in myCards"  :key="cardIndex" :cardInfo="myCard" />
</div>
</template>

<script>
import TitleAndDescription from '../sectionItems/TitleAndDescription.vue';
import CardList from './CardListSection.vue';

export default{
  components:{
    TitleAndDescription,
    CardList
  },
  props: {
    myCards: {
      type: Object,
      default: null
    }
  }
}
</script>

