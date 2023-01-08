<template>
  <div>
    <div
      class="flex bg-gray-50 dark:bg-gray-900"
    >
      <!-- Desktop sidebar -->
      <sidebar :open="openSidebar" />
      <div class="flex flex-col flex-1 w-full">
        <header class="z-10 bg-white shadow-md dark:bg-gray-800">
          <navbar @toggleSidebar="openSidebar = !openSidebar" />
        </header>
        <main class="h-full overflow-y-auto pa-3">
          <div class="" style="min-height: 70vh;">
            <Nuxt />
          </div>
        <!-- <footer-default /> -->
        </main>
      </div>
    </div>
    <footer-default />
  </div>
</template>

<script>
import Sidebar from '~/components/Layout/Default/sidebar.vue'
import Navbar from '~/components/Layout/Default/navbar.vue'
import FooterDefault from '~/components/Layout/Default/footerDefault.vue'
export default {
  name: 'Default',
  components: {
    Navbar,
    Sidebar,
    FooterDefault
    // Sidebar,
  },
  data () {
    return {
      openSidebar: true
    }
  }
}

</script>

<style>

</style>
