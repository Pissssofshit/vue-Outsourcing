<template>
  <div class="page">
    <div>
      <el-container>
        <div class="swiper-container" v-if="media < 700">
          <div class="swiper-wrapper">
            <div class="swiper-slide menu">
              <el-aside width="230px">
                <asidenav　class="menuitem" :title="title" :data="data"></asidenav>
              </el-aside>
            </div>
            <div class="swiper-slide content">
              <el-main>
                <div>
                  <div class="container-header">
                    <div class="title">进行中的项目</div>
                    <div class="right-content">
                      <router-link :to="{name: '新建项目'}">
                        <i class="el-icon-plus"></i>
                      </router-link>
                      <span class="item-title">新建项目</span>
                    </div>
                  </div>
                  <div class="projectlist" v-loading="startLoading">
                    <div class="projectitem" v-for="item in projectList.prepareProjectList" :key="item.projectId">
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
                    <div class="projectitem" v-for="item in projectList.startProjectList" :key="item.projectId">
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
                    <div class="projectitem" v-for="item in projectList.finishProjectList" :key="item.projectId">
                      <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
                        <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId"></projectItem>
                      </router-link>
                    </div>
                  </div>
                </div>
              </el-main>
            </div>
          </div>
        </div>
        <el-aside width="230px" v-if="media > 700">
          <asidenav :title="title" :data="data"></asidenav>
        </el-aside>
        <el-main v-if="media > 700">
          <div>
            <div class="container-header">
              <div class="title">进行中的项目</div>
              <div class="right-content">
                <router-link :to="{name: '新建项目'}">
                  <i class="el-icon-plus"></i>
                </router-link>
                <span class="item-title">新建项目</span>
              </div>
            </div>
            <div class="projectlist" v-loading="startLoading">
              <div class="projectitem" v-for="item in projectList.prepareProjectList" :key="item.projectId">
                <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
                  <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId" :state="item.projectState">
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
              <div class="projectitem" v-for="item in projectList.startProjectList" :key="item.projectId">
                <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
                  <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId" :state="item.projectState"></projectItem>
                </router-link>
              </div>
            </div>
          </div>
          <div>
            <div class="container-header">
              <div class="title">已完结的项目</div>
            </div>
            <div class="projectlist" v-loading="finishLoading">
              <div class="projectitem" v-for="item in projectList.finishProjectList" :key="item.projectId">
                <router-link :to="{name: '项目详情', params: {projectId: item.projectId}}">
                  <projectItem :name="item.projectName" :img="item.projectLogo" :proid="item.projectId" :state="item.projectState"></projectItem>
                </router-link>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import ProjectItem from '../../components/Project/projectItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import MYURL from '../../const/MYURL.js'
import Asidenav from '../../components/Nav/nav.vue'
import Swiper from 'swiper'
/*
data 
type 1
如任务 这类标题性质的菜单项（不导航）
type 2
具体项目 带图标
type 3
具体项目 不带图表
*/
export default {
  data() {
    return {
      media: document.body.clientWidth,
      title: '地狱咆哮',
      data: [
        [{ type: 2, menuname: '概览' },
          { type: 2, menuname: '数据中心', url: '数据中心' },
          { type: 2, menuname: '个人中心', url: '个人中心' }
        ],
        [{ type: 3, menuname: '团队配置中心', url: '团队配置中心' }]
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
    var self = this
    //吹吹
    setTimeout(function() {
      self.startLoading = false
    }, 1500)
    setTimeout(
      function() {
        self.prepareLoading = false
      }, 1600)
    setTimeout(
      function() {
        self.finishLoading = false
      }, 1800)

    // this.getStartProjectList()
    // this.getPrepareProjectList()
    // this.getFinishProjectList()
    // console.log("projectList.vue：" + JSON.stringify(this.$store.state.userInfo));
  },
  mounted: function() {
    // console.log('width'+width);

    if (this.media < 700) {
      console.log('excuted');
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide: 1,
        on: {
          slideChange: function() {},
        }
      });
    }

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
.right-content {
  z-index: 10;
}

@media only screen and (max-width: 700px) {
  .menu {
    width: 200px;
    z-index: 1000 !important;
  }
  .menuitem {
    background-color: rgb(241, 241, 241);
  }
  .projectitem {
    width: 100% !important;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    /* z-index: -1; */
    position: absolute;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-silde {
    width: 100%;
  }
  .el-aside {
    height: 100%;
    width: 200px !important;
    background-color: rgb(241, 241, 241);
  }
}

.page {
  min-height: 500px;
  height: 100%;
}

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
  /*
  width: 35vh;
  height: 26vh;*/
  overflow: hidden;
  margin: 2vh;
  /* 设置子DIV居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
