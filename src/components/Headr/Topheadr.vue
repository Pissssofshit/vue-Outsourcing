<template>
  <!-- <div class="header_"> -->
  <div class="header">
    <Menu mode="horizontal" theme="dark" style="menu">
      <div class="myheader">
        <div class="header_myleft" @click="toIndex">
          <a href="#/index/project-list">
        <span class="topbar-product-name">Index</span>
        </a>
        </div>
        <div class="header_right">
          <Dropdown>
            <a href="javascript:void(0)">
             <img src="../../static/help.png"  />
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>联系我们</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <a href="javascript:void(0)">
              <img src="../../static/tool.png"  />
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>生当为人杰</DropdownItem>
              <!-- <DropdownItem>死亦为鬼雄</DropdownItem> -->
            </DropdownMenu>
          </Dropdown>
          <Dropdown @on-click="HandlePersonCommand">
            <Avatar icon="person" />
            <DropdownMenu slot="list">
              <DropdownItem name='个人中心'>个人中心</DropdownItem>
              <DropdownItem name='登出'>登出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </Menu>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {

  data() {
    return {
      input: '',
    }
  },
  methods: {
    ...mapActions(['ResetStateAction']),
    toIndex() {
      this.$router.push({ name: '首页' })
    },
    HandlePersonCommand(command) {
      if (command === '登出') {
        this.loginOut()
      } else if (command === '个人中心') {
         this.$router.push({ name: '个人中心' })
      }
    },
    loginOut: function(event) {
      console.log("loginOut")
      this.ResetStateAction();
      localStorage.removeItem('userInfo')
      // this.$store.commit('ResetState')
      this.$router.push({ name: '登录' })
    },
  }
}

</script>
<style scoped>
.myheader {

  flex: 0 0 auto;
}

.header>ul div {
  padding-left: 20px;
}

.header_myleft {
  padding-left: 15px;
  float: left;
  line-height: 50px;
  /*display: -webkit-flex;*/
  /*display: flex;*/
  /*-webkit-align-items: center;*/
  /*align-items: center;*/
}

.header_right {
  float: right;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  /*display: flex;*/
  /*float: right;*/
  /*width: 40%;*/
  padding-right: 35px;
}

.topbar-product-name {
  font-size: 30px;
  color: #fff;
  margin-right: 20px;
  /*vertical-align: middle;*/
  font-family: markprolight;
  margin-top: 10px;
}

a>img {
  text-align: center;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}

.header>ul {
  /*display:*/
}

</style>
