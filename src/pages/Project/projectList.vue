<template>
  <div>
    <el-container>
      <el-aside>
        <asidenav :title="title" :data="data"></asidenav>
      </el-aside>
      <el-main>
    <div>
      <div class="container-header">
        <div class="title">进行中的项目</div>
        <div class="right-content">
          <i class="el-icon-plus"></i>
          <span class="item-title">新建项目</span>
        </div>
      </div>
      <div class="projectlist" v-loading="startLoading">
        <div v-for="item in projectList.prepareProjectList" :key="item.projectId">
          <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
            <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId">
            </projectItem>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <div class="container-header">
        <div class="title">准备中的项目</div>
      </div>
      <div class="projectlist" v-loading="prepareLoading">
        <div v-for="item in projectList.startProjectList" :key="item.projectId">
          <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
            <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId"></projectItem>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <div class="container-header">
        <div class="title">已完结的项目</div>
      </div>
      <div class="projectlist" v-loading="finishLoading">
        <div v-for="item in projectList.finishProjectList" :key="item.projectId">
          <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
            <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId"></projectItem>
          </router-link>
        </div>
      </div>
    </div>
      </el-main>
    </el-container>
    
  </div>
</template>
<script>
import ProjectItem from '../../components/Project/projectItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import MYURL from '../../const/MYURL.js'
import Asidenav from '../../components/Nav/nav.vue'
export default {
  data() {
    return {
      title:'地狱咆哮',
          data:[
              [{type:1,menuname:'概览',url:''},
            {type:1,menuname:'数据中心',},
            {type:1,menuname:'个人中心'}]
          ],
      item1: [],
      item2: [],
      startLoading: true,
      prepareLoading: true,
      finishLoading: true,
    }
  },
  components: {
    ProjectItem,
    Asidenav
  },
  created: function() {
    this.getStartProjectList()
    this.getPrepareProjectList()
    this.getFinishProjectList()
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
      'StartProjectListAction',
      'PrepareProjectListAction',
      'FinishProjectListAction',
      'AddPrepareProjectListAction',
      'IntoProjectDetailsAction',
    ]),
    async getStartProjectList() {
      await this.StartProjectListAction(this.$store.state.userInfo.userid)
      this.startLoading = false
    },
    async getPrepareProjectList() {
      await this.PrepareProjectListAction(this.$store.state.userInfo.userid)
      this.prepareLoading = false;
    },
    async getFinishProjectList() {
      await this.FinishProjectListAction(this.$store.state.userInfo.userid)
      this.finishLoading = false;
    },
  }
}

</script>
<style scoped>
.el-icon-plus {
  padding: 0;
  border: 0;
  font-size: 15px;
  font-weight: bold;
}

.item-title {
  line-height: 15px;
  padding-left: 1px;
  font-size: 15px;
}

.container-header {
  width: 100%;
  margin-left: 2vh;
  padding-bottom: 5px;
  border-bottom: 1px solid #dedede;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}

.title {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
}

.right-content {
  -webkit-align-self: center;
  align-self: center;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  padding-right: 3vh;
}

span {
  margin-left: 2vh;
  display: block;
  width: 95%;
  text-align: start;
  font-size: 25px;
}

.projectlist {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.el-card {
  width: 35vh;
  height: 26vh;
  overflow: hidden;
  margin: 2vh;
  /* 设置子DIV居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
