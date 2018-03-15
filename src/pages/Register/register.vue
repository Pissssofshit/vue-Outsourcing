<template>
  <div>
      <el-form ref="form" :model="form" label-width="100px">
  <el-form-item label="账号">
      <el-col :span="10">
    <el-input v-model="form.zhanghao"></el-input>
      </el-col>
  </el-form-item>
  <el-form-item label="密码">
      <el-col :span="10">
    <el-input v-model="form.mima"></el-input>
      </el-col>
  </el-form-item>
  <el-form-item label="重复密码">
      <el-col :span="10">
    <el-input v-model="form.repeatmima" @blur="checkmima">
    </el-input>
    <div v-if="yizhi" class="waring"> 两次密码不一致</div>
      </el-col>
  </el-form-item>
  <el-form-item label="所属公司">
      <el-col :span="10">
    <el-input v-model="form.company"></el-input>
      </el-col>
  </el-form-item>
  <el-form-item label="参与项目">
      <el-col :span="10">
    <el-input v-model="form.project"></el-input>
      </el-col>
  </el-form-item>
  <el-form-item label="邮箱验证">
      <el-col :span="10">
    <el-input v-model="form.email"></el-input>
      </el-col>
  </el-form-item>
  <el-form-item label="身份证上传">
      <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
  <el-form-item>
    <el-button :plain="true" type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button :plain="true" @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
      </el-form>

  </div>
</template>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.warning{
    color: red;
}
.el-form{
    width: 800px;
    margin: 0 auto;
}
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: '',
        yizhi: false,
        form: {
          zhanghao: '',
          mima: '',
          repeatmima:'',
          company: '',
          project: '',
          emial: ''
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
      }
    ,
      onSubmit() {
        console.log('submit!');
      },
      checkmima(){
          console.log('sss')
          console.log(this.form.mima instanceof String)

          console.log(this.form.repeatmima)
          if(this.form.mima.toString()!=this.form.repeatmima.toString()){
              console.log('yizhi is true')
              this.yizhi=true
          }else{
              this.yizhi=false
              console.log('yizhi is false')
          }
      }
    },
    watch:{
    }
  }
</script>