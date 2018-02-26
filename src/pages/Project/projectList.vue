<template>
  <div>
    <div>
      <span>我参与的项目 </span>
      <div class="projectlist">
        <div v-for="item in items" :key="item.id">
          <router-link :to="{name: '项目详情', params: {proid: item.id}}">
            <projectItem @click="(item.id)" :name="item.name" :img="item.logo" :proid="item.id"></projectItem>
          </router-link>
        </div>
        <div class="addproject">
          <projectItem @click="listenforaddclick">
            <div type="primary" class="el-icon-circle-plus icon"></div>
          </projectItem>
        </div>
      </div>
    </div>
    <div>
      <span>我管理的项目</span>
      <div class="projectlist">
        <div v-for="item in items" :key="item.id">
          <router-link :to="{name: '项目详情', params: {proid: item.id}}">
            <projectItem :name="item.name" :img="item.logo"></projectItem>
          </router-link>
        </div>
        <div class="addproject">
          <projectItem @click="listenforaddclick">
            <div type="primary" class="el-icon-circle-plus icon"></div>
          </projectItem>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.el-icon-circle-plus {
  color: #409EFF;
  padding: 0;
  border: 0;
  font-size: 30px;
}

span {
  margin-left: 5vh;
  display: block;
  width: 100%;
  text-align: start;
  font-size: 30px;
}

.projectlist {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

</style>
<script>
import ProjectItem from '../../components/Project/projectItem.vue'
// import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    listenforaddclick: function(proid) {
      //console.log(proid)
      console.log('im add project the add card works!')
      // this.$emit('changeBODY','Bodyproject',proid)
    }
  },
  components: {
    ProjectItem
  },
  created() {
    this.$http.get('/api/project').then(data => {
      this.items = data.body.data
    })
    console.log(this.userInfo)
    console.log(this.items)
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo'
    })
  }
}
// Vue.component('bodymain', {
//   methods: {
//     test: function() {}
//   }
// })

</script>
