//路由模块

import Vue from 'vue';
import VueRouter from  'vue-router';
//引入组件
import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Login from '../pages/Login/Login.vue'
//插件使用
Vue.use(VueRouter);

export default new VueRouter({
    //列出要使用到的路由
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooterGuide: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooterGuide: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooterGuide: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooterGuide: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/msite'
        }
    ]
})