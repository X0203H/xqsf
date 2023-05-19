import VueRouter from "vue-router";
import Login from "@/components/Login/Login.vue";
import Index from "@/router/views/Index/Index.vue";
// import IndexCon from "@/router/views/Index/IndexCon/IndexCon.vue";
import TaskQuery from "@/router/views/Index/TaskQuery/TaskQuery.vue";

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/login'},
        {
            path: '/login',
            component: Login
        },
        {
            path: '/index',
            component: Index,
            meta: {
                title: "主体"
            },
            children: [
                {
                    path: '',
                    redirect: 'indexcon'
                },
                {
                    path: 'indexcon',
                    component: () => import('@/router/views/Index/IndexCon/IndexCon.vue'),
                    meta: {
                        title: "首页"
                    }
                },
                {
                    path: 'taskquery',
                    component: TaskQuery,
                    meta: {
                        title: "任务查询"
                    }
                },
                {
                    path: 'configuration',
                    component: () => import('@/router/views/Index/ConfiGuration/ConfiGuration.vue'),
                    meta: {
                        title: "外呼配置"
                    }
                }
            ],
        },
    ],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    // next()
    const token = localStorage.getItem('XQPwd')
    if (to.path === '/index') {
        if (token) {
            next()
        } else {
            alert('密码错误');
            next(false)
        }
    } else {
        next()
    }
})

export default router