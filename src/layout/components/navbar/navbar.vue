<!--
 * @Date: 2021-10-21 15:18:32
 * @Description: 
-->
<template>
  <div class="navbar-wrap flex-zy rk-pr-15">
    <i class="el-icon-s-unfold curp rk-ml-15" v-if="isCollapse" @click="changeSildebar"></i>
    <i class="el-icon-s-fold curp rk-ml-15" v-else @click="changeSildebar"></i>
    <div>
      <el-dropdown trigger="click" @command="handleCommand">
        <div class="flex-czjz curp">
          <span class="el-dropdown-img-wrap"></span>
          <span class="crup"> <i class="el-icon-arrow-down el-icon--right dropdown-icon"></i></span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="/home">首页</el-dropdown-item>
            <el-dropdown-item command="">管理员</el-dropdown-item>
            <el-dropdown-item command="/logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  export default {
    name: 'navbar',
    setup() {
      let store = useStore();
      let isCollapse = computed(() => {
        return store.getters.isCollapse;
      });
      const changeSildebar = () => {
        store.dispatch('collapse/changeCollapse');
      };

      const router = useRouter();
      const handleCommand = type => {
        if (!type) {
          return;
        }
        router.push({ path: type });
      };
      return {
        changeSildebar,
        isCollapse,
        handleCommand,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .navbar-wrap {
    height: 50px;
    background: #fff;
    .el-icon-s-fold:before,
    .el-icon-s-unfold:before {
      font-size: 24px;
    }
    .el-dropdown-img-wrap {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: #f5f5f5;
      border-radius: 50%;
    }
    .dropdown-icon:before {
      font-size: 18px;
    }
  }
</style>
