<template>
  <div>
    <div class="tasklistgroup">
      <el-row type="flex"  justify="center" >
      <el-col :span="3">
      <task-list  renwulistname="待参加的任务"></task-list>
      </el-col>
      <el-col :span="3">
      <task-list renwulistname="进行中的任务"></task-list>
      </el-col>
      <el-col :span="3">
        <task-list renwulistname="完成的任务"></task-list>
      </el-col>
      </el-row>
      
    </div>
      <task-state3></task-state3>
  </div>
</template>
<script>
import TaskList from '../../../components/Task/taskList.vue'
import TaskState3 from '../../../components/Task/taskState3.vue'
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
    TaskList,
    TaskState3
  }
}

</script>
<style scoped>
.el-row{
  width: 100%;
}
.tasklistgroup {
  display: flex;

  /* 这个导致左右摇晃
    margin-left: 5vh;
    */
  margin-top: 3vh;
  height: 100%;
}

div {
  width: 100%;
  height: 100%;
}

</style>
