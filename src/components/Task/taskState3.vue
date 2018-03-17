<style  scoped>
  *{
   margin-right: 10px;
  }
  input{
    border: 1px solid green;
  }
  .sf1{
    width: 80px;
  }
  .title{
    text-align: start;
    font-size: 20px;
    margin: 1px;
    display: flex;
    align-items: baseline;
  }
  .yaosu{
    display: flex;
    align-items: baseline;
    margin: 1px;
  }
  .shuoming{
    display: flex;
    align-items: start;
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
  .el-alert{
    width: 80%;
  }
  .hang2,.hang1{
    width: 80px;
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
  .checkbox{
    margin-right: 50px;
  }
  .el-input__inner{
    border: 0px;
  }
</style>
<style>
</style>


<template>
 <div>
  <el-dialog title="任务管理" :visible.sync="show" width="30%" :before-close="handleClose">
    <div>
      <div class="title">
        <div class="checkbox">
        <el-checkbox label="" name="type"></el-checkbox>
        </div>
        <span>
          <slot name="renwuming"><el-input v-model="input" placeholder="请输入标题"></el-input></slot></span>
      </div>
      <div class="yaosu">
        <div class="canyuzhemen">
            <el-dropdown @command="handleCommand">
              <div>参与者</div>
              <div v-for="attendertmp in attenders" :key="attendertmp.id">{{attendertmp.name}}</div>
              <el-dropdown-menu slot="dropdown" 
                >
                <div>
                <input command="input" v-model="searchword" placeholder="查找成员">
                </div>
                <el-dropdown-item v-for="item in projectmember" :key="item.id" :command="item.index">{{item.name}}
                  <div v-if="item.attend" class="el-icon-circle-check"></div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          <div class="canyuzhe hang1">
            <slot name="canyuzhe"></slot></div>
        </div>
        <div class="deadline">
          <el-date-picker class="timepicker" v-model="value1" type="date" placeholder="选择日期">
            <slot name="deadline"></slot>
          </el-date-picker>
        </div>
      </div>
      <div class="gaiyao">
        <div class="shuoming">
          <div class="hang2">任务说明</div>
          <el-input v-model="inputobject.input" type="textarea" placeholder="请输入内容" :disabled="inputobject.disable"></el-input>
        </div>
        <div>
          <div class="youxianji">
            <div class="hang2">优先级</div>
            
        <el-dropdown trigger="click" @command="handleCommand2">
  <el-tag>{{youxianji}}</el-tag>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="普通">普通</el-dropdown-item>
    <el-dropdown-item command="重要">重要</el-dropdown-item>
    <el-dropdown-item command="紧急">紧急</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
            
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
    </div>
    <span slot="footer" class="dialog-footer"></span>
  </el-dialog>
</div>
</template>


<script>
/*
<taskState3>
  <p slot="renwuming"></p>
  <p slot="canyuzhe"></p>
  <p slot="deadline"></p> //注意格式YYYY-MM-DD
</taskState3>

参数:
attenders //项目组成员
youxianji 
inputobject{
  input //任务描述内容
  disable //是否可编辑
}
projectmember //数组 {id:str,name:str,attend:bool,index:number}
*/
import { mapMutations } from 'vuex'
//这边要求后端写两个接口，一个是
//
export default {
  data() {
    return {
      taskname: '',
      youxianji: '普通',//用于修改优先级，保存当前优先级
      attenders:[       //参与者列表
      ],     
      ttt: false,
      value1: '', //value1 和value2 是用来设置日期先关的
      projectmember:[ //这个数据用于保存接收到的项目成员的数据
      //  {id:'11',name:'jobs',attend:true,index:'0'}, index 是因为，command 不能传对象，那就传index，从这个数组里面拿数据了
      ],
      projectmembertmp:[],
      searchword: '',
      inputobject: {    //任务描述和是否可编辑
        input:'',
        disable:false
      }   
    }
  },
  computed:{
    show:function(){
      return this.$store.state.task.showRenwu
    },
  },
  props: ['dialogVisible','value2'],
  watch: {
    dialogVisible: function() {
      // console('watch dialogVIsible'+this.dialogVisible)
      this.ttt = this.dialogVisible
    },
    value2: function(){
        console.log('watch value2')
        this.value1=this.value2
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
    handleCommand(command){
      //command这里假设为点击菜单项的名字 估计之后得改成获得菜单项人员的id，然后靠这id向服务器请求更多的数据，这样的话，会不会对服务器的压力太大了，请求太多了
      //上面这条注释 改为传递 人员数组的下标，这样不用频繁访问服务器了，也能获取一些必要的数据
      //而获取人员数组 ，这可以写成一个接口，获取所有人员信息存到一个数组里（需不需要逐步载入呢？会不会要求的数据太大？） 
      console.log('im handlecommand')
      var tmp=this.projectmember[parseInt(command)]
      if(tmp.attend===true)
      {
        return
      }
      else{
        this.attenders.push(tmp)
      }
    },
    handleCommand2(command){ //用于更改优先级级
      console.log('im handlecommand2')
      console.log(command)
      this.youxianji=command
    },
    ...mapMutations({
      handleClose: 'hideRenwu'
    })
  }
}
</script>