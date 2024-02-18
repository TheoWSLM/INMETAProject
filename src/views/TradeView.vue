<template>
    <TradeListSection :content="dataArray" />
</template>
<script>
import TradeListSection from '@/components/sections/TradeListSection.vue';

export default {
    components: {
        TradeListSection,
    },
    data() {
    return {
      dataArray: [
        {
          title: 'Solicitações de troca em aberto',
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