<template>
  <section class="app-main">
    <router-view> </router-view>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const key = computed(() => {
    return router.path
  })
</script>

<style lang="scss">
  .app-main {
    height: calc(100vh - 90px) !important;
    box-sizing: border-box;
  }
</style>
