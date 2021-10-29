<!--
 * @Date: 2021-10-19 17:07:04
 * @Description: 左侧导航主体页面
-->
<template>
  <div class="sidebar-wrap">
    <sidebarMain></sidebarMain>
  </div>
</template>
<script>
  import sidebarMain from './main.vue';

  export default {
    name: 'sidebar',
    components: { sidebarMain },
    data() {
      return {};
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .sidebar-wrap {
    height: 100%;
    overflow-y: auto;
    background: $backgroundMain;
  }
</style>
