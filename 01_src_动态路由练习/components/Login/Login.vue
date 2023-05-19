<template>
  <div id="Login">
    <div class="content">
      <h1>续期催收管理平台</h1>
      <p class="yzm">验证码登录</p>
      <a-input ref="userNameInput" id="username" v-model="userName">
        <a-icon slot="prefix" type="user"/>
      </a-input>
      <a-input ref="userNameInput" id="pwd" v-model="pwd">
        <a-icon slot="prefix" type="key"/>
      </a-input>
      <div class="yzmInput">
        <a-input id="yzm" v-model="YZM" placeholder="请输入验证码"/>
        <a-button @click="acquireYZM">获取验证码</a-button>
      </div>
      <!--      验证码插件-->
      <div class="verify" v-if="VerifyShow">
        <slide-verify :l="42"
                      :r="10"
                      :w="310"
                      :h="155"
                      @success="onSuccess"
                      @fail="onFail"
                      @refresh="onRefresh"
                      :slider-text="text"
        ></slide-verify>
      </div>
      <a-button id="LoginBtn" type="primary" @click="LoginBtn">登录</a-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      userName: '',
      pwd: '',
      YZM: '',
      // 请求返回回来的验证码
      HQYZM: '',
      // 验证码
      text: '向右滑',
      VerifyShow: false
    }
  },
  methods: {
    LoginBtn() {
      // console.log(event.target)
      if (this.userName === '' && this.pwd === '' && this.YZM === '') {
        alert('输入的内容不能为空')
      } else if (this.userName === '') {
        alert('账号不能为空')
      } else if (this.pwd === '') {
        alert('密码不能为空')
      } else if (this.YZM === '') {
        alert('验证码不能为空')
      }

      if (this.pwd === localStorage.getItem('XQPwd') && this.YZM !== '' && this.userName !== '') {
        this.VerifyShow = true
      } else {
        this.$message.error('登录失败！！')
      }
    },
    // 获取验证码
    acquireYZM() {
      axios.get('/json/yzm.json').then(res => {
        this.HQYZM = res.data.VerificationCode;
        // console.log(this.HQYZM)
        alert(this.HQYZM)
      })
    },
    // 成功的回调
    onSuccess() {
      if (this.pwd === localStorage.getItem('XQPwd')) {
        this.$message.success('登录成功！！')
        setTimeout(() => {
          // 登录页
          this.$router.push('/index/indexcon')
        }, 2000)
      }
    },
    // 验证码未匹配的回调
    onFail() {
      this.msg = ''
    },
    // 刷新按钮的回调
    onRefresh() {
      this.msg = ''
    }
  }
}
</script>

<style lang="scss" scoped>
#Login {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: #14928b;

  .content {
    position: relative;
    width: 350px;
    height: 400px;
    background-color: #fff;
    box-shadow: 1px 1px 5px black;
    margin: 100px auto;

    h1 {
      text-align: center;
      font-weight: bold;
      padding-top: 30px;
    }

    .yzm {
      position: relative;
      text-align: center;
      margin: 30px 0 0 0;
      font-size: 18px;

      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 35px;
        left: 50%;
        width: 40px;
        height: 3px;
        background-color: #36a570;
        border-radius: 5px;
        transform: translateX(-50%);
      }
    }

    .ant-input-affix-wrapper,
    .yzmInput,
    #LoginBtn {
      display: block;
      width: 250px;
      height: 30px;
      margin: 30px auto;

      ::v-deep #username,
      ::v-deep #pwd,
      ::v-deep #yzm {
        border-radius: 30px;
      }
    }

    // 验证码输入框
    .yzmInput {
      position: relative;

      .ant-btn {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-45%);
        height: 20px;
        line-height: 0;
        border: 1px solid #a0d4bb;
        border-radius: 30px;
        color: #a0d4bb;
        font-size: 12px;
      }
    }

    #LoginBtn {
      background-color: #1a995c;
      color: #fff;
      border-radius: 30px;
    }

    // 滑块验证码样式
    .verify {
      position: absolute;
      top: 25%;
      left: 50%;
      z-index: 99;
      background-color: #fff;
      box-shadow: 2px 2px 10px gray;
      transform: translateX(-50%);
    }
  }
}
</style>