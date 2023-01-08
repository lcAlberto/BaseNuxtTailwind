<template>
  <label class="block text-sm">
    <span class="text-gray-700 dark:text-gray-400">{{ label }}</span>
    <input
      class="input block w-full mt-1 text-sm border-indigo-200 dark:border-indigo-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
      :placeholder="placeholder"
    >
    <small v-if="errorMessage" class="text-red-500">{{ errorMessage }}</small>
  </label>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    // label: { type: String, required: false, default: () => null },
    errorMessage: { type: String, required: false, default: () => null },
    placeholder: { type: String, required: false, default: () => 'placeholder' },
    label: { type: String, required: false, default: () => 'label' }
  }

}
</script>

<style>

</style>
