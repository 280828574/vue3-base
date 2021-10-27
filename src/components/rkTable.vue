<template>
  <div class="home-wrap">
    <el-table :data="data.tableData" style="width: 100%">
      <template v-for="item in tableOption.columns" :key="item[tableOption.columnKey]">
        <el-table-column v-if="!item.columnType" :prop="item.prop" :label="item.label" :width="item.width" />
        <el-table-column label="操作" width="120" v-if="item.columnType === 'btn'">
          <template #default="scope">
            <template v-for="lat in item.btns" :key="lat.btnName">
              <el-button
                v-if="lat.type === 'default'"
                :style="{ color: lat.color || '' }"
                type="text"
                size="small"
                @click="lat.fun(data)"
                >{{ lat.btnName }}</el-button
              >
              <el-button
                v-if="lat.type === 'del'"
                :style="{ color: lat.color || '' }"
                type="text"
                size="small"
                @click="handleDel(scope.row, lat)"
                >{{ lat.btnName }}</el-button
              >
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="data.total"
      :current-page="data.pageIndex"
      :page-size="data.pageSize"
      @current-change="changePage"
    >
    </el-pagination>
    <el-drawer v-model="drawer" title="$1" direction="rtl" :destroy-on-close="true" :close-on-click-modal="false"></el-drawer>
  </div>
</template>
<script>
  import { onMounted, reactive, getCurrentInstance } from 'vue';
  import { ElMessageBox } from 'element-plus';
  export default {
    name: 'home',
    emits: ['fetchList'],
    props: {
      // 表格选项
      tableOption: {
        type: Object,
        required: true,
      },
    },
    setup(pro, { emit }) {
      let data = reactive({
        tableData: [], // 表格数据
        total: 0, // 总数
        pageIndex: pro.tableOption.pageIndex || 1, // 页码
        pageSize: pro.tableOption.pageSize || 10, // 条数
      });
      onMounted(() => {
        fetchList();
      });
      // 获取列表
      const fetchList = () => {
        emit('fetchList', data);
      };
      // 分页
      const changePage = page => {
        data.pageIndex = page;
        data.tableData = [];
        fetchList();
      };
      // 删除
      const handleDel = (row, item) => {
        ElMessageBox.confirm(`确定要删除该条记录么?`, 'Warning', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          closeOnClickModal: false,
        })
          .then(() => {
            item.fun(row, data);
          })
          .catch(() => {});
      };
      return {
        data,
        changePage,
        fetchList,
        handleDel,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .home-wrap {
    width: 100%;
    height: 500px;
  }
</style>
