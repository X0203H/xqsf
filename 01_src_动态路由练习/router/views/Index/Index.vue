<template>
  <transition name="show" appear>
    <div id="Index">
      <Header></Header>
      <div class="main">
        <LeftNav></LeftNav>
        <div class="right">
          <!--    面包屑导航栏-->
          <div class="mbx" v-if="!coll">
            <a-breadcrumb :routes="routes"
                          style="margin: 5px 0;border-bottom: 1px solid #ddd;padding-bottom: 5px;">
              <a-breadcrumb-item href="" v-for="(item,index) in $route.matched" :key="index">
                <router-link :to="item.path">
                  <a-icon type="home" style="margin-right: 5px"/>
                  <span>{{ item.meta.title }}</span>
                </router-link>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <!--          显示与隐藏-->
          <div class="mbx1" v-if="coll">
            <a-breadcrumb :routes="routes"
                          style="margin: 5px 0;border-bottom: 1px solid #ddd;padding-bottom: 5px;">
              <a-breadcrumb-item href="">
                <router-link to="/index/indexcon">
                  <a-icon type="home" style="margin-right: 5px"/>
                  <span>首页</span>
                </router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item href="">
                <router-link to="/index/taskquery">
                  <a-icon type="home" style="margin-right: 5px"/>
                  <span>任务查询</span>
                </router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item href="">
                <router-link to="/index/indexcon">
                  <a-icon type="home" style="margin-right: 5px"/>
                  <span>配置</span>
                </router-link>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import eventBus from "@/eventBus";
import Header from "@/components/Header/Header.vue";
import LeftNav from "@/components/LeftNav/LeftNav.vue";

export default {
  name: "IndeX",
  components: {
    Header,
    LeftNav
  },
  data() {
    return {
      coll: ''
    }
  },
  mounted() {
    console.log(this.$route.matched)
    console.log(this.$route)
  },
  created() {
    eventBus.$on('ShowBreah', value => {
      console.log(value)
      this.coll = value
    })
  }
};
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

.show-enter-active {
  animation: show 1s;
}

.show-leave-active {
  // reverse意思为反方向的意思
  animation: show .5s reverse;
}

#Index {
  width: 100%;
  height: 100%;

  .main {
    display: flex;

    .right {
      width: 99%;
      margin-left: 1%;
    }
  }
}
</style>