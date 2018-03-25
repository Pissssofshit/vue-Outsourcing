<template>
  <div id="app" class="au_page" v-loading="loading" element-loading-text="正在验证中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="contianer">
      <h1 style="color:white">进行人员确认</h1>
      <div class="media">
        <video class="cicrle" id="video" width="400px" height="400px" scr="" autoplay="true"></video>
        <canvas style="display:none" id="canvas" width="534" height="400"></canvas>
      </div>
      <el-button type="primary" @click="authentication()">开始验证</el-button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import FaceAPI from '../../const/FaceAPI.js'
export default {
  data() {
    return {
      context: "",
      canvas: "",
      face: [],
      loading: false,
    }
  },
  components: {
    // TopHeader
  },
  computed: {},
  created() {},
  mounted() {
    this.useCamera()
  },
  methods: {
    useCamera() {
      var video = document.getElementById('video');
      this.canvas = document.getElementById('canvas');
      // var btn = document.getElementById('login');
      this.context = this.canvas.getContext('2d');
      var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMeddia || navigator.msGetUserMedia);
      getUserMedia.call(navigator, { audio: false, video: true }, function(localMediaStream) {
        video.src = window.URL.createObjectURL(localMediaStream);
      }, function(e) {
        console.log("调用摄像头失败", e);
      });
    },
    authentication() {
      this.context.drawImage(video, 0, 0, 534, 400);
      // console.log(this.canvas.toDataURL('image/png'))
      console.log("API:" + FaceAPI.API_Key)
      console.log("Secret:" + FaceAPI.API_Secret)
      this.loading = true;
      this.$http.post(FaceAPI.Const_FaceDetect, {
        // image: this.canvas.toDataURL('image/png')
        api_key: FaceAPI.API_Key,
        api_secret: FaceAPI.API_Secret,
        image_base64: this.canvas.toDataURL('image/png').substr(22)
      }, { emulateJSON: true }).then((response) => {
        console.log(response.body)
        this.loading = false;
        this.$message({
          message: "检测出" + response.body.faces.length + "人",
          type: 'success'
        });
          this.$router.push({ name: '首页' })
      }, (error) => {
        this.$message.error('检测失败');
      });
    },

  }
}

</script>
<style scoped>
.cicrle {
  /* border-radius: 10em;*/
  -webkit-border-radius: 200px;
}

.au_page {
  background-color: #324057;
  height: 100%;
}

.contianer {
  width: 400px;
  height: 320px;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -200px;
  margin-top: -160px;
  /*margin-top: 160px;
  margin-left: 105px;*/
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  /*background-color: #fff;*/
}

</style>
