<template>
  <div>
    <el-table :data="staff.staffList" highlight-current-row height="600" style="width: 100% text-align:center" v-loading="loading">
      <el-table-column align="center" prop="staffId" label="编号" width="180">
      </el-table-column>
      <el-table-column align="center" prop="staffName" label="姓名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="staffAge" label="年龄" width="180">
      </el-table-column>
      <el-table-column align="center" prop="staffWeChat" label="微信" width="180">
      </el-table-column>
      <el-table-column align="center" prop="staffPhone" label="联系电话" width="240">
      </el-table-column>
      <el-table-column align="center" prop="staffPostion" label="职位" width="200">
      </el-table-column>
      <el-table-column align="center" prop="staffLeaveTime" label="加入时间" width="240">
      </el-table-column>
      <el-table-column align="center" fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="dialogFormVisible = true" class="addbutton" type="primary">添加新成员</el-button>
    <!-- 添加新成员 -->
    <el-dialog title="添加新成员" :visible.sync="dialogFormVisible" width="25%">
      <el-form :model="form" label-width="70px">
        <el-form-item label="编号">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item align="left" label="职位">
          <el-select v-model="form.postion" placeholder="请选择职位" size="medium">
            <el-option label="项目负责人" value="项目负责人"></el-option>
            <el-option label="组长" value="组长"></el-option>
            <el-option label="组员" value="组员"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="AddNewStaff()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        id: '',
        postion: '',
      },
      loading: true,
    }
  },
  components:{
  },
  computed: mapState({ staff: state => state.staff }),
  methods: {
    ...mapActions(['StaffListAction', 'AddNewStaffAction']),
    handleClick(index) {
      console.log("table.row" + JSON.stringify(index))
    },
    AddNewStaff() {
      this.dialogFormVisible = false
      console.log(this.form.id + " " + this.form.postion);
      this.AddNewStaffAction({ staffId: this.form.id, staffPostion: this.form.postion })
    }
  },
  created: async function() {
    await this.StaffListAction(this.$store.state.currentProjectId);
    console.log("超级瞄准，启动")
    this.loading = false
  }

}

</script>
<style>
.addbutton {
  margin-top: 2vh;
  margin-right: 5vh;
  float: right;
}

</style>
