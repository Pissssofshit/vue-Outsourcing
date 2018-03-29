<template>
  <div>
    <div class="basef">
      <el-row class="firstline">
        <div class="taskid">#32</div>
        <div></div>
      </el-row>
      <el-row>
        <div class="tasktitle">【示例任务】项目角色入口做权限判断</div>
      </el-row>
      <el-row class="peijian">
        <peijian firsttext="1412143367@qq.com" secondtext="负责人" url="../../assets/logo.png"></peijian>
        <peijian firsttext="挂起" secondtext="当前状态"></peijian>
        <peijian firsttext="普通" secondtext="优先级"></peijian>
      </el-row>
      <el-row>
        <div class="tags">任务描述</div>
      </el-row>
      <el-row>
        <el-input class="www"
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
      </el-row>
  </div>
  <div>
    <el-row>
      <div class="bigtag">基础信息</div>
    </el-row>
    <el-row class="bingpai">
      <div class="tag">创建者</div>
      <div class="content">1412143367@qq.com</div>
    </el-row>

    <el-row class="bingpai">
      <div class="tag">所属项目</div>
      <div class="content">红软外包平台</div>
    </el-row>

    <el-row class="bingpai">
      <div class="tag">任务创建时间</div>
      <div class="content">2018年1月1日</div>
    </el-row>
  </div>
  </div>
</template>
<style scoped>
.bigtag{
  font-size: 15px;
  font-weight: 500;
  text-align: start;
  margin-left: 15px;
  margin-top: 20px;
}
.bingpai{
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.tag{
  width: 140px;
  text-align: start;
  margin-right: 30px;
  font-size: 14px;
}
.content{
  font-size: 14px;
}
.www{
  width: 400px;
}
.tags{
  font-size: 15px;
  font-weight: 500;
  text-align: start;
  margin-top: 15px;
  margin-bottom: 15px;
}
.tasktitle{
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
  text-align: start;
}
.basef{
  margin-left: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
}
.firstline{
  margin-top: 15px;
}
.taskid{
  font-size: 14px;
  text-align: start;
}
.peijian{
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
<script>
import Peijian from './peijian.vue'
export default {
  data(){
    return{
      textarea:''
    }
  },
  components:{
    Peijian
  }
}
</script>

