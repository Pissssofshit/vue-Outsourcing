<template>
  <div id="app" :style="csswidth">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return{
        maxwidth: document.documentElement.clientWidth,
        maxheight: document.documentElement.clientHeight,
        csswidth: 'max-width:'+this.maxwidth+'px;',
        cssheight: 'max-height'+this.maxheight
    }
  },
  name: 'App',
  created(){
    console.log(this.csswidth)
    console.log(this.maxwidth)
    console.log(document.documentElement.clientWidth)
    console.log(document.documentElement.clientHeight)
  },
  mounted(){
    // let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    // console.log(userInfo)
    // if (userInfo != null) {
    //   this.$router.push({ name: '首页' })
    //   this.LoginAction(userInfo)
    // }
    // if (this.$store.state.IsLogin === true) {
    //   this.$router.push({ name: '首页' });
    // }
  },
  methods:{
     ...mapActions(['LoginAction'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
html,body{
  /* overflow-x:hidden; */
  width:100%;
  height: 100%;
  margin: 0;
}
body{
  background-color: rgb(241,241,241);
}
.icon{
  font-size: 20px;
}
</style>
