import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/dashboardLayout.vue'
import Login from '../pages/login.vue'
import Order from '../pages/order.vue'
import DashboardView from '../pages/dashboardview.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'DashboardLayout',
            component: Dashboard,
            redirect: '/dashboard',
            children: [
                {
                    path: 'dashboard',
                    name: 'DashboardView',
                    component: DashboardView
                },
                {
                    path: 'track-orders',
                    name: 'Orders',
                    component: Order
                }
            ]
        }
    ]
})