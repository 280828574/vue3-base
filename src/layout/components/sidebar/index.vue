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
  import sidebarMain from './sidebarMain.vue'
</script>
<style lang="scss">
  @use '@/style/global.scss';
</style>

<style lang="scss">
  .sidebar-wrap {
    height: 100%;
    width: 200px;
    background-color: #304156;
  }
</style>
