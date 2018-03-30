<template>
  <div class="base">
    <el-container>
      <el-header>
        <div class="title">我负责的任务</div>
      </el-header>
      <el-container>
      <el-main>
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
       <el-aside> 
        <test></test>
       </el-aside>
    </el-container>
    </el-container>
    
  </div>
</template>
<script>
import Test from '../../../components/Task/taskdetail.vue'
export default {
  data() {
    return {
      // te:1234
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
<style scoped>
.el-container{
  min-height: 800px;
}
.el-table{
  height: 100%;
}
.el-row{
  width: 100%;
}
.title{
  background-color: white;
}
.tasklistgroup {
  display: flex;
  margin-top: 3vh;
  height: 100%;
}

div {
  width: 100%;
  height: 100%;
}
.base{
  height: 100%;
}
</style>
 <script>
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
      }
    }
  </script>