<template>
  <div class="flex w-full mt-20 items-center justify-between mx-auto">
    <div class="w-4/12 mx-auto">
      <TitleAndDescription class="text-start whitespace-pre-line"
        title="Encontre o card que procura e complete 
        seu deck"
        description="Junte-se à comunidade e se torne imbatível!"
        buttonText="Saber mais"
      />
    </div>

    <div class="mx-auto">
      <img src="@/assets/Banner.png" alt="Banner" class="w-10/12 h-auto" />
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
