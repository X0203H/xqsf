<template>
  <div id="TableData">
    <a-table :loading="staus" :pagination="pagination" hideDefaultSelections :row-selection="rowSelection"
             :columns="columns"
             :data-source="$store.state.tableData1"
             :scroll="{ x: 1500, y: 300 }">
      <a slot="action" slot-scope="">保单详细信息</a>
      <template slot="position" slot-scope="">
        <a-pagination size="small" :total="50" show-size-changer show-quick-jumper/>
      </template>
    </a-table>
  </div>
</template>

<script>
// 数据
const columns = [
  {title: '保单号', width: 100, dataIndex: 'PolicyNumber', key: 'name', fixed: 'left'},
  {title: '保单状态', width: 100, dataIndex: 'PolicyStatus', key: 'age', fixed: 'left'},
  {title: '本期应缴日期', dataIndex: 'null', key: '1', width: 150},
  {title: '本期缴费次数', dataIndex: 'address', key: '2', width: 150},
  {title: '应缴保费', dataIndex: 'address', key: '3', width: 150},
  {title: '本期缴费截止日', dataIndex: 'address', key: '4', width: 150},
  {title: '本期是否缴费', dataIndex: 'address', key: '5', width: 150},
  {title: '本期缴费日期', dataIndex: 'address', key: '6', width: 150},
  {title: '失效日期', dataIndex: 'ExpirationDate', key: '7', width: 150},
  {title: '客户姓名', dataIndex: 'CustomerName', key: '8', width: 150},
  {title: '客户性别', dataIndex: 'CustomerSex', key: '9', width: 150},
  {title: '渠道', dataIndex: 'channel', key: '10', width: 150},
  {title: '子渠道', dataIndex: 'subchannel', key: '11', width: 150},
  {title: '保单管理机构名称', dataIndex: 'OrganizationName', key: '12', width: 150},
  {title: '保单管理机构编码', dataIndex: 'MechanismCoding', key: '13', width: 150},
  {title: '代理机构', dataIndex: 'agency', key: '14', width: 150},
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: {customRender: 'action'},
  },
];

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//     max: 'emmm'
//   });
// }
export default {
  name: "TableData",
  props: ['staus'],
  data() {
    return {
      // data,
      columns,
      loading: this.staus,
      pagination: { // 表格自带分页器的属性定义
        defaultPageSize: 10, // 默认每页显示10条数据
        showTotal: total => `共${total}条数据`,
        showSizeChanger: true,
        pageSizeOptions: ['1', '2', '3', '4'], // 自定义每页显示多少条数据
        // eslint-disable-next-line no-return-assign
        onShowSizeChange: (current, pageSize) => {
          console.log(current, pageSize)
          this.pageSize = pageSize
        },
        showQuickJumper: true // 允许跳转至xx页
      }
    };
  },
  created() {
    // 动态获取数据
    // axios.get('/json/TableData.json').then(res => {
    //   // console.log(res)
    //   this.data = res.data.list;
    //   console.log(this.data)
    // })
    this.$store.dispatch('getData')
    // this.data = this.$store.state.tableData
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

  //.ant-table-tbody {
  //  tr {
  //    height: 74.67px;
  //  }
  //}

  ::v-deep .ant-table-wrapper {
    width: 1360px;
  }
}
</style>