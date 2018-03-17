<template>
  <div id="app">
    <el-container>
      
    <el-container>
      <el-header>
        <top-header></top-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-aside>ssss</el-aside>
    </el-container>
  </div>
</template>
<script>
import TopHeader from '../components/Headr/Topheadr.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    TopHeader
  },
  computed: {
  },
  mounted() {
  }
}

</script>
<style scoped>
.el-aside{
  display: none;
  height: 1000px;
  background-color: black;
}

</style>
