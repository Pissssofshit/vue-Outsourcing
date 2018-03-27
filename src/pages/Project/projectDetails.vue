<template>
  <div>
    <el-container>
      <el-aside>
        <asidenav :title="title" :data="data"></asidenav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
//男儿到死心如血
//试看手，补天裂
import Asidenav from '../../components/Nav/nav.vue'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      title:'项目管理',
          data:[
              [{type:0,menuname:'全部任务',url:'task'},
            {type:1,menuname:'任务'},
            {type:1,menuname:'筛选器'},
            {type:2,menuname:'我负责的任务'},
            {type:2,menuname:'我关注的任务'}],
              [{type:0,menuname:'报表'},
            {type:0,menuname:'成员',url:''},
            {type:0,menuname:'设置',url:''}]
          ],
    }
  },
  created: function() {
    console.log(this.$route.params.projectId)
    this.IntoProjectDetailsAction(this.$route.params.projectId)
  },
  methods: {
    ...mapActions(['IntoProjectDetailsAction']),
  },
  components:{
    Asidenav
  }
}

</script>
<style scoped>
.el-header{
  height: 500px !important;
}
.el-container{
  width: 100%;
  height: 100%;
}
</style>
