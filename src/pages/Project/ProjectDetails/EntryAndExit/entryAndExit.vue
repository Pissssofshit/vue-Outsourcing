<template>
  <div class="base" v-loading="loading" element-loading-text="正在迁移中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-container>
      <el-header height="55px">
        <el-row class="forel-row">
          <div class="position">成员出职</div>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-row class="forel-row">
            <el-col :span="22">
              <div style="text-align:left;margin-left:10px;font-size:14px;margin-top:8px;color:#909090;">请在职人员表和离职人员表中各选择一个,然后点击仓库迁移</div>
            </el-col>
            <el-col :span="2">
              <el-button class="button" type="primary" size="small" @click="dialogVisible = true">仓库迁移</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <h2 style="margin-top:5px;">在职人员</h2>
              <el-col :span="6">
                <el-input class="search" size="medium" placeholder="在职人员搜索" prefix-icon="el-icon-search" v-model="searchKey1">
                </el-input>
              </el-col>
              <el-table :data="tabs[0]" style="width: 100% ;margin-top:5px" border highlight-current-row @current-change="handleCurrentChange1">
                <el-table-column label="用户名" align="left">
                  <template slot-scope="scope">
                    <span style="margin-left: 0px">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="角色" align="left" prop="position">
                </el-table-column>
                <el-table-column label="个人仓库" align="left" width="100px">
                  <template slot-scope="scope">
                    <router-link to="home">
                      <div>
                        <span style="color:blue;">查看</span>
                      </div>
                    </router-link>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="16">
              <h2 style="margin-top:5px;">离职人员</h2>
              <el-col :span="6">
                <el-input class="search" size="medium" placeholder="离职人员搜索" prefix-icon="el-icon-search" v-model="searchKey2">
                </el-input>
              </el-col>
              <el-table :data="tabs[1]" style="width: 100% ;margin-top:5px" border highlight-current-row @current-change="handleCurrentChange2">
                <el-table-column label="用户名" align="left">
                  <template slot-scope="scope">
                    <span style="margin-left: 0px">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="角色" align="left" prop="position">
                </el-table-column>
                <el-table-column label="个人仓库" align="left">
                  <template slot-scope="scope">
                    <router-link to="home">
                      <div>
                        <span style="color:blue;">查看</span>
                      </div>
                    </router-link>
                  </template>
                </el-table-column>
                <el-table-column label="是否迁移" align="left" prop="isMove">
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog title="确认" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>是否确认将{{currentRow1.name}}的个人仓库迁移到{{currentRow2.name}}中</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="RunHub()">确 定</el-button>
  </span>
    </el-dialog>
    <!--管理成员  -->
    <el-dialog class="dialog" title="管理成员" :visible.sync="addStaffDialog.dialogVisible" width="30%">
      <p>项目角色</p>
      <el-select v-model="addStaffDialog.value" placeholder="请选择">
        <el-option v-for="item in MyTabs" :key="item.position" :label="item.position" :value="item.position">
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
    <el-dialog class="dialog" title="管理角色" :visible.sync="managerDialog.dialogVisible" width="40%">
      <el-dialog width="30%" title="删除角色" :visible.sync="innerDialog.innerVisible" append-to-body top="25vh">
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
      <el-table :data="MyTabs">
        <el-table-column property="position" label="角色"></el-table-column>
        <el-table-column property="number" label="人数"></el-table-column>
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
      loading: false,
      currentRow1: { name: "zhuyunwu", position: "普通成员", },
      currentRow2: { name: "zhuyunwu", position: "普通成员", },
      dialogVisible: false,
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
      searchKey1: '',
      searchKey2: '',
      tabPosition: 'left',
      MyTabs: [{
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
        { name: "zhuyunwu", position: "普通成员", },
        { name: "wanghoulun", position: "普通成员", },
        { name: "fanping", position: "普通成员", },
        { name: "spongebob ", position: "负责人", },
      ],
      tabs: [
        [
          { name: "zhuyunwu", position: "普通成员", },
          { name: "wanghoulun", position: "普通成员", },
          { name: "spongebob ", position: "负责人", },
          { name: "fanping", position: "普通成员", },
        ],
        [
          { name: "zhuyunwu", position: "普通成员", isMove: '否' },
          { name: "wanghoulun", position: "普通成员", isMove: '否' },
          { name: "spongebob ", position: "负责人", isMove: '否' },
          { name: "fanping", position: "普通成员", isMove: '否' },
        ],
      ],
       tabs1: [
        [
          { name: "zhuyunwu", position: "普通成员", },
          { name: "wanghoulun", position: "普通成员", },
          { name: "spongebob ", position: "负责人", },
          { name: "fanping", position: "普通成员", },
        ],
        [
          { name: "zhuyunwu", position: "普通成员", isMove: '否' },
          { name: "wanghoulun", position: "普通成员", isMove: '否' },
          { name: "spongebob ", position: "负责人", isMove: '否' },
          { name: "fanping", position: "普通成员", isMove: '否' },
        ],
      ],
    }
  },
  watch: {
    searchKey1: function(curval, oldval) {
      this.tabs[0] = this.tabs1[0].filter(object => {
        return object.name.indexOf(curval) >= 0
      })
    },
    searchKey2: function(curval, oldval) {
      this.tabs[1] = this.tabs1[1].filter(object => {
        return object.name.indexOf(curval) >= 0
      })
    },
  },
  created() {

  },
  methods: {
    RunHub() {
      var self = this;
      this.loading = true
      self.dialogVisible = false
      setTimeout(
        function() {

          for (let i = 0; i < self.tabs[1].length; i++) {
            if (self.tabs[1][i].name === self.currentRow2.name) {
              self.tabs[1][i].isMove = '是'
              break
            }
          }
          self.loading = false
          self.$message({
            message: '迁移完成',
            type: 'success'
          });



        }, 3000)

    },
    handleCurrentChange1(val) {
      this.currentRow1 = val;
    },
    handleCurrentChange2(val) {
      this.currentRow2 = val;
    },
    HandleClick(tab, event) {
      // console.log(tab, event);
      // console.log(this.TabsValue);
      if (this.TabsValue === '项目成员') {
        //项目成
        this.tableData = [].concat(this.tabs)
        this.placeholder = "搜索" + this.TabsValue
      } else {
        //负责人
        this.placeholder = "搜索" + this.TabsValue
        this.tableData = [].concat(this.tabs.filter(object => {
          return object.position === this.TabsValue
        }))
      }
    },
    RemoveTab() {
      let temp
      let i
      for (i = 0; i < this.MyTabs.length; i++) {
        if (this.MyTabs[i].position === this.innerDialog.position) {
          temp = this.MyTabs[i]
          break
        }
      }
      if (temp.number === 0) {
        //success
        this.MyTabs.splice(i, 1)
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
      for (let i = 0; i < this.MyTabs.length; i++) {
        if (this.MyTabs[i].position === this.managerDialog.newpostion) {
          isExist = true
          break
        }
      }
      if (!isExist) {
        this.MyTabs.push({
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
        this.MyTabs[0].number++;
      } else if (this.addStaffDialog.value === '负责人') {
        this.tabs.push({ name: this.addStaffDialog.input, email: this.addStaffDialog.input + "@163.com", position: "负责人" });
        this.MyTabs[0].number++;
        this.MyTabs[1].number++;
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
    UpNumber() {
      this.MyTabs[0].number = this.tabs.length
      for (var i = 1; i < this.MyTabs.length; i++) {
        this.MyTabs[i].number = this.tabs.filter(object => {
          return object.position === this.MyTabs[i].position
        }).length
      }
    }
  }
}

</script>
<style scoped>
@media only screen and (max-width: 700px) {
  .tools {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .buttons {
    display: flex;
  }
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
  float: left;
  margin-top: 5px;
  margin-right: 20px;
  margin-bottom: 5px;
}

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

.forel-row {
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
