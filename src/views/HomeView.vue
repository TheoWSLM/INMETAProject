<template>
  <BannerSection />
  <TradeList :content="dataArray" />
  <AdvantagesCallToAction />
</template>

<script>
import TradeList from '@/components/sections/TradeListSection.vue'
import AdvantagesCallToAction from '@/components/sections/AdvantagesCallToAction.vue'
import BannerSection from '@/components/sections/BannerSection.vue'

export default {
  components: {
    AdvantagesCallToAction,
    TradeList,
    BannerSection
  },
  data() {
    return {
      dataArray: [
        {
          title: 'Confira as últimas solicitações de troca',
          description: '',
          descriptionButton: 'Ver todas',
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
            }
          ]
        }
      ]
    }
  }
}
</script>
