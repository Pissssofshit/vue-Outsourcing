<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row>
          <div class="position">成员角色</div>
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
                <el-button class="button" type="primary" size="small" @click="addStaffDialog.dialogVisible = true">邀请新成员</el-button>
              </el-col>
            </div>
          </el-row>
          <el-tabs v-model="TabsValue" :tab-position="tabPosition" style="height: 90% " @tab-click="HandleClick">
            </el-tab-pane>
            <el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.position+'('+item.number+')'" :name="item.name">
              <el-table :data="tableData" style="width: 100% ;margin-top:5px">
                <el-table-column label="用户名" align="left">
                  <template slot-scope="scope">
                    <span style="margin-left: 0px">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="邮箱" align="left" prop="email">
                </el-table-column>
                <el-table-column label="角色" align="left" width="100px" prop="position">
                </el-table-column>
                <el-table-column label="操作" align="left" width="100px">
                  <template slot-scope="scope">
                    <div @click="RemoveStaff(scope.row)">
                      <i class="el-icon-close"></i>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
    <!--管理成员  -->
    <el-dialog class="dialog" position="管理成员" :visible.sync="addStaffDialog.dialogVisible" width="30%">
      <p>项目角色</p>
      <el-select v-model="addStaffDialog.value" placeholder="请选择">
        <el-option v-for="item in editableTabs2" :key="item.position" :label="item.position" :value="item.position">
        </el-option>
      </el-select>
      <p>项目成员</p>
      <el-input v-model="addStaffDialog.input" placeholder="请输入内容"></el-input>
      <span slot="footer" class="addStaffDialog-footer">
        <el-button @click="addStaffDialog.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="AddStaff()">确 定</el-button>
      </span>
    </el-dialog>
    <!--管理角色  -->
    <el-dialog class="dialog" position="管理角色" :visible.sync="managerDialog.dialogVisible" width="40%">
      <el-dialog width="30%" position="删除角色" :visible.sync="innerDialog.innerVisible" append-to-body top="25vh">
        <p>当前角色[{{innerDialog.position}}]会被删除，此操作不可撤销，是否确定删除？</p>
        <span slot="footer" class="dialog-footer">
        <el-button @click="innerDialog.innerVisible = false">取 消</el-button>
        <el-button type="primary" @click="RemoveTab">确 定</el-button>
      </span>
      </el-dialog>
      <div>
        <el-input v-model="managerDialog.newpostion" placeholder="输入新的角色名" style="width:150px;margin-right:10px;" size="small"></el-input>
        <el-button type="text" @click="AddPostion">添加</el-button>
      </div>
      <el-table :data="editableTabs2">
        <el-table-column property="position" label="角色" width="200"></el-table-column>
        <el-table-column property="number" label="人数" width="200"></el-table-column>
        <el-table-column label="操作" align="left">
          <template slot-scope="scope">
            <div @click="ConfirmDelete(scope.row.position)">
              <i v-if="scope.row.position!='项目成员'" class="el-icon-close"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="managerDialog.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="managerDialog.dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      managerDialog: {
        input: "",
        dialogVisible: false,
        newpostion: "",
      },
      innerDialog: {
        innerVisible: false,
        position: "",
      },
      addStaffDialog: {
        value: '',
        input: "",
        dialogVisible: false,
      },
      TabsValue: '项目成员',
      placeholder: '搜索项目成员',
      searchKey: '',
      tabPosition: 'left',
      editableTabs2: [{
          position: '项目成员',
          name: '项目成员',
          number: 4,
        }, {
          position: '负责人',
          name: '负责人',
          number: 1,
        },

      ],
      tableData: [
        { name: "zhuyunwu", email: "zhuyunwu@163.com", position: "无" },
        { name: "wanghoulun", email: "wanghoulun@163.com", position: "无" },
        { name: "fanping", email: "fanping@163.com", position: "无" },
        { name: "spongebob ", email: "fanping@163.com", position: "负责人" },
      ],
      tabs: [
        { name: "zhuyunwu", email: "zhuyunwu@163.com", position: "无" },
        { name: "wanghoulun", email: "wanghoulun@163.com", position: "无" },
        { name: "spongebob ", email: "fanping@163.com", position: "负责人" },
        { name: "fanping", email: "fanping@163.com", position: "无" },

      ],

    }
  },
  created() {

  },
  methods: {
    HandleClick(tab, event) {
      // console.log(tab, event);
      // console.log(this.TabsValue);
      if (this.TabsValue === '项目成员') {
        //项目成
        this.tableData = [].concat(this.tabs)
      } else {
        //负责人

        this.tableData = [].concat(this.tabs.filter(object => {
          return object.position === this.TabsValue
        }))
      }
    },
    RemoveTab() {
      let temp
      let i
      for (i = 0; i < this.editableTabs2.length; i++) {
        if (this.editableTabs2[i].position === this.innerDialog.position) {
          temp = this.editableTabs2[i]
          break
        }
      }
      if (temp.number === 0) {
        //success
        this.editableTabs2.splice(i, 1)
        this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.innerDialog.innerVisible = false
      } else {
        //fail
        this.$message.error('抱歉，请先清空人数');
        this.innerDialog.innerVisible = false
      }
    },
    AddPostion() {
      let isExist = false
      for (let i = 0; i < this.editableTabs2.length; i++) {
        if (this.editableTabs2[i].position === this.managerDialog.newpostion) {
          isExist = true
          break
        }
      }
      if (!isExist) {
        this.editableTabs2.push({
          position: this.managerDialog.newpostion,
          name: this.managerDialog.newpostion,
          number: 0,
        })
        this.$message.success('添加成功');
      } else {
        this.$message.error('添加失败：角色名已存在');
      }
    },
    ConfirmDelete(position) {
      this.innerDialog.position = position
      this.innerDialog.innerVisible = true
    },
    AddStaff() {
      if (this.addStaffDialog.value === '项目成员') {
        this.tabs.push({ name: this.addStaffDialog.input, email: this.addStaffDialog.input + "@163.com", position: "无" });
        this.editableTabs2[0].number++;
      } else if (this.addStaffDialog.value === '负责人') {
        this.tabs.push({ name: this.addStaffDialog.input, email: this.addStaffDialog.input + "@163.com", position: "负责人" });
        this.editableTabs2[0].number++;
        this.editableTabs2[1].number++;
      }
      this.HandleClick({}, {});
      this.$message.success('添加成功');
      this.addStaffDialog.dialogVisible = false;
    },
    RemoveStaff(row) {
      // console.log(row)
      let i
      for (i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].position === row.position) {
          break
        }
      }
      this.tabs.splice(i, 1)
      this.HandleClick({}, {});
      this.UpNumber();
      this.$message.success('删除成功');
    },
    UpNumber(){
      this.editableTabs2[0].number=this.tabs.length
      for (var i = 1; i<this.editableTabs2.length; i++) {
        this.editableTabs2[i].number=this.tabs.filter(object=>{
          return object.position===this.editableTabs2[i].position
        }).length
      }
    }
  }
}

</script>
<style scoped>
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



























/*.tools .el-input { position: absolute; top: 8px; left: 10px; width: 200px; } .tools .addPostion { position: absolute; top: 8px; right: 130px; } .tools .managerStaff { position: absolute; top: 8px; right: 30px; }
*/

.el-icon-close {
  font-weight: bold;
  cursor: pointer;
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
  /*min-width:1200px;*/
}

.el-row {
  background-color: white;
  border-bottom: 1px solid #dedede;
}

.position {
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
