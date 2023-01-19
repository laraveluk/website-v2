<template>
  <div>
    <hero-banner :title="page.title" :subtext="page.date"></hero-banner>
    <slot />
  </div>
</template>

<script setup>
const { page } = useContent()
</script>
