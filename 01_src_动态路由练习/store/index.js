import Vue from "vue";
import VuexEsm from "vuex";

Vue.use(VuexEsm)

export default new VuexEsm.Store({
    actions: {
        changecoll(context, value) {
            context.commit('CHANGCOLL', value)
        }
    },
    mutations: {
        CHANGCOLL(state, value) {
            state.collapsed = value
        },
        nmm(state, value) {
            state.nmm = value
        }
    },
    state: {
        collapsed: false,
    },
    getters: {}
})