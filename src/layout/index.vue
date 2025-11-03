<!--
 * @Date: 2021-10-19 16:46:52
 * @Description: 布局主体页面
-->
<template>
  <div class="layout-wrap">
    <sidebar />
    <div class="app-right-wrap" :class="{ 'app-right-wrap-collapse': isCollapse }">
      <navbar></navbar>
      <appMain></appMain>
    </div>
  </div>
</template>

<script setup>
  import sidebar from './components/sidebar/index.vue'
  import navbar from './components/navbar/navbar.vue'
  import appMain from './components/appMain.vue'
  let proxy = getCurrentInstance().proxy
  const $stores = proxy.$stores
  let isCollapse = computed(() => {
    return $stores.useCollapse().isCollapse
  })
</script>

<style lang="scss">
  @use '@/style/global.scss';
</style>

<style lang="scss">
  .layout-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    .app-right-wrap {
      width: calc(100% - 200px);
      overflow: hidden;
      &.app-right-wrap-collapse {
        width: calc(100% - 64px);
      }
    }
  }
</style>
