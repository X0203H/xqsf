<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
    <span slot="tags" slot-scope="tags">
     <span v-for="tag in tags" :key="tag.key">{{ tag }}</span>
    </span>
    <!--    text为一个一个的对象-->
    <span slot="action" slot-scope="text">
      <router-link :to="`/index/details/${text.key}`">
        <a>details---{{ text.key }}</a>
      </router-link>
    </span>
  </a-table>
</template>

<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: {title: 'customTitle'},
    scopedSlots: {customRender: 'name'},
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  },
];

const data = [
  {
    key: '1',
    name: '刘备',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: '皇帝',
  },
  {
    key: '2',
    name: '关羽',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: '武圣',
  },
  {
    key: '3',
    name: '张飞',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: '张益德',
  },
];
export default {
  name: "IndexCon",
  data() {
    return {
      data,
      columns,
    }
  },
}
</script>

<style lang="scss" scoped>
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.showCon-enter-active {
  animation: show 1s;
}

.showCon-leave-active {
  animation: show 1s reverse;
}

.password {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 2% 1%;

  span {
    &:nth-of-type(1) {
      width: 100px;
    }
  }
}

#IndexCon {
  width: 100%;

  .one {
    width: 250px;
    height: 90vh;
    border-radius: 10px;
    background-color: #fff;

    p {
      margin-left: 20px;
      margin-bottom: 5px;

      &:nth-of-type(1) {
        padding: 20px 0 0 0;
      }

      &:last-of-type {
        margin-top: 30px;
      }
    }
  }
}
</style>