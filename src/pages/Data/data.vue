<template>

  <div>
    <el-container>
      <el-aside width="230px">
        <asidenav :title="title" :data="data"></asidenav>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Asidenav from '../../components/Nav/nav.vue'
export default {
  data() {
    return {
        email:'1412143367@qq.com',
        role:'manager',
        username:'1412143367@qq.com',
      title:'数据中心',
      data:[
              [{type:2,menuname:'数据图表'}]
          ]
    }
  },
  components: {
    Asidenav
  }
  
}

</script>

