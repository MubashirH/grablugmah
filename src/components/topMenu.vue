<template>
    <div class="d-flex justify-content-end top">
        <b-dropdown dropleft variant="link" no-caret class="settings">
            <template v-slot:button-content>
            &#9881;
            </template>
            <b-dropdown-item href="#"><b-icon icon="file-person"></b-icon>&nbsp; Your Profile</b-dropdown-item>
            <b-dropdown-item href="#"><b-icon icon="lock-fill"></b-icon>&nbsp; Change Password</b-dropdown-item>
            <b-dropdown-item href="#"><b-icon icon="patch-question-fll"></b-icon>&nbsp; Get Help</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'TopNav'
})
</script>

<style lang="scss" scoped>
    .top {
        border-bottom: 1px solid #d8d8d8;
        background: white;
        box-shadow: 0px -7px 20px 0px #2e2e2e;
        .settings {
            margin: 10px 0;
            margin-right: 20px;
            .btn {
                background-color: transparent;
            }
        }
    }
</style>