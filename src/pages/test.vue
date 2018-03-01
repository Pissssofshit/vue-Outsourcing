<template>
  <div>
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
    <el-dropdown-item command="b">狮子头</el-dropdown-item>
    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
    <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>
<script>
//这个文件只是用于测试不同种效果的，请忽略
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
