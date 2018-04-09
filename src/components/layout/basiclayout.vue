<template>
    <div>
    <el-container v-if="media > 700">
      <el-aside width="230px">
        <asidenav :title="title" :data="data"></asidenav>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
   <el-container v-else>
        <div class="swiper-container ggg" >
          <div class="swiper-wrapper" >
            <div class="swiper-slide menu" style="width:230px">
              <el-aside>
                <asidenav　class="menuitem" :title="title" :data="data"></asidenav>
              </el-aside>
            </div>
            <div class="swiper-slide content">
                <el-main>
          <router-view></router-view>
      </el-main>
            </div>
          </div>
        </div>
   </el-container>
    </div>
</template>
<style scoped>
@media screen and (max-width: 700) {
    .swiper-wrapper{
        width: 50% !important;
    }
}
</style>

<script>
import Asidenav from '../Nav/nav.vue'
import Swiper from 'swiper'
export default {
  data(){
      return{
        media:document.body.clientWidth
      }
  },
  props:[
      'title',
      'data'
  ],
  components:{
      Asidenav,
      Swiper    
  },
  mounted: function() {
    if (this.media < 700) {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide: 1,
        on: {
          slideChange: function() {
          },
        }
      });
    }

  }
}
</script>
