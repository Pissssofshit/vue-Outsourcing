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
              <el-col :span="6">
                <el-input class="search" size="medium" :placeholder="placeholder" prefix-icon="el-icon-search" v-model="searchKey">
                </el-input>
              </el-col>
              <el-col :span="14" style=" float: right;">
                <el-button class="button" type="primary" size="small" @click="">添加报表</el-button>
                <!-- <el-button class="button" size="small" @click="managerCategoryDialog.dialogVisible=true">报表类别</el-button> -->
              </el-col>
            </div>
          </el-row>
          <el-tabs v-model="TabsValue" :tab-position="tabPosition" style="height: 90% " @tab-click="HandleClick">
            </el-tab-pane>
            <el-tab-pane v-for="(item, index) in MyTabs" :key="item.name" :label="item.category" :name="item.name">
            </el-tab-pane>
            <el-tabs v-model="ContextTabsValue" class="context_tabs" type="border-card">
              <el-tab-pane label="概览" name="概览">
                <div class="Chart">
                  <h2>{{ChartName}}</h2>
                  <div class="small">
                    <!-- <canvas id="myChart2"></canvas> -->
                    <line-chart :chart-data="datacollection" :width="900"></line-chart>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="详情" name="详情">
                <el-table :data="tableData" style="margin-top:5px">
                  <el-table-column label="考勤报表" align='left'>
                    <template slot-scope="scope">
                      <router-link :to="{ name: scope.row.urlName,params: { name: scope.row.name }}">
                        <i class="el-icon-document"></i>
                        <span style="margin-left: 10px;">{{ scope.row.name }}</span>
                      </router-link>
                    </template>
                  </el-table-column>
                  <el-table-column label="最后更新时间" align="left" prop="updateTime">
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LineChart from '../../../../components/Chart/LineChart.js'
// import Chart from 'chart.js';
export default {
  data() {
    return {
      ChartName: '考勤报表',
      ContextTabsValue: '概览',
      TabsValue: "考勤报表",
      placeholder: '搜索考勤报表',
      tabPosition: 'left',
      searchKey: '',
      managerCategoryDialog: {
        newCategory: '',
        dialogVisible: false,
      },
      categoryinnerDialog: {
        dialogVisible: false,
        category: '',
      },
      MyTabs: [{
          category: '考勤报表',
          name: '考勤报表',
        },
        {
          category: '任务统计',
          name: '任务统计',
        },
        {
          category: '工作记录',
          name: '工作记录',
        },
      ],
      tableData: [
        { name: "2018-04-13 考勤记录", updateTime: "2018-04-13 21:00", urlName: "单个报表" },
        { name: "2018-04-12 考勤记录", updateTime: "2018-04-12 21:00", urlName: "单个报表" },
        { name: "2018-04-11 考勤记录", updateTime: "2018-04-11 21:00", urlName: "单个报表" },
        { name: "2018-04-10 考勤记录", updateTime: "2018-04-10 21:00", urlName: "单个报表" },
        { name: "2018-04-09 考勤记录", updateTime: "2018-04-09 21:00", urlName: "单个报表" },
        { name: "2018-04-08 考勤记录", updateTime: "2018-04-08 21:00", urlName: "单个报表" },
      ],
      tables: [{
          key: "考勤报表",
          data: [
            { name: "2018-04-13 考勤记录", updateTime: "2018-04-13 21:00", urlName: "单个报表" },
            { name: "2018-04-12 考勤记录", updateTime: "2018-04-12 21:00", urlName: "单个报表" },
            { name: "2018-04-11 考勤记录", updateTime: "2018-04-11 21:00", urlName: "单个报表" },
            { name: "2018-04-10 考勤记录", updateTime: "2018-04-10 21:00", urlName: "单个报表" },
            { name: "2018-04-09 考勤记录", updateTime: "2018-04-09 21:00", urlName: "单个报表" },
            { name: "2018-04-08 考勤记录", updateTime: "2018-04-08 21:00", urlName: "单个报表" },
          ],
        },
        {
          key: "任务统计",
          data: [
            { name: "2018-04-13 任务统计", updateTime: "2018-04-13 21:00", urlName: "任务统计" },
            { name: "2018-04-12 任务统计", updateTime: "2018-04-12 21:00", urlName: "任务统计" },
            { name: "2018-04-11 任务统计", updateTime: "2018-04-11 21:00", urlName: "任务统计" },
            { name: "2018-04-10 任务统计", updateTime: "2018-04-10 21:00", urlName: "任务统计" },
            { name: "2018-04-09 任务统计", updateTime: "2018-04-09 21:00", urlName: "任务统计" },
            { name: "2018-04-08 任务统计", updateTime: "2018-04-08 21:00", urlName: "任务统计" },

          ],
        },
        {
          key: "工作记录",
          data: [
            { name: "2018-04-13 成员工时记录", updateTime: "2018-04-13 21:00", urlName: "工作记录" },
            { name: "2018-04-12 成员工时记录", updateTime: "2018-04-12 21:00", urlName: "工作记录" },
            { name: "2018-04-11 成员工时记录", updateTime: "2018-04-11 21:00", urlName: "工作记录" },
            { name: "2018-04-10 成员工时记录", updateTime: "2018-04-10 21:00", urlName: "工作记录" },
            { name: "2018-04-09 成员工时记录", updateTime: "2018-04-09 21:00", urlName: "工作记录" },
            { name: "2018-04-08 成员工时记录", updateTime: "2018-04-08 21:00", urlName: "工作记录" },

          ],
        },
      ],
      datacollection: {
        labels: ["04-08", "04-09", "04-10", "04-11", "04-12", "04-13"],
        datasets: [{
          label: "应到人数",
          borderColor: '#ffcdd2',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: [2, 1, 3, 4, 5, 5, 5]
        }, {
          label: "实际人数",
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: 'rgba(0, 231, 255, 0.2)',
          data: [2, 1, 3, 3, 4, 5, 4]
        }]
      },
    }
  },
  components: {
    LineChart
  },
  mounted() {
    this.UpdateChart()
  },
  watch: {
    searchKey: function(curval, oldval) {
      if (curval === "") {
        this.HandleClick()
        return
      }
      this.tableData = this.tableData.filter(object => {
        return object.name.indexOf(curval) >= 0
      })
    },
  },
  methods: {
    HandleClick(tab, event) {
      this.UpdateChart()
      this.placeholder = "搜索" + this.TabsValue
      for (let i = 0; i < this.tables.length; i++) {
        if (this.tables[i].key === this.TabsValue) {
          this.tableData = [].concat(this.tables[i].data)
        }
      }
    },
    cloneObj(obj) {
      var newObj = {};
      if (obj instanceof Array) {
        newObj = [];
      }
      for (var key in obj) {
        var val = obj[key];
        newObj[key] = typeof val === 'object' ? cloneObj(val) : val;
      }
      return newObj;
    },
    UpdateChart() {
      if (this.TabsValue === "任务统计") {
        this.ChartName = "任务统计"
        this.datacollection = {
          labels: ["04-08", "04-09", "04-10", "04-11", "04-12", "04-13"],
          datasets: [{
              label: "新增任务数",
              borderColor: '#ffcdd2',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: 'white',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              data: [5, 3, 1, 0, 3, 5, 2]
            }, {
              label: "完成任务数",
              borderColor: '#05CBE1',
              pointBackgroundColor: 'white',
              pointBorderColor: 'white',
              borderWidth: 1,
              backgroundColor: 'rgba(0, 231, 255, 0.2)',
              data: [0, 0, 4, 4, 2, 2, 4]
            },
            {
              label: "剩余任务数",
              borderColor: '#FFEE58',
              pointBackgroundColor: 'white',
              pointBorderColor: 'white',
              borderWidth: 1,
              backgroundColor: 'rgba(255,238,88, 0.2)',
              data: [5, 8, 5, 1, 2, 5, 3]
            }
          ]
        }
      } else if (this.TabsValue === '考勤报表') {
        this.ChartName = "考勤报表"

        this.datacollection = {
          labels: ["04-08", "04-09", "04-10", "04-11", "04-12", "04-13"],
          datasets: [{
            label: "应到人数",
            borderColor: '#ffcdd2',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [2, 1, 3, 4, 5, 5, 5]
          }, {
            label: "实际人数",
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: 'rgba(0, 231, 255, 0.2)',
            data: [2, 1, 3, 3, 4, 5, 4]
          }]
        }
      } else if (this.TabsValue === '工作记录') {
        this.ChartName = "工作记录"

        this.datacollection = {
          labels: ["04-08", "04-09", "04-10", "04-11", "04-12", "04-13"],
          datasets: [{
            label: "记录人数",
            borderColor: '#ffcdd2',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [3, 4, 3, 4, 2, 6, 4]
          }]
        }
      }
    },
  }
}

</script>
<style scoped>
.Chart {
  background: #ECEFF1;
  border-radius: 5px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  /*margin: 30px 0;*/
  /*margin-right: 20px;*/
  /*margin-left: 20px;*/
  width: 100%;
}

.Chart h2 {
  /*margin-top: px;*/
  font-size: 25px;
  text-align: center;
  padding: 10px;
  color: rgba(255, 0, 0, 0.5);
  border-bottom: 1px solid #323d54;
}

.small {
  width: 100%^;
  /*eight: 520px;*/
}

.context_tabs {
  text-align: right;
  margin-right: 10px;
  margin-top: 5px;
  /*background: */
}

.dialog {
  text-align: left;
}

.dialog p {
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 5px;
}

.dialog .el-select {
  width: 100%;
  margin-bottom: 5px;
}

.search {
  width: 200px;
  float: left;
  margin-bottom: 5px;
}

.el-icon-search {
  font-weight: bold;
}

.tools {
  margin-left: 10px;
  margin-top: 5px;
}

.button {
  float: right;
  margin-right: 20px;
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
