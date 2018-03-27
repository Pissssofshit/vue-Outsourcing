<template>
  <div class="base">
      <el-row>
          <el-col :span="12">
            <div class="imges"><img src="../../../img/123.png" class="test"></div>
          </el-col>
          <el-col :span="12">
          <div class="text">
              <el-row>
                  <el-col :span="10"><h3 class="item">人脸图像采集</h3></el-col>             
              </el-row>
              <el-row>
                  <el-col :span="8"><div class="owner item">红软公司</div></el-col> 
              </el-row>
              <el-row class="desp item">
                  <el-col :span="20">

                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                      项目简介 项目简介
                  </el-col>
              </el-row>
              <el-row>
              <div >等等</div>
              </el-row>
          </div>
          </el-col>

      </el-row>
    </div>
</template>
<style scoped>
.desp{
    text-align: start;
    margin-top: 30px;
}
.owner{
    text-align: start;
    margin-top: 15px !important;
}
h3{
    font-size: 25px;
    text-align: start;
}
.imges{
    height: 400px;
}
img{
    src: url("../../assets/logo.png");
    width: 100%;
    height: 100%;
}
.item{
    margin-top: 30px;
    margin-right: 30px;
    margin-left: 30px;
}
.base{
    background-color: white;
    margin-bottom: 20px;
}
</style>

