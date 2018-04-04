<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row>
          <el-breadcrumb class="title" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ name:'报表' }">任务统计</el-breadcrumb-item>
            <el-breadcrumb-item style="font-size:18px;  margin-top: 5px;">{{reportName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="'未完成('+taskCount[0]+')'" name="未完成">
              <el-table :show-header=false :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="任务编号" width="60px">
                  <template slot-scope="scope">
                    <el-tag size="mini">{{scope.row.id}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="youxianji" label="优先级" width="60px">
                  <template slot-scope="scope">
                    <el-tag size="mini" v-if="scope.row.youxianji">{{scope.row.youxianji}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="creator" label="创建者" width="100px">
                  <template slot-scope="scope">
                    <el-tag size="mini">{{scope.row.creator}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="taskname" label="任务名称">
                </el-table-column>
              </el-table>
            </el-collapse-item>
            <el-collapse-item :title="'本日完成('+taskCount[1]+')'" name="本日完成">
              <el-table :show-header=false :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="任务编号" width="60px">
                  <template slot-scope="scope">
                    <el-tag size="mini">{{scope.row.id}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="youxianji" label="优先级" width="60px">
                  <template slot-scope="scope">
                    <el-tag size="mini" v-if="scope.row.youxianji">{{scope.row.youxianji}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="creator" label="创建者" width="100px">
                  <template slot-scope="scope">
                    <el-tag size="mini">{{scope.row.creator}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="taskname" label="任务名称">
                </el-table-column>
              </el-table>
            </el-collapse-item>
            <el-collapse-item :title="'新增任务('+taskCount[2]+')'" name="新增任务">
              <el-table :show-header=false :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="任务编号" width="60px">
                  <template slot-scope="scope">
                    <el-tag size="mini">{{scope.row.id}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="youxianji" label="优先级" width="60px">
                  <template slot-scope="scope">
                    <el-tag size="mini" v-if="scope.row.youxianji">{{scope.row.youxianji}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="creator" label="创建者" width="100px">
                  <template slot-scope="scope">
                    <el-tag size="mini">{{scope.row.creator}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="taskname" label="任务名称">
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableHeader: false,
      reportName: "工作记录",
      // tableData: [],
      searchBy: '成员名',
      searchKey: '',
      placeholder: '请输入成员名',
      taskCount: [20, 30, 40],
      tableData: [{
          id: '#123',
          youxianji: '普通',
          taskname: '实例任务示例任务',
          creator: '1412143367',
        },
        {
          id: '#234',
          youxianji: '重要',
          taskname: '实例任务示例任务',
          creator: '1412143367',
        },
        {
          id: '#345',
          youxianji: '紧急',
          taskname: '实例任务示例任务',
          creator: '1412143367',
        },
        {
          id: '#3454',
          youxianji: '紧急',
          taskname: '实例任务示例任务',
          creator: '1412143367',
        }
      ]
    }
  },
  created() {
    this.InitData()
  },
  watch: {
    // searchKey(curval, oldval) {
    //   // console.log(curval.length, oldval.length)
    //   if (this.searchBy === '成员名') {
    //     this.tableData = this.tableData.filter(object => {
    //       return object.staffName.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0
    //     })
    //   } else if (this.searchBy === '任务编号') {
    //     this.tableData = this.tableData.filter(object => {
    //       return object.taskId.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0
    //     })
    //   } else if (this.searchBy === '任务名') {
    //     this.tableData = this.tableData.filter(object => {
    //       return object.taskName.toLowerCase().indexOf(this.searchKey.toLowerCase()) >= 0
    //     })
    //   }
    //   if (curval.length === 0) {
    //     this.InitData()
    //   }
    // }
  },
  methods: {
    InitData() {
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
.el-collapse {
  padding-left: 10px;
  text-align: left;
}

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
