<template>
  <div class="base">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      >
      <div v-for="(item,index) in menulist" :key="index">
        <el-menu-item :index="''+index">
            <i class="el-icon-menu"></i>
            <router-link to="sss" replace>
            {{item.menuname}}</router-link>
        </el-menu-item>
      </div>
      
    </el-menu>
  </div>
</template>
<style scoped>
.el-menu{
  background-color: rgb(241,241,241) ; 
}
.el-menu-item{
  background-color: rgb(241,241,241);
  padding: 0px;
  height: 35px;
}

li{
  padding: 0px;
}
ul{
  border: 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
}
</style>

<script>
export default {
  data(){
      return{
      }
  },
  props:[
      'menulist'
  ]
}
</script>
