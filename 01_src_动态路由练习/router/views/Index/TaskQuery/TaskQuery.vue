<template>
  <transition name="TaskShow" appear>
    <div id="TaskQuery">
      <!--      待分配and已分配-->
      <a-card
          style="width:100%"
          :tab-list="tabListNoTitle"
          :active-tab-key="noTitleKey"
          @tabChange="key => onTabChange(key, 'noTitleKey')"
      >
        <!--        第一页-->
        <div class="tab1" v-if="noTitleKey === 'article'">
          <div class="inputBox">
            <div class="input">
              <div>
                <span>保单状态<a href="javascript:">*</a></span>
                <a-select class="select" v-model="SelValue" default-value="jack" style="width: 120px"
                          @change="handleChange">
                  <a-select-option value="有效保单">
                    有效保单
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select>
              </div>
            </div>
            <div class="input">
              <div>
                <span>保单失效月<a href="javascript:">*</a></span>
                <a-date-picker
                    class="select"
                    format="YYYY-MM-DD HH:mm:ss"
                    :disabled-date="disabledDate"
                    :disabled-time="disabledDateTime"
                    :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                />
              </div>
            </div>
            <div class="input">
              <div>
                <span>保单管理机构<a href="javascript:">*</a></span>
                <a-select class="select" default-value="jack" style="width: 120px" @change="handleChange">
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <div class="inputBox">
            <div class="input">
              <div>
                <span>保单号<a href="javascript:">*</a></span>
                <a-input class="select" placeholder="input with clear icon" allow-clear @change="onChange"/>
              </div>
            </div>
            <div class="input">
              <div>
                <span>保单出单渠道<a href="javascript:">*</a></span>
                <a-select class="select" default-value="jack" style="width: 120px" @change="handleChange">
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select>
              </div>
            </div>
            <div class="input">
              <div>
                <span>是不是孤儿<a href="javascript:">*</a></span>
                <a-select class="select" default-value="jack" style="width: 120px" @change="handleChange">
                  <a-select-option value="jack">
                    是
                  </a-select-option>
                  <a-select-option value="lucy">
                    否
                  </a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <!--          但为有效保单的时候下面两个输入框才显示-->
          <div class="inputBox" v-if="SelValue==='有效保单'">
            <div class="input">
              <div>
                <span>保单号<a href="javascript:">*</a></span>
                <a-input class="select" placeholder="input with clear icon" allow-clear @change="onChange"/>
              </div>
            </div>
            <div class="input">
              <div>
                <span>保单出单渠道<a href="javascript:">*</a></span>
                <a-select class="select" default-value="jack" style="width: 120px" @change="handleChange">
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select>
              </div>
            </div>
            <div class="input" style="width: 400px"></div>
          </div>
          <div class="btn">
            <a-button type="primary" style="background-color: #009688">
              查询
            </a-button>
          </div>
          <!--          数据分配-->
          <div class="btn" style="justify-content: flex-start">
            <a-button type="primary" style="background-color: #009688">
              数据分配
            </a-button>
          </div>
          <TableData></TableData>
        </div>
        <!--        第二页-->
        <div class="tab2" v-else-if="noTitleKey === 'app'">
          app content
        </div>
      </a-card>
      <!--      保单信息。。。-->
      <a-card
          style="width:100%"
          :tab-list="tabListNoTitle"
          :active-tab-key="noTitleKey"
          @tabChange="key => onTabChange(key, 'noTitleKey')"
      >
        <!--        第一页-->
        <div class="tab1" v-if="noTitleKey === 'article'">
          <TableData></TableData>
        </div>
        <!--        第二页-->
        <div class="tab2" v-else-if="noTitleKey === 'app'">
          app content
        </div>
      </a-card>
    </div>
  </transition>
</template>

<script>
import moment from 'moment';
import TableData from "@/components/TableData/TableData.vue";

export default {
  name: "TaskQuery",
  components: {
    TableData
  },
  data() {
    return {
      SelValue: '',
      // 日期选择器
      moment,
      //
      tabListNoTitle: [
        {
          key: 'article',
          // 页面展示的卡片标题
          tab: '待分配',
        },
        {
          key: 'app',
          tab: '已分配',
        },
      ],
      noTitleKey: 'article',
    }
  },
  methods: {
    // 卡片回调
    onTabChange(key, type) {
      console.log(key, type); // tab2  key //  article noTitleKey
      this[type] = key;
    },
    // 多选框
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    // 日期选择器
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },
    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    },
    // 输入框
    onChange(e) {
      console.log(e);
    },
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
.TaskShow-enter-active {
  animation: show 1s;
}

.TaskShow-leave-active {
  animation: show 1s reverse;
}

#TaskQuery {
  width: 100%;
  background-color: pink;

  .tab1 {
    width: 100%;

    //输入框
    .inputBox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 1% 0;

      .input {
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
    }

    //查询按钮
    .btn {
      display: flex;
      justify-content: flex-end;
      margin: 1% 0;
    }
  }
}
</style>