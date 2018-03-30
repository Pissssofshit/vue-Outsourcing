<template>
  <div class="base">
    <el-menu
      class="el-menu-vertical-demo"
      >
      <div v-for="(item,index) in menulist" :key="index">
        <div v-if="item.type===1" class="menuitem gg">
            <div >{{item.menuname}}</div>
        </div>
        <el-menu-item :index="''+index" v-else-if="item.type===2" class="menuitem ">
           <div class="no">
              <i class="el-icon-menu"></i>
            <!-- <router-link to="personal" class="ff" replace>
            {{item.menuname}}</router-link> -->
            <router-link :to="{ name:item.menuname }" class="ff" replace>
            {{item.menuname}}</router-link>
            </div>
        </el-menu-item>
        <el-menu-item :index="''+index" v-else-if="item.type===3" class="menuitem">
           <div class="no">
              <router-link :to="{ name:item.menuname }" class="sff"  replace>
            {{item.menuname}}</router-link>
           </div>
        </el-menu-item>
      </div>
      
    </el-menu>
  </div>
</template>
<style scoped>
.no{
  margin-bottom: 10px;
  height: 20px;
}
.sff{
  font-size: 17px;
}
.ff{
  font-size: 15px;
}
.menuitem{
  height: 40px;
  /* text-align: center; */
}
.gg{
  text-align: start;
  font-size: 12px;
  color: #909090;
  font-weight: 500;
  margin-left: 15px;
  height: 20px;
}
.el-menu{
  background-color: rgb(241,241,241) ; 
}
.el-menu-item{
  background-color: rgb(241,241,241);
  padding: 0px;
}

li{
  padding: 0px;
}
ul{
  border: 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dedede
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
