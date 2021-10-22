<template>
  <p>{{ x }} {{ y }}</p>
  <el-button @click="change">更改</el-button>
  <div class="rk-mb-15 rk-mt-15">about</div>
  <about @changeMsg="changeMsg" msg="about"></about>
  <div class="rk-mb-15 rk-mt-15">test</div>
  <test></test>
</template>

<script>
  //   import api from '@/api';
  import about from '@/views/About.vue';
  import test from '@/components/test.vue';
  import { ref, toRef, toRefs, reactive, onMounted, getCurrentInstance } from 'vue';
  export default {
    components: { about, test },
    setup(pro, content) {
      //可以在不失去响应性的情况下破坏结构
      let a = {
        x: 1,
        y: 1,
        change: () => {
          state.x++;
          state.y++;
        },
        changeMsg: val => {
          console.log('val2 :>> ', val);
        },
      };

      onMounted(() => {
        let $api = getCurrentInstance().appContext.config.globalProperties.$api;
        // api.user.fetchUsers().then(res => {
        //   console.log('res2222 :>> ', res);
        // });
      });
      const state = reactive(a);
      return toRefs(state);
    },
  };
</script>
