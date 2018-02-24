<template>
  <div class="rw">
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>我是任务列表</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    <rwstate1></rwstate1>
  </div>
</el-card>


  </div>
</template>
<script>
import Rwstate1 from './renwustate1.vue'
export default {
  components:{
      Rwstate1
  }
}
</script>

<style scoped>
.rw{
    height: 100%;
}
.el-card{
    height: 100%;
}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>