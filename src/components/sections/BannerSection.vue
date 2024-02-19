<template>
  <div class="flex mt-8 items-center justify-between mx-auto">
    <div class="mx-auto">
      <TitleAndDescription class="text-start whitespace-pre-line"
        title="Encontre o card que 
        procura e complete 
        seu deck"
        description="Junte-se à comunidade e se torne imbatível!"
        buttonText="Saber mais"
      />
    </div>

    <div class="mx-auto">
      <img src="@/assets/Banner.png" alt="Banner" class="h-auto" />
    </div>
  </div>
</template>

<script>
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'

export default {
  components: {
    TitleAndDescription
  }
}
</script>
