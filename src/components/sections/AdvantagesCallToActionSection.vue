<template>
  <div class="flex flex-col lg:flex-row lg:w-9/12 mx-auto items-center justify-center">
    <div class="mx-20 flex items-center justify-center">
      <img
        src="@/assets/cellphoneMockup.png"
        alt="Celular mostrando o site YuGiCards com elementos decorativos em amarelo"
        class="h-auto max-w-sm"
      />
    </div>
    <div class="pr-10">
      <TitleAndDescription
        class="text-start whitespace-pre-line"
        title="Troque cards facilmente com o YuGiCards"
        description="• Ampla Seleção de Cartas
        • Atualizações contínuas
        • Trocas simplificadas
        • Comunidade Engajada"
        buttonText="Ver cartas"
      />
    </div>
  </div>
</template>

<script>
import TitleAndDescription from '../sectionItems/TitleAndDescription.vue'

export default {
  components: {
    TitleAndDescription
  }
}
</script>
