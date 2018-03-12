<template>
  <div>
    <div>
      <span>我参与的项目 </span>
      <div class="projectlist">
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
      <div class="projectlist">
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
    </div>
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
      item2: []
    }
  },
  components: {
    ProjectItem
  },
  created() {
    this.JoinProjectListAction(this.$store.state.userInfo.userid);
    this.ManageProjectListAction(this.$store.state.userInfo.userid);
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
    ])
  }
}

</script>
<style scoped>
.el-icon-circle-plus {
  color: #409EFF;
  padding: 0;
  border: 0;
  font-size: 30px;
}

span {
  margin-left: 5vh;
  display: block;
  width: 95%;
  text-align: start;
  font-size: 30px;
}

.projectlist {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

</style>
