<!--
 * @Date: 2021-10-21 15:18:32
 * @Description: 
-->
<template>
  <div class="navbar-wrap flex-zy rk-pr-15">
    <el-icon class="curp rk-ml-15" :size="24" color="#606266" v-if="isCollapse">
      <expand style="font-size: 24px" @click="changeSildebar" />
    </el-icon>
    <el-icon class="curp rk-ml-15" :size="24" color="#606266" v-else>
      <fold style="font-size: 24px" @click="changeSildebar" />
    </el-icon>
    <div>
      <el-dropdown trigger="click" @command="handleCommand">
        <div class="flex-czjz curp rk-mr-15">
          <span class="el-dropdown-img-wrap tac">
            {{ name }}
          </span>
          <span class="crup"> <i class="el-icon-arrow-down el-icon--right dropdown-icon"></i></span>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="rk-pt-5 rk-pb-5">
            <el-dropdown-item command="/home">首页</el-dropdown-item>
            <el-dropdown-item command="">管理员</el-dropdown-item>
            <el-dropdown-item command="/login">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';

  const store = useStore();
  const router = useRouter();
  let name = 'A';

  const isCollapse = computed(() => {
    return store.getters.isCollapse;
  });

  const changeSildebar = () => {
    store.dispatch('collapse/changeCollapse');
  };

  const handleCommand = type => {
    if (!type) {
      return;
    }
    router.push({ path: type });
  };
</script>
<style lang="scss" scoped>
  .navbar-wrap {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    .el-icon-s-fold:before,
    .el-icon-s-unfold:before {
      font-size: 24px;
    }
    .el-dropdown-img-wrap {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background: #f5f5f5;
      border-radius: 50%;
      font-size: 24px;
    }
    .dropdown-icon:before {
      font-size: 18px;
    }
  }
</style>
