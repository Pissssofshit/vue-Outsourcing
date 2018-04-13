<template>
  <div class="base" v-loading="loading">
    <el-container>
      <el-header height="55px">
        <el-row>
          <div class="title">个人资料仓库</div>
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
                    <i v-if="scope.row.type==='文档'" class="el-icon-document"></i>
                    <Icon v-if="scope.row.type==='文件夹'" type="folder"></Icon>
                    <i v-if="scope.row.type==='图片'" class="el-icon-picture"></i>
                    <Icon v-if="scope.row.type==='视频'" type="social-youtube"></Icon>
                    <span @click="HandleFolder( scope.row.needpower)" style="margin-left: 0px;cursor:pointer">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="上传人" align="center" prop="userName">
                </el-table-column>
                <el-table-column label="更新时间" align="center" prop="updateTime">
                </el-table-column>
                <el-table-column label="下载" align="center" width="100px">
                  <template slot-scope="scope">
                    <div>
                      <a href="../../../../static/help.png" :download="downloadName"  @click='HandleDownload(scope.row.name)'>
                      <i v-if="scope.row.type!='文件夹'" class="el-icon-download" style="cursor:pointer"></i>
                      </a>
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
      downloadName: '123.png',
      loading: false,
      myheaders: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      TabsValue: '我的资料',
      placeholder: '搜索我的资料',
      searchKey: '',
      tabPosition: 'left',
      MyTabs: [{
          position: '我的资料',
          name: '我的资料',
        }, {
          position: '迁移文件',
          name: '迁移文件',

        },
        {
          position: '保存文件',
          name: '保存文件',
        },
      ],
      tableData: [],
      allTableData: [
        [
          { name: "说明", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料1", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料2", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料3", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料4", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料4", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料4", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料4", userName: "tom", updateTime: "2018-03-29", type: '文件夹', needpower: 1 },
          { name: "普通资料4", userName: "tom", updateTime: "2018-03-29", type: '视频', needpower: 0 },
        ],
        [
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
          { name: "重要资料", userName: "hector", updateTime: "2018-03-29", type: '文件夹', needpower: 2 },
        ],
        [
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
          { name: "机密文件", userName: "spongebob", updateTime: "2018-03-29", type: '文件夹', needpower: 3 },
        ]
      ],
      normalData: [
        [
          { name: "person#001.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#002.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#003.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#004.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#005.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#006.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "识别过程.mp4", userName: "tom", updateTime: "2018-03-29", type: '视频' },
        ],
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
  watch: {},
  created() {
    this.tableData = this.allTableData[0]
  },
  created() {
    this.tableData = this.allTableData[0]
  },
  computed: {
    AddConfirm: function() {
      if ((this.addDataDialog.input.length > 0) && (this.fileList.length === 1)) {
        // console.log(false)
        this.addstate = false
      } else {
        // console.log(true)
        this.addstate = true
      }
    },
  },
  methods: {
    HandleDownload(name) {
      this.downloadName = name ;
    },
    FilterPower(mypower, needpower) {
      if (needpower === 0) {
        return 'false'
      } else if (mypower >= needpower) {
        return 'true'
      } else if (mypower < needpower) {

        this.$alert('抱歉你的权限不够', '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        });
        return 'false'
      }
      return 'false'
    },
    HandleSave() {

      this.loading = true
      var self = this

      setTimeout(function() {
        self.$message.success('保存成功')
        self.loading = false
      }, 1000)
    },
    HandleFolder(needpower) {
      let mypower = 1
      let res = this.FilterPower(mypower, needpower)
      console.log("1" + res + "1")
      if (res === 'true') {
        this.tableData = this.normalData[0]
      }
    },
    handleChange(file, fileList) {
      this.fileList = fileList
    },
    HandleClick() {
      this.placeholder = '搜索' + this.TabsValue
      if (this.TabsValue === '我的资料') {
        this.tableData = this.allTableData[0]
      } else if (this.TabsValue === '迁移文件') {
        this.tableData = this.allTableData[1]
      } else if (this.TabsValue === '保存文件') {
        this.tableData = this.allTableData[2]
      }
    },
    AddStaff() {
      // console.log(fileList);
      if (this.addDataDialog.value === '我的资料') {
        this.allTableData[0].push({ name: this.addDataDialog.input, userName: "spongebob", updateTime: "2018-03-29", type: "文件" })
      } else if (this.addDataDialog.value === '迁移文件') {
        this.allTableData[1].push({ name: this.addDataDialog.input, userName: "spongebob", updateTime: "2018-03-29", type: "文件" })
      } else if (this.addDataDialog.value === '保存文件') {
        this.allTableData[2].push({ name: this.addDataDialog.input, userName: "spongebob", updateTime: "2018-03-29", type: "文件" })
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
  width: 100%;
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
