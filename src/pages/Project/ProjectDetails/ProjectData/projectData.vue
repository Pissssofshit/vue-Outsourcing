<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row>
          <div class="title">资料</div>
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
                <el-button class="button" type="primary" size="small" @click="addDataDialog.dialogVisible = true">上传资料</el-button>
              </el-col>
            </div>
          </el-row>
          <el-tabs v-model="TabsValue" :tab-position="tabPosition" style="height: 90% " @tab-click="HandleClick">
            </el-tab-pane>
            <el-tab-pane v-for="(item, index) in MyTabs" :key="item.name" :label="item.position" :name="item.name">
              <el-table :data="tableData" style="width: 100% ;margin-top:5px">
                <el-table-column label="资料名" align="left">
                  <template slot-scope="scope">
                    <i class="el-icon-document"></i>
                    <span style="margin-left: 0px">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="上传人" align="center" prop="userName">
                </el-table-column>
                <el-table-column label="更新时间" align="center" prop="updateTime">
                </el-table-column>
                <el-table-column align="center" width="100px">
                  <template slot-scope="scope">
                    <div>
                      <i class="el-icon-download"></i>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
    <!--上传资料  -->
    <el-dialog class="dialog" title="上传资料" :visible.sync="addDataDialog.dialogVisible" width="30%">
      <p>资料等级</p>
      <el-select v-model="addDataDialog.value" placeholder="请选择">
        <el-option v-for="item in MyTabs" :key="item.position" :label="item.position" :value="item.position">
        </el-option>
      </el-select>
      <p>资料标题</p>
      <el-input v-model="addDataDialog.input" placeholder="请输入标题"></el-input>
      <el-upload :headers=myheaders class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList" :on-change="handleChange">
        <el-button size="small" type="primary">点击上传</el-button>
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
      <span slot="footer" class="addDataDialog-footer">
        <el-button @click="addDataDialog.dialogVisible = false">取 消</el-button>
        <el-button :disabled="addstate" type="primary" @click="AddStaff()">确 定</el-button>
        <p> <p>{{AddConfirm}}</p></p>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myheaders: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      TabsValue: '普通资料',
      placeholder: '搜索普通资料',
      searchKey: '',
      tabPosition: 'left',
      MyTabs: [{
          position: '普通资料',
          name: '普通资料',
        }, {
          position: '重要资料',
          name: '重要资料',
        },
        {
          position: '机密资料',
          name: '机密资料',
        },
      ],
      tableData: [
        { name: "九阴真经", userName: "spongebob", updateTime: "2018-03-29", type: "文件" },
        { name: "乾坤大挪移", userName: "spongebob", updateTime: "2018-03-29", type: "文件" },
        { name: "辟邪剑法", userName: "spongebob", updateTime: "2018-03-29", type: "文件" },
        { name: "清风", userName: "spongebob", updateTime: "2018-03-29", type: "图片" },
      ],
      addDataDialog: {
        value: '普通资料',
        input: "",
        dialogVisible: false,
      },
      fileList: [],
      addstate: true,
    }
  },
  mounted() {},
  watch: {

  },
  computed: {
    AddConfirm: function() {
      if ((this.addDataDialog.input.length>0) && (this.fileList.length === 1)) {
        console.log(false)
        this.addstate = false
      } else {
        console.log(true)
        this.addstate = true
      }

    },
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList=fileList
    },
    HandleClick() {
      this.placeholder='搜索'+this.TabsValue
    },
    AddStaff() {
      // console.log(fileList);
      if (this.addDataDialog.value === '普通资料') {
        this.tableData.push({ name: this.addDataDialog.input, userName: "spongebob", updateTime: "2018-03-29", type: "文件" });
      } else if (this.addDataDialog.value === '重要资料') {
        this.tableData.push({ name: this.addDataDialog.input, userName: "spongebob", updateTime: "2018-03-29", type: "文件" });
      } else if (this.addDataDialog.value === '机密资料') {
        this.tableData.push({ name: this.addDataDialog.input, userName: "spongebob", updateTime: "2018-03-29", type: "文件" });
      }
      this.$message.success('添加成功');
      this.addDataDialog.dialogVisible = false;
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
}

</script>
<style scoped>
.upload-demo {
  padding-top: 10px;
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

.tools {
  margin-left: 10px;
  margin-top: 5px;
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
