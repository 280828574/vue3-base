<!--
 * @Date: 2021-10-19 16:46:52
 * @Description: 布局主体页面
-->
<template>
  <div class="layout-wrap">
    <sidebar />
    <div class="app-right-wrap">
      <navbar></navbar>
      <appMain></appMain>
    </div>
  </div>
</template>

<script>
  import sidebar from './components/sidebar/index.vue';
  import navbar from './components/navbar/navbar.vue';
  import appMain from './components/appMain.vue';
  export default {
    name: 'Layout',
    components: { sidebar, navbar, appMain },
  };
</script>

<style lang="scss" scoped>
  .layout-wrap {
    height: 100%;
    display: flex;
    .app-right-wrap {
      flex: 1;
    }
  }
</style>
