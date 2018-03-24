<template>
  <div class="rw">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>{{renwulistname}}</h3>
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleclick('create')">添加任务</el-button>
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
  methods: {
    handleclick: function(mode) {
      console.log('im handle click')
      // if(mode=='create')
      console.log('mode='+mode)
      this.$store.commit('showRenwu')
    }
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
