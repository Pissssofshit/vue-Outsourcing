<template>
  <div class="baseff">
      <div>
        <!-- <i  class="el-icon-warning"></i> -->
        <img v-if="secondtext==='当前状态'" src="../../assets/information.png">
        <img v-else-if="secondtext==='优先级'" src="../../assets/iconfont-zhaomingdianzi.png">
        <img v-else :src="imgUrl">
        
      </div>
       <el-dropdown @command="handleCommand" :hide-on-click="clickhide">
      <div class="tf">
          <div class="te important-text">{{firsttext}}</div>
          <div class="te normal-text">{{secondtext}}</div>
          
      </div>
          <el-dropdown-menu v-if="Chengyuan" slot="dropdown">
                <div  v-for="(item, index) in finaltanledata" :key="index">
                  <el-dropdown-item :command="item.content" :divided=true :disabled=true v-if="item.type===1">
                  <div  class="dropdown-item dropdown-item-head">{{item.content}}</div>
                </el-dropdown-item>  
                <el-dropdown-item :command="item.content" :divided=true :disabled=false v-else-if="item.type===2">
                  <div  class="dropdown-item dropdown-item-head">{{item.content}}</div>
                </el-dropdown-item>
                </div>
            </el-dropdown-menu>
  <el-dropdown-menu  v-else slot="dropdown" size="medium"  >
      <el-dropdown-item>
      <el-input class="searchinput" v-model="keyword" @focus="test"></el-input>
      </el-dropdown-item>
            <div v-for="(item,index) in resultsf" :key="index">
            <el-dropdown-item>
            <div class="test">
             <div class="tt">
            <div class="name">{{ item.value }}</div>
            <el-tag v-if="item.role==='负责人'" size="mini">负责人</el-tag>
            <el-tag v-else size="mini">参与者</el-tag> 
             </div>
            <i v-if="item.inProject" class="el-icon-circle-check icon"></i>
            <i v-else class="el-icon-circle-plus icon" @click="handleClickadd(index)"></i>
            </div>
            </el-dropdown-item>
            </div>
      </el-dropdown-menu>

           </el-dropdown>
  </div>
</template>
<script>
export default {
  data(){
      return{
          clickhide:true,
          resultsf:[],
        keyword:'',
        restaurants: [],
          Chengyuan:true,
          imgUrl:'../../../static/img/123.png',
          finaltanledata:[],
          tableData:[
              {content: '更改状态',type:1},
              {content: '开始修复',type:2},
              {content: '挂起',type:2},
              {content: '已修复',type:2},
              {content: '关闭',type:2}
          ],
          tableData2:[
              {content: '更改优先级',type:1},
              {content: '普通',type:2},
              {content: '高级',type:2},
              {content: '紧急',type:2}
          ]
      }
  },
  watch:{
      keyword: function(){
        this.test();
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      this.resultsf= this.restaurants;
      this.test();
    },
  methods:{
      handleCommand:function(command){
          
          if(this.Chengyuan===true)
          this.firsttext=command;
      },
      handleClickadd(index){
        console.log("handleclickadd");
        this.restaurants[this.resultsf[index].index].inProject=true;
        this.test();
      },
      test(){
        // just copy from watch keyword
console.log('watch keyword');
        var t=1;
        this.resultsf=[];
        if(t===1){
        for(var index=0;index<this.restaurants.length;index++){
          // console.log(""+this.restaurants[index].value);
          if((this.restaurants[index].value.toLowerCase()).indexOf(this.keyword.toLowerCase())!=-1){
            this.resultsf.push(this.restaurants[index]);
          }
        }

        //whats wrong with me and i write this fucking code
        var index1=1000;
        var flag=0;
        for(var index=0;index<this.resultsf.length;index++){
          if(this.resultsf[index].inProject===false){
            if(flag==0){
            index1=index;
            flag=1;             
            }

          }else{
            if(index>index1){
              var tmp=this.resultsf[index];
              this.resultsf[index]=this.resultsf[index1];
              this.resultsf[index1]=tmp;
              for(;index1<this.resultsf.length;index1++){
                if(this.resultsf[index1].inProject===false){
                  break;
                }
              }
            }
          }
        }
        }
        else{

        }
      },
      loadAll() {
        return [
          { "value": "Yaphets",inProject:true,role:'负责人',index:0},
          { "value": "Pisofshit",inProject:false,role:'参与者',index:1},
          { "value": "TK7MIN",inProject:true,role:'参与者',index:2},
          { "value": "HELLO",inProject:false,role:'参与者',index:3},
          { "value": "LINUS",inProject:false,role:'参与者',index:4},
          { "value": "TOVALD",inProject:true,role:'参与者',index:5},
          { "value": "TOMCAT",inProject:false,role:'参与者',index:6}
          
          ];
      }
  },
  created: function(){
      if(this.secondtext==='当前状态'){
            this.finaltanledata=this.tableData;
            console.log('当前状态');
        }
        else if(this.secondtext==='优先级'){
            this.finaltanledata=this.tableData2;
            console.log('优先级');
        }
        else{
            this.Chengyuan=false;
            this.clickhide=false;
        }
  },
  props:[
      'firsttext',
      'secondtext',
      'url'
  ]
}
</script>


<style scoped>


.tt{
  display: flex;
  align-items: baseline;
}
.test{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.icon{
  color: blueviolet;
}
.tf{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;
}
.normal-text{
    font-size: 12px;
    font-weight: 500;
    overflow: hidden;
    color: #909090;
}
.important-text{
    line-height: 1.2;
    color: #303030;
    font-size: 15px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
}
.te{
    width: 80px;
    text-align: start;
}
img{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    /* background-color: black; */
}
.baseff{
    display: flex;
    width: 120px;
    height: 43px;
    padding: 4px;
    border-radius: 30px;
    margin-right: 15px;
}
.baseff:hover{
    background-color: rgb(41, 204, 245);
}
</style>
