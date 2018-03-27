<template>
  <div>
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
