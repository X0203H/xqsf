<template>
  <div id="ProductTable">
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
    title: '产品编号',
    dataIndex: 'Customer',
    width: 150,
  },
  {
    title: '产品名称',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '产品标识',
    dataIndex: 'sex',
    width: 150,
  },
  {
    title: '保号',
    dataIndex: 'relationship',
    width: 150,
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
    width: 150,
  },
  {
    title: '条件',
    dataIndex: 'certificateType',
    width: 150,
  },
  {
    title: '时间',
    dataIndex: 'certificateNo',
    width: 150,
  }
];

const data = [
  {
    key: 1,
    Customer: "00880a11t250",
    name: "木头床（白桦木）",
    sex: "...",
    relationship: "241009729.11",
    phone: '1800112.99',
    certificateType: "990***123123",
    certificateNo: '>>'
  }
];
export default {
  name: "ProductTable",
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