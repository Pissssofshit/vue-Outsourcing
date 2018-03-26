<template>
  <div>
    <el-container>
      <el-header>
        <second-header></second-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
//男儿到死心如血
//试看手，补天裂
import SecondHeader from '../../components/Headr/Secondheadr.vue'

import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    SecondHeader
  },
  created: function() {
    console.log(this.$route.params.projectId)
    this.IntoProjectDetailsAction(this.$route.params.projectId)
  },
  methods: {
    ...mapActions(['IntoProjectDetailsAction']),
  }
}

</script>
<style scoped>
.el-header{
  height: 500px !important;
}
</style>
