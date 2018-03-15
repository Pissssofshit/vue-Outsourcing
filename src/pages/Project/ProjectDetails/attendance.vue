<template>
  <div>
    <div align="left" class="datePicker">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="单日统计" name="today">
          <el-date-picker :editable="false" :clearable="false" v-model="selectDate" type="date" placeholder="选择日期时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-table :data="attendance.attendanceList" style="width: 100% " :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column align="center" prop="attendanceId" label="人员编号" width="200">
            </el-table-column>
            <el-table-column align="center" prop="attendanceName" label="姓名" width="200">
            </el-table-column>
            <el-table-column align="center" prop="attendanceState" label="出勤">
            </el-table-column>
            <el-table-column align="center" prop="attendanceRecordTime" label="记录时间">
            </el-table-column>
            <el-table-column align="center" fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="editNowDateAttendance(scope.row)" type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 改变出勤 -->
          <el-dialog title="编辑" :visible.sync="dialogFormVisible" width="25%">
            <el-form :model="form" label-width="70px">
              <el-form-item align="left" label="出勤">
                <el-select v-model="form.state" placeholder="请选择情况" size="medium">
                  <el-option label="出勤" value="项目负责人"></el-option>
                  <el-option label="休假" value="休假"></el-option>
                  <el-option label="迟到" value="迟到"></el-option>
                  <el-option label="早退" value="早退"></el-option>
                  <el-option label="旷工" value="旷工"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmNowDateEdit()">确 定</el-button>
            </div>
          </el-dialog>
        </el-tab-pane>
        <el-tab-pane label="范围统计" name="sum">
          <el-date-picker :editable="false" :clearable="false" v-model="rangeDate" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-table :data="attendance.attendanceRangeList" style="width: 100% " :default-sort="{prop: 'attendanceId', order: 'descending'}">
            <el-table-column align="center" prop="attendanceId" label="人员编号" width="200" sortable>
            </el-table-column>
            <el-table-column align="center" prop="attendanceName" label="姓名" width="200">
            </el-table-column>
            <el-table-column align="center" prop="normalAttendance" label="正常出勤" width="200" sortable>
            </el-table-column>
            <el-table-column align="center" prop="leave" label="请假" width="200" sortable>
            </el-table-column>
            <el-table-column align="center" prop="late" label="迟到" width="200" sortable>
            </el-table-column>
            <el-table-column align="center" prop="leaveEarly" label="早退" width="200" sortable>
            </el-table-column>
            <el-table-column align="center" prop="absenteeism" label="旷工" width="200" sortable>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      dialogFormVisible: false,
      activeName: 'today',
      selectDate: '',
      rangeDate: '',
      tableData: [],
      form: {
        id: '',
        state: '',
      },
    }
  },
  created() {
    this.getNowFormatDate()
    this.getNowRangeFormatDate()
    // this.AttendanceListAction({ ProjectId: this.ProjectId, date: this.selectDate })
  },
  computed: {
    ...mapState({
      attendance: state => state.attendance,
      ProjectId: 'ProjectId',
    })
  },
  methods: {
    ...mapActions(['AttendanceListAction', 'AttendanceRangeListAction']),
    getNowFormatDate() {
      let date = new Date();
      let seperator1 = "-";
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let currentdate = year + seperator1 + month + seperator1 + strDate;
      this.selectDate = currentdate;
    },
    getNowRangeFormatDate() {
      let date = new Date();
      let seperator1 = "-";
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let enddate = year + seperator1 + month + seperator1 + strDate;
      strDate = strDate - 30
      if (strDate < 0) {
        month = month - 1
        strDate = strDate + 30
        if (month == 0) {
          month = month + 1
          year = year - 1
        }
      }
      let startdate = year + seperator1 + month + seperator1 + strDate;
      this.rangeDate = [startdate, enddate]
    },
    handleClick() {

    },
    editNowDateAttendance(row) {
      this.dialogFormVisible = true
      // console.log("row:"+JSON.stringify(row))
      this.form.id = row.attendanceId
      this.form.state=row.attendanceState
    },
    confirmNowDateEdit() {
      this.dialogFormVisible = false
      /*
        1.提交form
        2.刷新列表
      */
    }
  },
  watch: {
    selectDate(curVal, oldVal) {
      // console.log(curVal + " : " + oldVal)
      this.AttendanceListAction({
        ProjectId: this.ProjectId,
        date: this.selectDate
      })
    },
    rangeDate(curVal, oldVal) {
      // console.log(curVal)
      // console.log(curVal.toString().split(','))
      let startDate = curVal.toString().split(',')[0]
      let endDate = curVal.toString().split(',')[1]
      this.AttendanceRangeListAction({
        ProjectId: this.ProjectId,
        startDate: startDate,
        endDate: endDate,
      })
    }
  }
}

</script>
<style scoped>
.datePicker {
  margin-bottom: 10px;
}

</style>
