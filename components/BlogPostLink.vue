<template>
  <div
      class="flex items-center pb-4 mb-4 leading-6 border-t-0 border-r-0 border-l-0 border-b border-gray-100 border-solid"
      style="border-width: 0px;"
  >
    <div
        class="flex flex-col w-full text-sm border-0 border-gray-200 border-solid"
    >

      <div
          class="flex flex-row items-center border-0 border-gray-200 border-solid"
          v-for="blogPost in data"
      >
        <div
            class="flex-col flex-grow leading-none border-0 border-gray-200 border-solid"
        >
          <a
              :href="blogPost._path"
              class="leading-3 text-gray-700 no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer hover:no-underline"
          >
            {{ blogPost.title }}
          </a>
          <p
              class="my-1 mx-0 font-light leading-3 text-gray-400 border-0 border-gray-200 border-solid"
          >
            {{ blogPost.date }}
          </p>
          <div
              class="flex flex-row flex-wrap leading-3 border-0 border-gray-200 border-solid"
          ></div>
        </div>
        <a
            :href="blogPost._path"
            class="text-gray-700 no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer hover:no-underline"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-4 h-4 align-middle border-0 border-gray-200 border-solid"
            style="fill: currentcolor;"
        >
          <path
              d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 0 1 0 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"
              class="border-0 border-gray-200 border-solid"
          ></path></svg
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('blog', () => queryContent('/').only(['title', 'description', 'date', '_path']).find())
</script>
