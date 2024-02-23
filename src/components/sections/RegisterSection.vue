<template>
  <div class="flex flex-col lg:flex-row justify-between mt-16">
    <div class="lg:w-5/12 lg:mx-16">
      <TitleAndDescription
        title="Comece a trocar suas cartas hoje"
        description="Se registre agora e comece a desfrutar da emoção de trocar cartas de Yu-Gi-Oh com outros entusiastas como você. É fácil, é divertido e é tudo parte da experiência YuGiCards!"
        buttonText=""
      />
    </div>
    <div class="lg:w-5/12 lg:mt-14 lg:mx-20">
      <SubmitForm
        :fields="userRegistrationFields"
        :endpoint="userRegistrationEndpoint"
        :submitLabel="'Registrar'"
        :fieldValidations="userRegistrationValidations"
      />
    </div>
  </div>
</template>

<script>
import SubmitForm from '@/components/sectionItems/SubmitForm.vue'
import TitleAndDescription from '@/components/sectionItems/TitleAndDescription.vue'

export default {
  components: {
    SubmitForm,
    TitleAndDescription
  },
  data() {
    return {
      userRegistrationFields: [
        { id: 'name', label: 'Nome', placeholder: 'Digite seu nome', type: 'name' },
        { id: 'email', label: 'Email', placeholder: 'Digite seu email', type: 'email' },
        { id: 'password', label: 'Senha', placeholder: 'Digite sua senha', type: 'password' }
      ],
      userRegistrationEndpoint: 'https://cards-marketplace-api.onrender.com/register',
      userRegistrationValidations: {
        name: [{ validator: (name) => name.trim() !== '', message: 'Nome é obrigatório' }],
        email: [
          { validator: (email) => email.trim() !== '', message: 'Email é obrigatório' },
          {
            validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            message: 'Formato de email inválido'
          },
          { validator: (email) => email.length <= 50, message: 'Email muito longo' }
        ],
        password: [
          { validator: (password) => password.trim() !== '', message: 'Senha é obrigatória' },
          {
            validator: (password) => password.length >= 6,
            message: 'Senha precisa ter mais de 6 caracteres'
          }
        ]
      }
    }
  }
}
</script>
