<template>
    <div class="flex w-full mt-8 items-center justify-between mx-auto">
        <div class="w-5/12 mx-auto">
          <TitleAndDescription
            title="Troque, jogue e vença!"
            description="Junte-se a nossa solução inovadora para expandir sua variedade de cartas de yugioh!."
            buttonText="botão provisório"
          />
        </div>

      <div class="mx-auto">
          <img src="@/assets/Banner.png" alt="Banner" class="w-10/12 h-auto">
        </div>
  
    </div>
  </template>
  
<script>

import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue';

export default{
components:{

    TitleAndDescription
},
}
</script>