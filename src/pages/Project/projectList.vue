<template>
  <div>
    <el-container>
      <el-row>
        <el-col :span="24"><div id="test">推荐项目</div></el-col></el-row>
    <el-row>
      <el-col :span="24">
      <div class="projectlist" v-loading="joinLoading">
        
        <div v-for="item in projectList.joinProjectList" :key="item.projectId">
          <!-- <el-col :span="8"> -->
          <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
            <projectItem @click="(item.projectId)" :name="item.projectName" :img="item.projectLogo" :proid="item.projectId"></projectItem>
          </router-link>
          <!-- </el-col> -->
        </div>
        
      
    </div>
      </el-col>
    </el-row>
    </el-container>
    <!-- <div>
      <span>我参与的项目 </span>
      <div class="projectlist" v-loading="joinLoading">
        <div v-for="item in projectList.joinProjectList" :key="item.projectId">
          <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
            <projectItem @click="(item.projectId)" :name="item.projectName" :img="item.projectLogo" :proid="item.projectId"></projectItem>
          </router-link>
        </div>
        <div class="addproject" @click='AddJoinProjectListAction()' style="cursor:pointer">
          <projectItem>
            <div type="primary" class="el-icon-circle-plus icon"></div>
          </projectItem>
        </div>
      </div>
    </div>
    <div>
      <span>我管理的项目</span>
      <div class="projectlist" v-loading="managerLoading">
        <div v-for="item in projectList.managerProjectList" :key="item.projectId">
          <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
            <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId"></projectItem>
          </router-link>
        </div>
        <div class="addproject" @click='AddManageProjectListAction()' style="cursor:pointer">
          <projectItem>
            <div @click='dialogFormVisible = true' type="primary" class="el-icon-circle-plus icon"></div>
          </projectItem>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import ProjectItem from '../../components/Project/projectItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import MYURL from '../../const/MYURL.js'

export default {
  data() {
    return {
      item1: [],
      item2: [],
      joinLoading: true,
      managerLoading: true,
    }
  },
  components: {
    ProjectItem
  },
  created: function() {
    this.getJoinProjectList()
    this.getManagerProjectList()
    // console.log("projectList.vue：" + JSON.stringify(this.$store.state.userInfo));
  },
  mounted() {
    // console.log("projectList.vue：" + JSON.stringify(this.projectList));
  },
  computed: {
    ...mapState([
      'userInfo',
      'projectList'
    ]),
  },
  methods: {
    ...mapActions([
      'ProjectListAction',
      'JoinProjectListAction',
      'ManageProjectListAction',
      'AddJoinProjectListAction',
      'AddManageProjectListAction',
      'IntoProjectDetailsAction',
    ]),
    async getJoinProjectList() {
      await this.JoinProjectListAction(this.$store.state.userInfo.userid)
       console.log("得到JoinList")
      this.joinLoading = false
    },
    async getManagerProjectList() {
      await this.ManageProjectListAction(this.$store.state.userInfo.userid)
      console.log("得到ManagerList")
      this.managerLoading = false;
    },
  }
}

</script>
<style scoped>


</style>
