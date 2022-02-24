<template>
  <div class="rk-table-wrap">
    <el-scrollbar style="height: calc(100vh - 130px)">
      <el-table :data="data.tableData" style="width: 100%" class="table-main">
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
                  @click="lat.fun(scope.row)"
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
    </el-scrollbar>
    <div class="tar rk-mt-10">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="data.total"
        :current-page="data.pageIndex"
        :page-size="data.pageSize"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, reactive } from 'vue';

  const props = defineProps({
    tableOption: Object,
  });
  const emit = defineEmits();

  let data = reactive({
    tableData: [], // 表格数据
    total: 0, // 总数
    pageIndex: props.tableOption.pageIndex || 1, // 页码
    pageSize: props.tableOption.pageSize || 10, // 条数
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
</script>
<style lang="scss" scoped>
  .rk-table-wrap {
    width: 100%;
    .table-main {
      padding: 0 5px;
    }
  }
</style>
