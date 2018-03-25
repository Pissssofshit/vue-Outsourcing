<template>
  <div>
    <el-card height="100%">
      <el-row type="flex">
        <div class="showcase_img">
          <img :src="img" alt="Smiley face" width="100%" height="180px">
          <div class="showcase_meta">
            <span>查看详情</span>
          </div>
        </div>
      </el-row>
      <el-row>
        <el-row class="item-name">
          <el-col :span="24">
            <div style="font-size:16px ;font-weight:bold;">项目名称</div>
          </el-col>
        </el-row>
        <el-row class="item-context">
          <el-col :span="24">
            <div style="font-size:14px;color:#C0C0C0">项目简介:XXXXXXX</div>
          </el-col>
        </el-row>
      </el-row>
    </el-card>
  </div>
</template>
<style>
.el-card__body {
  /* position: relative;*/
  top: 0px;
  border: 0px;
  padding: 0px;
}

</style>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  props: [
    'img',
    'name',
    'proid',
    'state'
  ],
  created() {
    // this.realimg = 'background:' + 'url(' + this.img + ')' + ' no-repeat'
    // this.imgUrl = this.img
    // this.myName = this.name
    // if (typeof(this.img) === 'undefined') {
    //   this.img="https://edu-image.nosdn.127.net/BF967F2AE9D9F9379B3ADBBC6635C2A0.jpg?imageView&amp;thumbnail=510y288&amp;quality=100&amp;thumbnail=223x125&amp;quality=100"
    // }
  }
}

</script>
<style scoped>
.el-card {
  width: 35vh;
  height: 26vh;
  overflow: hidden;
  display: flex inline-flex;
  margin: 2vh;
}

.item-name {
  padding-top: 0.1vh;
  text-align: left;
  padding-left: 3vh;
}

.item-context {
  padding-top: 0.5vh;
  text-align: left;
  padding-left: 3vh;
}

.showcase_img .showcase_meta {
  width: 35vh;
  height: 26vh;
  z-index: 10;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*padding: 10% 0;*/
  text-align: center;
  background-color: rgba(178, 235, 242, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.showcase_img .showcase_meta:hover {
  transition: .8s;
  opacity: 1;
  background-color: rgba(178, 235, 242, 0.7);
}

.showcase_meta span {
  font-size: 14px;
  color: rgb(255,255,0);
  text-decoration: none;
}

</style>
