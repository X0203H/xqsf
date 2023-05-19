<template>
  <transition name="TaskShow" appear>
    <div id="TaskQuery">
      <div id="content">
        <!--      待分配and已分配-->
        <a-card
            style="width:100%"
            :tab-list="tabListNoTitle"
            :active-tab-key="noTitleKey"
            @tabChange="key => onTabChange(key, 'noTitleKey')"
        >
          <!--        第一页-->
          <div class="tab1" v-if="noTitleKey === 'article'">
            <!--          第一行-->
            <div class="inputBox">
              <!--保单状态-->
              <div class="input">
                <div>
                  <span>保单状态<a href="javascript:">*</a></span>
                  <a-select class="select" v-model="SelValue" default-value="不可复效的失效保单" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="有效保单">
                      有效保单
                    </a-select-option>
                    <a-select-option value="可复效的失效保单">
                      可复效的失效保单
                    </a-select-option>
                    <a-select-option value="不可复效的失效保单">
                      不可复效的失效保单
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input">
                <div>
                  <span ref="bdsxy">保单失效月<a href="javascript:">*</a></span>
                  <a-date-picker
                      class="select"
                      v-model="failureMonth"
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
            <!--          第二行-->
            <div class="inputBox">
              <div class="input">
                <div>
                  <span>保单号<a href="javascript:">*</a></span>
                  <a-input class="select" v-model="PolicyVal" placeholder="input with clear icon" allow-clear
                           @change="onChange"/>
                </div>
              </div>
              <div class="input">
                <div>
                  <span>保单出单渠道<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="jack" v-model="channel" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="带网">
                      带网
                    </a-select-option>
                    <a-select-option value="直营">
                      直营
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input">
                <div>
                  <span>是否孤儿单<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="jack" style="width: 120px" @change="handleChange">
                    <a-select-option value="jack">
                      否
                    </a-select-option>
                    <a-select-option value="lucy">
                      是
                    </a-select-option>
                  </a-select>
                </div>
              </div>
            </div>
            <!--          但为有效保单的时候下面两个输入框才显示-->
            <div class="inputBox" v-if="SelValue==='有效保单'">
              <div class="input">
                <div>
                  <span>应缴保费区间<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="一万以下" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="一万以下">
                      一万以下
                    </a-select-option>
                    <a-select-option value="1万(含)至5万">
                      1万(含)至5万
                    </a-select-option>
                    <a-select-option value="5万(含)至10万">
                      5万(含)至10万
                    </a-select-option>
                    <a-select-option value="10万(含)至20万">
                      10万(含)至20万
                    </a-select-option>
                    <a-select-option value="20万(含)至50万">
                      20万(含)至50万
                    </a-select-option>
                    <a-select-option value="50万(含)至100万">
                      50万(含)至100万
                    </a-select-option>
                    <a-select-option value="100万及以上">
                      100万及以上
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input">
                <div>
                  <span>本期是否缴费<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="jack" v-model="PayOrNot" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="是">
                      是
                    </a-select-option>
                    <a-select-option value="否">
                      否
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input" style="width: 400px"></div>
            </div>
            <!--          查询-->
            <div class="btn">
              <a-button @click.native="queryBtn" type="primary" style="background-color: #009688">
                查询
              </a-button>
            </div>
            <!--          数据分配-->
            <div class="btn" style="justify-content: flex-start">
              <Allocation :name="'数据分配'" :title="'分配信息页'" :msg="'分配'"></Allocation>
            </div>
            <TableData :staus="staus"></TableData>
          </div>
          <!--        第二页-->
          <div class="tab2" v-else-if="noTitleKey === 'app'">
            <!--          第一行-->
            <div class="inputBox">
              <!--保单状态-->
              <div class="input">
                <div>
                  <span>保单状态<a href="javascript:">*</a></span>
                  <a-select class="select" v-model="SelValue" default-value="不可复效的失效保单" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="有效保单">
                      有效保单
                    </a-select-option>
                    <a-select-option value="可复效的失效保单">
                      可复效的失效保单
                    </a-select-option>
                    <a-select-option value="不可复效的失效保单">
                      不可复效的失效保单
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input">
                <div>
                  <span ref="bdsxy">保单失效月<a href="javascript:">*</a></span>
                  <a-date-picker
                      class="select"
                      v-model="failureMonth"
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
            <!--          第二行-->
            <div class="inputBox">
              <div class="input">
                <div>
                  <span>保单号<a href="javascript:">*</a></span>
                  <a-input class="select" v-model="PolicyVal" placeholder="input with clear icon" allow-clear
                           @change="onChange"/>
                </div>
              </div>
              <div class="input">
                <div>
                  <span>保单出单渠道<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="jack" v-model="channel" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="带网">
                      带网
                    </a-select-option>
                    <a-select-option value="直营">
                      直营
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input">
                <div>
                  <span>是否孤儿单<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="jack" style="width: 120px" @change="handleChange">
                    <a-select-option value="jack">
                      否
                    </a-select-option>
                    <a-select-option value="lucy">
                      是
                    </a-select-option>
                  </a-select>
                </div>
              </div>
            </div>
            <!--          但为有效保单的时候下面两个输入框才显示-->
            <div class="inputBox" v-if="SelValue==='有效保单'">
              <div class="input">
                <div>
                  <span>应缴保费区间<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="一万以下" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="一万以下">
                      一万以下
                    </a-select-option>
                    <a-select-option value="1万(含)至5万">
                      1万(含)至5万
                    </a-select-option>
                    <a-select-option value="5万(含)至10万">
                      5万(含)至10万
                    </a-select-option>
                    <a-select-option value="10万(含)至20万">
                      10万(含)至20万
                    </a-select-option>
                    <a-select-option value="20万(含)至50万">
                      20万(含)至50万
                    </a-select-option>
                    <a-select-option value="50万(含)至100万">
                      50万(含)至100万
                    </a-select-option>
                    <a-select-option value="100万及以上">
                      100万及以上
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input">
                <div>
                  <span>本期是否缴费<a href="javascript:">*</a></span>
                  <a-select class="select" default-value="jack" v-model="PayOrNot" style="width: 120px"
                            @change="handleChange">
                    <a-select-option value="是">
                      是
                    </a-select-option>
                    <a-select-option value="否">
                      否
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="input" style="width: 400px"></div>
            </div>
            <!--          查询-->
            <div class="btn">
              <a-button @click.native="queryBtn" type="primary" style="background-color: #009688">
                查询
              </a-button>
            </div>
            <!--          数据分配-->
            <div class="btn" style="justify-content: flex-start">
              <Allocation :name="'数据改派'" :title="'改派信息页'" :msg="'改派'"></Allocation>
            </div>
            <TableData :staus="staus"></TableData>
          </div>
        </a-card>
        <!--      保单信息。。。-->
        <a-card
            style="width:100%"
            :tab-list="tabListNoTitle1"
            :active-tab-key="noTitleKey1"
            @tabChange="key => onTabChange1(key, 'noTitleKey1')"
        >
          <!--        第一页-->
          <div class="tab1" id="tab1" v-if="noTitleKey1 === 'InsurancePolicy'">
            <div class="content">
              <div class="inf">
                <span>保单号：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>投保单号：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>承保日期：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>生效日期：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>失效日期：</span>
                <p v-text="failureMonth"></p>
              </div>
              <div class="inf">
                <span>缴费方式：</span>
                <p v-text="channel"></p>
              </div>
              <div class="inf">
                <span>缴费频率：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>保单状态：</span>
                <p v-text="SelValue"></p>
              </div>
            </div>
          </div>
          <!--        第二页-->
          <div class="tab2" id="tab2" v-else-if="noTitleKey1 === 'Insured'">
            <div class="content">
              <div class="inf">
                <span>投保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>应保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>性别：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>手机号码：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>证件类型：</span>
                <p v-text="failureMonth"></p>
              </div>
              <div class="inf">
                <span>缴费方式：</span>
                <p v-text="channel"></p>
              </div>
              <div class="inf">
                <span>缴费频率：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>保单状态：</span>
                <p v-text="SelValue"></p>
              </div>
              <div class="inf">
                <span>区间：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>家庭住址：</span>
                <p v-text="SelValue"></p>
              </div>
            </div>
          </div>
          <!--        第三页-->
          <div class="tab3" id="tab3" v-else-if="noTitleKey1 === 'insured'">
            <Tab3></Tab3>
          </div>
          <!--          第四页-->
          <div class="tab4" id="tab4" v-else-if="noTitleKey1 === 'beneficiary'">
            <Tab4></Tab4>
          </div>
          <!--          第五页-->
          <div class="tab5" id="tab5" v-else-if="noTitleKey1 === 'product'">
            <ProductTable></ProductTable>
          </div>
          <!--          第六页-->
          <div class="tab6" id="tab6" v-else-if="noTitleKey1 === 'pay'">
            <div class="content">
              <div class="inf">
                <span>投保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>应保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>性别：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>手机号码：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>证件类型：</span>
                <p v-text="failureMonth"></p>
              </div>
              <div class="inf">
                <span>缴费方式：</span>
                <p v-text="channel"></p>
              </div>
              <div class="inf">
                <span>缴费频率：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>保单状态：</span>
                <p v-text="SelValue"></p>
              </div>
              <div class="inf">
                <span>区间：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>家庭住址：</span>
                <p v-text="SelValue"></p>
              </div>
              <div class="inf" style="width: 100%">
                <span>账户开销：</span>
                <p style="width: 78%" v-text="PayOrNot"></p>
              </div>
            </div>
          </div>
          <!--          第七页-->
          <div class="tab7" id="tab7" v-else-if="noTitleKey1 === 'service'">
            <h3>人员信息</h3>
            <div class="content">
              <div class="inf">
                <span>投保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>应保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>性别：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>手机号码：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>证件类型：</span>
                <p v-text="failureMonth"></p>
              </div>
              <div class="inf">
                <span>缴费方式：</span>
                <p v-text="channel"></p>
              </div>
              <div class="inf">
                <span>缴费频率：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>保单状态：</span>
                <p v-text="SelValue"></p>
              </div>
              <div class="inf">
                <span>区间：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>家庭住址：</span>
                <p v-text="SelValue"></p>
              </div>
              <div class="inf" style="width: 100%">
                <span>账户开销：</span>
                <p style="width: 78%" v-text="PayOrNot"></p>
              </div>
            </div>
            <h3>北京人员信息</h3>
            <div class="content">
              <div class="inf">
                <span>投保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>应保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>性别：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>手机号码：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>证件类型：</span>
                <p v-text="failureMonth"></p>
              </div>
              <div class="inf">
                <span>缴费方式：</span>
                <p v-text="channel"></p>
              </div>
              <div class="inf">
                <span>缴费频率：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>保单状态：</span>
                <p v-text="SelValue"></p>
              </div>
              <div class="inf">
                <span>区间：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>家庭住址：</span>
                <p v-text="SelValue"></p>
              </div>
              <div class="inf" style="width: 100%">
                <span>账户开销：</span>
                <p style="width: 78%" v-text="PayOrNot"></p>
              </div>
            </div>
          </div>
          <!--          第八页-->
          <div class="tab8" id="tab8" v-else-if="noTitleKey1 === 'RegulatoryBody'">
            <div class="content">
              <div class="inf">
                <span>投保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>应保人：</span>
                <p v-text="PolicyVal"></p>
              </div>
              <div class="inf">
                <span>性别：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>手机号码：</span>
                <p></p>
              </div>
              <div class="inf">
                <span>证件类型：</span>
                <p v-text="failureMonth"></p>
              </div>
              <div class="inf">
                <span>缴费方式：</span>
                <p v-text="channel"></p>
              </div>
              <div class="inf">
                <span>缴费频率：</span>
                <p v-text="PayOrNot"></p>
              </div>
              <div class="inf">
                <span>保单状态：</span>
                <p v-text="SelValue"></p>
              </div>
            </div>
          </div>
          <!--          第九页-->
          <div class="tab9" id="tab9" v-else-if="noTitleKey1 === 'dial'">
            <DialTable></DialTable>
          </div>
        </a-card>
      </div>
    </div>
  </transition>
