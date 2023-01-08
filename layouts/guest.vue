<template>
  <div
    class="flex items-center min-h-screen p-6 bg-gray-500 dark:bg-gray-500"
    style="background-image: url('https://images.pexels.com/photos/5245865/pexels-photo-5245865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-size: 100%;"
  >
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full dark:hidden"
            src="https://images.pexels.com/photos/12766718/pexels-photo-12766718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Office"
          >
          <img
            aria-hidden="true"
            class="hidden object-cover w-full h-full dark:block"
            src="https://images.pexels.com/photos/12766718/pexels-photo-12766718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Office"
          >
        </div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuestLayout',
  auth: false
}
</script>

<style>

</style>
