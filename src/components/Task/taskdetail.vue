<template>
  <div>
    <div class="basef">
      <el-row class="firstline">
        <div class="taskid">{{form.id}}</div>
        <div></div>
      </el-row>
      <el-row>
        <div class="tasktitle">
          <router-link to="/index/taskpage">{{form.taskname}}</router-link></div>
      </el-row>
      <el-row class="peijian">
        <peijian :firsttext=form.exo secondtext="负责人" url="../../assets/logo.png"></peijian>
        <peijian :firsttext=form.state secondtext="当前状态"></peijian>
        <peijian :firsttext=form.youxianji secondtext="优先级"></peijian>
      </el-row>
      <el-row>
        <div class="tags">任务描述</div>
      </el-row>
      <el-row class="aha">
        <el-input class="www"
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="form.textarea">
</el-input>
      </el-row>
  </div>
  <div class="somethingdetail">
    <el-row>
      <div class="bigtag">基础信息</div>
    </el-row>
    <el-row class="bingpai">
      <div class="tag">创建者</div>
      <div class="content">{{form.exo}}</div>
    </el-row>

    <el-row class="bingpai">
      <div class="tag">所属项目</div>
      <div class="content">{{form.project}}</div>
    </el-row>

    <el-row class="bingpai">
      <div class="tag">任务创建时间</div>
      <div class="content">{{form.value1}}</div>
    </el-row>
  </div>
  <div class="somethingdetail">
    <div class="sfg">
      <div>子任务</div>
      <div class="el-icon-circle-plus" @click="clickit"></div>
      <ul>
        <li v-for="(item,index) in zirenwu" :key="index">ssss</li>
    </ul>
      <el-dialog title="填写子任务信息" :visible.sync="dialogFormVisible" width="650px">
  <el-form :model="form2" label-position="top" 
  width="600px">
    <el-form-item label="任务名称" :label-width="formLabelWidth" width="600px">
      <el-input width="600px" v-model="form2.taskname" auto-complete="off"></el-input>
    </el-form-item>
    <div class="testforflex">
      <el-form-item class="littleitem" label="所属项目" :label-width="formLabelWidth" width="300px">
      <el-select v-model="form.project" placeholder="请选择项目"  :disabled=true >
        <el-option label="红软外包平台" value="红软外包平台"></el-option>
        <el-option label="红软外包平台2" value="红软外包平台2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="littleitem" label="任务类型" :label-width="formLabelWidth">
      <el-select v-model="form2.tasktype" placeholder="请选择任务类型">
        <el-option label="收集图片素材" value="收集图片素材"></el-option>
        <el-option label="处理图片闪点" value="处理图片闪点"></el-option>
      </el-select>
    </el-form-item>
    </div>
    <div class="testforflex">
      <el-form-item class="littleitem" label="任务负责人" :label-width="formLabelWidth" width="300px">
      <el-select v-model="form2.exo" placeholder="请选择任务负责人">
        <el-option label="1412143367@qq.com" value="1412143367@qq.com"></el-option>
        <el-option label="nevermore" value="nevermore"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="littleitem" label="优先级" :label-width="formLabelWidth">
      <el-select v-model="form1.youxianji" placeholder="请选择优先级" :disabled=true>
        <el-option label="普通" value="普通"></el-option>
        <el-option label="重要" value="重要"></el-option>
        <el-option label="紧急" value="紧急"></el-option>
      </el-select>
    </el-form-item>
    </div>
    <div>
      <el-form-item>
        <div>任务描述</div>
        <el-input class="www"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="form2.textarea"></el-input>
        </el-form-item>
    </div>
    <div class="deadline">
      <el-form-item>
        <div>截止时间</div>
          <el-date-picker class="timepicker" v-model="form2.value1" type="date" placeholder="选择日期">
            <slot name="deadline"></slot>
          </el-date-picker>
        
      </el-form-item>
      </div>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitform">确 定</el-button>
  </div>
</el-dialog> 
    </div>
    
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
.aha{
  text-align: start;
}
.sfg{
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 15px;
}
.el-icon-circle-plus{
  color: blue;
  font-size: 18px;
}
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
.el-form{
  width: 600px;
}
.littleitem{
  width: 45%;
}
.testforflex{
  display: flex;
}
.el-form-item{
  text-align: start;
}
</style>
<script>
import Peijian from './peijian.vue'
export default {
  data(){
    return{
      form2:{},
      dialogFormVisible: false,
      xiangmu:'ss',
      dialogVisible: false,
      taskstate:'挂起',
      textarea:'',
      fileList:[],
      myheaders: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form:{},
      zirenwu:[]
    }
  },
  components:{
    Peijian
  },
  props:[
    'form1'
  ],
  mounted(){
    this.form=this.form1;
    console.log('mounted');
    console.log(''+this.form1);
    for(var item in this.form1){
    console.log(this.form1[item]);
    }  
    },
  watch:{
    form1:function(){
      console.log('watch')
      this.form=this.form1;
    }
  },
  methods: {
    submitform(){
      for(var item in this.form2){
        console.log(''+item+' '+this.form2[item]);
      }
      this.form2.parentid=this.form2.id;
      var ii=Math.floor(Math.random()*10000+1);//假装这是一个不会重复的Id 后端啊后端 你在哪里
      this.form2.id="#"+ii;
      this.zirenwu.push(this.form2);
      this.dialogFormVisible=false;
    },
    clickit(){
      console.log('clickit');
      this.dialogFormVisible=true;
    },
    confirmanddosomething(){
      this.dialogVisible=false;
      this.from.taskstate='审核中';
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

