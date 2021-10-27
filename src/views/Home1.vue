<template>
  <p>{{ x }} {{ y }}</p>
  <el-button v-throttle="{ fun: change, time: 1000 }">更改</el-button>
  <el-input placeholder="" v-model="value" v-debounce="{ fun: changeMsg, time: 100 }"></el-input>
  <el-input placeholder="" v-model="value1" v-debounce="{ fun: changeMsg1, time: 1000 }"></el-input>
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
        value: '',
        value1: '',
        change: () => {
          console.log('22222222 :>> ', 22222222);
          state.x++;
          state.y++;
        },
        changeMsg: val => {
          console.log('val :>> ', a.value);
        },
        changeMsg1: val => {
          console.log('val1 :>> ', a.value1);
        },
      };

      onMounted(() => {
        let $api = getCurrentInstance().appContext.config.globalProperties.$api;
        $api.user.fetchUsers().then(res => {});
      });
      const state = reactive(a);
      return toRefs(state);
    },
  };
</script>