</template>

<script>
import moment from 'moment';
import TableData from "@/components/TableData/TableData.vue";
import Allocation from "@/components/Allocation/Allocation.vue";
import Tab3 from "@/components/Tab3/Tab3.vue";
import Tab4 from "@/components/Tab4/Tab4.vue";
import ProductTable from "@/components/ProductTable/ProductTable.vue";
import DialTable from "@/components/DialTable/DialTable.vue";

export default {
  name: "TaskQuery",
  components: {
    TableData,
    Allocation,
    Tab3,
    Tab4,
    ProductTable,
    DialTable
  },
  data() {
    return {
      staus: false,
      // 保单状态
      SelValue: '不可复效的失效保单',
      // 保单号
      PolicyVal: '',
      // 保单失效月
      failureMonth: '',
      // 保单出单渠道
      channel: '',
      // 本期是否缴费
      PayOrNot: '',
      // 日期选择器
      moment,
      //卡片
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
      // 2卡片
      tabListNoTitle1: [
        {
          key: 'InsurancePolicy',
          // 页面展示的卡片标题
          tab: '保单信息',
        },
        {
          key: 'Insured',
          tab: '投保人信息',
        },
        {
          key: 'insured',
          tab: '被保人信息',
        },
        {
          key: 'beneficiary',
          tab: '受益人信息',
        },
        {
          key: 'product',
          tab: '产品信息',
        },
        {
          key: 'pay',
          tab: '保单缴费信息',
        },
        {
          key: 'service',
          tab: '服务人员信息',
        },
        {
          key: 'RegulatoryBody',
          tab: '管理机构信息',
        },
        {
          key: 'dial',
          tab: '拨打记录',
        },
      ],
      noTitleKey1: 'InsurancePolicy',
    }
  },
  methods: {
    // 卡片回调
    onTabChange(key, type) {
      console.log(key, type); // tab2  key //  article noTitleKey
      this[type] = key;
    },
    onTabChange1(key, type) {
      console.log(key, type); // tab2  key //  article noTitleKey
      this[type] = key;
    },
    // 多选框
    handleChange(value) {
      console.log(`selected ${value}`);
      if (value === '有效保单') {
        // alert(value)
        this.$refs.bdsxy.innerText = '保单应缴月'
      } else {
        this.$refs.bdsxy.innerText = '保单失效月'
      }
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
    //   查询按钮
    queryBtn() {
      this.staus = !this.staus
      setTimeout(() => {
        this.staus = false
      }, 2000)
      this.$store.dispatch('querybtn', this.PolicyVal)
    }
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
  overflow: hidden;
  //background-color: pink;
  #content {
    //width: 100%;
    height: 90vh;
    overflow-y: scroll;
    padding-right: 18px;

    .tab1,
    .tab2 {
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

    #tab1,
    #tab2,
    #tab6,
    #tab7,
    #tab8 {
      .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        .inf {
          width: 50%;
          height: 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          h3 {
            font-weight: bold;
            margin: 10px 0;
          }

          span,
          p {
            display: inline-block;
            width: 350px;
            height: 40px;
            text-align: right;
            background-color: #fafafa;
            line-height: 40px;
            border: 1px solid #ddd;
          }

          span {
            border-right: 1px solid #ddd;
          }

          p {
            padding: 0;
            margin: 0;
            border-left: none;
            background-color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>