<template>
  <div>11111111111</div>
</template>

<script setup>
  let proxy = getCurrentInstance().proxy
  const $scripts = proxy.$scripts
  console.log('%c [ $scripts ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', $scripts)
</script>

<style scoped></style>
