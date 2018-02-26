<template>
  <div>
    <div class="rwlistgroup">
    <rwlist @click1="forclick1" @click2="forclick2" name="待处理任务"></rwlist>
    <rwlist @click1="forclick1" @click2="forclick2" name="进行中任务"></rwlist>
    <rwlist @click1="forclick1" @click2="forclick2" name="已完成任务"></rwlist>
    </div>
  </div>
</template>
<script>
import Rwlist from '../../renwuseries/rwlist.vue'
export default {
  methods:{
    forclick1: function(renwuid){
        console.log('i received the click!')
        this.$emit('click1',renwuid)
    },
    forclick2: function(){
      this.$emit('click2')
    }
  },
  components:{
      Rwlist
  },
  data() {
    return{
      te:1234
    }
  },
  created() {
  }
}
</script>

<style scoped>
.rwlistgroup{
    display: flex;
    margin-left: 5vh;
    margin-top: 3vh;
    height: 100%;
}
div{
    width: 100%;
    height: 100%;
}
</style>
