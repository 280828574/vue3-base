<!--
 * @Date: 2021-10-19 17:07:04
 * @Description: 左侧导航主体页面
-->
<template>
  <div class="sidebar-wrap">
    <sidebarMain></sidebarMain>
  </div>
</template>
<script setup>
  import sidebarMain from './main.vue';
</script>
<style lang="scss" scoped>
  .sidebar-wrap {
    height: 100%;
    overflow-y: auto;
    background: rgb(84, 92, 100);
  }
</style>
