<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
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
    }
  };
</script>