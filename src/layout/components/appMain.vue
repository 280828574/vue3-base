<template>
  <section class="app-main">
    <el-scrollbar class="app-main-wrap">
      <router-view> </router-view>
    </el-scrollbar>
  </section>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const key = computed(() => {
    return router.path;
  });
</script>

<style scoped>
  .app-main {
    width: 100%;
    position: relative;
    padding: 0px;
    overflow: auto;
    padding: 15px;
  }
</style>

<style lang="scss">
  .app-main-wrap {
    height: calc(100vh - 80px) !important;
  }
</style>
