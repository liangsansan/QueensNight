<template>
  <div id="app">
    <div id="main">
      <transition name="fade"><router-view></router-view></transition> 
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
    .fade-enter-active,.fade-leave-active{
      transition: opacity .5s
    }
    .fade-enter,.fade-leave{
      opacity: 0
    }
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
    overflow-y: auto;
  }
  #foot{
    height: 65px;
  }
</style>
