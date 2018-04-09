<template>
  <div class="rightbase">
              <div class="inner">
                  <div>
                      <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item class="title"  :to="{ path: 'main' }">账号信息</el-breadcrumb-item>
                        </el-breadcrumb>
                  </div>
                  <div class="despgroup">
                      <div class="desp1">头像</div>
                      <div class="desp2 p-logo">
                          <img src="../../../../static/1.jpg">
                      </div>
                  </div>
                  <div class="despgroup">
                      <div class="desp1">用户名</div>
                      <div class="desp2">
                          <el-input v-model="username"></el-input>
                      </div>
                  </div>

                  <div class="despgroup">
                      <div class="desp1">role</div>
                      <div class="desp2">
                          <el-input v-model="role"></el-input>
                      </div>
                  </div>
                  <div class="despgroup">
                      <div class="desp1">email</div>
                      <div class="desp2">
                          {{email}}
                          <router-link class="alink" to="editemail">更改邮箱绑定</router-link>
                      </div>
                  </div>
                   <div class="despgroup">
                       <div class="desp1">密码</div>
                          <router-link class="alink" to="editpwd">更改密码</router-link>
            
                  </div>
              </div>
          </div>
</template>
<script>
export default {
  data() {
    return {
        email:'1412143367@qq.com',
        role:'manager',
        username:'1412143367@qq.com',
    }
  }
}
</script>

<style scoped>
.alink{
    color: #72ACE3;
}
.title{
    font-size: 20px !important;
    text-align: start;
}
.despgroup{
    margin-top: 15px;
}
.inner{
    position: relative;
    /* top */
}
.despgroup{
    display: flex;
}
.desp1{
    width: 120px;
    text-align: start;
    font-size: 14px;
    font-weight: 500;
}
.p-logo{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    /* background-color: black; */
    overflow: hidden;
}
.rightbase{
    width: 1200px;
    height: 1000px;
    /* height: 100%; */
    background-color: white;
    box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
    margin-top: 15px;
    padding: 20px;
}
</style>