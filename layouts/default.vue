<template>
  <div
    class="flex h-screen bg-gray-50 dark:bg-gray-900"
  >
    <!-- Desktop sidebar -->
    <sidebar />
    <div class="flex flex-col flex-1 w-full">
      <header class="z-10 bg-white shadow-md dark:bg-gray-800">
        <navbar />
      </header>
      <main class="h-full overflow-y-auto pa-3">
        <Nuxt />
      </main>
    </div>
  </div>

  <!-- <header>
    <navbar />
  </header>
  <main>
    <section>
      <Nuxt />
    </section>
  </main> -->
  <!-- </div> -->
</template>

<script>
import Sidebar from '~/components/Layout/sidebar.vue'
import Navbar from '~/components/Layout/navbar.vue'
// import FooterDefault from '~/components/Layout/footerDefault.vue'
export default {
  name: 'Default',
  components: {
    Navbar,
    Sidebar
    // Sidebar,
    // FooterDefault
  }
}

</script>

<style>

</style>
