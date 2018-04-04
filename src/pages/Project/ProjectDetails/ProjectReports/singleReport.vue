<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row>
          <el-breadcrumb class="title" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ name:'报表' }">考勤报表</el-breadcrumb-item>
            <el-breadcrumb-item style="font-size:18px;  margin-top: 5px;">{{reportName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-row class="row">
            <p style="font-size:12px;margin-top:5px">人数统计</p>
            <p style="font-weight:bold;font-size:18px ;margin-top:3px">4/3</p>
          </el-row>
          <el-table :data="tableData" style="width: 100% ;margin-top:5px" sortable>
            <el-table-column label="成员名" align="left">
              <template slot-scope="scope">
                <span style="margin-left: 0px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="考勤" align="left" sortable prop="state" :filters="[{text: '到', value: '到'}, {text: '缺席', value: '缺席'}]" :filter-method="filterHandler">
            </el-table-column>
            <el-table-column label="记录时间" align="left" prop="recordTime">
            </el-table-column>
            <el-table-column label="状态" align="left" prop="nowstate">
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
      reportName: "  无敌",
      tableData: [
        { name: "zhuyunwu", email: "zhuyunwu@163.com", state: "到", recordTime: "12:00" ,nowstate:"在线"},
        { name: "wanghoulun", email: "wanghoulun@163.com", state: "缺席", recordTime: "-" ,nowstate:"离线"},
        { name: "fanping", email: "fanping@163.com", state: "到", recordTime: "14:01",nowstate:"在线" },
        { name: "spongebob ", email: "fanping@163.com", state: "到", recordTime: "17:02",nowstate:"离线" },
      ]
    }
  },
  created() {
    this.InitData()
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    InitData(){

      this.reportName=this.$route.params.name
      // let now=new Date();
      // this.reportName=myDate.getFullYear()+myDate.getMonth()+myDate.getDate();
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

</style>
