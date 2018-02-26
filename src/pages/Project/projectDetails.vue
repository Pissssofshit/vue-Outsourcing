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
    return {}
  },
  components: {
    SecondHeader
  }
}

</script>
<style>

</style>
