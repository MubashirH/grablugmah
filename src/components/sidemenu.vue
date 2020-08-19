<template>
    <div class="sidebar">
        <div class="menu">
           <div class="hamburger hamburger--arrow" type="button">
               <div class="hamburger-box">
                   <div class="hamburger-inner">
                   </div>
               </div>
           </div>
       </div>
        <div class="sidebar-inner" @mouseover="hover=true" @mouseleave="hover=false">
            <div class="header">
                <h4 class="text-center"><img src="../assets/images/usquyu_white.png"/><span v-if="hover">GrabLugmah</span></h4>
            </div>
            
            <div class="user mt-3 d-flex justify-content-center align-items-center">
                <img src="https://picsum.photos/id/237/300/300"/>
                <div class="ml-2" v-if="hover">
                    <h5 class="text-center">Admin</h5>
                    <p class="text-center m-0">admin@gmail.com</p>
                </div>
            </div>
            <div class="menu-list mt-5" :class="{'pl-3': hover}">
                <ul>
                    <li v-for="value in menu" :key="value.id" :class="{center: !hover}" >
                        <i :class="value.icon_class"></i><router-link v-if="hover" :to="{path:value.link}">{{value.title}}</router-link>
                        <ul v-if="value.sub_menu.length > 0" class="collapse">
                            <li v-for="sublist in value.sub_menu" :key="sublist.id" :class="{ center: !hover}" >
                                <router-link v-if="hover" :to="{path:sublist.title}">{{sublist.title}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import '../assets/css/hamburger.min.css'


export default Vue.extend({
    data() {
        return {
            hover: false,
            menu: [
                {
                    "id": "1",
                    "title": "Dashboard",
                    "link": "dashboard",
                    "parent_menu_id": "0",
                    "icon_class": "fa fa-dashboard",
                    "sub_menu": [],
                    "features": [
                        {
                            "id": "1",
                            "title": "dashboard"
                        }
                    ]
                },
                {
                    "id": "2",
                    "title": "Order Management",
                    "link": "track-orders",
                    "parent_menu_id": "0",
                    "icon_class": "fa fa-th",
                    "sub_menu": [],
                    "features": [
                        {
                            "id": "2",
                            "title": "order_management"
                        }
                    ]
                },
                {
                    "id": "3",
                    "title": "Restaurant Management",
                    "link": "",
                    "parent_menu_id": "0",
                    "icon_class": "fa fa-cutlery",
                    "sub_menu": [
                        {
                            "id": "4",
                            "title": "Restaurant Info",
                            "link": "restaurants",
                            "icon_class": ""
                        },
                        {
                            "id": "5",
                            "title": "Edit Restaurant",
                            "link": "restaurants",
                            "icon_class": ""
                        },
                        {
                            "id": "6",
                            "title": "Restaurnat Categories",
                            "link": "categories",
                            "icon_class": ""
                        },
                        {
                            "id": "7",
                            "title": "Size Groups",
                            "link": "size-groups",
                            "icon_class": ""
                        },
                        {
                            "id": "8",
                            "title": "Extras Groups",
                            "link": "extras-groups",
                            "icon_class": ""
                        },
                        {
                            "id": "9",
                            "title": "Restaurant Items",
                            "link": "coverage_areas",
                            "icon_class": ""
                        },
                        {
                            "id": "10",
                            "title": "Branches",
                            "link": "branches",
                            "icon_class": ""
                        },
                        {
                            "id": "11",
                            "title": "Coverage Areas",
                            "link": "coverage_areas",
                            "icon_class": ""
                        },
                        {
                            "id": "12",
                            "title": "Reviews",
                            "link": "reviews",
                            "icon_class": ""
                        }
                    ],
                    "features": [
                        {
                            "id": "3",
                            "title": "restaurant_info"
                        },
                        {
                            "id": "4",
                            "title": "edit_restaurant"
                        },
                        {
                            "id": "5",
                            "title": "add_category"
                        },
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                },
                {
                    "id": "13",
                    "title": "User Management",
                    "link": "",
                    "parent_menu_id": "0",
                    "icon_class": "fa fa-users",
                    "sub_menu": [
                        {
                            "id": "14",
                            "title": "Users",
                            "link": "users",
                            "icon_class": ""
                        },
                        {
                            "id": "15",
                            "title": "User Roles",
                            "link": "roles",
                            "icon_class": ""
                        },
                        {
                            "id": "16",
                            "title": "Assign Branch",
                            "link": "assign_branch",
                            "icon_class": ""
                        }
                    ],
                    "features": [
                        {
                            "id": "3",
                            "title": "restaurant_info"
                        },
                        {
                            "id": "4",
                            "title": "edit_restaurant"
                        },
                        {
                            "id": "5",
                            "title": "add_category"
                        },
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                }
            ]
        }
    }
})
</script>

<style scoped lang="scss">
    .sidebar {
        height: 100vh;
        background: #3c4b64;
        transition: all 300ms ease-in-out;
        position: relative;
        .menu {
            position: absolute;
            right: -70px;
            top: 5px;
            .hamburger-inner {
                height: 3px;
                width: 22px;
                &::after { height: 3px; width: 22px; bottom: -5px; }
                &::before { height: 3px; width: 22px; top: -5px;}
            }
        }
        .sidebar-inner {
            height: 100%;
            .header {
                background: #303c54;
                padding: 11px 5px;
                h4 { color: #ced2d8;}
                img {
                    width: 20px;
                    margin: 0 10px;
                }
            }
            .user {
                margin: 15px;
                img { width: 50px; border-radius: 100%;}
                h5, p { color: 	#ced2d8;}
            }
            .menu-list {
                ul {
                    list-style: none;
                    padding: 0;
                    li { 
                        padding: 0;
                        margin-bottom: 20px;
                        .fa { color: #ced2d8;}
                        a {
                            text-decoration: none;
                            color: 	#ced2d8;
                            margin-left: 10px;
                        }
                        a.router-link-active {
                            color: #303c54;
                            padding: 5px;
                        }
                    }
                    li.center { text-align: center;}
                }
            }
        }
    }
    
</style>