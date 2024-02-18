

<template>
  <BannerSection/>
  <TradeList :content="dataArray" />
  <AdvantagesCallToAction />
  </template>


<script >
import TradeList from '@/components/sectionItems/TradeList.vue';
import AdvantagesCallToAction from '@/components/sections/AdvantagesCallToAction.vue';
import BannerSection from '@/components/sections/BannerSection.vue';

export default{
components:{
    AdvantagesCallToAction,
    TradeList,
    BannerSection
},
data() {
    return {
      dataArray: [
        {
          title: 'Confira as últimas solicitações de troca',
          description:
            '',
            descriptionButton:
            'Saber mais',
          trades: [
            {
              title: 'How to quickly deploy a static website',
              description:
                'A Shattered, Colorless Realm',
              button: ''
            },
            {
              title: 'Start with Flowbite Design System',
              description:
                'A Shattered, Colorless Realm',
              button: ''
            },
            {
              title: 'Best react libraries around the web',
              description:
                'A Shattered, Colorless Realm',
              button: ''
            },
            {
              title: 'How to quickly deploy a static website',
              description:
                'A Shattered, Colorless Realm',
              button: ''
            },
            {
              category: 'Design',
              title: 'Start with Flowbite Design System',
              description:
                'A Shattered, Colorless Realm',
              button: ''
            },
            {
              category: 'Code',
              title: 'Best react libraries around the web',
              description:
                'A Shattered, Colorless Realm',
              button: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

