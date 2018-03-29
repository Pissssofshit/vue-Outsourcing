<template>
    <div class="base">
        <h5 class="nowname">{{title}}</h5>
        <div v-for="(item,index) in data" :key="index">
            <menublock :menulist="item"></menublock>
        </div>
    </div>
</template>
<script>
import Menublock from './components/menu-block.vue'
export default {
  data(){
      return{
          
      }
  },
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
