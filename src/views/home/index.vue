<template></template>

<script>
  import { onMounted, getCurrentInstance } from 'vue';
  export default {
    setup(pro, content) {
      onMounted(() => {
        let $scripts = getCurrentInstance().appContext.config.globalProperties.$scripts;
        console.log('$scripts :>> ', $scripts);
      });
    },
  };
</script>
