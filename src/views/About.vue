<!--
 * @Date: 2021-10-19 09:49:33
 * @Description: 
-->
<template>
  <div id="about">{{ msg }}</div>
  <el-button class="btn1 rk-mb-15" type="primary" plain @click="menuClick">点击</el-button>
  <div class="div">{{ height }}</div>
</template>
<script>
  import { defineComponent, ref, defineProps } from 'vue';

  export default defineComponent({
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
        props.msg = '222222222';
        // 通过自定义事件回传值
        // emit('$1', $2);
      }
      let height = ref('33px');
      return { menuClick, height };
    },
  });
</script>
<style lang="scss">
  .div {
    width: 100px;
    background: $mainBackground;
    height: v-bind(height);
  }
</style>
