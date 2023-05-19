<template>
  <div id="Header">
    <!--    标题-->
    <div class="title">
      <div class="left">
        <h2>续期催收管理平台</h2>
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
        </a-button>
      </div>
      <div class="right">
        <a-icon type="user"/>
        <span>用户</span>
        <span class="partition">|</span>
        <a-icon type="select"/>
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  name: "HeadeR",
  data() {
    return {
      collapsed: this.$store.state.collapsed,
    }
  },
  methods: {
    toggleCollapsed() {
      let coll = this.collapsed = !this.collapsed
      console.log(coll)
      this.$store.dispatch('changecoll', coll)
      if (coll === false) {
        eventBus.$emit('wid', '256px')
        console.log(1)
      } else if (coll === true) {
        eventBus.$emit('wid', '0')
        console.log(2)
      }
      eventBus.$emit('ShowBreah', coll)
    },
  }
}
</script>

<style lang="scss" scoped>
#Header {
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    background-color: #009688;

    .left {
      display: flex;

      h2 {
        width: 256px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-right: 1px solid black;
        color: #fff;
        font-weight: normal;
      }

      .ant-btn {
        background: none;
        border: none;
        box-shadow: none;
        line-height: 40px;
      }
    }

    .right {
      margin: 10px 10px 0 0;
      color: #fff;

      .partition {
        margin: 0 10px;
      }

      .anticon-user,
      .anticon-select {
        margin-right: 5px;
      }
    }
  }
}
</style>