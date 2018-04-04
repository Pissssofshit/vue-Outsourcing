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
              <DropdownItem>死亦为鬼雄</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <a href="javascript:void(0)">
              <Avatar icon="person" />
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>个人中心</DropdownItem>
              <DropdownItem>登出</DropdownItem>
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
    loginOut() {
      console.log("loginOut")
      this.ResetStateAction();
      localStorage.removeItem('userInfo')
      // this.$store.commit('ResetState')
      this.$router.push({ name: '登录' })
    },
    toIndex() {
      this.$router.push({ name: '首页' })
    }
  }
}

</script>
<style scoped>
.myheader {
  /*display: flex;*/
  flex: 0 0 auto;
  /*list-style: none;*/
  /*display: -webkit-box;*/
  /*display: -webkit-flex;*/
  /*-webkit-flex-flow: row nowrap;*/
  /*justify-content: space-around;*/
  /*align-content: flex-start;*/
  /*align-items: flex-start;*/
  /*background: #ccc;  */
  /*height: 100%  */
}

.header>ul div {
  padding-left: 20px;
}

.header_myleft {
  padding-left: 15px;
      float: left;
    line-height: 48px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
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
  font-size: 25px;
  color: #fff;
  margin-right: 20px;
  vertical-align: middle;
  font-family: markprolight;
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
