<style  scoped>
  *{
   margin-right: 10px;
  }
  .sf1{
    width: 80px;
  }
  .title{
    text-align: start;
    font-size: 20px;
    margin: 1px;
  }
  .yaosu{
    display: flex;
    align-items: baseline;
    margin: 1px;
  }
  .shuoming{
    display: flex;
    align-items: baseline;
    margin: 1px;
  }
  .youxianji{
    display: flex;
    align-items: baseline;
    margin: 1px;
  }
  .sf{
    text-align: start;
    margin: 1px;
  }
  .tianjiazirenwu{
    display: flex;
    margin: 1px;
  }
  .hang2,.hang1{
    width: 100px;
    text-align: start;
  }
  .canyuzhemen{
    display: flex;
    align-items: baseline;
  }
  .el-collapse,.el-collapse-item{
    border: 0px;
  }
  .sdf{
    text-align: start;
  }
  li:hover{
    background-color: orange;
  }
</style>
<style>
.el-input__inner{
    border: 0px;
  }
  .el-collapse-item__header
  {
    border:0px;
  }
</style>

<template>
 <div>
  <el-dialog title="任务管理" :visible.sync="ttt" width="30%" :before-close="handleClose">
    <div>
      <div class="title">
        <el-checkbox label="" name="type"></el-checkbox>
        <span>
          <slot name="renwuming">解决移动端界面布局问题</slot></span>
      </div>
      <div class="yaosu">
        <div class="canyuzhemen">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="参与者" name="1">
              <div>
                <input v-model="searchword" placeholder="查找成员">
              </div>
              <div>
                <ul class="sdf" v-for="item in projectmember" :key="item.id">
                  <li>{{item.name}}</li></ul>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div class="canyuzhe hang1">
            <slot name="canyuzhe"></slot></div>
        </div>
        <div class="deadline">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="gaiyao">
        <div class="shuoming">
          <div class="hang2">任务说明</div>
          <el-input v-model="input" placeholder="请输入内容" :disabled="inputdisable"></el-input>
        </div>
        <div>
          <div class="youxianji">
            <div class="hang2">优先级</div>
            <el-tag>
              <slot name="youxianji">普通</slot></el-tag>
          </div>
          <div></div>
        </div>
      </div>
      <div class="zirenwus">
        <div class="sf hang2">子任务</div>
        <div class="zirenwu">
          <slot name="子任务"></slot>
        </div>
        <div class="tianjiazirenwu">
          <div type="primary" class="el-icon-circle-plus icon"></div>
          <div>添加子任务</div></div>
      </div>
      <div class="dongtai">
        <div>这里放关于此任务的动态。。。有空做</div></div>
    </div>>
    <span slot="footer" class="dialog-footer"></span>
  </el-dialog>
</div>
</template>

<script>
/*
:mode //等于create时将显示空白模板，否则载入设置的数据
:value2 //用于设置时间
:input2 //用于设置任务说明
<slot name="canyuzhe">黄枭帅</slot>
<slot name="youxianji"></slot>
<span slot="footer" class="dialog-footer"></span>
*/
export default {
  data() {
    return {
      activeNames: '',
      sss: true,
      ttt: false,
      value1: '',
      input: '',
      inputdisable: false,
      projectmember:[
        {id:'1',name:'jobs'},
        {id:'2',name:'linus'},
        {id:'3',name:'fool'}
      ],
      projectmembertmp:[],
      searchword: ''
    }
  },
  props: ['dialogVisible','value2','input2','mode'],
  created: function(){
    console.log('this is renwu3 created')
    console.log('mode is '+this.mode)
    if(this.mode!='create'){
      this.value1=this.value2
      this.input=this.input2
      this.inputdisable=true
      console.log('inputdisabel is '+this.inputdisable)
    }
    else{
      this.inputdisable=false
    }
  },
  watch: {
    dialogVisible: function() {
      // console('watch dialogVIsible'+this.dialogVisible)
      this.ttt = this.dialogVisible
    },
    searchword: function() {
      // console('watch dialogVisible')
      if(this.projectmembertmp!='')
      {
        this.projectmember=this.projectmembertmp.slice()
      }
      else
      {
        this.projectmembertmp=this.projectmember.slice()
      }
      for(var j=0;j<this.projectmember.length;j++)
      {
        var n = this.projectmember[j].name.search(this.searchword)
        console.log('本次的searchword是'+this.searchword)
        console.log('本次的被搜索词是'+this.projectmember[j].name)
        console.log('本次的被搜索词下标是'+j)
        console.log('本次的搜索结果是'+n)
        if(n==-1)
        {
            this.projectmember.splice(j,1)
            j--      
        }
      }
      for(var j=0;j<this.projectmembertmp.length;j++)
      {
        console.log(this.projectmembertmp[j].name)
      }
    }
  },
  methods: {
    handleClose: function() {
      console.log('handleclose')
      this.$emit("close1")
    },
    handleChange: function(){
      console.log('handlechange 这个函数我还没实现')
    }
  }
}
</script>