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
    <img src="@/assets/theoWeberIcon.png" alt="Foto de Theo Weber com fundo laranja" class="w-3/12 h-auto mb-4 mx-auto">

    <div class="w-5/12 mx-auto">
      <TitleAndDescription
        title="Título provisório"
        description="Descrição provisória descrição provisória descrição provisóriadescrição provisóriadescrição provisóriadescrição provisóriadescrição provisóriadescrição provisória."
        buttonText="Entrar em contato"
      />
    </div>
  </div>
</template>
