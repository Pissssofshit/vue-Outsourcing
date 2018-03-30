<template>
  <div class="rightbase">
              <div class="inner">
                  <div>
                      <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item class="title"  :to="{ path: 'main' }">账号信息</el-breadcrumb-item>
                            <el-breadcrumb-item class="title"  :to="{ path: 'editemail' }">修改邮箱</el-breadcrumb-item>
                        </el-breadcrumb>
                  </div>
                 <el-alert
                    v-if="alertshow"
                    type="warning"
                    title=""
                    description="为确保是您本人操作 请输入账号密码以继续"
                    show-icon
                    :closable=false>
                </el-alert>
                <el-steps :active="activestep" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="验证身份" ></el-step>
                    <el-step title="设置新邮箱" ></el-step>
                </el-steps>
                <el-tabs v-model="activeName">
                    <el-tab-pane label="" name="first">
                        <div class="fff">
                            <div>账号密码</div>
                            <el-input v-model="pwd" placeholder="请输入你的密码"></el-input>
                        </div>
                        <el-row class="fortest">   
                        <el-button class="nextstep" @click="dealnext">下一步</el-button>   
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="" name="second">
                        <div class="fff">
                            <div>新邮箱地址</div>
                            <el-input v-model="pwd" placeholder="请输入你的密码">
                            </el-input>
                            <el-button slot="suffix" class="sende">发送验证码</el-button>
                        </div>
                        <div class="fff">
                            <div>验证码</div>
                            <el-input v-model="yzm" placeholder="请输入验证码">
                            </el-input>
                        </div>
                        <el-row class="fortest">   
                        <el-button class="nextstep" @click="dealsubmit">提交</el-button>   
                        </el-row>
                        
                    </el-tab-pane>
                </el-tabs>
              </div>
          </div>
</template>
<script>
export default {
  data() {
    return {
        alertshow: true,
        activeName: 'first',
        email:'1412143367@qq.com',
        role:'manager',
        username:'1412143367@qq.com',
        pwd: '',
        yzm: '',
        activestep: 1
    }
  },
  methods:{
      dealsubmit: function(){
          if(this.yzm===''){
               this.$message('验证码不正确');
          }
      },
      dealnext:function(){
          if(this.pwd===''){
               this.$message('你没填密码呢！');
          }else if(this.pwd!='123'){
              this.$message('密码错误');
          }
          else{
              this.alertshow=false;
              this.activestep=2;
              this.activeName='second';
              this.pwd='';
          }
      }
  }
}
</script>

<style scoped>
.sende{
    width: 100px;
    text-align: start;
}
.fortest{
    display: flex;
    justify-content: flex-start;
}
.fff{
    display: flex;
    align-items: baseline;
    margin-bottom: 30px;
}
.fff>div{
    width:120px;
    font-size: 14px;
    text-align: start;
}
.fff> .el-input{
    width: 210px;
    height: 25px;
    display: flex;
    justify-content: flex-end;
}
.el-alert{
    margin-top: 15px;
    margin-bottom: 15px;
}
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
    background-color: black;
}
.rightbase{
    width: 1200px;
    height: 1000px;
    background-color: white;
    box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
    margin-top: 15px;
    padding: 20px;
}
</style>