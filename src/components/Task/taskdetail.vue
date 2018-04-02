<template>
  <div>
    <div class="basef">
      <el-row class="firstline">
        <div class="taskid">#32</div>
        <div></div>
      </el-row>
      <el-row>
        <div class="tasktitle">【示例任务】项目角色入口做权限判断</div>
      </el-row>
      <el-row class="peijian">
        <peijian firsttext="1412143367@qq.com" secondtext="负责人" url="../../assets/logo.png"></peijian>
        <peijian :firsttext=taskstate secondtext="当前状态"></peijian>
        <peijian firsttext="普通" secondtext="优先级"></peijian>
      </el-row>
      <el-row>
        <div class="tags">任务描述</div>
      </el-row>
      <el-row>
        <el-input class="www"
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
      </el-row>
  </div>
  <div class="somethingdetail">
    <el-row>
      <div class="bigtag">基础信息</div>
    </el-row>
    <el-row class="bingpai">
      <div class="tag">创建者</div>
      <div class="content">1412143367@qq.com</div>
    </el-row>

    <el-row class="bingpai">
      <div class="tag">所属项目</div>
      <div class="content">红软外包平台</div>
    </el-row>

    <el-row class="bingpai">
      <div class="tag">任务创建时间</div>
      <div class="content">2018年1月1日</div>
    </el-row>
  </div>
  <div class="committask">
    <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :headers="myheaders"
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>
  <el-button class="submit" size="small" @click="dialogVisible = true">提交任务</el-button>
  <el-dialog
  title="提示信息"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>确认提交任务吗?</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button  type="primary" @click="confirmanddosomething">确 定</el-button>
  </span>
</el-dialog>
  </div>
  </div>
</template>
<style scoped>
.somethingdetail{
  padding-bottom: 15px;
  border-bottom: 1px solid #dedede;
}
.submit{
  margin-left: 15px;
}
.committask{
  display: flex;
  margin: 15px;
}
.bigtag{
  font-size: 15px;
  font-weight: 500;
  text-align: start;
  margin-left: 15px;
  margin-top: 20px;
}
.bingpai{
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.tag{
  width: 140px;
  text-align: start;
  margin-right: 30px;
  font-size: 14px;
}
.content{
  font-size: 14px;
}
.www{
  width: 400px;
}
.tags{
  font-size: 15px;
  font-weight: 500;
  text-align: start;
  margin-top: 15px;
  margin-bottom: 15px;
}
.tasktitle{
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
  text-align: start;
}
.basef{
  padding-left: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
}
.firstline{
  margin-top: 15px;
}
.taskid{
  font-size: 14px;
  text-align: start;
}
.peijian{
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
<script>
import Peijian from './peijian.vue'
export default {
  data(){
    return{
      dialogVisible: false,
      taskstate:'挂起',
      textarea:'',
      fileList:[],
      myheaders: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    }
  },
  components:{
    Peijian
  },
  methods: {
    confirmanddosomething(){
      this.dialogVisible=false;
      this.taskstate='审核中';
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>

