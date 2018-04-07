<template>
    <div class="base">
        <h5 class="nowname">{{title}}</h5>
        <div v-for="(item,index) in data" :key="index">
            <menublock :menulist="item"></menublock>
        </div>
    </div>   
</template>
<script>

import Swiper from 'swiper'
import Menublock from './components/menu-block.vue'
export default {
  data(){
      return{
          
      }
  },
//    mounted:function(){
//            var menuButton = document.querySelector('.menu-button');
//     var swiper = new Swiper('.swiper-container', {
//       slidesPerView: 'auto',
//       initialSlide: 1,
//       // resistanceRatio: 0,
//       // slideToClickedSlide: true,
//       on: {
//         // init: function () {
//         //   var slider = this;
//         //   menuButton.addEventListener('click', function () {
//         //     if (slider.activeIndex === 0) {
//         //       slider.slideNext();
//         //     } else {
//         //       slider.slidePrev();
//         //     }
//         //   }, true);
//         // },
//         slideChange: function () {
//           var slider = this;
//           if (slider.activeIndex === 0) {
//             menuButton.classList.add('cross');
//           } else {
//             menuButton.classList.remove('cross');
//           }
//         },
//       }
//     });
    //   },
  props:[
      'title',
      'data'
  ],
  components:{
      Menublock
  }
}
</script>
<style scoped>

h5{
    font-size: 25px;
}
.base{
    text-align: start;
    width:230px;
}
.nowname{
    margin-top: 15px;
    margin-left: 15px;
}

</style>
