<template>
  <div class="base">
      <el-row>

          <el-col :span="12">
            <div class="imges"><img src="../../assets/logo.png" class="test"></div>
          </el-col>
          <el-col :span="12">
          <div class="text">
              <el-row>
                  <el-col :span="10"><h3 >人脸图像采集</h3></el-col>             
              </el-row>
              <el-row>
                  <el-col :span="8"><div class="owner">红软公司</div></el-col> 
              </el-row>
              <el-row class="desp">
                  <el-col :span="4">
              <div >项目简介</div>
                  </el-col>
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
}
.owner{
    text-align: start;
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
    height: 400px;
}
.text{
    height: 400px;
}
.base{
    background-color: white;
    margin-bottom: 20px;
}
</style>

