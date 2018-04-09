<template>
  <div class="login_page" v-loading="loading">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>外包人员管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"><span></span></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
            <router-link :to="{name:'注册'}">
            <p class="register">注册</p>
            </router-link>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import MYURL from '../../const/MYURL.js'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      showLogin: false,
      loading: false,
    }
  },
  mounted() {
    // this.$router.push({ name: '首页' })
    // this.LoginAction({username:'123',userid:'asd'})
    // this.showLogin = true;
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo)
    if (userInfo != null) {
      this.$router.push({ name: '人脸验证' })
      this.LoginAction(userInfo)
    }
    if (this.$store.state.IsLogin === true) {
      this.$router.push({ name: '人脸验证' });
    }
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    ...mapActions(['LoginAction']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           this.loading = true
          this.$http.get(MYURL.URL_LOGIN, { name: this.loginForm.username, password: this.loginForm.password }).then(response => {
            if (response.body.correct === true) {
              console.log('验证通过')
              let userInfo = {
                username: this.loginForm.username,
                userid: response.body.userid
              }
              this.LoginAction(userInfo);
              console.log("login.vue:" + JSON.stringify(this.userInfo))
              localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
              // this.$router.push({ name: '首页' });
              this.$message.success('登录成功')
              this.$router.push({ name: '人脸验证' });
              this.loading = false
            } else {
              // console.log('账号密码出错');
              this.$message.error('用户名或密码错误')
              this.loading = false
            }
          })
        } else {
          // console.log('验证失败');
          // this.loading = false
          return false;
        }
      })
    }
  },
}

</script>
<style scoped>
.register{
  font-size: 10px;
  color: #909090;
}
.login_page {
  background-color: #324057;
  height: 100%;
}

.form_contianer {
  width: 400px;
  height: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -160px;
  /*margin-top: 160px;
  margin-left: 105px;*/
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
}

.submit_btn {
  width: 40%;
  font-size: 16px;
}

.manage_tip {
  padding-bottom: 10%;
  width: 100%;
  top: 100px;
  left: 0;
}

.manage_tip p {
  font-size: 34px;
}

.tip {
  font-size: 12px;
  color: red;
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}

.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}

</style>
