<script>
import TitleAndDescription from '../sectionItems/TitleAndDescription.vue'

export default {
  components: {
    TitleAndDescription
  }
}
</script>

<template>
  <div class="flex w-full mt-24 items-center justify-between mx-auto">
    <div class="w-5/12 mx-auto">
      <TitleAndDescription 
        title="Sobre o Desenvolvedor"
        description=" Aos 23 anos, no último ano de Engenharia Elétrica na UFPB e avançando no curso de Análise e Desenvolvimento de Sistemas, trago uma bagagem de três anos como desenvolvedor Full Stack. Minha motivação vai além do desenvolvimento de soluções; busco oportunidades para fazer a diferença e impactar positivamente o mundo."
        buttonText="Portfólio"
      />
    </div>
    <div class="relative w-4/12 mx-auto">
      <img src="@/assets/theoWeberIcon.png" alt="Foto de Theo Weber com fundo laranja" class="h-auto absolute mb-4 inset-0">
      <img src="@/assets/circleText.png" alt="Foto de Theo Weber com fundo laranja" class="h-auto  mb-4 animate-spin-slow inset-0">
    </div>
  </div>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 12s linear infinite; 
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>