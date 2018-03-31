<template>
  <div class="chunquchunhuilaihuaxiehuahuikai">
      <div class="content">
          <div class="title">organization info</div>
          <div class="group1">
            <div class="first">orname</div>
            <div class="second">
                <el-input v-model="ss" placeholder="please enter the or name"></el-input>
            </div>
          </div>
          <div class="group1">
            <div class="first">orlogo</div>
            <div class="second">
                 <img   :src="imageUrl" class="avatar">                 
            </div>
          </div>
           <el-row class="ass">
               <el-upload
                    class="uploader"
                    :headers="myheaders"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <el-button>upload logo</el-button>
                </el-upload>
           </el-row>
           
      </div>
  </div>
</template>
<style scoped>
.uploader{
    margin-left: 120px;
    margin-top: 15px;
}
.ass{
    display: flex;
}
img{
    width: 200px;
    height: 30px;
    background-color: black;
}
.group1{
    display: flex;
    align-items: baseline;
    margin-top: 20px;
    color: #303030; 
}
.first{
    width: 120px;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    text-align: start;
}

.title{
    font-size: 20px;
    font-weight: 500;
    text-align: start;
}
.content{
    padding: 20px;
}
.chunquchunhuilaihuaxiehuahuikai{
    width: 1500px;
    height: 1000px;
    margin-top: 20px;
    background-color: white;
}
</style>

<script>
  export default {
    data() {
      return {
          ss:'healroar',
        imageUrl: '../../../../assets/logo.png',
        myheaders: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl);
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
    }
  }
</script>