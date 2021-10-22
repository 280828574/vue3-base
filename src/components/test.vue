<!--
 * @Date: 2021-10-19 15:52:21
 * @Description: 
-->
<script setup>
  import { ref } from 'vue';
  // 变量
  let msg = ref('hello');

  // 函数
  function log() {
    msg.value = '1111';
  }
</script>
<script>
  // 声明额外的选项
  export default {
    data() {
      return {
        aaaa: '2222222',
      };
    },
  };
</script>
<template>
  <div @click="log">{{ msg }}</div>
  <div>{{ aaaa }}</div>
</template>
