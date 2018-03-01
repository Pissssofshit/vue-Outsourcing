<template>
  <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="我创建的任务" name="first"><renwulist></renwulist></el-tab-pane>
    <el-tab-pane label="我参与的任务" name="second"><renwulist></renwulist></el-tab-pane>
    <el-tab-pane label="紧急任务" name="third">紧急任务</el-tab-pane>
    <el-tab-pane label="待定" name="fourth">待定</el-tab-pane>
  </el-tabs>
  <task3></task3>
  </div>
</template>
<script>
  import Task3 from '../../../../components/Task/taskState3.vue'
  import Renwulist from './renwulist'
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
        Renwulist,
        Task3
    }
  };
</script>