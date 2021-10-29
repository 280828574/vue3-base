<!--
 * @Date: 2021-10-19 17:33:28
 * @Description: 左侧导航组件
-->
<template>
  <div class="sidebar-main-wrap">
    <el-scrollbar height="100vh">
      <el-menu
        default-active="/home"
        :class="['el-menu-vertical-wrap', { 'no-icon': isCollapse }]"
        @select="handleOpen"
        :collapse="isCollapse"
      >
        <div v-for="item in routes" :key="item.path">
          <el-menu-item :index="item.children[0].path" v-if="item.children && item.children.length === 1">
            <i :class="[item.meta.icon]"></i>
            <span v-if="!isCollapse"> {{ item.children[0].meta.title }}</span>
          </el-menu-item>
          <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
              <i :class="[item.meta.icon]"></i>
              <span v-if="!isCollapse">{{ item.meta.title }}</span>
            </template>
            <div>
              <el-menu-item :index="list.path" v-for="list in item.children" :key="list.path">{{ list.meta.title }}</el-menu-item>
            </div>
          </el-sub-menu>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  export default {
    name: 'sidebar-main',
    setup(props) {
      const router = useRouter();
      const routes = router.options.routes;
      const handleOpen = key => {
        router.push(key);
      };

      let store = useStore();
      let isCollapse = computed(() => {
        return store.getters.isCollapse;
      });

      return {
        handleOpen,
        routes,
        isCollapse,
      };
    },
  };
</script>
<style lang="scss">
  .sidebar-main-wrap {
    height: 100%;
    background: $backgroundMain;
    .el-menu {
      border-right: none;
    }
    .el-menu-vertical-wrap:not(.el-menu--collapse) {
      width: 240px;
    }
    .el-menu-item [class^='el-icon-'] {
      font-size: 14px;
    }
    .el-menu--collapse .el-sub-menu.is-active i {
      color: #409eff;
    }
    .el-menu-vertical-wrap {
      background: $backgroundMain;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      span,
      .el-menu-item,
      .el-sub-menu__title i {
        color: #fff;
      }
      .is-active span,
      .is-active i {
        color: #409eff;
      }
      .el-sub-menu__title:hover {
        background-color: #263445;
      }
      .el-menu-item.is-active {
        color: #409eff;
      }
      .el-menu-item:hover {
        background-color: #263445;
      }
      .el-sub-menu .el-menu {
        background: $backgroundMain;
      }
      &.no-icon {
        .el-sub-menu__icon-arrow {
          display: none;
        }
      }
    }
  }
</style>
