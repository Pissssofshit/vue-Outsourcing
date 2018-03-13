<template>
  <div>
    <div class="tasklistgroup">
    <task-list></task-list>
    <task-list></task-list>
    <task-list></task-list>
    <task-state3></task-state3>
    </div>
  </div>
</template>
<script>

import TaskList from '../../../components/Task/taskList.vue'
import TaskState3 from '../../../components/Task/taskState3.vue'
export default {
  data() {
    return{
      // te:1234
    }
  },
  created() {
    // this.$emit('event',this.te)
  },
  components:{
      TaskList,
      TaskState3
  }
}
</script>

<style scoped>
.tasklistgroup{
    display: flex;
    margin-left: 5vh;
    margin-top: 3vh;
    height: 100%;
}
div{
    width: 100%;
    height: 100%;
}
</style>
