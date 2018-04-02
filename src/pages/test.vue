<template>
    <div class="small">
      <el-dropdown-menu slot="dropdown" size="medium"  :hide-on-click="false">
      <el-dropdown-menu>
      <el-input v-model="keyword" @focus="test"></el-input>
      </el-dropdown-menu>
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

    </div>
</template>
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
</style>

<script>
  export default {
    data() {
      return {
        resultsf:[],
        keyword:'',
        restaurants: [],
        state2: ''
      };
    },
     watch:{
      keyword: function(){
        this.test();
      }
    },
    methods: {
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
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
