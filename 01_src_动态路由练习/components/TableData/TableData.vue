<template>
  <div id="TableData">
    <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" :loading="false"
             :scroll="{ x: 1350, y: 300 }">
      <a slot="action" slot-scope="">action</a>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left'},
  {title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left'},
  {title: 'Column 1', dataIndex: 'address', key: '1', width: 130},
  {title: 'Column 2', dataIndex: 'address', key: '2', width: 130},
  {title: 'Column 3', dataIndex: 'address', key: '3', width: 130},
  {title: 'Column 4', dataIndex: 'address', key: '4', width: 130},
  {title: 'Column 5', dataIndex: 'address', key: '5', width: 130},
  {title: 'Column 6', dataIndex: 'address', key: '6', width: 130},
  {title: 'Column 7', dataIndex: 'address', key: '7', width: 130},
  {title: 'Column 8', dataIndex: 'address', key: '8'},
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: {customRender: 'action'},
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export default {
  name: "TableData",
  data() {
    return {
      data,
      columns,
    };
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          },
        }),
      };
    },
  },
}
</script>

<style lang="scss" scoped>
#TableData {
  width: 100%;
  margin: 1% 0;

  .ant-table-tbody {
    tr {
      height: 74.67px;
    }
  }

  .a-table {
    width: 100%;
  }
}
</style>