<template>
  <div class="base">
    <el-container v-if="media > 700">
      <el-header height="55px">
        <el-row >
            <div class="title">我负责的任务</div>
        </el-row>
      </el-header>
      <el-container>
      <el-main>
        <el-row class="op">
          <el-button class="op1"  @click="dialogFormVisible = true">添加任务</el-button>
<el-dialog title="填写任务信息" :visible.sync="dialogFormVisible" width="650px">
  <el-form :model="form" label-position="top" 
  width="600px">
    <el-form-item label="任务名称" :label-width="formLabelWidth" width="600px">
      <el-input width="600px" v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <div class="testforflex">
      <el-form-item class="littleitem" label="所属项目" :label-width="formLabelWidth" width="300px">
      <el-select v-model="form.project" placeholder="请选择项目">
        <el-option label="红软外包平台" value="红软外包平台"></el-option>
        <el-option label="红软外包平台2" value="红软外包平台2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="littleitem" label="任务类型" :label-width="formLabelWidth">
      <el-select v-model="form.tasktype" placeholder="请选择任务类型">
        <el-option label="收集图片素材" value="收集图片素材"></el-option>
        <el-option label="处理图片闪点" value="处理图片闪点"></el-option>
      </el-select>
    </el-form-item>
    </div>
    <div class="testforflex">
      <el-form-item class="littleitem" label="任务负责人" :label-width="formLabelWidth" width="300px">
      <el-select v-model="form.exo" placeholder="请选择任务负责人">
        <el-option label="1412143367@qq.com" value="1412143367@qq.com"></el-option>
        <el-option label="nevermore" value="nevermore"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="littleitem" label="优先级" :label-width="formLabelWidth">
      <el-select v-model="form.youxianji" placeholder="请选择优先级">
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
        v-model="form.textarea"></el-input>
        </el-form-item>
    </div>
    <div class="deadline">
      <el-form-item>
        <div>截止时间</div>
          <el-date-picker class="timepicker" v-model="form.value1" type="date" placeholder="选择日期">
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
        </el-row>
         <el-table
         @row-click="handlerowclick"
      :show-header=false
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="任务编号"
        width="60px">
        <template slot-scope="scope">
          <el-tag size="mini">{{scope.row.id}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="youxianji"
        label="优先级"
        width="60px">
        <template slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.youxianji">{{scope.row.youxianji}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="creator"
        label="创建者"
        width="100px">
        <template slot-scope="scope">
          <el-tag size="mini">{{scope.row.creator}}</el-tag>
        </template>
      </el-table-column>
            <el-table-column
        prop="taskname"
        label="任务名称">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="100px">
        <template slot-scope="scope">
          <el-tag size="mini">{{scope.row.state}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
      </el-main>
       <el-aside width="455px"> 
        <Test :form1="selecttask" ></Test>
       </el-aside>
    </el-container>
    </el-container>
    <el-container v-else>
       <el-header height="55px">
        <el-row >
            <div class="title">我负责的任务</div>
        </el-row>
      </el-header>
      <el-row class="op">
          <el-button class="op1"  @click="dialogFormVisible = true">添加任务</el-button>
<el-dialog title="填写任务信息" :visible.sync="dialogFormVisible" width="340px">
  <el-form :model="form" label-position="top" 
  width="300px">
    <el-form-item label="任务名称" :label-width="formLabelWidth" width="300px">
      <el-input width="300px" v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <div class="testforflex">
      <el-form-item class="littleitem" label="所属项目" :label-width="formLabelWidth" width="300px">
      <el-select v-model="form.project" placeholder="请选择项目">
        <el-option label="红软外包平台" value="红软外包平台"></el-option>
        <el-option label="红软外包平台2" value="红软外包平台2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="littleitem" label="任务类型" :label-width="formLabelWidth">
      <el-select v-model="form.tasktype" placeholder="请选择任务类型">
        <el-option label="收集图片素材" value="收集图片素材"></el-option>
        <el-option label="处理图片闪点" value="处理图片闪点"></el-option>
      </el-select>
    </el-form-item>
    </div>
    <div class="testforflex">
      <el-form-item class="littleitem" label="任务负责人" :label-width="formLabelWidth" width="300px">
      <el-select v-model="form.exo" placeholder="请选择任务负责人">
        <el-option label="1412143367@qq.com" value="1412143367@qq.com"></el-option>
        <el-option label="nevermore" value="nevermore"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="littleitem" label="优先级" :label-width="formLabelWidth">
      <el-select v-model="form.youxianji" placeholder="请选择优先级">
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
        v-model="form.textarea"></el-input>
        </el-form-item>
    </div>
    <div class="deadline">
      <el-form-item>
        <div>截止时间</div>
          <el-date-picker class="timepicker" v-model="form.value1" type="date" placeholder="选择日期">
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
        </el-row>
       <el-table
         @row-click="handlerowclick"
      :show-header=false
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="任务编号"
        width="60px">
        <template slot-scope="scope">
          <el-tag size="mini">{{scope.row.id}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="youxianji"
        label="优先级"
        width="60px">
        <template slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.youxianji">{{scope.row.youxianji}}</el-tag>
        </template>
      </el-table-column>
            <el-table-column
        prop="taskname"
        label="任务名称">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="100px">
        <template slot-scope="scope">
          <el-tag size="mini">{{scope.row.state}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    </el-container>
    
  </div>
</template>
<style scoped>
@media screen and (max-width: 700px){
  .el-button{
    z-index: 900 !important;
    display: absolute !important;
  }
  .el-form{
  width: 340px !important;
  }
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
.op1{
  /* text-align: start; */
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.op{
  display: flex;
  justify-content: flex-start;
}
.base{
  box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
  margin: 10px;
}
.el-row{
  background-color: white;
  border-bottom: 1px solid #dedede;
}
.title{
  /* min-height: 40px; */
  height: 44px;
  font-size: 25px;
  text-align: start;
  margin-top: 10px;
  margin-left: 15px;
}
.el-aside{
  background-color: white;
  margin-left: 5px;
}
.el-container{
  height: 100%;
  min-height: 1000px;
  padding-top: 0px;
}
.el-main{
  padding: 0px;
  background-color: white;
}
.el-header{
  padding: 0px;
}
</style>
<style>
/* .el-header{
  height: 30px;
} */
</style>

<script>
import Test from '../../../components/Task/taskdetail.vue'
export default {
   data() {
        return {
          media:document.body.clientWidth,
          textarea:'',
          dialogFormVisible: false,
        form: {
          textarea:'',
          name: '',
          value1:'',
          tasktype:'',
          exo:'',
          youxianji:'',
          project:''
        },
        formLabelWidth: '120px',
        selecttask:{taskname:"红软外包服务平台 登录权限",
            youxianji:"普通",
            state:"进行中",
            creator:"1412143367@qq.com",
            id:"#1255",
            exo:"1412143367@qq.com",
            project:"红软外包服务平台",
            textarea:"在登录平台前进行权限验证",
            value1:"2018-04-17",
            role:'myduty'},
          tableData: [
          {
            taskname:"红软外包服务平台 登录权限",
            youxianji:"普通",
            state:"进行中",
            creator:"1412143367@qq.com",
            id:"#1255",
            exo:"1412143367@qq.com",
            project:"红软外包服务平台",
            textarea:"在登录平台前进行权限验证",
            value1:"2018-04-17",
            role:'myduty'
          },
          {
            taskname:"红软外包服务平台 人脸识别",
            youxianji:"紧急",
            state:"进行中",
            creator:"1412143367@qq.com",
            id:"#213",
            exo:"1412143367@qq.com",
            project:"红软外包服务平台",
            textarea:"在登录平台前进行权限验证",
            value1:"2018-04-17",
            role:'myduty'
          },
          {
            taskname:"系统集成测试",
            youxianji:"紧急",
            state:"已过期",
            creator:"1412143367@qq.com",
            id:"#6226",
            exo:"1412143367@qq.com",
            project:"红软外包服务平台",
            textarea:"在登录平台前进行权限验证",
            value1:"2018-04-17",
            role:'myduty'
          }
            ]
        }
      },
  created() {
    // this.$emit('event',this.te)
  },
  components: {
    Test
  },
  watch:{
    selecttask: function(){
      console.log('selecttask watching');
    }
  },
  methods:{
    handlerowclick:function(row, event, column){
      console.log('handlerowclick');
      // taskname:"红软外包服务平台 登录权限",
      //       youxianji:"普通",
      //       state:"进行中",
      //       creator:"1412143367@qq.com",
      //       id:"#1255",
      //       exo:"1412143367@qq.com",
      //       project:"红软外包服务平台",
      //       textarea:"i will let u down i will let u fail you will have it all my empire of dirt",
      //       value1:"2018-04-17",
      //       role:'myduty'
      var tmp={};
      tmp.taskname=row.taskname;
      tmp.youxianji=row.youxianji;
      tmp.state=row.state;
      tmp.creator=row.creator;
      tmp.id=row.id;
      tmp.exo=row.exo;
      tmp.project=row.project;
      tmp.textarea=row.textarea;
      tmp.value1=row.value1;
      tmp.role=row.role;
      this.selecttask=tmp;
      
    },
    submitform:function(){
      this.dialogFormVisible = false;
      var tableitem={};
      tableitem.taskname=this.form.name;
      tableitem.youxianji=this.form.youxianji;
      tableitem.state="进行中";
      tableitem.creator=this.form.exo; //任务创建者 这里创建这暂时先等同于 执行者
      tableitem.id="#6666";
      tableitem.exo=this.form.exo;//任务执行者
      tableitem.project=this.form.project; //任务所属项目
      tableitem.textarea=this.form.textarea;//任务详细描述
      tableitem.value1=this.form.value1;//任务截至时间
      this.tableData.push(tableitem);
    }
  }
}

</script>