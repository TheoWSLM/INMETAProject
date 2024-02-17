<template>
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in fields" :key="index" class="mb-5">
        <label :for="field.id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ field.label }}</label>
        <input v-model="formData[field.id]" :type="field.type" :id="field.id" :placeholder="field.placeholder" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        <p v-if="errors[field.id]" class="text-red-500">{{ errors[field.id] }}</p>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ submitLabel }}</button>
    </form>
  </template>


<script>
export default {
  props: {
    fields: Array,
    endpoint: String,
    submitLabel: String,
    fieldValidations: Object
  },
  data() {
    return {
      formData: {},
      errors: {}
    };
  },
  methods: {
    async handleSubmit() {
      try {
       

       // Validação dos campos
       for (const field of this.fields) {
          const validations = this.fieldValidations[field.id];
          if (validations) {
            for (const validation of validations) {
              if ( !this.formData[field.id]  || !validation.validator(this.formData[field.id])) {
                this.errors[field.id] = validation.message;
                break; 
              }
            }
          }
        }

        if (Object.keys(this.errors).length === 0) {

          console.log('Formulário válido, enviando requisição...');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>