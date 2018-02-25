<template>
  <div class="wuyu">
      <projectheadr></projectheadr>
      <projectbody @click1="forclick1"></projectbody>
      <renwustate3 :dialogVisible="dialogvisible" @close1="forclose1"
      :value2="sss">
          <div slot="canyuzhe">黄某某</div>
         >
      </renwustate3>
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
      forclick1: function(data){
          console.log('sssssssss')
          this.dialogvisible=true
      },
      forclose1: function(){
          console.log('forclose1 bodyproject')
          this.dialogvisible=false
      }
  },
  data(){
      return {
          dialogvisible: false,
          sss: '2018-02-06'
      }
  }
}
</script>
<style scoped>
.wuyu{
    height: 100%;
}
</style>