<template>
  <div id="app" :style="csswidth">
    <el-container>
      <el-header>
        <second-header></second-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import SecondHeader from '../../components/Headr/Secondheadr.vue'
export default {
  data() {
    return {
      router_where:'staff'
    }
  },
  components: {
    SecondHeader
  },
  created: function(){
    // this.$router.push('project-details/'+this.router_where) //BUG 这个形式有缺憾的地方在于，它被创造时，总是在根目录压入这两个路径，但是在点击浏览器的前进按钮之后，她会在正确的链接后再加上这个
  }
}

</script>
<style>

</style>
