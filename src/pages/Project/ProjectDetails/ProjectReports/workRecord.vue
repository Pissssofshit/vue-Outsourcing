<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row>
          <el-breadcrumb class="title" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ name:'报表' }">工作记录</el-breadcrumb-item>
            <el-breadcrumb-item style="font-size:18px;  margin-top: 5px;">{{reportName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-row class="row">
            <el-dropdown size="small" split-button type="primary" @command="handleCommand">
              <span class="el-dropdown-link">
                {{searchBy}}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="成员名">成员名</el-dropdown-item>
                <el-dropdown-item command="任务编号">任务编号</el-dropdown-item>
                <el-dropdown-item command="任务名">任务名</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-input class="search" size="small" :placeholder="placeholder" prefix-icon="el-icon-search" v-model="searchKey">
            </el-input>
          </el-row>
          <el-table :data="tableData" style="width: 100% ;margin-top:5px" sortable>
            <el-table-column label="成员名" align="left">
              <template slot-scope="scope">
                <span style="margin-left: 0px">{{ scope.row.staffName }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable label="任务编号" align="left" prop="taskId">
            </el-table-column>
            <el-table-column label="任务名" align="left" prop="taskName">
            </el-table-column>
            <el-table-column label="开始时间" align="left" prop="startTime">
            </el-table-column>
            <el-table-column label="结束时间" align="left" prop="endTime">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reportName: "工作记录",
      tableData: [],
      searchBy: '成员名',
      searchKey: '',
      placeholder: '请输入成员名',
    }
  },
  created() {
    this.InitData()
  },
  watch: {
    searchKey(curval, oldval) {
      // console.log(curval.length, oldval.length)
      if (this.searchBy === '成员名') {
        this.tableData = this.tableData.filter(object => {
          return object.staffName.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0
        })
      } else if (this.searchBy === '任务编号') {
        this.tableData = this.tableData.filter(object => {
          return object.taskId.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0
        })
      } else if (this.searchBy === '任务名') {
        this.tableData = this.tableData.filter(object => {
          return object.taskName.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0
        })
      }
      if (curval.length===0) {
        this.InitData()
      }
    }
  },
  methods: {
    InitData() {
      this.tableData.push({ staffName: 'zhuyunwu', taskId: 'TASK001', taskName: '观叶植物识别', startTime: '18:00', endTime: '19:01' })
      this.tableData.push({ staffName: 'wanghoulun', taskId: 'TASK002', taskName: '多肉植物识别', startTime: '12:00', endTime: '14:00' })
      this.tableData.push({ staffName: 'fanping', taskId: 'TASK002', taskName: '多肉植物识别', startTime: '13:50', endTime: '15:00' })
      this.tableData.push({ staffName: 'spongebob', taskId: 'TASK003', taskName: '老虎种类识别', startTime: '11:10', endTime: '12:10' })
      this.reportName = this.$route.params.name
    },
    handleCommand(command) {
      this.searchBy = command
      this.placeholder = '请输入' + command
    }
  }
}

</script>
<style scoped>
.row {
  text-align: left;
  margin-left: 15px;
}

.base {
  box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
  margin: 10px;
  /*min-width:1200px;*/
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

.search {
  width: 160px;
  padding-bottom: 5px;
  padding-top: 5px;
}

</style>
