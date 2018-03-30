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
      title:'账号信息',
      data:[
              [{type:1,menuname:'个人信息'},
            {type:2,menuname:'账户信息'}]
          ]
    }
  },
  components: {
    Asidenav
  }
  
}

</script>

