<template>
  <div>
    <el-container　v-if="media > 700">
      <el-aside width="230px">
        <asidenav class="ss" :title="title" :data="data"></asidenav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-container v-else >
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide menu">
              <el-aside width="230px">
                <asidenav　class="menuitem" :title="title" :data="data"></asidenav>
              </el-aside>
            </div>
            <div class="swiper-slide content"></div>
          </div>
      </div>
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
import Swiper from 'swiper'
export default {
  data() {
    return {

      media:document.body.clientWidth, //如果屏幕大于700像素　就认为是pc端　，不然就是移动段了
      title:'项目管理',
          data:[
          // 里面设置了按照 命名路由，所以url只需要是router name就ok
              [
                {type:1,menuname:'任务'},
                {type:2,menuname:'任务总览',url:'任务总览'},
                {type:1,menuname:'筛选器'},
                {type:3,menuname:'我负责的任务',url:'我负责的任务'},
                {type:3,menuname:'我关注的任务',url:'我关注的任务'}
              ],
              [
                {type:3,menuname:'报表',url:'报表'},
                {type:3,menuname:'成员',url:'人员'},
                {type:3,menuname:'资料',url:'项目资料'},
                {type:3,menuname:'设置',url:'项目设置'},
                // {type:3,menuname:'个人',url:'项目个人'},
              ]
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
  },
  mounted: function() {
    // console.log('width'+width);

    if (this.media < 700 ) {
      console.log('excuted');
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide: 0,
        on: {
          slideChange: function() {
            
          },
        }
      });
    }

  }
}

</script>
<style scoped>
@media only screen and (max-width: 700px) {
  .menu {
    width: 320px;
    z-index: 1000;
  }
  .menuitem{
    background-color: rgb(241, 241, 241);
    /* z-index: 1000 !important; *//*为什么这个覆盖不了下面的按钮*/
  }
  .projectitem{
    width: 100% !important; 
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    /* z-index: 900; */
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
    background-color: rgb(241, 241, 241);
    position: absolute !important;
    z-index: 1000 !important;
  }
}
.ss{
  width: 230px;
}
.el-header{
  height: 500px !important;
}
.el-container{
  width: 100%;
  height: 100%;
}
</style>
