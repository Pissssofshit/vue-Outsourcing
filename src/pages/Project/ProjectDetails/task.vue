<template>
  <div>
    <div class="tasklistgroup">
    <task-list></task-list>
    <task-list></task-list>
    <task-list></task-list>
    </div>
  </div>
</template>
<script>

import TaskList from '../../../components/Task/taskList.vue'
export default {
  data() {
    return{
      te:1234
    }
  },
  created() {
    this.$emit('event',this.te)
  },
  components:{
      TaskList
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
