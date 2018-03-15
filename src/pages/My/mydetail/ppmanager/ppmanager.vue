<template>
  <div>
  <managerhead></managerhead>
    <managerbody></managerbody>
  </div>
</template>
<script>
import Managerhead from './ppmanagerdetail/managerhead.vue'
import Managerbody from './ppmanagerdetail/managerbody.vue'
export default {
  components:{
    Managerhead,
    Managerbody
  }
}
</script>
<style >
.cell{
  text-align: start;
}
</style>
