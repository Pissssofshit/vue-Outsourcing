<template>
  <div>
      <el-row>
          <el-col　:xs="8" :sm="6" :md="4" :lg="2">
              <el-dropdown split-button type="primary" @command="handleCommand" @click="handleClick">
                {{shaixuan}}
                <el-dropdown-menu slot="dropdown">
    <el-dropdown-item　command="默认排序" >默认排序</el-dropdown-item>
    <el-dropdown-item command="按任务种类">按任务种类</el-dropdown-item>
    <el-dropdown-item command="按任务种类" >按人员种类</el-dropdown-item>
    <el-dropdown-item command="按人员编号" >按人员编号</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="2"><el-input @change="handlechange" v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  data(){
      return{
          shaixuan:'默认排序',
          input:'' //似乎可以被抛弃
      }
  },
  methods:{
      handleCommand(command){
          this.shaixuan=command
      },
      handlechange(value){
          console.log(value)
      },
      handleClick(){

      }
  }
}
</script>
<style scoped>

</style>
