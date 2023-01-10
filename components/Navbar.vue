<template>
  <nav
      
      class="flex fixed inset-0 invisible z-10 flex-col justify-center items-center text-xl text-center bg-gray-700 border-0 border-gray-200 border-solid md:bg-transparent md:flex md:flex-row md:text-sm md:static md:visible lg:text-base"
  >
    <label
        
        for="mainNavTogger"
        class="flex absolute top-0 right-0 justify-center items-center p-3 mt-8 mr-6 mb-2 w-10 h-10 text-2xl font-bold leading-none text-white bg-red-700 rounded-full border-0 border-gray-200 border-solid cursor-default md:hidden"
    >×</label
    >
    <a
        v-for="link in links" :href="link.path" v-text="link.name"
       class="my-4 mr-6 text-3xl leading-6 text-white no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer md:text-xl md:my-0 hover:no-underline">
    </a>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
    links: this.$router.options.routes
  }},
}
</script>