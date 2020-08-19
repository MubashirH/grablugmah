<template>
    <div class="d-flex">
        <Sidebar/>
        <div class="dashboard-view">
            <TopNav/>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Sidebar from './sidemenu.vue'
import TopNav from './topMenu.vue'

export default Vue.extend({
    name: 'DashboardLayout',
    components: {
        Sidebar,
        TopNav
    }
})
</script>

<style lang="scss" scoped>
    .dashboard-view { width: 100%;}
</style>