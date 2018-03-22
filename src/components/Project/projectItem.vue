<template>
  <div >  
    <el-card :body-style="{ padding: '0px' }">
      <img :src="img" class="image">
      <div style="padding: 14px;">
        <span>项目简介</span>
        <div class="bottom clearfix">
          <time class="time">创建时间:+{{ currentDate }}</time>
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>

  </div>
</template>
<style>
.el-card__body {
  position: relative;
  top: 40%;
  border: 0px;
  padding: 0px;
}

</style>
<script>
export default {
  data() {
    return {
      realimg: 'sss',
      currentDate: new Date()
    }
  },
   methods: {
  },
  props: [
    'img',
    'name',
    'proid'
  ]
}

</script>
<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
