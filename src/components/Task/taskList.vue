<template>
  <div class="rw">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>{{renwulistname}}</h3>
        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">添加任务</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
      </div>
      <div v-for="o in 4" :key="o" class="text item" @click="handleclick">
        <task-state1></task-state1>
      </div>
    </el-card>
  </div>
</template>
<script>
import TaskState1 from './taskState1.vue'
export default {
  components: {
    TaskState1
  },
  props:[
    'renwulistname'
  ],
  data(){
    return{
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
    dialogFormVisible: false,
    formLabelWidth: '120px'
    }
  },
  methods: {
    
  }
}

</script>
<style scoped>
.rw {
  height: 100%;
    width: 100px;
   margin-right: 10px; 
}

.el-card {
  height: 100%;
  width: 350px;
 
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>
