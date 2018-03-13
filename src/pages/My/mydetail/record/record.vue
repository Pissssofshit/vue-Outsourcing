<template>
  <div>
  <searchhead></searchhead>
    <recordbody></recordbody>
  </div>
</template>
<script>
import Searchhead from './recorddetail/searchhead.vue'
import Recordbody from './recorddetail/recordbody.vue'
export default {
  components:{
    Searchhead,
    Recordbody
  }
}
</script>
<style >
.cell{
  text-align: start;
}
</style>
