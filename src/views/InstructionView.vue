<script>
import InformationAndDescriptionCards from '@/components/InformationAndDescriptionCards.vue'

export default {
  components: {
    InformationAndDescriptionCards,
},
  data() {
    return {
      dataArray: [
        {
          category: 'Tutorial',
          title: 'How to quickly deploy a static website',
          description:
            'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
          cards: [
            {
              category: 'Tutorial',
              title: 'How to quickly deploy a static website',
              description:
                'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
              button: ''
            },
            {
              category: 'Design',
              title: 'Start with Flowbite Design System',
              description:
                'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
              button: ''
            },
            {
              category: 'Code',
              title: 'Best react libraries around the web',
              description:
                'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
              button: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<template>
    <InformationAndDescriptionCards :content="dataArray" />
</template>