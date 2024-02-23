<script>
import SubmitForm from '../components/sectionItems/SubmitForm.vue'
import { Modal } from 'flowbite';

export default {
  components: {
    SubmitForm
  },
  mounted() {
    const $targetEl = document.getElementById('authentication');
    const options = {
      placement: 'center',
      backdrop: 'static',
      backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
    };
    const instanceOptions = {
      id: 'authentication',
      override: true
    };
    this.modal = new Modal($targetEl, options, instanceOptions);
  },
  methods: {
    closeModal() {

      this.modal.hide();
    },
    openModal(){
this.modal.show();
    },
  },
  data() {
    return {
      userLoginFields: [
        { id: 'email', label: 'Email', placeholder: 'Digite seu email', type: 'email' },
        { id: 'password', label: 'Senha', placeholder: 'Digite sua senha', type: 'password' }
      ],
      userLoginEndpoint: 'https://cards-marketplace-api.onrender.com/login',
      userLoginValidations: {
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

<template>

  <div
    id="authentication"
    ref="authenticationModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
  >
    <div class="relative  p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Login</h3>
          <button
            type="button"
            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <SubmitForm
            :fields="userLoginFields"
            :endpoint="userLoginEndpoint"
            :submitLabel="'Login'"
            :fieldValidations="userLoginValidations"
            @form-submitted="closeModal"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Main modal -->
</template>