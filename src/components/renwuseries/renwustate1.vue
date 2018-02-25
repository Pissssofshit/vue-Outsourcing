<template>
<div  @click="forclick1">
  <el-card  class="box-card">
  <div class="ite">
      <el-checkbox label="" name="type"></el-checkbox>
    <span>解决移动端界面布局问题</span>
  </div>
</el-card>
</div>
</template>
<script>
// todo这里还需要添加的功能是 当任务有子任务时，显示的样式是不同的    心力交瘁，无力完成，后人替我走下去吧
export default {
  props: [
      'renwu'
  ],
  methods: {
    forclick1: function() {
      console.log('level 1 renwu click')
      this.$emit('click1','123')
      //这里暂且统一返回任务id=123，哎 生活真是苟且呢
    }
  }
}
</script>

<style scoped>
.box-card{
    display: flex;
    font-size: 20px;
    width: 100%;
}
</style>
