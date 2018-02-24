<template>
  <div class="wuyu">
      <projectheadr></projectheadr>
      <projectbody @event="test"></projectbody>
      <renwustate3></renwustate3>
  </div>
</template>


<script>
import Projectheadr from './bodyhead/body_header.vue'
import Projectbody from './bodybody/project_body'
import Renwustate3 from '../renwuseries/renwustate3.vue'
export default {
  components:{
      Projectheadr,
      Projectbody,
      Renwustate3
  },
  created(){
      $(function() {
            $('.tanchuang').css('top',''+document.documentElement.clientHeight/2+'px')
            $('.tanchuang').css('left',''+document.documentElement.clientWidth/2+'px')
        })
  },
  methods: {
      test: function(data){
          console.log('sssssssss')
          console.log(data)
      }
  }
}
</script>
<style scoped>
.wuyu{
    height: 100%;
}
</style>