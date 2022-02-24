<template>
  <rkTable ref="rkTableRef" @fetchList="fetchList" @delItem="delItem" :tableOption="tableOption"></rkTable>
</template>

<script setup>
  import { getCurrentInstance, ref } from 'vue';
  import rkTable from '@/components/rkTable.vue';

  let $api = getCurrentInstance().appContext.config.globalProperties.$api;
  let detailDrawer = ref(false);
  let tableOption = {
    columns: [
      {
        prop: 'id',
        label: 'id',
        width: '180',
      },
      {
        prop: 'login',
        label: '名称',
        width: '180',
      },
      {
        columnType: 'btn',
        btns: [
          {
            btnName: '修改',
            type: 'default',
            fun: row => {
              detailDrawer.value = true;
            },
          },
          {
            btnName: '删除',
            type: 'del',
            color: 'red',
            fun: (row, tableRefData) => {
              delItem(row, tableRefData);
            },
          },
        ],
      },
    ],
    columnKey: 'id',
  };
  // 列表
  const fetchList = data => {
    $api.user.fetchUsers().then(res => {
      data.tableData = res.splice(0, 19);
      data.total = res.length;
    });
  };

  // 搜索
  const handleSearch = tableRefData => {
    tableRefData.tableData = [];
    tableRefData.pageIndex = 1;
    fetchList(tableRefData);
  };

  // 删除
  const delItem = (row, tableRefData) => {
    tableRefData.tableData = [];
    tableRefData.pageIndex = 1;
  };
</script>

<style lang="scss"></style>
