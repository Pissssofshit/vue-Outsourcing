<template>
  <div class="header_">
    <div class="te">
      <div class="search_">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" class="el-icon-search icon">搜索</el-button>
      </div>
    </div>
    <div type="primary" class="el-icon-circle-plus icon"></div>
    <div class="te2">
      <ul class="icon">
        <li>我的</li>
        <li>日历</li>
        <li>
          <el-badge class="item">
            <div class="el-icon-bell"></div>
          </el-badge>
        </li>
        <li>我的</li>
        <li>我的</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}

</script>
<style scoped>
.te2 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.te {
  position: relative;
  left: 5vw;
}

.search_ {
  height: 80%;
  display: flex;
  max-height: 40px;
}

.el-icon-circle-plus {
  position: relative;
  left: 10vw;
  color: #409EFF;
  padding: 0;
  border: 0;
  font-size: 30px;
}

.header_ {
  min-height: 50px;
  max-height: 60px;
  width: 100%;
  height: 20%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: pink;
}

ul {
  display: flex;
  list-style: none;
  justify-content: center;
  margin-right: 3vw;
}

ul li {
  margin-left: 5px;
}

.icon {
  font-size: 20px;
}

</style>
