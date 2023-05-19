import Vue from "vue";
import VuexEsm from "vuex";
import axios from 'axios'

Vue.use(VuexEsm)

export default new VuexEsm.Store({
    actions: {
        changecoll(context, value) {
            context.commit('CHANGCOLL', value)
        },
        // 在vuex中发送请求，获取共享的数据
        getData(context) {
            axios.get('/json/TableData.json').then(res => {
                context.commit('GETDATA', res.data.list)
            })
        },
        //     查询
        querybtn(context, value) {
            context.commit('QUERYBTN', value)
        }
    },
    mutations: {
        CHANGCOLL(state, value) {
            state.collapsed = value
        },
        nmm(state, value) {
            state.nmm = value
        },
        // 将数据赋给state中tableData
        GETDATA(state, value) {
            state.tableData = value
            state.tableData1 = value
        },
        //     查询保单号
        QUERYBTN(state, value) {
            // 将过滤后的数据交给tableData1保管，原数据tableData不变
            state.tableData1 = state.tableData.filter(item => item.PolicyNumber === Number(value))
        }
    },
    state: {
        collapsed: false,
        // 保单列表
        tableData: [],
        tableData1: []
    },
    getters: {}
})