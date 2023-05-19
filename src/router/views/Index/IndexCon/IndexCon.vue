<template>
  <transition name="showCon" appear>
    <div id="IndexCon">
      <div class="one">
        <p>账号：<span>123456</span></p>
        <p>所属公司：<span>北京分公司</span></p>
        <p><a href="javascript:" @click="visible=true">密码修改>></a></p>
      </div>
      <!--      对话框-->
      <a-modal :visible="visible" width="1000px" title="密码修改" @ok="handleOk" @cancel="onCancel">
        <div class="password">
          <span>旧密码：</span>
          <a-input-password v-model="value" placeholder="input password"/>
        </div>
        <div class="password">
          <span>新密码：</span>
          <a-input-password v-model="value1" placeholder="input password"/>
        </div>
        <div class="password">
          <span>确认密码：</span>
          <a-input-password v-model="value2" placeholder="input password"/>
        </div>
      </a-modal>
    </div>
  </transition>
</template>

<script>
export default {
  name: "IndexCon",
  data() {
    return {
      visible: false,
      value: '',
      value1: '',
      value2: '',
    }
  },
  methods: {
    handleOk(e) {
      console.log(e, this.value2);
      if (this.value !== '' && this.value1 !== '' && this.value2 !== '') {
        if (this.value1 === this.value2 && this.value === localStorage.getItem('XQPwd')) {
          localStorage.setItem('XQPwd', this.value2)
          this.visible = false;
          this.$router.push('/login')
        } else {
          this.$message.error('密码不一致')
        }
      } else {
        this.$message.error('内容不能为空！')
      }
    },
    onCancel() {
      this.visible = false;
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