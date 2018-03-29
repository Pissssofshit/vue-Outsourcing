<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row >
            <div class="title">我负责的任务</div>
        </el-row>
      </el-header>
      <el-container>
      <el-main>
        <el-row class="op">
          <el-button class="op1">添加任务</el-button>
        </el-row>
         <el-table
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
        <Test></Test>
       </el-aside>
    </el-container>
    </el-container>
    
  </div>
</template>
<style scoped>
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
          tableData: [{
            id:'#123',
            youxianji:'普通',
            taskname:'实例任务示例任务',
            creator:'1412143367',
            state:'未完成'
          },
          {
            id:'#234',
            youxianji:'重要',
            taskname:'实例任务示例任务',
            creator:'1412143367',
            state:'未完成'
          },
          {
            id:'#345',
            youxianji:'紧急',
            taskname:'实例任务示例任务',
            creator:'1412143367',
            state:'进行中'
          },
          {
            id:'#3454',
            youxianji:'紧急',
            taskname:'实例任务示例任务',
            creator:'1412143367',
            state:'进行中'
          }
            ]
        }
      },
  created() {
    // this.$emit('event',this.te)
  },
  components: {
    Test
  }
}

</script>