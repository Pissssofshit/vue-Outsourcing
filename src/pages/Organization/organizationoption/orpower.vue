<template>
  <div class="right_base">
    <div class="inner_base">
      <div class="title">团队权限</div>
      <powertable></powertable>
    </div>
  </div>
</template>
<style scoped>
.title{
  font-size: 20px;
  font-weight: 500;
  text-align: start;
}
.right_base{
  width: 1500px;
  height: 1000px;
  background-color: white;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
}
.inner_base{
  padding: 20px;
}
</style>

<script>
import Powertable from '../../../components/Power/powertable.vue'
export default {
  components:{
      Powertable
  }
}
</script>
