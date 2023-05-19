<template>
  <div id="Nav">
    <div class="navlist" ref="nav" :style="styleTotal">
      <a-menu
          :default-selected-keys="[`${$route.path}`]"
          :default-open-keys="[`${$route.path}`]"
          mode="inline"
          theme="dark"
          :inline-collapsed="$store.state.collapsed"
      >
        <a-sub-menu key="1">
          <template #title>
            <a-icon type="pie-chart"/>
            <span>银保保单任务管理</span>
          </template>
          <a-menu-item key="/index/taskquery">
            <router-link to="/index/taskquery">
              <span>任务查询</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #title>
            <a-icon type="desktop"/>
            <span>外呼管理</span>
          </template>
          <a-menu-item key="6">
            <router-link to="">
              <span>任务查询</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  name: "LeftNav",
  data() {
    return {
      styleTotal: {
        width: ''
      }
    }
  },
  created() {
    eventBus.$on('wid', value => {
      this.styleTotal.width = value
      console.log(this.styleTotal.width)
    })
  },
}
</script>

<style lang="scss" scoped>
#Nav {
  position: relative;
  //width: 256px;

  .navlist {
    width: 256px;
    height: 100%;
    overflow: hidden;
    transition: width .3s;
    background-color: #28333e;

    .active {
      color: #1890ff;

      ::v-deep .ant-menu-submenu-arrow::before,
      ::v-deep .ant-menu-submenu-arrow::after {
        background-color: #1890ff;
      }
    }

    .ant-menu-inline {
      background-color: #28333e;
    }

    //.ant-menu-submenu:hover {
    //  a {
    //    color: #1890ff;
    //  }
    //
    //  ::v-deep .ant-menu-submenu-arrow::before,
    //  ::v-deep .ant-menu-submenu-arrow::after {
    //    background-color: #1890ff;
    //  }
    //}

    a {
      color: #fff;
    }
  }
}
</style>