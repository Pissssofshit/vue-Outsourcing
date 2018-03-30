<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row>
          <div class="title">报表</div>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-row>
            <div class="tools">
              <el-input size="medium" :placeholder="placeholder" prefix-icon="el-icon-search" v-model="searchKey">
              </el-input>
              <el-button class="addReport" type="primary" size="small">添加报表</el-button>
            </div>
          </el-row>
          <el-tabs :tab-position="tabPosition" style="height: 90%">
            <el-tab-pane label="考勤报表">
              <el-table :data="tableData" style="width: 100% ;margin-top:5px">
                <el-table-column label="考勤报表" align="left">
                  <template slot-scope="scope">
                    <i class="el-icon-document"></i>
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      placeholder: '搜索考勤报表',
      tabPosition: 'left',
      tableData: [
        { name: "2018-03-29 考勤记录" },
        { name: "2018-03-28 考勤记录" },
        { name: "2018-03-27 考勤记录" },
      ]
    }
  },
  created() {

  },
}

</script>
<style scoped>
.el-icon-search {
  font-weight: bold;
}

.tools {
  height: 50px;
}

.tools .el-input {
  position: absolute;
  top: 8px;
  left: 10px;
  width: 200px;
}

.tools .addReport {
  position: absolute;
  top: 8px;
  right: 30px;
}

.el-icon-document {
  color: blue;
}

.op1 {
  /* text-align: start; */
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.op {
  display: flex;
  justify-content: flex-start;
}

.base {
  box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
  margin: 10px;
}

.el-row {
  background-color: white;
  border-bottom: 1px solid #dedede;
}

.title {
  /* min-height: 40px; */
  height: 44px;
  font-size: 25px;
  text-align: start;
  margin-top: 10px;
  margin-left: 15px;
}

.el-aside {
  background-color: white;
  margin-left: 5px;
}

.el-container {
  height: 100%;
  min-height: 1000px;
  padding-top: 0px;
}

.el-main {
  padding: 0px;
  background-color: white;
}

.el-header {
  padding: 0px;
}

</style>
