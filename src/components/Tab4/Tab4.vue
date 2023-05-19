<template>
  <div id="Tab4">
    <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 50 }"
        :scroll="{ y: 240 }"
    />
  </div>
</template>

<script>
const columns = [
  {
    title: '受益人客户号',
    dataIndex: 'Customer',
    width: 150,
  },
  {
    title: '受益人姓名',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '受益人性别',
    dataIndex: 'sex',
    width: 150,
  },
  {
    title: '人物关系',
    dataIndex: 'relationship',
    width: 150,
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
    width: 150,
  },
  {
    title: '证件类型',
    dataIndex: 'certificateType',
    width: 150,
  },
  {
    title: '证件号',
    dataIndex: 'certificateNo',
    width: 150,
  },
  {
    title: '联系电话',
    dataIndex: 'contact',
    width: 150,
  },
];

const data = [
  // {
  //   key: 1,
  //   Customer: "00880a11t250",
  //   name: "去去",
  //   sex: "男",
  //   relationship: "家人",
  //   phone: '',
  //   certificateType: "身份证",
  //   certificateNo: '900****8900'
  // }
];
export default {
  name: "TaB4",
  data() {
    return {
      data,
      columns,
    }
  }
}
</script>

<style scoped>

</style>