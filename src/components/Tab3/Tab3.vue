<template>
  <div id="Tab3">
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
    title: '被保人客户号',
    dataIndex: 'Customer',
    width: 150,
  },
  {
    title: '投保人姓名',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    width: 150,
  },
  {
    title: '关系',
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
];

const data = [
  {
    key: 1,
    Customer: "00880a11t250",
    name: "去去",
    sex: "男",
    relationship: "家人",
    phone: '',
    certificateType: "身份证",
    certificateNo: '900****8900'
  }
];
export default {
  name: "TaB3",
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