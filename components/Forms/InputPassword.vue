<template>
  <label class="block text-sm">
    <span class="flex flex-row justify-between">
      <span class="text-gray-700 dark:text-gray-400 mr-auto">{{ label }} {{ data?.lenght }}</span>
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
    <label class="input-group">
      <input
        v-model="data"
        class=" block w-full mt-1 text-sm border focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input input-bordered"
        :class="`${customClass} input ${errorClass}`"
        :placeholder="placeholder"
        :type="showPassword ? 'text' : 'password'"
      >
      <!-- <input type="text" placeholder="0.01" class="input input-bordered"> -->
      <label
        class="swap border border-l-transparent px-3 py-1 mt-1"
        :class="errorMessage ? 'border-red-500' : 'border-indigo-300'"
        @click="showPassword = !showPassword"
      >
        <font-awesome-icon v-if="showPassword" icon="fa-solid fa-unlock fa-lg" />
        <font-awesome-icon v-else icon="fa-solid fa-lock fa-lg" />
      </label>
    </label>
    <div v-if="score">
      <progress
        class="progress w-full"
        :class="progress.color"
        :value="progress.value"
        :max="max"
      />
    </div>
    <small v-if="errorMessage" class="text-red-500">{{ errorMessage }}</small>
    <small v-else-if="hint" class="text-gray-500">{{ hint }}</small>
  </label>
</template>

<script>
export default {
  name: 'InputPassword',
  props: {
    value: { type: String, required: true, default: () => null },
    labelIcon: { type: String, required: false, default: () => null },
    size: { type: String, required: false, default: () => 'md' },
    errorMessage: { type: String, required: false, default: () => null },
    placeholder: { type: String, required: false, default: () => null },
    hint: { type: String, required: false, default: () => null },
    label: { type: String, required: false, default: () => null },
    title: { type: String, required: false, default: () => null },
    titlePosition: { type: String, required: false, default: () => null },
    min: { type: String, required: false, default: () => null },
    max: { type: String, required: false, default: () => null },
    score: { type: Boolean, required: false, default: () => false }
  },
  data () {
    return {
      data: undefined,
      customClass: [],
      errorClass: undefined,
      showPassword: false,
      progress: {
        color: '',
        value: 0
      }
    }
  },
  watch: {
    data (value) {
    //   console.log(value.length)
      if (value.length <= 5) {
        this.progress = {
          color: 'progress-error',
          value: 20
        }
      } else if (value.length <= 7) {
        this.progress = {
          color: 'progress-warning',
          value: 50
        }
      } else if (value.length === 8) {
        this.progress = {
          color: 'progress-primary',
          value: 80
        }
      } else if (value.length > 8) {
        this.progress = {
          color: 'progress-success',
          value: 100
        }
      }
    }
  },
  mounted () {
    this.data = this.value
    const sizes = ['xs', 'sm', 'md', 'lg']
    if (this.size && sizes.includes(this.size)) {
      this.customClass += `input-${this.size}`
    }
    this.errorClass = this.errorMessage === '' ? 'border-indigo-300 dark:border-indigo-600' : 'border-red-500 dark:border-red-600'
  }
}
</script>

<style>

</style>
