<template>
  <nav
      
      class="flex fixed inset-0 invisible z-10 flex-col justify-center items-center text-xl text-center bg-gray-700 border-0 border-gray-200 border-solid md:bg-transparent md:flex md:flex-row md:text-sm md:static md:visible lg:text-base"
  >
    <div v-for="link of links">
      <a class="my-4 mr-6 text-3xl leading-6 text-white no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer md:text-xl md:my-0 hover:no-underline" :href="link.path">{{ link.name }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    links() {
      return this.$router.options.routes.filter((link) => !link.path.includes('*'));
    }
  }
}
</script>
