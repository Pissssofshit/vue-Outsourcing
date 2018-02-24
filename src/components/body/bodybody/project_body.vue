<template>
  <div>
    <div class="rwlistgroup">
    <rwlist></rwlist>
    <rwlist></rwlist>
    <rwlist></rwlist>
    </div>
  </div>
</template>
<script>
import Rwlist from '../../renwuseries/rwlist.vue'
export default {
  components:{
      Rwlist
  },
  data() {
    return{
      te:1234
    }
  },
  created() {
    this.$emit('event',this.te)
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
