<template>
  <div class="renwu">
    <div class="black_overlay" @click="closetanchuang"></div>
    <div class="white_content">
      <div class="title">
        <el-checkbox label="" name="type"></el-checkbox>
        <span>解决移动端界面布局问题</span>
      </div>
      <div class="yaosu">
        <div class="canyuzhemen">
          <div class="canyuzhe">
            黄枭帅
          </div>
        </div>
        <div class="deadline">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="gaiyao">
        <div class="shuoming">
          <div>任务说明</div>
          <el-alert :closable="false" title="我是任务说明我是任务说明我是任务说明" type="info">
          </el-alert>
        </div>
        <div>
          <div class="youxianji">
            <div>优先级</div>
            <el-tag>普通</el-tag>
          </div>
          <div></div>
        </div>
      </div>
      <div class="zirenwus">
        <div>子任务</div>
        <div class="zirenwu"></div>
        <div class="tianjiazirenwu">
          <div type="primary" class="el-icon-circle-plus icon"></div>
          <div>添加子任务</div>
        </div>
      </div>
      <div class="dongtai">
        <div>这里放关于此任务的动态。。。有空做</div>
      </div>
    </div>
  </div>
</template>
<style>
.zirenwus {
  text-align: start;
  border-bottom: 1px solid black;
}

.tianjiazirenwu {
  display: flex;
}

.el-icon-circle-plus {
  color: #409EFF;
}

.gaiyao {
  border-bottom: solid black 1px;
}

.youxianji {
  display: flex;
}

.shuoming {
  display: flex;
}

.title {
  text-align: start;
  font-size: 20px;
}

.yaosu {
  display: flex;
  border-bottom: black 1px solid;
  align-items: baseline;
}

.black_overlay {
  display: block;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1001;
  -moz-opacity: 0.8;
  opacity: .80;
  filter: alpha(opacity=80);
}

.white_content {
  display: block;
  position: absolute;
  top: 20%;
  left: 20%;
  width: 50%;
  height: 60%;
  background-color: white;
  z-index: 1002;
  overflow: auto;
}

.el-input__inner {
  border: 0px;
}

.renwu {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}

</style>
<script>
export default {
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    closetanchuang: function() {
      $('.black_overlay').css('display', 'none')
      $('.white_content').css('display', 'none')
    }
  }
}

</script>
