<template>
  <div id="app">
    <div id="main">
      <router-view></router-view>
    </div>
    <div id="foot">
      <foot></foot>
    </div>
    
    <spinner v-show="false"></spinner>
  </div>
</template>

<script>
  import spinner from './components/spinner/spinner.vue'
  import foot from './components/footer/footer.vue'

  export default {
    components: {
      spinner,
      foot
    }
  }
</script>

<style lang="scss">
  #app {
    
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
  }
  #main{
    flex: 1;
    overflow-y: hidden;
  }
  #foot{
    height: 65px;
  }
</style>
