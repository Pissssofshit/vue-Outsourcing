<template>
  <div id="app">
        <top-header></top-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- <el-aside>ssss</el-aside> -->
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

// <style>
// /* body{ */
//   /* background-color:rgb(102,102,102); */
//   /* background-color: black; */    奇怪的要命，这里设置背景颜色毫无作用 在APP.VUE那里写才有用
// /* } */
// </style>
</script>

<style scoped>
.el-container{
  width: 1400px;
  margin: 0 auto;
}
.el-aside{
  display: none;
  height: 1000px;
  background-color: black;
}

</style>
