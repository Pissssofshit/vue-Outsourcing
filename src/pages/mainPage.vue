<template>
  <div id="app" >
    <el-container>
      <el-header>
        <top-header></top-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import TopHeader from '../components/Headr/Topheadr.vue'
export default {
  data() {
    return {}
  },
  components: {
    TopHeader
  }
}

</script>
<style>

</style>
