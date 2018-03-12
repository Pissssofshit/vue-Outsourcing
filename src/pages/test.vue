<template>
  <div>
    <el-dropdown>
  <el-tag>
              <slot name="youxianji">普通</slot></el-tag>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>普通</el-dropdown-item>
    <el-dropdown-item>重要</el-dropdown-item>
    <el-dropdown-item>紧急</el-dropdown-item>
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
