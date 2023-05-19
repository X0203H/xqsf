<template>
  <transition name="ConShow" appear>
    <div id="ConfiGuration">
      <!--          第一行-->
      <div class="inputBox">
        <!--保单状态-->
        <div class="input">
          <div>
            <span>管理机构<a href="javascript:">*</a></span>
            <a-select class="select" v-model="RegulatoryBody" default-value="北京分公司" style="width: 120px"
                      @change="handleChange">
              <a-select-option value="北京分公司">
                北京分公司
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="input">
          <div>
            <span ref="bdsxy">外呼产商<a href="javascript:">*</a></span>
            <a-select class="select" v-model="manufacturer" default-value="外呼厂商-雪融融" style="width: 120px"
                      @change="handleChange1">
              <a-select-option value="外呼厂商-雪融融">
                外呼厂商-雪融融
              </a-select-option>
              <a-select-option value="外呼厂商-天润">
                外呼厂商-天润
              </a-select-option>
              <a-select-option value="外呼厂商-冰墩墩">
                外呼厂商-冰墩墩
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="input">
          <div>
            <span>创建时间起始<a href="javascript:">*</a></span>
            <a-date-picker @change="onChange" style="width: 300px" v-model="StartOfTime"/>
          </div>
        </div>
      </div>
      <!--          第二行-->
      <div class="inputBox">
        <div class="input">
          <div>
            <span>创建时间止期<a href="javascript:">*</a></span>
            <a-date-picker @change="onChange1" style="width: 300px" v-model="TimeLapse"/>
          </div>
        </div>
        <!--          查询-->
        <div class="btn">
          <a-button @click.native="QueryBtn" type="primary" style="background-color: #009688">
            查询
          </a-button>
          <a-button @click.native="ResetBtn" type="primary" style="background-color: #009688;margin-left: 10%">
            重置
          </a-button>
        </div>
      </div>
      <!--     -->
      <div class="NewlyBtn">
        <a-button @click.native="NewBtn" type="primary" style="background-color: #009688;margin-left: 1%">
          新增外呼配置信息
        </a-button>
      </div>
      <a-table
          id="table"
          :loading="loading"
          :pagination="pagination"
          :columns="columns"
          :data-source="data2"
          :scroll="{ y: 240 }"
      />
      <!--      配置完整的分页器-->
      <template slot="position" slot-scope="">
        <a-pagination size="small" :total="50" show-size-changer show-quick-jumper/>
      </template>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
//标题
const columns = [
  {
    title: '管理机构名称',
    dataIndex: 'RegulatoryBodyName',
    width: 150,
  },
  {
    title: '管理机构编码',
    dataIndex: 'RegulatoryBodyCoding',
    width: 150,
  },
  {
    title: '外呼厂商名称',
    dataIndex: 'ManufacturerName',
    width: 150,
  },
  {
    title: '创建时间',
    dataIndex: 'CreationTime',
    width: 150,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 150,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 150,
  },
];
// 原始数据
const data = [];
// 依靠原数据变更的数据
const data2 = [];

export default {
  name: "ConfiGuration",
  data() {
    return {
      data,
      columns,
      data2,
      loading: this.loading = false,
      pagination: { // 表格自带分页器的属性定义
        defaultPageSize: 1, // 默认每页显示10条数据
        showTotal: total => `共${total}条数据`,
        showSizeChanger: true,
        pageSizeOptions: ['1', '2', '3'], // 自定义每页显示多少条数据
        // eslint-disable-next-line no-return-assign
        onShowSizeChange: (current, pageSize) => {
          console.log(current, pageSize)
          this.pageSize = pageSize
        },
        showQuickJumper: true // 允许跳转至xx页
      },
      // 管理机构
      RegulatoryBody: '',
      // 外呼厂商
      manufacturer: '',
      // 创建时间起始
      StartOfTime: '',
      // 创建时间止期
      TimeLapse: '',
      //   固定key值
      n: 4
    }
  },
  methods: {
    // 查询按钮
    QueryBtn() {
      if (this.RegulatoryBody && this.manufacturer && this.StartOfTime && this.TimeLapse !== '') {
        this.loading = !this.loading
        setTimeout(() => {
          this.loading = false
          this.data2 = this.data.filter(item => item.ManufacturerName === this.manufacturer)
        }, 2000)
      } else {
        this.$message.error('所有内容不能为空')
      }
    },
    // 重置按钮
    ResetBtn() {
      this.RegulatoryBody = '';
      this.manufacturer = '';
      this.StartOfTime = '';
      this.TimeLapse = ''
    },
    // 新建按钮
    NewBtn() {
      if (this.RegulatoryBody && this.manufacturer && this.StartOfTime && this.TimeLapse !== '') {
        const i = {
          key: this.n,
          RegulatoryBodyName: this.RegulatoryBody,
          RegulatoryBodyCoding: 8612,
          ManufacturerName: this.manufacturer,
          CreationTime: this.StartOfTime,
          status: '无效',
          operation: ''
        }
        this.data.unshift(i)
        this.data2.unshift(i)
      } else {
        this.$message.warning('新建的内容不能为空')
      }
    },
    // 多选框
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleChange1(value) {
      console.log(`selected ${value}`);
    },
    // 输入框
    onChange(e) {
      console.log(e._d);
    },
    onChange1(e) {
      console.log(e._d);
    },
  },
  created() {
    // 获取最新的数据
    axios.get('/json/New.json').then(res => {
      this.data = res.data.list;
      this.data2 = this.data
    })
  }
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

//整个页面初始进入和离开的动画效果
.ConShow-enter-active {
  animation: show 1s;
}

.ConShow-leave-active {
  animation: show 1s reverse;
}

#ConfiGuration {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background-color: #fff;

  #table {
    margin: 1% 1%;
  }

  //输入框
  .inputBox {
    display: flex;
    //flex-direction: row;
    //justify-content: space-between;
    align-items: center;
    margin: 1% 1% 1% 0;

    .input {
      margin-right: 3%;
      margin-left: 1%;

      span {
        display: inline-block;
        width: 90px;
        //text-align: center;

        a {
          color: red;
        }
      }

      .select {
        width: 300px !important;
        margin-left: 10px;
      }
    }

    //查询按钮
    .btn {
      display: flex;
      justify-content: flex-end;
      margin: 1% 3%;
    }
  }
}
</style>