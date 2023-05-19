import Vue from 'vue'
import App from './App.vue'
// 引入ant组件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//引入vue路由
import VueRouter from "vue-router";
import router from "@/router";
// 引入vuex
import store from "@/store";
// 引入验证码插件
import SlideVerify from 'vue-monoplasty-slide-verify';

//应用ant
Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(SlideVerify)
Vue.config.productionTip = false

const vm = new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
console.log(vm)
