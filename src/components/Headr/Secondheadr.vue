<template>
  <div>
    <div class="test2">
      <div class="test1">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">任务</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">待添加</el-menu-item>
          <el-menu-item index="4">待添加</el-menu-item>
        </el-menu>
      </div>
      <div class="ss">
        <div>
          <Icon type="person-stalker"></Icon>
        </div>
        <div class="el-icon-view">视图</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ss {
  display: flex;
  align-items: center;
}

.ss>div {
  margin-left: 2vh;
}

.ivu-icon-person-stalker {
  font-size: 20px;
}

.el-icon-view {
  font-size: 20px;
}

.test2 {
  display: flex;
  border-bottom: 1px solid pink;
}

</style>
<script>
export default {
  // data() {
  //   return {
  //     activeIndex: '1',
  //     activeIndex2: '1'
  //   };
  // },
  // methods: {
  //   handleSelect(key, keyPath) {
  //     console.log(key, keyPath);
  //   }
  // }
}

</script>
