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
  <el-dialog title="任务管理" :visible.sync="show" width="30%" :before-close="handleClose">
    <div>
      <div class="title">
        <el-checkbox label="" name="type"></el-checkbox>
        <span>
          <slot name="renwuming">处理啥啥啥那个啥对对就是那个啥</slot></span>
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
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
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
            <el-tag>普通
              <slot name="youxianji"></slot></el-tag>
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
import { mapMutations } from 'vuex'
//这边要求后端写两个接口，一个是
//
export default {
  data() {
    return {
      attenders:[
      ],
      activeNames: '',
      sss: true,
      ttt: false,
      value1: '',
      projectmember:[
        {id:'11',name:'jobs',attend:true,index:'0'},
        {id:'22',name:'linus',attend:false,index:'1'},
        {id:'33',name:'fool',attend:true,index:'2'}
      ],
      projectmembertmp:[],
      searchword: '',
      inputobject: {
        input: '刮风这天 但偏偏 雨渐渐 大到我看你不见 还要多久 我才能在你身边 从前从前有个人爱你很久 但偏偏 风渐渐 把距离吹得好远 但故事的最后你好像还是说了 byebye 消失的下雨天我好想再淋一遍 刮风这天 我试过握着你手 但偏偏 雨渐渐 大到我看你不见 从前从前 有个人等你很久 好不容易 又能够再多爱一天',
        disable: true
      },
      test:{
        0: '1',
        1: '2'
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
    ...mapMutations({
      handleClose: 'hideRenwu'
    })
  }
}
</script>