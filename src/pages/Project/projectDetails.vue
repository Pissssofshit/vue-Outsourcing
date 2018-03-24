<template>
  <div>
    <el-container>
      <el-row >
        <prodesp></prodesp>
      </el-row>
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
import SecondHeader from '../../components/Headr/Secondheadr.vue'
import Prodesp from '../../components/Prodesp/prodesp.vue'
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    SecondHeader,
    Prodesp
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


</style>
