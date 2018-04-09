<template>
  <div>
    <basiclayout :title=title :data=data></basiclayout>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Asidenav from '../../components/Nav/nav.vue'
import Basiclayout from '../../components/layout/basiclayout.vue'
export default {
  data() {
    return {
        media:document.body.clientWidth,
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
    Asidenav,
    Basiclayout
  },
  mounted: function() {
    if (this.media < 700) {
      console.log('excuted');
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

