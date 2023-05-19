<template>
  <div>
    <a-button type="primary" @click="showModal">
      {{ name }}
    </a-button>
    <a-modal width="76%" v-model="visible" :title="title" @ok="handleOk">
      <a-form-model ref="ruleForm" :model="ruleFormC">
        <a-form-model-item has-feedback label="管理机构">
          <a-select
              show-search
              placeholder="机构"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="handleChange"
          >
            <a-select-option value="北京分公司顾问行销部">
              北京分公司顾问行销部
            </a-select-option>
            <a-select-option value="北京总公司顾问行销部">
              北京总公司顾问行销部
            </a-select-option>
            <a-select-option value="湖南分公司顾问行销部">
              湖南分公司顾问行销部
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item has-feedback label="营服" prop="orphan">
          <a-select
              show-search
              placeholder="顾问"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="handleChange4"
          >
            <a-select-option value="123456">
              顾问行销徐牟牟（123456）
            </a-select-option>
            <a-select-option value="123457">
              顾问行销李牟牟（123457）
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item has-feedback label="区" prop="mechanism">
          <a-select
              show-search
              placeholder="区"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="handleChange1"
          >
            <a-select-option value="123">
              顾问行销胡波处银库组（123）
            </a-select-option>
            <a-select-option value="124">
              顾问行销胡波处衣领组（124）
            </a-select-option>
            <a-select-option value="125">
              顾问行销胡波处工程组（125）
            </a-select-option>
            <a-select-option value="126">
              顾问行销胡波处开发组（126）
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item has-feedback label="处" prop="channel">
          <a-select
              show-search
              placeholder="处"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="handleChange2"
          >
            <a-select-option value="行政处">
              行政处
            </a-select-option>
            <a-select-option value="军事处">
              军事处
            </a-select-option>
            <a-select-option value="审判处">
              审判处
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item has-feedback label="部" prop="orphan">
          <a-select
              show-search
              placeholder="部门？"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="handleChange3"
          >
            <a-select-option value="人事部">
              人事部
            </a-select-option>
            <a-select-option value="管理部">
              管理部
            </a-select-option>
            <a-select-option value="开发部">
              开发部
            </a-select-option>
            <a-select-option value="后厨部">
              后厨部
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item has-feedback label="业务员" prop="orphan">
          <a-select
              show-search
              placeholder="业务"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="handleClear5"
          >
            <a-select-option value="生产">
              生产
            </a-select-option>
            <a-select-option value="计划">
              计划
            </a-select-option>
            <a-select-option value="跟单">
              跟单
            </a-select-option>
            <a-select-option value="财会">
              财会
            </a-select-option>
            <a-select-option value="统计">
              统计
            </a-select-option>
            <a-select-option value="物价">
              物价
            </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-form-model>
      <div class="btn">
        <a-button @click="handleCancel">
          {{ msg }}
        </a-button>
        <a-button @click="handleCancel">
          取消
        </a-button>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'AllocationA',
  props: ['name', 'title', 'msg'],
  data() {
    return {
      visible: false,
      ruleFormC: {
        // 数据分配
        name: '数据分配',
        // 营服
        CampClothing: '',
        // 业务员
        business: '',
        // 管理机构
        mechanism: '',
        // 部
        part: '',
        orphan: '',
        // 处
        place: '',
        // 区
        area: ''
      }
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    handleCancel(e) {
      console.log(this.ruleFormC, e)
      this.$store.commit('ruleFormC', this.ruleFormC)
      this.visible = false
    },
    onChange(date, dateString) {
      // 拿取时间赋值给数据
      // console.log(date, dateString)
      this.ruleFormC.failure = dateString
    },
    handleChange(value) {
      // 管理机构
      console.log(`selected ${value}1111`)
      this.ruleFormC.state = value
    },
    handleChange1(value) {
      // 区
      console.log(`selected ${value}222222`)
      this.ruleFormC.area = value
    },
    handleChange2(value) {
      // 处
      console.log(`${value}33333`)
      this.ruleFormC.place = value
    },
    handleChange3(value) {
      // 部
      console.log(`${value}44444`)
      this.ruleFormC.part = value
    },
    handleChange4(value) {
      // 营服
      console.log(value)
      this.ruleFormC.CampClothing = value
    },
    filterOption(input, option) {
      console.log(input, option)
      return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    },
    handleClear5(value) {
      // 业务员
      this.ruleFormC.business = value
    }
  }
}
</script>

<style scoped lang="less">
.ant-btn {
  display: flex;
  align-items: center;
  background: #14928b;
  margin-bottom: 20px;
  color: white;
  margin-left: 20px;
}

/deep/ .ant-modal-header {
  background: #14928b;
  text-align: center;
  color: white;

  .ant-modal-title {
    color: white;
  }
}

::v-deep .anticon {
  color: white !important;
}

::v-deep .ant-modal-footer {
  display: none;
}

.ant-form {
  display: flex;
  flex-wrap: wrap;
}

/deep/ .ant-select {
  width: 280px;
}

.ant-form-item {
  display: flex;
  width: 380px;
  margin-right: 80px;
}

/deep/ .ant-input {
  width: 280px;
}

/deep/ .ant-form-item-label {
  width: 200px;
}

.btn {
  display: flex;
}
</style>
