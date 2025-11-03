<!--
 * @Date: 2021-10-19 17:33:28
 * @Description: 左侧导航组件
-->
<template>
  <div class="sidebar-main-wrap">
    <el-scrollbar height="100vh">
      <el-menu
        default-active="/home"
        :class="['el-menu-vertical-wrap', { 'no-icon': $stores.useCollapse().isCollapse }]"
        @select="handleOpen"
        :collapse="$stores.useCollapse().isCollapse"
      >
        <div v-for="item in routes" :key="item.path">
          <el-menu-item :index="item.children[0].path" v-if="item.isMenu && item.children && item.children.length === 1">
            <el-icon>
              <Menu />
            </el-icon>
            <span v-if="!$stores.useCollapse().isCollapse"> {{ item.children[0].meta.title }}</span>
          </el-menu-item>
          <el-sub-menu v-if="item.isMenu && item.children && item.children.length > 1" :index="item.path">
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>
              <span v-if="!$stores.useCollapse().isCollapse">{{ item.meta.title }}</span>
            </template>
            <div v-for="list in item.children" :key="list.path">
              <el-menu-item v-if="list.isMenu" :index="list.path">{{ list.meta.title }}</el-menu-item>
            </div>
          </el-sub-menu>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
  let proxy = getCurrentInstance().proxy
  const $stores = proxy.$stores
  const router = useRouter()
  const routes = router.options.routes

  const handleOpen = key => {
    router.push(key)
  }

  //   let isCollapse = computed(() => {
  //     return store.getters.isCollapse;
  //   });
</script>
<style lang="scss">
  .sidebar-main-wrap {
    height: 100%;
    background: rgb(84, 92, 100);
    .el-menu {
      border-right: none;
    }
    .el-menu-vertical-wrap:not(.el-menu--collapse) {
      width: 200px;
    }
    .el-menu-item [class^='el-icon-'] {
      font-size: 14px;
    }
    .el-menu--collapse .el-sub-menu.is-active i {
      color: #409eff;
    }
    .el-menu-vertical-wrap {
      background: rgb(84, 92, 100);
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
        background-color: rgba(67, 74, 80);
      }
      .el-menu-item.is-active {
        color: #409eff;
      }
      .el-menu-item:hover {
        background-color: rgba(67, 74, 80);
      }
      .el-sub-menu .el-menu {
        background: rgb(84, 92, 100);
      }
      &.no-icon {
        .el-sub-menu__icon-arrow {
          display: none;
        }
      }
    }
  }
</style>
