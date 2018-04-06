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
/*权限这个事情是这样的,
    我们的最终目的是 使得重要的资料不外泄,
    那么 我们使 一些团队能够获得这部分的权限 我们设置这个团队的权限为最高级
    这个团队为了保证资料的安全,自己在团队内部也设置权限,
    当然,我们有时候不能信任整个团队 但能信任某个人
    所以我们可以设置 某个人的权限为高级, 其所在团队的权限依旧为原本的.恩,就酱
*/
import { mapState, mapGetters, mapActions } from 'vuex'
import Asidenav from '../../components/Nav/nav.vue'
export default {
  data() {
    return {
        email:'1412143367@qq.com',
        role:'manager',
        username:'1412143367@qq.com',
      title:'团队配置中心',
      data:[
              [
                  {type:1,menuname:'信息'},
                  {type:2,menuname:'团队信息',url:"团队信息"}
              ],
              [
                  {type:1,menuname:'成员'},
                  {type:2,menuname:'团队成员',url:"团队成员"},
                  {type:2,menuname:'组织架构',url:"组织架构"},
                  {type:2,menuname:'用户组',url:"用户组"},
              ],
              [
                  {type:1,menuname:'权限',url:""},
                  {type:2,menuname:'团队权限',url:"团队权限"}
              ]
          ]
    }
  },
  components: {
    Asidenav
  }
  
}

</script>

