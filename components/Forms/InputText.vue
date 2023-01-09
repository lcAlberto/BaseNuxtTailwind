<template>
  <label class="block text-sm">
    <span class="flex flex-row justify-between">
      <span class="text-gray-700 dark:text-gray-400 mr-auto">{{ label }}</span>
      <div
        v-if="title"
        class="tooltip"
        :class="`tooltip-${titlePosition}`"
        :data-tip="title"
      >
        <font-awesome-icon
          v-if="labelIcon"
          :icon="labelIcon"
          class="ml-auto"
        />
      </div>
      <font-awesome-icon
        v-else-if="labelIcon"
        :icon="labelIcon"
        class="ml-auto"
      />
    </span>
    <input
      class=" block w-full mt-1 text-sm border focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
      :class="`${customClass} input ${errorClass}`"
      :placeholder="placeholder"
      type="text"
    >
    <small v-if="errorMessage" class="text-red-500">{{ errorMessage }}</small>
    <small v-else-if="hint" class="text-gray-500">{{ hint }}</small>
  </label>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    labelIcon: { type: String, required: false, default: () => null },
    size: { type: String, required: false, default: () => 'md' },
    errorMessage: { type: String, required: false, default: () => null },
    placeholder: { type: String, required: false, default: () => null },
    hint: { type: String, required: false, default: () => null },
    label: { type: String, required: false, default: () => null },
    title: { type: String, required: false, default: () => null },
    titlePosition: { type: String, required: false, default: () => null }
  },
  data () {
    return {
      customClass: [],
      errorClass: ''
    }
  },
  mounted () {
    const sizes = ['xs', 'sm', 'md', 'lg']
    if (this.size && sizes.includes(this.size)) {
      this.customClass = `input-${this.size}`
    }
    this.errorClass = this.errorMessage === '' ? 'border-indigo-300 dark:border-indigo-600' : 'border-red-500 dark:border-red-600'
  }
}
</script>

<style>

</style>
