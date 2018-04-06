<template>
  <div class="page">
    <div class="page_context">
      <div class="register_title">
        <p>注册</p>
      </div>
      <div class="register_context">
        <el-form :rules="rules" ref="form" :model="form">
          <el-form-item label="用户名" size="mediunm" prop="account">
            <el-input class="input" v-model="form.zhanghao"></el-input>
          </el-form-item>
          <el-form-item label="密码" size="mediunm" prop="password">
            <el-input class="input" v-model="form.mima"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" size="mediunm" prop="email">
            <el-input class="input" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" type="primary" @click="onSubmit('ruleForm')">下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn {
  /*margin-right: 80px;*/
}

.page {
  background-color: #324057;
  /*margin:0;*/
  /*width:auto;*/
  height: 100%;
}

.register_context {
  margin-top: 5px;
  /*font-size: 28px;*/
}

.page_context {
  border-radius: 5px;
  position: absolute;
  width: 400px;
  height: 430px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
}

.register_title {
  /*padding-top: 1%;*/
  padding-bottom: 2%;
  width: 100%;
  top: 80px;
  left: 0;
  border-bottom: 1px solid #e6e9ec;
}

.register_title p {
  font-size: 24px;
}

</style>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      imageUrl: '',
      yizhi: false,
      form: {
        account: '',
        password: '',
        email: ''
      },
      rules: {
        account: [
          { required: true, message: '用户名不能为空' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'change' },
           { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }

      return isJPG && isLt2M;
    },
    onSubmit() {
      console.log('submit!');
    },
    checkmima() {
      console.log('sss')
      console.log(this.form.mima instanceof String)

      console.log(this.form.repeatmima)
      if (this.form.mima.toString() != this.form.repeatmima.toString()) {
        console.log('yizhi is true')
        this.yizhi = true
      } else {
        this.yizhi = false
        console.log('yizhi is false')
      }
    }
  },
  watch: {}
}

</script>
