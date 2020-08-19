<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './components/login'
// import Dashboard from './components/dasboard'

export default {
  name: 'App',
  // components: {
  //   Login, Dashboard
  // }
}
</script>

<style lang="scss">
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
