<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="日程" name="first">日程 感觉不是很重要 1.0之后做</el-tab-pane>
    <el-tab-pane label="任务" name="second"><renwu></renwu></el-tab-pane>
    <el-tab-pane label="记录" name="third"><record></record></el-tab-pane>
    <el-tab-pane label="文件（待定）" name="fourth">文件</el-tab-pane>
    <el-tab-pane label="收藏（待定）" name="fifth">收藏</el-tab-pane>
  </el-tabs>
</template>
<script>
  import Renwu from './mydetail/renwu/renwu.vue'
  import Record from './mydetail/record/record.vue'
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        Renwu,
        Record
    }
  };
</script>