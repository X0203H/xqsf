<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '../public/css/base.css'

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  //height: 100%;
  background-color: #efefef;
}
</style>
