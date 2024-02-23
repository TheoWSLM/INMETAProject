<template>
  <div class="flex flex-col md:flex-row mt-8 items-center justify-between mx-auto">
    <div class="mx-auto md:mb-4">
      <TitleAndDescription
        class="text-start text-5xl lg:text-5xl lg:whitespace-pre-line"
        title="Encontre o card que 
        procura e complete 
        seu deck"
        description="Junte-se à comunidade e se torne imbatível!"
        buttonText="Saber mais"
        :textSize="'text-4xl lg:text-5xl'"
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
