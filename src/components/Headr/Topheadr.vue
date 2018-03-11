<template>
  <div class="header_">
    <div class="te">
      <div class="search_">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" class="el-icon-search icon">搜索</el-button>
      </div>
    </div>
    <div type="primary" class="el-icon-circle-plus icon"></div>
    <div class="te2">
      <ul class="icon">
        <li><router-link to="/my">我的</router-link></li>
        <li>日历</li>
        <li>
          <el-badge value="12" class="item">
            <div class="el-icon-bell"></div>
          </el-badge>
        </li>
        <li @click="loginOut()">
          <el-button type="text">登出</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations ,mapActions} from 'vuex'
export default {

  data() {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions(['ResetStateAction']),
    loginOut() {
      console.log("loginOut")
      this.ResetStateAction();
      localStorage.removeItem('userInfo')
      // this.$store.commit('ResetState')
      this.$router.push({ name: '登录' })
    }
  }
}

</script>
<style scoped>
.te2 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.te {
  position: relative;
  left: 5vw;
}

.search_ {
  height: 80%;
  display: flex;
  max-height: 40px;
}

.el-icon-circle-plus {
  position: relative;
  left: 10vw;
  color: #409EFF;
  padding: 0;
  border: 0;
  font-size: 30px;
}

.header_ {
  min-height: 50px;
  max-height: 60px;
  width: 100%;
  height: 20%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: pink;
}

ul {
  display: flex;
  list-style: none;
  justify-content: center;
  margin-right: 3vw;
}

ul li {
  margin-left: 20px;
}

.icon {
  font-size: 20px;
}

</style>
