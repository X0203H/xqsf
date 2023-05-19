<template>
  <div id="DialTable">
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
    title: '人员编号',
    dataIndex: 'Personnel',
    width: 150,
  },
  {
    title: '人员姓名',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '日期',
    dataIndex: 'Data',
    width: 150,
  },
  {
    title: '一级结束',
    dataIndex: 'FirstOrder',
    width: 150,
  },
  {
    title: '二级结束',
    dataIndex: 'SecondLevel',
    width: 150,
  },
  {
    title: '三级结束',
    dataIndex: 'tertiary',
    width: 150,
  },
  {
    title: '预约时间',
    dataIndex: 'AppointmentTime',
    width: 150,
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    width: 150,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 150,
  }
];

const data = [
  {
    key: 1,
    Personnel: "11223344",
    name: "去去",
    Data: "2023-04-17",
    FirstOrder: "双赢",
    SecondLevel: '预约下次难点',
    tertiary: "",
    AppointmentTime: '2023-04-20 00:00:00',
    remarks: '123414',
    operation: ''
  },
  {
    key: 2,
    Personnel: "11223343",
    name: "一样",
    Data: "2023-04-17",
    FirstOrder: "双赢",
    SecondLevel: '预约下次难点',
    tertiary: "",
    AppointmentTime: '2023-04-20 00:00:00',
    remarks: '123414',
    operation: ''
  },
  {
    key: 3,
    Personnel: "11223342",
    name: "仙侠",
    Data: "2023-04-17",
    FirstOrder: "双赢",
    SecondLevel: '预约下次难点',
    tertiary: "",
    AppointmentTime: '2023-04-20 00:00:00',
    remarks: '123414',
    operation: ''
  },
  {
    key: 4,
    Personnel: "11223341",
    name: "魅魔",
    Data: "2023-04-17",
    FirstOrder: "双赢",
    SecondLevel: '预约下次难点',
    tertiary: "",
    AppointmentTime: '2023-04-20 00:00:00',
    remarks: '123414',
    operation: ''
  }
];
export default {
  name: "DialTable",
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