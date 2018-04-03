<template>
  <div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide menu">Menu slide</div>
			<div class="swiper-slide content">
				Content slide
			</div>
		</div>
	</div>
</template>
<style scoped>
		html, body {
			position: relative;
			height: 100%;
		}
		body {
			background: #eee;
			font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
			font-size: 14px;
			color: #000;
			margin: 0;
			padding: 0;
		}
		.swiper-container {
			width: 100%;
			height: 100%;
		}
		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fff;

			/* Center slide text vertically */
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
		}
		.menu {
			min-width: 100px;
			width: 70%;
			max-width: 320px;

			background-color: #2C8DFB;
			color: #fff;
		}
		.content {
			width: 100%;
		}
		
	</style>
<script>
import Swiper from 'swiper'
  export default {
    name: 'carrousel',
      mounted:function(){
	//   var menuButton = document.querySelector('.menu-button');
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      initialSlide: 1,
    //   resistanceRatio: 0,
    //   slideToClickedSlide: true,
      on: {
    //     init: function () {
    //       var slider = this;
    //       menuButton.addEventListener('click', function () {
    //         if (slider.activeIndex === 0) {
    //           slider.slideNext();
    //         } else {
    //           slider.slidePrev();
    //         }
    //       }, true);
    //     },
        slideChange: function () {
		  var slider = this;
          if (slider.activeIndex === 0) {
			
				  var sss = document.querySelector('.content');
					 sss.style.width="800px";
          } else {
				  var sss = document.querySelector('.content');
				  sss.style.width="100%";			 
          }
        },
      }
    });
      }
    }
 
  
</script>