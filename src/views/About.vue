<!--
 * @Date: 2021-10-19 09:49:33
 * @Description: 
-->
<template>
  <div id="about">{{ msg }}</div>
  <el-button class="btn1 rk-mb-15" type="primary" plain @click="menuClick">点击1</el-button>
  <div class="div">{{ height }}</div>
</template>
<script>
  import { ref } from 'vue';

  export default {
    props: {
      msg: {
        // 菜单数据
        type: String,
        default() {
          return '222';
        },
      },
    },
    emits: ['changeMsg'],
    setup(props, { emit }) {
      function menuClick() {
        height.value = '333px';
      }
      let height = ref('33px');
      return { menuClick, height };
    },
  };
</script>
<style lang="scss">
  .div {
    width: 100px;
    background: $mainBackground;
    height: v-bind(height);
  }
</style>
