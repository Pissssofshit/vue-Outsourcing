<template>
  <div id="app" class="page">
        <top-header></top-header>

    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import TopHeader from '../components/Headr/Topheadr.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
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
<style>
/* .el-container{
  width: 100%;
  height: 100%;
  margin: 0 auto;
} */
a{
  color: #303030;
}
.el-main{
  padding:0px;
}
</style>

<style scoped>

.el-aside{
  /* display: none; */
  height: 100%;
}

</style>
