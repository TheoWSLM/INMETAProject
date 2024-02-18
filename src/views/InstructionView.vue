<script>
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue';
export default {
  components: {
    TitleAndDescription,
  }
}
</script>

<template>
  <div class="flex w-full mt-8 items-center justify-between mx-auto">
      <div class="w-9/12 mx-auto">
        <TitleAndDescription class="text-start whitespace-pre-line"
          title="Troque cartas de Yu-Gi-Oh com segurança"
          description="YuGiCards é seu portal para o mundo das trocas de cartas de Yu-Gi-Oh! Oferecemos uma ampla seleção de cartas, permitindo que você troque suas repetidas por aquelas que procura há tanto tempo ou descubra novas adições para sua coleção. Sempre priorizamos segurança e transparência, garantindo trocas confiáveis em um ambiente protegido.
          
          Nossa plataforma foi projetada pensando na facilidade de uso, com apenas alguns cliques, você pode fazer propostas de trocas e expandir sua própria coleção de maneira rápida:"
        />
      </div>
    </div>

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
  <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span class="flex items-center justify-center w-8 h-8 border border-purple-700 rounded-full shrink-0 dark:border-purple-700">
            1
        </span>
        <span>
            <h3 class="font-medium leading-tight">Registre-se</h3>
            <p class="text-sm">Crie um usuário inserindo email, nome e senha</p>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
      <span class="flex items-center justify-center w-8 h-8 border border-purple-700 rounded-full shrink-0 dark:border-purple-700">
            2
        </span>
        <span>
            <h3 class="font-medium leading-tight">Crie uma solicitação de troca</h3>
            <p class="text-sm">Vá em minhas trocas e clique em botao e faça isso e aquilo</p>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
      <span class="flex items-center justify-center w-8 h-8 border border-purple-700 rounded-full shrink-0 dark:border-purple-700">
            3
        </span>
        <span>
            <h3 class="font-medium leading-tight">Navegue pelas cartas disponíveis no sistema</h3>
            <p class="text-sm">Vá em cartas e veja todas as cartas disponíveis no sistema para adicionar à sua conta e trocar</p>
        </span>
    </li>
</ol>


  </template>