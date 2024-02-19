<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(field, index) in fields" :key="index" class="mb-5">
      <label :for="field.id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
        field.label
      }}</label>
      <input
        v-model="formData[field.id]"
        :type="field.type"
        :id="field.id"
        :placeholder="field.placeholder"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
      <p v-if="errors[field.id]" class="text-red-500">{{ errors[field.id] }}</p>
    </div>
    <button
      type="submit"
      class="relative inline-flex items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-amber-600 group-hover:from-purple-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        {{ submitLabel }}
      </span>
    </button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    fields: Array,
    endpoint: String,
    submitLabel: String,
    fieldValidations: Object,
    method: {
      type: String,
      default: 'POST' 
    },
    requestData: Object
  },
  data() {
    return {
      formData: {},
      errors: {}
    }
  },
  methods: {
    async handleSubmit() {
      try {
        for (const field of this.fields) {
          const validations = this.fieldValidations[field.id]
          if (validations) {
            for (const validation of validations) {
              if (!this.formData[field.id] || !validation.validator(this.formData[field.id])) {
                this.errors[field.id] = validation.message
                break
              }
            }
          }
        }

        if (Object.keys(this.errors).length === 0) {
          console.log('Formulário válido, enviando requisição...')

          const response = await axios({
            method: this.method,
            url: this.endpoint,
            data: this.formData
          })

          console.log('Resposta da API:', response.data)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>
